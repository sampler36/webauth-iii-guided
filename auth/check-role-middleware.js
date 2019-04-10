module.exports = role => {
    return function(req,res, next){
        if(req.decodedjwt.roles && req.decodedjwt.roles.includes(role)){
            next()
        } else {
            res.status(403).json({message: 'You have no power'})
        }
    }
}