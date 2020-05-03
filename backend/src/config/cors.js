module.exports = (req,res,next)=>{
    //adiciona headers ao response do browser
    res.header('Access-Control-Allow-Origin','*')//permite que a aplicação seja consumida por qualquer origem, mas poderia ser restrito
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE')
    res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept')
    next()//continua o fluxo para o próximo middlaware
}