import express from 'express';
import type { Express, Request, Response } from 'express';
import petRouter from './routes/pets.routes';
import cors from 'cors';

const app: Express = express();

app.use(cors());

app.use('/pets', petRouter);

app.use((req: Request, res: Response<{message: string}>): void => {
  res.status(404).json({ message: 'Not Found' });
});

const PORT: number = 8000;
app.listen(PORT, (): void => {
    console.log(`Listening on port ${PORT}`);
});