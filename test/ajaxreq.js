(function() {
    //Make an Ajax GET request
    ajaxUtils.sendGetRequest = function(requestUrl, responseHandler) {
        let request = getRequestObject();
        request.onreadystatechange = function() {
            handleResponse(request, responseHandler);
        };
        request.open("GET", requestUrl, true);
        request.send(null); //for POST only
    };

    //Only calls user provided 'responseHaldler'
    //function if response is ready
    //and not an error
    function handleResponse(request, responseHandler) {
        if((request.readyState == 4) && (request.status == 200)) {
            responseHandler(request);
        }
    }

    global.$ajaxUtils = ajaxUtils;

})(window);