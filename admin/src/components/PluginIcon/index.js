/**
 *
 * PluginIcon
 *
 */

import React from 'react';
import {Box} from '@strapi/design-system';

const PluginIcon = () => (
  <Box padding="0.175rem" paddingBottom="0.35rem" background="alternative100" borderColor="alternative200" hasRadius={true} color="alternative700" height="100%" >
    <svg viewBox="0 0 166 166" fill="none" aria-hidden="true">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="m78.091 0 5.967 5.676c15.038 14.306 35.323 23.067 57.663 23.067.356 0 .711-.002 1.065-.006l6.363-.08 1.988 6.072a102.026 102.026 0 0 1 5.045 31.782c0 47.391-32.269 87.19-75.928 98.477l-2.163.559-2.163-.559C32.27 153.701 0 113.902 0 66.511c0-11.085 1.769-21.772 5.045-31.782l1.988-6.072 6.363.08c.354.004.71.006 1.065.006 22.34 0 42.625-8.761 57.664-23.067L78.09 0ZM19.846 46.033a84.814 84.814 0 0 0-2.492 20.478c0 38.459 25.662 70.919 60.737 81.006 35.075-10.087 60.738-42.547 60.738-81.006 0-7.071-.866-13.93-2.493-20.478-22.009-1.16-42.166-9.387-58.245-22.453-16.079 13.066-36.235 21.293-58.245 22.453Z"
        fill="currentColor"
      ></path>
    </svg>
  </Box >
);

export default PluginIcon;
