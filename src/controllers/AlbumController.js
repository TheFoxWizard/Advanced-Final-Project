import albums from "../albums";
import AlbumModel from "../models/AlbumModel"

export function list(req, res){
  AlbumModel.find({}).exec()
  .then(albums => {
    return res.json(albums);
  });
}

export function show(request, response){
  AlbumModel.findById(request.params.id).exec()
  .then(album => {
    return response.json(album);
  });
}
//create album
export function create(req, res){
  console.log(req.body);
  const album = new AlbumModel({
    artist: req.body.artist,
    title: req.body.title,
    year: req.body.year,
    price: req.body.price

  });
  album.save()
  .then(album =>{
    return res.json(album);
  });
}
//update album
export function update(request, response) {
 AlbumModel.findById(request.params.id)
   .then(album => {
     album.artist = request.body.artist || album.artist;
     album.title = request.body.title || album.title;
     album.year = request.body.year || album.year;
     album.price = request.body.price || album.price;
     console.log(album);
     console.log(request.body.artist);
     return album.save();
   })
   .then(album => {
     return response.send("trying to update yo");
   });
}
//remove the album
export function remove(req, res) {
  AlbumModel.findByIdAndRemove(req.params.id).exec().then(album => {
    return res.json(album);
  });
}
