import express from "express";
import upload from '../utils/muterUtils.js';
import {getStory, getStoryById, createStory, deleteStory, updateStory, filterStory} from "../Controllers/index.js";



const route = express.Router();
route.get('/story', getStory);
route.get('/story/:id', getStoryById);
route.get('/filter/story', filterStory);
route.post('/create/story', upload.single('story_cover'), createStory);
route.put('/update/story/:id', deleteStory);
route.delete('/delete/story/:id', updateStory);


export default route;
