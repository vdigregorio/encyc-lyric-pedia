const router = require('express').Router();
const { authenticate } = require('../lib/auth');
const {findLyricsByTrack} = require('../services/lyrics');
const {
  getLikes,
  saveLikes,
  deleteLikes
} = require('../models/save');

router.get('/', authenticate, getLikes, findLyricsByTrack, (req, res) => {
  res.render('save', {
    user: res.user,
    lyrics: res.lyrics,
    saved: res.saved

  });
});


router.post('/', authenticate, saveLikes, getLikes, (req, res) => {
  res.render('save', {
    user: res.user,
    likes: res.likes,
  });
  // res.json(res.saved);
});

// router.post('/likes', saveLikes, (req, res) => {
//   res.redirect('/save');
// });

router.delete('likes/:id', deleteLikes, getLikes, (req, res) => {
  res.render('save', {
    user: res.user,
    likes: res.likes,
  });
});


module.exports = router;
