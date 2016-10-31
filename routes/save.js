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
    lyrics: res.lyrics
  });
});


router.get('/', authenticate, getLikes, findLyricsByTrack, (req, res) => {
  res.render('save', {
    user: res.user,
    lyrics: res.lyrics
  });
});

router.get('/likes', saveLikes, (req, res) => {
  res.redirect('/save');
});

router.delete('/likes/:id', deleteLikes, (req, res) => {
  res.redirect('/save');
});


module.exports = router;
