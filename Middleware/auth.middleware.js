exports.auth = (req,res,next)=>{
    if(req.headers.token){
        req.name ='sheraz';
        next();
    }else{
        return res.status(401).json({
                message:'Please Login First'
        })
    }
}