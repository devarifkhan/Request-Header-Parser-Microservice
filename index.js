const express=require("express");
const path=require("path");
const cors=require("cors");	
const requestIp=require("request-ip");
const app=express();

app.use(express.static(path.join(__dirname, "./public")));
app.use(cors({optionsSuccessStatus:200}));

app.get('/',(req,res)=>{
    res.sendFile(path.join(__dirname+"/public/index.html"));
});


app.get('/api/whoami',(req,res)=>{
    console.log(req.headers['user-agent']);
    console.log(req.headers['accept-language']);
    console.log(requestIp.getClientIp(req));	
    res.json({
        ipaddress:requestIp.getClientIp(req),
        language:req.headers['accept-language'],
        software:req.headers['user-agent']
    });
});



app.listen(3000,()=>{
    console.log("Server is running on port 3000");
});

