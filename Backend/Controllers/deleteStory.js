import Storyku from '../model/storyku.js';

export const deleteStory = async (req, res) => {
  const { id } = req.params;
  try {
    const story = await Storyku.findByPk(id);
    if (!story) {
      return res.status(404).json({ error: 'Story not found' });
    }
    await story.destroy();
    res.status(200).json({ message: `Berhasil delete data dengan ID ${id}` }) // Status 204 No Content
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};
