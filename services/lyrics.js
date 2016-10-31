const fetch = require('node-fetch');
const API_URL = 'http://api.musixmatch.com/ws/1.1/track.search?apikey=';
const MUSIC_KEY = process.env.MUSIC_KEY;
//

function findLyricsByTrack(req, res, next) {
  let qs = req.query.q_track;
  fetch(`${API_URL}${MUSIC_KEY}&q_track=${qs}`)
    .then(r => r.json())
    .then((result) => {
    res.lyrics = result;
    // console.log(res.lyrics)
    next();
    })
    .catch((err) => {
      res.err = err;
      next();
    })
}

module.exports = { findLyricsByTrack};
