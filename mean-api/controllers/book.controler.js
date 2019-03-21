const ObjectId = require('mongodb').ObjectID;
const { Book } = require('../models');
const {
  ResponseError,
  ResponseSuccess,
} = require('../services/util.service');

const get = function get(req, res) {

  Book.find({}, function(err, data) {
    if (err) ResponseError(res, err.message);
    return ResponseSuccess(res, { data: data });
  })
};

module.exports.get = get;

const create = function create(req, res) {
  const { body } = req;
  Book.create(body, function(err, data) {
    if (err) ResponseError(res, err.message);
    
    return ResponseSuccess(res, { data: data });
  })
};
module.exports.create = create;

const getCategory = function getCategory(req, res) {
  const data = [
    { id: "1", name: 'drama'},
    { id: "2", name: 'comedy'},
    { id: "3", name: 'sport'},
  ]
  return ResponseSuccess(res, { data: data});
}
module.exports.getCategory = getCategory;
