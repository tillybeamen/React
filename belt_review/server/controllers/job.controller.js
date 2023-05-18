const {Job} = require("../models/job.model")

module.exports.apiTest = (req, res) => {
    res.json("ok")
}

// get all
module.exports.getAll = (req, res) => {
    Job.find()
        .then(allJobs=> res.json(allJobs))
        .catch(err=>res.status(400).json(err))
}
// get one
module.exports.getOne = (req, res) => {
    Job.findOne({_id : req.params.id})
        .then(oneJob=> res.json(oneJob))
        .catch(err=>res.status(400).json(err))
}
// create
module.exports.addJob = (req, res) => {
    Job.create(req.body)
    .then(newJob=> res.json(newJob))
    .catch(err=>res.status(400).json(err))
}
// update
module.exports.updateJob = (req, res) => {
    Job.findOneAndUpdate(
        {_id : req.params.id},
        req.body,
        {new:true, runValidators:true}
    )
    .then(updatedJob =>res.json(updatedJob))
    .catch(err=>res.status(400).json(err))
}
// delete
module.exports.deleteJob = (req, res) => {
    Job.deleteOne({_id: req.params.id})
        .then(message=>res.json(message))
        .catch(err=>res.status(400).json(err))
}