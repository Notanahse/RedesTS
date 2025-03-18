import express, { Request, Response } from 'express';
import path from 'path';

const app = express();

app.get('/', (req: Request, res: Response) => {
  res.send('Hello, TypeScript Express!');
});
app.get('/html', (req: Request, res: Response) => {
    res.sendFile(path.join(__dirname,"/main.html"));
  });
  const mascotas= JSON.stringify(arr);
app.get('/mascotas', (req: Request, res: Response) => {
      const msJSON=JSON.parse(mascotas);
      res.json(msJSON);
    });