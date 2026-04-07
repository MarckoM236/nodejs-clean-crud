function response (res,statusCode,type,data){
    res.writeHead(statusCode, {'Content-Type': type});
    res.end(data);
}

export { response };