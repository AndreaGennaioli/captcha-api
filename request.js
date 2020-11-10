const fetch = require('node-fetch');

fetch('https://captchaapi.herokuapp.com/generator').then(async (response) => {
	var data = JSON.parse(await response.text());
	var image_url = data.image; // the captcha image url (200x100px)
	var key = data.key; // the captcha key in string
});
