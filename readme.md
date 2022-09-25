# i18next-decode-postprocessor

> Decode html entities in i18next translations.

## Installation

```sh
npm install i18next-decode-postprocessor
```

## Usage

**Local**

```js
i18next.t('&ccedil;a va bien. tr&#232;s bien.', {postProcess: 'decode'});
// 'ça va bien. très bien.'
```

**Global**

```js
import i18next from 'i18next';
import decode from 'i18next-decode-postprocessor';

i18next.use(decode).init({
	postProcess: 'decode',
});

i18next.t('&ccedil;a va bien. tr&#232;s bien.');
// 'ça va bien. très bien.'
```
