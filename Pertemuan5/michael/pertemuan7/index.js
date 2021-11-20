var http = require('http');

http.createServer((req,res)=>{
    res.write('<p>Pengembangan Aplikasi Web dengan Nodejs</p>');
    res.end();
}).listen(8000,()=>{
    console.log('Server is running on port 8000')
})