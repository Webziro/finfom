import express from 'express';
import {
  createGroup,
  getMyGroups,
  getGroup,
  updateGroup,
  deleteGroup,
  getGroupFiles
} from '../controllers/groupController';
import { protect } from '../middleware/auth';

const router = express.Router();

router.use(protect);

router.post('/', createGroup);
router.get('/', getMyGroups);
router.get('/:id', getGroup);
router.get('/:id/files', getGroupFiles);
router.put('/:id', updateGroup);
router.delete('/:id', deleteGroup);

export default router;