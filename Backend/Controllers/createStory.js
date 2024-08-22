import Storyku from "../model/storyku.js";

export const createStory = async (req, res) => {
  try {
    const { title, writer, category, keyword, status } = req.body;
    const story_cover = req.file ? req.file.filename : null; // Mengambil nama file dari multer

    // Validasi input
    if (!title || !writer || !category || !status) {
      return res.status(400).json({ error: "Missing required fields" });
    }

    // Mengonversi keyword menjadi string yang dipisahkan koma, jika keyword tidak ada maka set sebagai string kosong
    

    // Membuat cerita baru
    const newStory = await Storyku.create({
      title,
      writer,
      category,
      keyword,
      status,
      story_cover // Menyimpan nama file di database
    });

    res.status(201).json({
      message: 'Story created successfully',
      story: newStory
    });
  } catch (error) {
    console.error("Error:", error.message);
    res.status(500).json({ error: error.message });
  }
};
