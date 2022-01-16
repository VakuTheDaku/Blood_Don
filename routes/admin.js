const express=require('express')
const router=express.Router()
const Member=require('../models/members')
router.get('/admin', (req,res,next)=>{
    res.render('adminpage',{pageTitle: 'admin', name: 'adminpage'})
})
router.get('/form', (req,res,next)=>{
    
    res.render('form',{pageTitle: 'form', name: 'form'})
})
router.get('/displaygrp', (req,res,next)=>{
    res.render('displaygrp', {members:Member.send(), pageTitle: 'displaygrp', name: 'displaygrp'})
    Member.delete()
    
    

})
router.post('/store', (req,res,next)=>{
    
    const member =new Member(req.body.title, req.body.bloodgrp, req.body.pincode, req.body.address, req.body.phonenum)
    member.save().then(()=>{res.redirect('/')}).catch((err)=>{console.log(err)})
    
    
})
router.post('/seeall', (req,res,next)=>{
    Member.retrieve().then(([rows,fieldData])=>{
        res.render('seeall',{
        members: rows,
        pageTitle: 'seeall',
        name: 'seeall'
    })
    }).catch((err)=>console.log(err))
})
router.post('/store1', (req,res,next)=>{
    Member.retrieve().then(([rows,fieldData])=>{
        for (var i=0;i<rows.length;i++){
            if(rows[i].bloodgroup===req.body.bloodgrp){
                const member =new Member(rows[i].name, rows[i].bloodgroup, rows[i].pin, rows[i].Address, rows[i].contact)
                
                member.dave()
        }
    }
    res.redirect('/displaygrp')
       
}).catch((err)=>console.log(err))
})

var reqlistener=(req,res,next)=>{
    
    res.render('mainpage',{pageTitle: 'index', name: 'mainpage'})
    
    
}
    
router.get('/',reqlistener)
module.exports=router