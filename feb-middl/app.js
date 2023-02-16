import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import webRoutes from "./routes/webRoutes.js";
import cors from "cors";
import myLogger from "./middlewares/logger-middleware.js";
import studentRoute from './routes/studentRoute.js'



const PORT = process.env.PORT;

// middleware
app.use(cors());
app.use(express.json());

// set ejs templates
app.set("view engine", "ejs");

// application lvl middleware
// app.use(myLogger)
app.use('/about',myLogger) // with path

// routes
app.use("/", webRoutes);

app.use('/',studentRoute)
app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
