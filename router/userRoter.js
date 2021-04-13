const router = require('express').Router();
const User = require('../models/userModel');

router.get('/',async(req,res)=>{
    const getUsers=await User.find({});
    res.json(getUsers);
});


router.get('/:id',(req,res)=>{
    res.json({mesaj:"id'si : "+req.params.id+" olan user bilgileri"})
});

router.post('/',async(req,res)=>{
  /*   try{        
        const createUser=new User(req.body);
        const result = await createUser.save();
        res.send(result);
    }catch(err){
        console.log("user kaydederken hata olustu "+err);
    } */

    res.json(req.body);
});


router.patch('/:id',(req,res)=>{
    res.json({
        mesaj : "id'si : "+req.params.id+" olan kullanıcının güncellenecek bilgileri "+req.body+" bilgileriyle güncellenecek"
    });
});


router.delete('/:id',(req,res)=>{
    res.json({
        mesaj : "id'si : "+req.params.id+" olan kullanıcı silinecek"
    });
});

module.exports=router;