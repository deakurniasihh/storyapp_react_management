import express from "express";
import cors from "cors";
import path from 'path';
import url from 'url';
import getStory from "./routes/StoryRoute.js";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
app.use(cors());
app.use(express.json());

app.use('/assets/images', express.static(path.join(__dirname, 'assets/images')));

app.use('/api', getStory);


app.listen(5000, () => console.log('Server running in localhost:5000') ) 