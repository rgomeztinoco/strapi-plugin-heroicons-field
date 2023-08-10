<p align="center">
  <a href="https://heroicons.com/#gh-light-mode-only" target="_blank">
    <img src="./.github/logo-light.svg" alt="Heroicons" width="300">
  </a>
  <a href="https://heroicons.com/#gh-dark-mode-only" target="_blank">
    <img src="./.github/logo-dark.svg" alt="Heroicons" width="300">
  </a>
</p>

<h1 align="center">
  Strapi heroicons field plugin
</h1>

<p align="center">Plugin for adding heroicons to <a href="https://strapi.io/" target="_blank">Strapi</a>.</p>

<p align="center">
  <a href="https://badge.fury.io/js/strapi-plugin-heroicons-field">
    <img src="https://badge.fury.io/js/strapi-plugin-heroicons-field.svg"
         alt="Gitter">
  </a>
</p>

<p align="center">
  <a href="#key-features">Key Features</a> •
  <a href="#how-to-use">How To Use</a> •
  <a href="#credits">Credits</a> •
  <a href="#license">License</a>
</p>

![screenshot](./.github/screenshot.gif)

## Key Features

- Icon picker - custom field to use in your content types
  - Change between outline, solid and mini icons
  - Search for icons
- Dark/Light mode
- Supports advanced setting 'required'
- Don't need to install any frontend library - it returns the SVG code of the icon and the name as a stringyfied JSON
- Supports all the icons from the Hero Icons library

## How To Use

### In Strapi

To install this plugin, you'll need to be in the folder of your strapi application. Then, from your command line:

```bash
# using npm
$ npm i strapi-plugin-heroicons-field

# using yarn
$ yarn add strapi-plugin-heroicons-field

# rebuild admin panel
$ yarn strapi build
```

Then, you'll need to restart your server. After that, you just need to add a new custom field to your content types with the type `Icon`.

---

### In your frontend

The plugin returns the icon as a stringyfied JSON, so you can use it as you want. Here's an example of how to use it in svelte:

```html
<script>
	export let iconData;

	let svg;
	try {
		svg = JSON.parse(iconData).component;
	} catch (error) {
		svg = null;
	}
</script>

{#if svg}
	<div class="w-6 h-6">
		{@html svg}
	</div>
{/if}
```

## Credits

This plugin uses the following dependencies:

- [🛡 heroicons](https://github.com/tailwindlabs/heroicons)

## License

MIT
