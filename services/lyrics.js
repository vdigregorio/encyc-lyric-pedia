const fetch = require('node-fetch');
const API_URL = 'http://api.musixmatch.com/ws/1.1/track.search?apikey=';
const MUSIC_KEY = process.env.MUSIC_KEY;
//

function findLyricsByTrack(req, res, next) {
  let qs = req.query.q_track;
  fetch(`${API_URL}${MUSIC_KEY}&q_track=${qs}`)
  // http://api.musixmatch.com/ws/1.1/track.search?apikey=2e55289eb9ce92086393402202814db0&q_track=we+are+the+champions&format=json
  // + `&q_artist=queen&q_track=we%20are%20the%20champions&format=json&page_size=1&f_has_lyrics=1`)
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
