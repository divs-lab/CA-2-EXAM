
router.get('/user'){
    try{
        if(user){
            console.log(`message:"User found","data"{details}`);
        }
    }catch{
        console.error("There is an error",err);
    }
};