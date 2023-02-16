import express from 'express'
const router = express.Router()
import { aboutController } from '../controllers/aboutController.js'
import { homeController } from '../controllers/homeController.js'


router.get('/',homeController)
router.get('/about',aboutController)



export default router