document.getElementById("shibe").onclick = function () { cacheImagesFromAPI() };
let images = [];
var numberOf = 5;

async function fetchData(url) {

    const response = await fetch(url);
    return response.json();

};

function cacheImagesFromAPI() {

    numberOf = document.getElementById("imgNumber").value;
    /*
    if (hasPressed)
        document.getElementById('img').value = "";
    */
    var BASEURL = `https://shibe.online/api/shibes?count=${numberOf}&urls=true&httpsUrls=true/request`;
    const promise = fetchData(BASEURL);

    promise.then((response) => {
        images = response.map(image => image);

        console.log(images);

        images.forEach(function (image) {              // for each link l in ArrayOfImages
            var img = document.createElement('img');   // create an img element
            img.src = image;                           // set its src to the link l
            document.body.appendChild(img);            // append it to the body 
            console.log(document.getElementById(img));
        });
    });
};