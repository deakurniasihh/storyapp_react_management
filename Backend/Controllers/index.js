// Controllers/index.js
import { getStory , getStoryById} from "./getStory.js";
import { filterStory } from "./filterStory.js";
import { createStory } from "./createStory.js";
import { deleteStory } from "./deleteStory.js";
import { updateStory } from "./updateStory.js";



export { getStory, createStory, deleteStory, updateStory, getStoryById, filterStory };
