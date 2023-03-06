function requestValidator(object) {
    let validMethods = ['GET', 'POST', 'DELETE', 'CONNECT'];
    let validVersions = ['HTTP/0.9', 'HTTP/1.0', 'HTTP/1.1', 'HTTP/2.0'];
    let uriRegex = /^[\w.]+$/;
    

    if(!(object.method && validMethods.includes(object.method))) {
        throw new Error('Invalid request header: Invalid Method');
    }

    if(!(object.uri && (object.uri=='*' || uriRegex.test(object.uri)))){
        throw new Error('Invalid request header: Invalid URI');
    }

    if(!(object.version && validVersions.includes(object.version))) {
        throw new Error('Invalid request header: Invalid Version');
    }

    let messageRegex = /^[^<>\\$\'\"]+$/;

    if(!(object.hasOwnProperty('message') && (object.message=='' || messageRegex.test(object.message)))){
        throw new Error('Invalid request header: Invalid Message');
    }

    return object;
}