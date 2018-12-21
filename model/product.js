const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//const ObjectId = Schema.ObjectId;

var product_list = new Schema({
  id: String,
  name: String,
  price:String,
  colors: Array,
  condition: String,
  description:String
},{collection:"product_list"});
var product_list = mongoose.model('product_list', product_list);
/*product_list.find({}, function (err, docs) {
docs.forEach(function(item){
  console.log(item);
})
if(err!=null)
console.log(err);
});*/
module.exports=product_list;
