// import express from "express";
// import cors from "cors"
// import mongoose from "mongoose";
// import dotenv from "dotenv";
// import bookRoute from "./route/book.route.js"
// import userRoute from './route/user.route.js'
// const app = express();
// app.use(express.json())

// dotenv.config();
// const PORT = process.env.PORT || 4000;
// console.log(`Using PORT: ${PORT}`);
// const URI = process.env.MongoDBURI;

// app.use(cors())

// // connection to mongodb
// try {
//   mongoose.connect(URI);
//   console.log("Connected to MongoDB");
// } catch (error) {
//   console.log("Error", error);
// }

// // Defining Routes

// app.use("/book", bookRoute);
// app.use('/user', userRoute)

// app.listen(PORT, () => {
//   console.log(`server is  listening on port ${PORT}`);
// });


import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import dotenv from "dotenv";
import bookRoute from "./route/book.route.js";
import userRoute from "./route/user.route.js";

dotenv.config();
const app = express();
app.use(express.json());
app.use(cors());

const PORT = process.env.PORT || 4000;
const URI = process.env.MongoDBURI;

// Connect to MongoDB
mongoose.connect(URI)
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.log("Error connecting to MongoDB:", error));

// Defining Routes
app.use("/book", bookRoute);
app.use("/user", userRoute);

app.listen(PORT, () => {
  console.log(`Server is listening on port ${PORT}`);
});
