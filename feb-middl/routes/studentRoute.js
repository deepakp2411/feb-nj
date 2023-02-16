import express from "express";
const router = express.Router();
import { studentController } from "../controllers/studentController.js";
import myLogger from "../middlewares/logger-middleware.js";

// router lvl middleware

// router.use(myLogger) // for all routes will work

// path routes

router.get("/student",myLogger ,studentController);
router.get('/event', (req,res) => {
    res.send('Events')
})

export default router;
