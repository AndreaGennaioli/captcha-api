# captcha-api

Una semplice web api.
Dopo aver fatto una richiesta a `https://captchaapi.herokuapp.com/generator` l'api rimanderà indietro come risposta in un oggetto JSON:
* **un'immagine**: sfondo biando con il codice scritto in nero (200x100px);
* **codice del captcha in stringa**.

## Esempio per una Richiesta
```js
fetch('https://captchaapi.herokuapp.com/generator').then(async (response) => {
	var data = JSON.parse(await response.json());
	var image_url = data.image; // the captcha image url (200x100px)
	var key = data.key; // the captcha key in string
});
```
## Esempio Risposta dell'api
```json
{
	"image": "https://captchaapi.herokuapp.com/captcha/hhp33h.png",
	"text": "hhp33h"
}
```
