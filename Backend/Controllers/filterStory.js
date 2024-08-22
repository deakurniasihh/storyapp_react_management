import Storyku from '../model/storyku.js';


export const filterStory = async (req, res) => {
  const { category, status } = req.body;
  
  try {
    // Memastikan kategori dan status adalah string
    const filter = {};
    if (category) filter.category = category;
    if (status) filter.status = status;

    // Menyaring cerita berdasarkan filter
    const stories = await Storyku.findAll({
      where: filter
    });

    res.status(200).json(stories);
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};