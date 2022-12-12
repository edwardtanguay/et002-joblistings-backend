import express from 'express';
import * as tools from './tools.js';
const app = express();
const port = 3014;
app.get('/', (req, res) => {
    res.send(`<h1>Job-Listing API</h1>
	<ul>
		<li>GET <a href="/jobs">/jobs</a> - job listings</li>	
	</ul>
	`);
});
app.get('/jobs', (req, res) => {
    const jobs = tools.readJsonFile('./src/data/jobs.json');
    res.json(jobs);
});
app.listen(port, () => {
    console.log(`listening on http://localhost:${port}`);
});
//# sourceMappingURL=server.js.map