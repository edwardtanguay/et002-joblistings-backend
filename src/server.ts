import express from 'express';
import * as tools from './tools.js';

const app = express();
const port = 3014;


app.get('/', (req: express.Request, res: express.Response) => {
	res.send(`<h1>Job-Listing API</h1>
	<ul>
		<li>GET <a href="/jobs">/jobs</a> - job listings</li>	
	</ul>
	`);
});

app.get('/jobs', (req: express.Request, res: express.Response) => {
	const jobs = tools.readJsonFile('./src/data/jobs.json');
	res.json(jobs);
});

app.listen(port, () => {
	console.log(`listening on http://localhost:${port}`);
});