import multer from 'multer';
import path from 'path';

// Menentukan lokasi penyimpanan dan nama file
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, 'assets/images'); // Tempat menyimpan file
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + path.extname(file.originalname); // Membuat nama file unik
    cb(null, uniqueSuffix); // Menyimpan file dengan nama unik
  }
});

// Menginisialisasi multer dengan konfigurasi storage
const upload = multer({ storage });

export default upload;
