const router              = require('express').Router();
const { authenticate }    = require('../lib/auth');
const { searchLyrics }     = require('../services/lyrics');
const { getLikes,
        saveLikes,
        deleteLikes } = require('../models/save');

router.get('/', authenticate, getLikes, (req, res) => {
  res.render('indexx', {
    user: res.user,
    // results: res.results || [],
    lyrics: res.lyrics || []
  });
});

router.post('/', saveLikes, (req, res) => {
  res.redirect('/lyrics');
});
router.post('/', authenticate, searchLyrics, getLikes, (req, res) => {
  res.render('index', {
    user: res.user,
    results: res.results || [],
    lyrics: res.lyrics || []
  });
});

router.delete('/save/:id', deleteLikes, (req, res) => {
  res.redirect('/lyrics');
});


module.exports = router;