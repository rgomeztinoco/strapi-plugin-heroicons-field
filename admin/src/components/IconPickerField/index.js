// @ts-nocheck
import React, { useState, useRef } from 'react';
import IconsModal from './IconsModal';
import {
  Field,
  FieldError,
  FieldHint,
  FieldInput,
  FieldAction,
  FieldLabel,
  Flex,
  Icon,
} from '@strapi/design-system';
import PropTypes from 'prop-types';
import { useIntl } from 'react-intl';
import { Cross, Search } from '@strapi/icons';

import getTrad from '../../utils/getTrad';
import styled from "styled-components"

const IconWraper = styled.div`
  height: 1rem;
  width: 1rem;
  color: ${({ theme }) => theme.colors.neutral900};
  display: flex;
  align-items: center;
`

const IconPickerField = ({
  description,
  disabled,
  error,
  intlLabel,
  labelAction,
  name,
  onChange,
  required,
  value,
}) => {
  const { formatMessage } = useIntl();
  const searchbarRef = useRef(null);
  const [showModal, setShowModal] = useState(false);
  const [selectedIcon, setSelectedIcon] = useState(() => {
    try {
      const icon = JSON.parse(value);
      return icon;
    } catch (error) {
      return null;
    }
  });

  function openModal() {
    setShowModal(true);
    setTimeout(() => {
      searchbarRef.current.focus();
     }, 0)
  }

  return (
    <Field
      name={name}
      id={name}
      // GenericInput calls formatMessage and returns a string for the error
      error={error}
      hint={description && formatMessage(description)}
      required={required}
    >
      <Flex direction="column" alignItems="stretch" gap={1}>
        <FieldLabel action={labelAction}>{formatMessage(intlLabel)}</FieldLabel>
        <FieldInput
          type="text"
          id="icon-picker-value"
          value={selectedIcon?.name ?? ''}
          placeholder="Select an icon"
          onChange={openModal}
          onClick={openModal}
          disabled={disabled}
          startAction={
            <FieldAction
              onClick={openModal}
              label="open icon picker"
            >
              {selectedIcon ? (
                <IconWraper dangerouslySetInnerHTML={{ __html: selectedIcon.component }} />
              ) : (
                <Icon
                  colors={(theme) => ({
                    path: {
                      fill: theme.colors.neutral500,
                    },
                  })}
                  as={Search}
                  height="0.85rem"
                />
              )}
            </FieldAction>
          }
          endAction={
            selectedIcon && (
              <FieldAction
                onClick={() => {
                  setSelectedIcon(null)
                  onChange({
                    target: {
                      name,
                      type: 'string',
                      value: '',
                    },
                  });
                }}
                label="reset icon picker"
              >
                <Icon
                  colors={(theme) => ({
                    path: {
                      fill: theme.colors.neutral500,
                    },
                  })}
                  as={Cross}
                  height="0.85rem"
                />
              </FieldAction>
            )
          }
          aria-label={formatMessage({
            id: getTrad('icon-picker.toggle.aria-label'),
            defaultMessage: 'Icon picker toggle',
          })}
          aria-controls="icon-picker-value"
          aria-haspopup="dialog"
          aria-expanded={showModal}
        />
        {showModal && (
          <IconsModal
            closeModal={() => setShowModal(false)}
            setSelectedIcon={setSelectedIcon}
            onChange={onChange}
            name={name}
            searchbarRef={searchbarRef}
          />
        )}
        <FieldHint />
        <FieldError />
      </Flex>
    </Field>
  );
};

IconPickerField.defaultProps = {
  description: null,
  disabled: false,
  error: null,
  labelAction: null,
  required: false,
  value: '',
};

IconPickerField.propTypes = {
  intlLabel: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired,
  attribute: PropTypes.object.isRequired,
  name: PropTypes.string.isRequired,
  description: PropTypes.object,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  labelAction: PropTypes.object,
  required: PropTypes.bool,
  value: PropTypes.string,
};

export default IconPickerField;
