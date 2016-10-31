const { ObjectID } = require('mongodb');
const { getDB } = require('../lib/dbConnect.js');


function getLikes(req, res, next) {
  // find all favorites for your userId
  getDB().then((db) => {
    db.collection('likes')
      .find({ userId: { $eq: req.session.userId } })
      .toArray((toArrErr, data) => {
        if (toArrErr) return next(toArrErr);
        res.likes = data;
        db.close();
        next();
      });
    return false;
  });
  return false;
}

function saveLikes(req, res, next) {
  // creating an empty object for the insertObj
  const insertObj = {};

  // copying all of req.body into insertObj
  for (key in req.body) {
    insertObj[key] = req.body[key];
  }

  // Adding userId to insertObj
  insertObj.userId = req.session.userId;

  getDB().then((db) => {
    db.collection('likes')
      .insert(insertObj, (insertErr, result) => {
        if (insertErr) return next(insertErr);
        res.saved = result;
        db.close();
        next();
      });
    return false;
  });
  return false;
}

function deleteLikes(req, res, next) {
  getDB().then((db) => {
    db.collection('likes')
      .findAndRemove({ _id: ObjectID(req.params.id) }, (removeErr, result) => {
        if (removeErr) return next(removeErr);
        res.removed = result;
        db.close();
        next();
      });
    return false;
  });
  return false;
}

module.exports = { getLikes, saveLikes, deleteLikes };
