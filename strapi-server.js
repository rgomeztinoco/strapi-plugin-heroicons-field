'use strict';

module.exports = {
  register({ strapi }) {
    strapi.customFields.register({
      name: 'icon-picker',
      plugin: 'heroicons-field',
      type: 'text'
    });
  },
}
