const Transaction = require ('../models/transactions')
const User = require('../models/user')
const Product = require('../models/product')

class TransactionController {
   static addToCart(){
        Product.findOne({
            _id : req.params.id
        })
        .then(product => {
            let cart = {
                product_id : product._id,
                user_id : req.loggedUser._id,
                count : req.body.count,
                total_payment : count * product.price
            }
            Transaction.create(cart)
            .then(cart => {
                res.status(201).json(cart)
            })
            .catch(next)
        })
        .catch(next)
   }

   static checkout(){
       Transaction.find({
           user_id = req.loggedUser._id
       })
       .populate(product_id)
       .then(transactions => {
             console.log(transactions)
       })
   }


//    static findAll(req,res,next){
//        Transaction.find({
//            user_id: req.payload._id
//        }).populate('product_id')
//        .then(data => {
//            res.status(200).json(data)
//        })
//        .catch(next)
//    }
}

module.exports = TransactionController