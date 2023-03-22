import express from "express";
import mongoose from "mongoose";

mongoose
  .connect("mongodb://127.0.0.1:27017")
  .then(() => {
    const app = express();
    const port = 3001;

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`);
    });
  })
  .catch((e) => {
    console.log("error in connected the mongodb");
  });
