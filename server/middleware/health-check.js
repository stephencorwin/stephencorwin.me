const healthCheck = (req, res) =>
	res
		.status(200)
		.set('Content-Type', 'text/plain')
		.send('');

export default healthCheck;
