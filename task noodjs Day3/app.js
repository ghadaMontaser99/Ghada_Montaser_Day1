var http = require('http')
var fs = require('fs')
var  parse  = require('querystring');
http.createServer(function(req, res){
	let data = '';
			req.on('data', chunk => {
			  data += chunk;
			})
			req.on('end', () => {
			  //console.log(JSON.parse(data).todo); // 'Buy the milk'
			  console.log(JSON.stringify(data));
			 
			  //console.log(JSON.stringify(data.body));
			  if(req.url==='/')
			  {
				  res.writeHead(200, {'content-type': "text/html"})
				  var html = fs.readFileSync('homepage.html')
					res.write(html)
			  }
		  
			  else if (req.url==='/signup' && req.method==='GET'){
				  res.writeHead(201, {'content-type': "text/html"})
				  var html = fs.readFileSync('signup.html')
				  res.write(html)
			  }
		  
			  else if (req.url==='/login' && req.method==='GET'){
				  res.writeHead(201, {'content-type': "text/html"})
				  var html = fs.readFileSync('login.html')
				  res.write(html)
				  console.log(JSON.stringify(data.body));
			  }
			  else if (req.url==='/login' && req.method==='POST'){
				  res.writeHead(201, {'content-type': "text/html"})
				  var html = fs.readFileSync('login.html')
				  res.write(html)
				  console.log(JSON.stringify(data.body));
			  }
		  
			  else if (req.url==='/profile' && req.method==='GET'){
				  res.writeHead(201, {'content-type': "text/html"})
				  var html = fs.readFileSync('profile.html')
				  res.write(html)
			  }
		  
			  
			  else
				  {
					  res.writeHead(404)
						res.write('error page not found!')
				  }
			  res.end();
			})
	

	
}).listen(3000)