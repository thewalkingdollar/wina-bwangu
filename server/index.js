const express=require('express');const cors=require('cors');const path=require('path');const db=require('./database');
const app=express();const PORT=process.env.PORT||3000;
app.use(cors());app.use(express.json());app.use(express.static(path.join(__dirname,'../public')));
app.get('/api/booths',(req,res)=>res.json(db.boothConfig));
app.get('/api/services',(req,res)=>res.json({rates:db.rates,limits:db.limits}));
app.get('/api/transactions',(req,res)=>res.json(db.getAll()));
app.get('/api/dashboard',(req,res)=>res.json(db.getDashboard()));
app.post('/api/transactions',(req,res)=>{
    const {booth,service,amount}=req.body;
    if(!booth||!service||!amount) return res.status(400).json({error:'Missing fields'});
    if(!db.boothConfig[booth]) return res.status(400).json({error:'Invalid booth'});
    if(!db.boothConfig[booth].services.includes(service)) return res.status(400).json({error:`${service} not offered at ${booth}`});
    const tx=db.createTx(booth,service,amount);res.status(201).json(tx);
});
app.get('/api/health',(req,res)=>res.json({status:'online',student:'Blessed Chisanga - 202202741'}));
app.get('*',(req,res)=>res.sendFile(path.join(__dirname,'../public/index.html')));
app.listen(PORT,()=>console.log(`Wina Bwangu FIRST VERSION running at http://localhost:${PORT} - Student 202202741`));
