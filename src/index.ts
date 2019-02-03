import * as express from 'express';

const app = express();

interface User {
  id: number,
  name: string,
}

const result: Array<User> = [
  {id: 1, name: 'kneegorilla'},
  {id: 2, name: 'elbowgorilla'},
]

app.get('/', (req: express.Request, res: express.Response) => {
  res.send(result);
});

app.listen(3001, () => console.log(`Example app listening on port 3001!`))