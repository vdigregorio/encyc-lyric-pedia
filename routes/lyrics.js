const router = require('express').Router();
const { findLyricsByTrack } = require('../services/lyrics');

router.get('/', findLyricsByTrack, (req, res) => {
  res.render('lyrics', {
    lyrics: res.lyrics,

  });
})

module.exports = router;
