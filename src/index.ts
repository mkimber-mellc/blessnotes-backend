import express from 'express';
import { errorHandler } from './middleware/errorHandler.js';

const app = express();
const PORT = 8000;

app.use(express.json());
app.use(errorHandler); // ⬅️ Always comes *after* routes

app.listen(PORT, () => {
  console.log(`BlessNotes API running on http://localhost:${PORT}`);
});


