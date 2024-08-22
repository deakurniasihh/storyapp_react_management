import Storyku from "../model/storyku.js";

export const getStory = async (req, res) => {
  try {
    const stories = await Storyku.findAll();

    // Mengonversi keyword string kembali menjadi array dan menambahkan path gambar
    const storiesWithKeywordsAndCover = stories.map(story => ({
      ...story.toJSON(),
      keyword: story.keyword ? story.keyword.split(',') : [],
      story_cover: story.story_cover ? `assets/images/${story.story_cover}` : null
    }));

    res.status(200).json(storiesWithKeywordsAndCover);
  } catch (error) {
    console.log("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};

export const getStoryById = async (req, res) => {
  const { id } = req.params;
  try {
    const story = await Storyku.findByPk(id);
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }

    // Menambahkan path gambar pada respons
    const storyWithCover = {
      ...story.toJSON(),
      keyword: story.keyword ? story.keyword.split(',') : [],
      story_cover: story.story_cover ? `assets/${story.story_cover}` : null
    };

    res.status(200).json(storyWithCover);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
