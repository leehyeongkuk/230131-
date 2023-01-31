const bodyParser = require('body-parser');
const express = require('express');
const router = express.Router();

router.use(bodyParser.urlencoded({extended : true}))
//리액트에서 axios로 요청할때 요청 url에 데이터를 넣어서 요청
//그 주소를 데이터로 읽어들이도록 실행하자
//예) axios.get('/notice?type=list')

router.get('/',(req,res,next) => {
    
    var type = req.query.type; //rud중 하나
    if(type == 'list'){
        res.send('sql접속할때 select로 해야되겠네')
    }
    else if(type == 'write'){
        res.send('sql접속할때 select로 해야되겠네')
    }
    else {res.send('sql접속할때 select로 해야되겠네')}
        
    
})


module.exports = router;