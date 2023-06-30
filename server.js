const express= require('express')
const bodyparse= require('body-parser')
const cors=require('cors')
const app =express();

app.use(cors());

app.use(bodyparse.json());

app.post('/register',(req,res) => {
       const {name,email,password,cnfrmpass}= req.body
       const registereduser={name,email,password,cnfrmpass}
       res.json(registereduser)
})

app.listen(5000,()=>{
       console.log("server running on host 5000");
});



