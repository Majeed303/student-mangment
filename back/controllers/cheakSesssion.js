
const cheakSession= (req,res)=>{
     
    if(req.session.user){
        console.log(req.session.user); // User details in the server console
    return res.status(200).send({ isLoggedIn: true, user: req.session.user });

    }else{
        console.log("ccc")  
        return res.send (false);
    }
}
export {cheakSession}