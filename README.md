Creating a comprehensive README file that covers usage for various scenarios (CDN, Vue CDN, Vue CLI, and Nuxt.js) involves providing clear and structured instructions. Below is a template you can use for your README file:

---

# Your Library Name

Brief description of your library.

## Table of Contents

1. [CDN Usage](#cdn-usage)
2. [Vue CDN Usage](#vue-cdn-usage)
3. [Vue CLI Usage](#vue-cli-usage)
4. [Nuxt.js Usage](#nuxtjs-usage)
5. [License](#license)

---

## CDN Usage
### Installation

```bash
<script src="https://cdn.jsdelivr.net/npm/yi-hello-npm@1.0.6/dist/bundle.umd.js" defer></script>
<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yi-hello-npm@1.0.6/dist/bundle.umd.css">
```
### Script Include

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>CDN Usage Example</title>
  <script src="https://unpkg.com/vue@3.2.19/dist/vue.global.prod.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/yi-hello-npm@1.0.6/dist/bundle.umd.js" defer></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yi-hello-npm@1.0.6/dist/bundle.umd.css">
</head>
<body>
  <div id="app">
    <h1>CDN Usage Example</h1>
    <button @click="openPopup">Open Popup</button>
  </div>

  <script>
    const app = Vue.createApp({
      methods: {
        openPopup() {
          const popup = new PopupModal.PopupModal('Mengyi');
          popup.open();
        }
      }
    });

    app.mount('#app');
  </script>
</body>
</html>
```

---

## Vue CDN Usage

### Script Include

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Vue CDN Usage Example</title>
  <script src="https://unpkg.com/vue@3.2.19/dist/vue.global.prod.js"></script>
  <script src="https://cdn.jsdelivr.net/npm/yi-hello-npm@1.0.6/dist/bundle.umd.js" defer></script>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/yi-hello-npm@1.0.6/dist/bundle.umd.css">
</head>
<body>
  <div id="app">
    <h1>Vue CDN Usage Example</h1>
    <button @click="openPopup">Open Popup</button>
  </div>

  <script>
    const app = Vue.createApp({
      methods: {
        openPopup() {
          const popup = new PopupModal.PopupModal('Mengyi');
          popup.open();
        }
      }
    });

    app.mount('#app');
  </script>
</body>
</html>
```

---

## Vue CLI Usage

### Installation

```bash
npm install yi-hello-npm
```

### Usage in Vue Components

```vue
<template>
  <div>
    <h1>Vue CLI Usage Example</h1>
    <button @click="openPopup">Open Popup</button>
  </div>
</template>

<script setup>
import { ref } from 'vue';
import { PopupModal } from 'yi-hello-npm';
import 'yi-hello-npm/dist/bundle.umd.css';

const popupModal = new PopupModal('Mengyi');

function openPopup() {
  popupModal.open();
}
</script>

<style>
/* Add any additional styles here */
</style>
```

---

## Nuxt.js Usage

### Installation

```bash
npm install yi-hello-npm
```

### Configuration

**nuxt.config.js**

```js
export default {
  // Other configurations...
  plugins: [
    '~/plugins/yi-hello-npm.js'
  ]
}
```

**plugins/yi-hello-npm.js**

```js
import { PopupModal } from 'yi-hello-npm';
import 'yi-hello-npm/dist/bundle.umd.css';

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.provide('popupModal', PopupModal);
});
```

### Usage in Components

```vue
<template>
  <div>
    <h1>Nuxt.js Usage Example</h1>
    <button @click="openPopup">Open Popup</button>
  </div>
</template>

<script setup>
import { useNuxtApp } from '#app';

const { $popupModal } = useNuxtApp();

function openPopup() {
  const popup = new $popupModal('Mengyi');
  popup.open();
}
</script>

<style>
/* Add any additional styles here */
</style>
```

---

## License

[License details, e.g., MIT License]

---

### Notes:
- Update URLs (`yi-hello-npm@1.0.6`) with the latest version or specific version you are using.
- Adjust paths and configurations based on your specific project setup.

This template covers various scenarios for integrating your library (`yi-hello-npm`) into different environments: CDN, Vue CDN, Vue CLI, and Nuxt.js. Adjust the details as per your specific library and project requirements.