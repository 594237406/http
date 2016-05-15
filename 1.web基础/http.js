var http=require('http');


var server=http.createServer((req,res)=>{


   res.end('end');
});


server.listen(3001);
