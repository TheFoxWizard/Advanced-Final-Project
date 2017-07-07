import mongoose from "mongoose";

const schema = new mongoose.Schema({
artist: {
   required: true,
   type: String
 },
 title: {
    required: true,
    type: String
  },
  year: {
     required: true,
     type: String
   },
   price: {
     required: true,
     type: String
   }
});

export default mongoose.model("Album", schema);
