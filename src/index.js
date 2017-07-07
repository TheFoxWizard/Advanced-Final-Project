import express from "express";
import bodyParser from "body-parser";

import AlbumRoutes from "./routes/AlbumRoutes";
import mongoose from "mongoose";
const app = express();

mongoose.set("debug", true);
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint2-again");

// you can name the database whatever
mongoose.Promise = global.Promise;
mongoose.connect("mongodb://localhost/checkpoint2-again");

app.use(bodyParser.json());
app.use(AlbumRoutes);






const port = process.env.PORT || 3001;
app.listen(port, (err) => {
  if(err){
  console.log(`Listening on port:${port}`);
}
});
