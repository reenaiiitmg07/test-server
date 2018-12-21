var express = require('express');
var router = express.Router();
var Product=require('../model/product');
var passport =require('passport');
const passportService = require('../services/passport');

/* GET users listing. */
const requireAuth = passport.authenticate('jwt', { session: false });
router.get('/',requireAuth, function(req, res, next) {
  console.log("product");
  Product.find({}, function (err, docs) {
    res.send(docs);
  if(err!=null)
  console.log(err);
});
});

router.post('/', function(req, res, next) {
  var product=new Product(req.body);
  product.save(function(err) {
   if(err!=null)
  res.send({msg:"unsuccess",status:400});
  res.send({msg:"success",status:200});
  });
});
router.put('/', function(req, res, next) {
  var product=new Product(req.body);
  Product.update({id:req.body.id}, {$set:{description:req.body.description}}, function (err,result) {
  res.send(result);
});
});
router.delete('/', function(req, res, next) {
  Product.find({ id:req.body.id }).remove( function(err,result){
    res.send(result);
  });
});

module.exports = router;
