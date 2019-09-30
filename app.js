const http = require("http");
const fs = require("fs");
/*function init(){
    function onRequest(request, response){
        response.writeHead(200,{"Content-Type": "text/html"});
        response.write("<h1>Hola Mundo</h1>");
        response.end();
    }

    http.createServer(onRequest).listen(1111);
}
*/
/*exports.init = () => {
    function onRequest(request, response){
        response.writeHead(200,{"Content-Type": "text/html"});
        response.write("<h1>Hola Mundo</h1>");
        response.end();
    }

    http.createServer(onRequest).listen(1111);
};
*/


exports.init = () => {
    http.createServer((request, response) => {
        fs.readFile("./index.html", (err, obj) => {
            if (err) {
                response.writeHead(404, { "Content-Type": "text/html" });
            } else {
                response.writeHead(200, { "Content-Type": "text/html" });
                response.write(obj)
            }
            response.end();
        });

    }).listen(1111);
};