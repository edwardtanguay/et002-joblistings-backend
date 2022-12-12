import express from 'express';
const app = express();
const port = 3014;
app.get('/', (req, res) => {
    res.send(`<h1>Job-Listing API</h1>
	<ul>
		<li><a href="/">GET /</a> this info</li>	
	</ul>
	`);
});
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map