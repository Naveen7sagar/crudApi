const express = require('express');
const { model } = require('mongoose');
const router = express.Router();
const schemamodel = require('../models/user.models')

//insert data
router.post('/create',async(req,res)=>{
    try{
       const schemaobject = new  schemamodel(req.body)
       console.log(req.body)
       const insertdata= await schemaobject.save()
       res.status(201).send(insertdata)
    }
    catch(e){
    res.status(400).send(e)
    }
   })
   
   //read all data
router.get('/GetAll',async(req,res)=>{
    try{
       const getdata= await schemamodel.find({})
       console.log(getdata)
       res.send(getdata)
    }
    catch(e){
    res.status(400).send(e)
    }
   })
   //read one data
   router.get('/GetbyId/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
       const getdata= await schemamodel.findById(_id)
    //    console.log(getdata)
        res.send(getdata)
    }
    catch(e){
    res.status(400).send(e)
    }
   })

   //update data
   router.patch('/update/:id',async(req,res)=>{
    try{
        const _id = req.params.id;
       const updatedata= await schemamodel.findByIdAndUpdate({_id:_id},req.body,{
           new:true
       })
    //    console.log(updatedata)
        res.send(updatedata)
    }
    catch(e){
    res.status(500).send(e)
    }
   })

   //delete data
   router.delete('/delete/:id',async(req,res)=>{  
    try{
       const _id = req.params.id;
       const deletedata= await schemamodel.findByIdAndDelete(_id)
    //    console.log(getdata)
        res.send(deletedata)
    }
    catch(e){
    res.status(500).send(e)
    }
   })
   module.exports = router;