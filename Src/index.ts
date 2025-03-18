import express, { Request, Response } from 'express';
import path from 'path';
import fs from 'fs';
 
const app = express();
const port = 3000;

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
app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});