const Restaurant = require('../src/Restaurant');
const express = require('express')
const router = express.Router()


//restaurant INDEX
router.get('/', (req, res)=>{
  Restaurant.find({})
  .then(restaurants => {
   if(restaurants.length < 1){
    return res.json({ restaurants : restaurants, message : 'nothing found'})
   }
   res.status(200).json({ restaurants : restaurants})
  })
  .catch(err => {
   res.send({ message : err})
  })
  
})

router.post('/restaurant', (req, res)=>{
  let data = {
    name: req.body.name,
    link : req.body.link,
    cat: req.body.cat ,
    rating : req.body.rating ,
    isOpen:req.body.isOpen,
    catName: req.body.catName,
    price:req.body.price,
    imgs:req.body.imgs,
    longitude:req.body.longitude,
    latitude:req.body.latitude
  }

  let restaurants = new Restaurant(data)
  
  restaurants.save()
  .then(()=> {
    console.log("yes working")
   res.status(200).json({ restaurants : restaurants, message: "saved"})
  })
  .catch(err => {
    console.log("err")
   res.status(201).json({ message : err})
  })
})




module.exports = router