// TODO need to requier the movie model
var Movie = require('../../models/movie')


module.exports = {
    index,
    show,
    create,
    update,
    remove
}

function index(req, res) {
    Movie.find({})
    .then(movies => {
        res.status(200).json(movies)
    })
    .catch(err => {
        res.status(400).json({"error": "Something Went Wrong"});     
    });
}

function show(req, res) {
    Movie.findById(req.params.id)
    .populate('cast').exec((err, movie) => {
    if(err) return res.status(400).json({"error": "someting wrong"});
        res.status(200).json(movie);
    });
}

async function create(req, res){
   try {
      const newMovie = await Movie.create(req.body);
       res.status(201).json(newMovie)
   } catch (error){
       res.status(400).json({"error": "someting wrong"})

   }
}

async function update (req, res) {
    try {
        const updatedMovie = await Movie
        .findByIdAndUpdate(req.params.id, req.body, {new: true});
        res.status(200).json(updatedMovie)
    } catch (error) {
        res.status(500).json({"error": "someting wrong"});
        
    }
}

async function remove (req, res) {
    try {
        await Movie.findByIdAndDelete(req.params.id);
        res.status(200).json({"message": "movie is gone"})
    } catch (error) {
        res.status(500).json({"error": "someting wrong"})
    }
}