const jwt = require("jsonwebtoken");
const SECRET_KEY =
  "4715aed3c946f7b0a38e6b534a9583628d84e96d10fbc04700770d572af3dce43625dd";
const bcrypt = require("bcryptjs");
const userModel = require("../models/User");

const appService = require("../services/appService");

exports.favoriteToUser = async (req, res) => {
  try {
    const user = await appService.addFavoriteToUser(
      req.params.userid,
      req.params.movieid
    );
    res.status(200).json(user);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.likeToMovie = async (req, res) => {
  try {
    const movie = await appService.addLikeToMovie(
      req.params.likeid,
      req.params.movieid
    );
    res.status(200).json(movie);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.commentToMovie = async (req, res) => {
  try {
    const movie = await appService.addcommentToMovie(
      req.params.commentid,
      req.params.movieid
    );
    res.json(movie);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.categoryToMovie = async (req, res) => {
  try {
    const movie = await appService.addCategoryToMovie(
      req.params.catid,
      req.params.movieid
    );
    await appService.addMovieToCategory(req.params.movieid, req.params.catid);
    res.json(movie);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.movieToCategory = async (req, res) => {
  try {
    const cat = await appService.addMovieToCategory(
      req.params.movieid,
      req.params.catid
    );
    res.json(cat);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.genreToMovies = async (req, res) => {
  try {
    const mov = await appService.addGenreToMovie(
      req.params.genreid,
      req.params.movieid
    );
    res.json(mov);
  } catch (error) {
    res.status(400).json({ error });
  }
};

exports.moviesToGenre = async (req, res) => {
   try {
      const gen = await appService.addGenreToMovie(req.params.movieid, req.params.genreid)
      res.json(gen)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.createcommentAndAddToMovie = async (req, res) => {
   try {
      const mov = await appService.createCommentAndAddToMovie(req.params.movieid, req.body)
      res.json(mov)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.getKpi = async (req, res) => {
   try {
      const data = await appService.kpi()
      res.json(data)
   } catch (error) {
      res.status(400).json({error})
   }
}

exports.checkUserFavorite = async (req, res) => {
  const userid = req.params.userid
  const movieid = req.params.movieid
  const response = await appService.checkFavoris(userid,movieid)
  if(response){
    res.status(200)
  } else {
    res.status(400)
  }
}

exports.register = async (req, res) => {
  //Fonction qui verifie l'existence ou non de l'utilisateur dans la bd
try {
    const { username, email, password } = req.body;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!emailRegex.test(email)) {
      throw new BadRequestException(
        "Invalid email format. Please provide a valid email address."
      );
    }
    const usernameRegex = /^[a-zA-Z0-9\-']+$/;
    if (!usernameRegex.test(username)) {
      throw new BadRequestException(
        "Invalid username format. Use only alphanumeric characters."
      );
    }

    const existingUser = await userModel.findOne({ email: email });
    if (existingUser) {
      return res.status(400).json({ message: "Sorry email already exists" });
    }

    const existingUsername = await userModel.findOne({ username: username });
    if (existingUsername) {
      return res.status(400).json({ message: "Sorry username already exists" });
    }
    // Hachons le mot de passe
    const hashedPassword = await bcrypt.hash(password, 10);

    const result = await userModel.create({
      email: email,
      password: hashedPassword,
      username: username,
    });
    
    const newUser = {
      id: result._id,
      username: result.username,
      email: result.email
    }
    res.status(201).json({ newUser });
  } catch (error) {
    res.status(500).json({ message: "Make sure your email and username are of the right format !" });
  }
};

exports.login = async (req, res) => {
  try {
    const { email, password } = req.body;

    const existingUser = await userModel.findOne({ email: email });
    if (!existingUser) {
      return res.status(404).json({ message: "User not found" });
    }
    const matchPassword = await bcrypt.compare(password, existingUser.password);
    if (!matchPassword) {
      return res.status(400).json({ message: "Invalid password" });
    }
    //Token generate
    const token = jwt.sign(
      {id: existingUser._id, username: existingUser.username, email: existingUser.email, favorites:existingUser.favorites, isAdmin : existingUser.isAdmin },
      SECRET_KEY
    );
    res.status(201).json({ token });
  } catch (error) {
    res.status(500).json({ message: "Something wont wrong" });
  }
};

exports.mapMovies = async (req, res) => {
  try {
    const movie = await appService.moviesMapping(req.body)
    res.status(201).json(movie)
  } catch (error) {
    res.status(400).json({ message: "Something wont wrong" });
  }
}

exports.likeToMovie = async (req, res) => {
  try {
    const user = req.user
    const movid = req.params.movieid
    const like = await appService.newlike(user._id, movid)
  } catch (error) {
    
  }
}