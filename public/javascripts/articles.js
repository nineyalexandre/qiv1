function lireArticles(){
    fetch("./bd.json")
    .then(function (body){
        return body.text();
    })
    .then(function (data) {
        obj = JSON.parse(data);
        pre = document.createElement("pre");
        pre.innerHTML = JSON.stringify(obj, null, 2);
        document.getElementById("articles").appendChild(pre);
    })
}
