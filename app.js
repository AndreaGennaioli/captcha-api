const express = require('express');
const app = express();
const port = process.env.PORT || 5000;
const fs = require('fs');
const path = require('path');
const { createCanvas } = require('canvas');

app.use(express.static(path.join(__dirname, './public')))
app.get('/generator', (req, res) => {
	//* generating the captcha key
	let key = Math.random().toString(36).substring(7);

	//* creating canvas
	const canvas = createCanvas(200, 100);
	const ctx = canvas.getContext('2d');

	//* fillRect
	ctx.fillStyle = '#fff'; // setting rect fill color
	ctx.fillRect(0, 0, canvas.width, canvas.height); // creating the rectangle
	//* text
	ctx.fillStyle = '#000'; // setting text color to black
	ctx.font = '30px Impact'; // setting text font
	ctx.textAlign = 'center'; // centering text
	ctx.fillText(key, canvas.width / 2, canvas.height / 2 + 10); // creating the text

	fs.createWriteStream('./public/captcha/' + key + '.png').write(canvas.toBuffer()); // creating the captcha file
	//* writing the response
	res.json({
		image: `https://captchaapi.herokuapp.com/captcha/${key}.png`,
		text: key
	})

	//* deleting the captcha file after 120 seconds
	setTimeout(() => {
		fs.unlinkSync('./public/captcha/' + key + '.png');
	}, 120 * 1000)
});
app.listen(port, () => console.log(`listening on http://localhost:${port}`));
