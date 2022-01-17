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
    v=Member.send()
    var x=0
    for(i=0;i<v.length;i++){
        if(v[i]!=0){
            x=1
        }
    }
    res.render('displaygrp', {members:Member.send(), pageTitle: 'displaygrp', name: 'displaygrp', xfactor: x})
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
    var j=0
    Member.retrieve().then(([rows,fieldData])=>{
        
        for (var i=0;i<rows.length;i++){
            
            if(rows[i].bloodgroup===req.body.bloodgrp){
                const member =new Member(rows[i].name, rows[i].bloodgroup, rows[i].pin, rows[i].Address, rows[i].contact)
                j++
                member.dave(j)
        }
    }
    res.redirect('/displaygrp')
     
}).catch((err)=>console.log(err))
})

var reqlistener=(req,res,next)=>{
    
    res.render('mainpage',{pageTitle: 'index', name: 'mainpage'})
    
    
}
router.post('/delete', (req,res,next)=>{
    
    res.render('delete',{pageTitle: 'delete', name: 'delete', yfactor: 0})
})
router.post('/deletedata', (req,res,next)=>{
    var name=req.body.title
    var bloodgroup= req.body.bloodgrp
    Member.retrieve().then(([rows,fieldData])=>{
        var j=0
        for (var i=0;i<rows.length;i++){
            j++
            if(rows[i].bloodgroup===bloodgroup && rows[i].name===name){
                const member =new Member(rows[i].name, rows[i].bloodgroup, rows[i].pin, rows[i].Address, rows[i].contact)
                console.log(member.name)
                
                member.deletee().then(()=>{res.redirect('/')}).catch((err)=>{console.log(err)})
                
        }
        
    }
    if(j===rows.length)
    {
        res.render('delete', {pageTitle: 'delete', name: 'delete', yfactor: 1})
    }
    else{
    res.redirect('/')
    }
     
}).catch((err)=>console.log(err))
    
})   
router.get('/',reqlistener)
module.exports=router