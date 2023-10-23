import express from "express"
import { getLogis, getLogisByid, createLogis, editLogis, deleteLogis } from "../controller/controllers.js"
const router = express.Router()

router.get('/log', getLogis)
router.get('/log/:id', getLogisByid)
router.post('/log', createLogis)
router.patch('/log/:id', editLogis)
router.delete('/log/:id', deleteLogis);

export default router;