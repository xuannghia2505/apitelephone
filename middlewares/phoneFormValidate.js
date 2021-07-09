module.exports = function(req,res,next){
    try {
        const body = req.body;
        const tendanhba = body.tendanhba;
        const sdt = body.sdt;
        
        if( sdt.length!=10||
            sdt.charAt(0)!='0'||
            tendanhba.lenght<1)
        {
            throw new Error("Bạn đã điền sai form");
        }   
        else
        {
            next();
        }
    } catch (e) {
        res.status(401).json({
            status: "failed",
            message: console.log(e),
            data: []
        })
    }
}