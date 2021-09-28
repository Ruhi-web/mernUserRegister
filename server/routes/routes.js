import express from 'express'
import {getUser, addUsers, getUserByid, editUser, deleteUser} from '../controller/usercontroller.js'
const router = express.Router();

router.get('/', getUser)

router.post('/add', addUsers)
router.get('/:id',getUserByid )
router.put('/:id', editUser)
router.delete('/:id', deleteUser)

export default router;