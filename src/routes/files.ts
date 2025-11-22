import express from 'express';
import {
  uploadFile,
  getMyFiles,
  getFile,
  downloadFile,
  updateFile,
  deleteFile,
  getPublicFiles
} from '../controllers/fileController';
import { protect } from '../middleware/auth';
import { upload } from '../middleware/upload';

const router = express.Router();

router.get('/public', getPublicFiles);
router.get('/:id', getFile);
router.post('/:id/download', downloadFile);

router.post('/upload', protect, upload.single('file'), uploadFile);
router.get('/', protect, getMyFiles);
router.put('/:id', protect, updateFile);
router.delete('/:id', protect, deleteFile);

export default router;