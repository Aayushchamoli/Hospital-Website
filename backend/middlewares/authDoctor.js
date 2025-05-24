import jwt from 'jsonwebtoken'


//doctor authentication middleware

const authDoctor = async (req,res,next) => {
    try {

        const {dtoken} = req.headers
        if (!dtoken) {
            return res.json({success:false,message:'not authorized login again doctor sahab'})
            
        }
        const token_decode = jwt.verify(dtoken,process.env.JWT_SECRET)

        //req.userId = token_decode.id
        //req.body.docId = token_decode.id
        req.docId = token_decode.id



        next()

        

        
    } catch (error) {
        console.log(error)
        res.json({success:false,message:error.message})
    }

}

export default authDoctor