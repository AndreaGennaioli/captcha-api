# captcha-api

Una semplice web api.
Dopo aver fatto una richiesta a `https://captchaapi.herokuapp.com/generator` l'api rimanderà indietro come risposta:
-un'immagine: sfondo biando con il codice scritto in nero (200x100px);
-codice in stringa;

## Esempio per una richiesta
```js
fetch('https://captchaapi.herokuapp.com/generator').then(async (response) => {
	var data = JSON.parse(await response.text());
	var image_url = data.image; // the captcha image url
	var key = data.key; // the captcha key in string
});
```
