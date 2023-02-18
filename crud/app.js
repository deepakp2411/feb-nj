import express from "express";
const app = express();
import dotenv from "dotenv";
dotenv.config();
import connectDB from "./db/connectdb.js";
import cors from "cors";
import { getAllDoc } from "./models/studentModel.js";

const PORT = process.env.PORT;

const DATABASE_URL = process.env.DATABASE_URL;

// middleware

app.use(cors());
app.use(express.json());

// db

connectDB(DATABASE_URL);

// create and save doc
// createDoc("sam", 20, 7888.6, ["gamig", "dancing"], false, [
//   { value: "This is bad" },
// ]);

// createDoc()

// Get All Document
getAllDoc()

app.listen(PORT, () => {
  console.log(`Server is running at ${PORT}`);
});
