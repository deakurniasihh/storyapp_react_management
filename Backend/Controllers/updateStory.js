import Storyku from "../model/storyku.js";

export const updateStory = async (req, res) => {
  const { id } = req.params;
  const updates = req.body;

  try {
    const story = await Storyku.findByPk(id);
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }

    // Hanya update kolom yang diberikan dalam request body
    await story.update(updates);
    
    res.status(200).json({
      message: `Berhasil update data dengan ID ${id}`,
      updatedStory: story
    });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
}