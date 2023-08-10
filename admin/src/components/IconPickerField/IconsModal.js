// @ts-nocheck
import React, { useState, useEffect } from 'react';
import { renderToString } from 'react-dom/server';
import {
  Button,
  SingleSelect,
  SingleSelectOption,
  SearchForm,
  Searchbar,
  Typography,
  ModalLayout,
  ModalHeader,
  ModalBody,
  ModalFooter,
} from '@strapi/design-system';
import * as miniIcons from '@heroicons/react/20/solid';
import * as outlineIcons from '@heroicons/react/24/outline';
import * as solidIcons from '@heroicons/react/24/solid';
import styled from 'styled-components';

const IconWraper = styled.button`
  margin: ${({ theme }) => theme.spaces[2]};
  color: ${({ theme }) => theme.colors.neutral900};
  display: inline-block;
`;

const IconsModal = ({ closeModal, setSelectedIcon, name, onChange, searchbarRef }) => {
  const [selectedIconLibrary, setSelectedIconLibrary] = useState('outline');
  const [query, setQuery] = useState('');
  const [filteredIcons, setFilteredIcons] = useState([]);
  const iconsLib = {
    outline: outlineIcons,
    solid: solidIcons,
    mini: miniIcons,
  };

  // search logic
  useEffect(() => {
    const icons = Object.entries(iconsLib[selectedIconLibrary]);
    if (!query) return setFilteredIcons(icons);

    const filtered = icons.filter(([iconName]) =>
      iconName.toLowerCase().includes(query.toLowerCase())
    );
    setFilteredIcons(filtered);
  }, [query, selectedIconLibrary]);

  return (
    <ModalLayout onClose={closeModal} labelledBy="title">
      <ModalHeader>
        <Typography fontWeight="bold" textColor="neutral800" as="h2" id="title">
          Select an icon
        </Typography>
      </ModalHeader>
      <ModalBody>
        <SearchForm style={{ marginBottom: '1rem' }}>
          <Searchbar
            name="searchbar"
            onClear={() => setQuery('')}
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            clearLabel="Clearing the search"
            placeholder="Search by icon name"
            ref={searchbarRef}
          >
            Searching for an icon
          </Searchbar>
        </SearchForm>

        {filteredIcons.map(([iconName, Icon]) => (
          <IconWraper
            key={iconName}
            onClick={() => {
              setSelectedIcon({
                name: iconName,
                component: renderToString(<Icon />),
              });
              onChange({
                target: {
                  name,
                  type: 'string',
                  value: JSON.stringify({
                    name: iconName,
                    component: renderToString(<Icon />),
                  }),
                },
              });
              closeModal();
            }}
          >
            <Icon
              title={iconName}
              height={selectedIconLibrary === 'mini' ? '20px' : '24px'}
            />
          </IconWraper>
        ))}
      </ModalBody>
      <ModalFooter
        startActions={
          <SingleSelect
            minWidth={600}
            required={0}
            value={selectedIconLibrary}
            onChange={setSelectedIconLibrary}
          >
            <SingleSelectOption value="outline">Outline</SingleSelectOption>
            <SingleSelectOption value="solid">Solid</SingleSelectOption>
            <SingleSelectOption value="mini">Mini</SingleSelectOption>
          </SingleSelect>
        }
        endActions={
          <>
            {/* <Button variant="secondary">Add new stuff</Button> */}
            <Button onClick={closeModal}>Finish</Button>
          </>
        }
      />
    </ModalLayout>
  );
};

export default IconsModal;
