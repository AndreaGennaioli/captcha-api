# captcha-api

Una semplice web api.

##Esempio per una richiesta
```js
const fetch = require('node-fetch');

fetch('http://localhost:5000/generator').then(async (value) => {
	console.log(await value.text());
})
```
