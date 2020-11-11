# captcha-api

Una semplice web api.
Dopo aver fatto una richiesta a `https://captchaapi.herokuapp.com/generator` l'api rimanderà indietro come risposta in un oggetto JSON:
* **un'immagine**: sfondo biando con il codice scritto in nero (200x100px);
* **codice del captcha in stringa**.

## Esempio per una Richiesta
```js
fetch('https://captchaapi.herokuapp.com/generator')
.then(response => response.json()).then( res => {
	var data = res;
	var image_url = data.image; // the captcha image url (200x100px)
	var key = data.text; // the captcha key in string
});
```
## Esempio Risposta dell'api
```js
{
	image: "https://captchaapi.herokuapp.com/captcha/hhp33h.png",
	text: "hhp33h"
}
```
