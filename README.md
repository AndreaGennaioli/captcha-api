# captcha-api

Una semplice web api.

## Esempio per una richiesta
```js
fetch('https://captchaapi.herokuapp.com/generator').then(async (response) => {
	var data = JSON.parse(await response.text());
	var image_url = data.image; // the captcha image url
	var key = data.key; // the captcha key in string
});
```
