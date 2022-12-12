import express from 'express';
import * as tools from './tools.js';
import cors from 'cors';
import dotenv from 'dotenv';
const app = express();
app.use(cors());
const port = 3014;
dotenv.config();
const EXECUTING_ENVIRONMENT = process.env.EXECUTING_ENVIRONMENT;
app.get('/', (req, res) => {
    res.send(`<h1>Job-Listing API</h1>
	<p>Executing environment = ${EXECUTING_ENVIRONMENT}</p>
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