const {Product} = require("../models/product.model")


module.exports.apiTest = (req, res)=>{
    res.json({message: "ok"})
}

// all products
module.exports.allProd = (req, res)=>{
    Product.find() // array of objects
        .then(exList => res.json(exList))
        .catch(err=>res.json(err))
}

// one Product
module.exports.oneProd = (req, res)=>{
    Product.findOne({_id: req.params.id}) // return the found object
        .then(foundProd => res.json(foundProd))
        .catch(err=>res.json(err))
}

// create Prod
module.exports.addProd = (req, res)=>{
    Product.create(req.body) // will return the created object
        .then(newProd => res.json(newProd))
        .catch(err=>res.json(err))
}


// update Prod -- create & getOne
module.exports.updateProd = (req, res)=>{
    Product.findOneAndUpdate(
        {_id: req.params.id},       // criteria
        req.body, // partial formData 
        {new: true, runValidators:true}
        // new: true -- return the updated object
        // runValidator -- to perform validation specified in model
    )
        .then(updatedProd =>res.json(updatedProd))
        .catch(err=>res.json(err))
}


// delete Prod
module.exports.deleteProd = (req, res)=>{
    Product.deleteOne({_id: req.params.id})
        .then(status=> res.json(status))
        .catch(err=>res.json(err))
}

