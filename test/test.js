"use strict";

let http=require('http');

let server=http.createServer((req,res)=>{
    //res.writeHead(302,{
    //    'Location':'http://baidu.com'
    //});
    res.end('abdfasdfc');
});


server.listen('3000');

