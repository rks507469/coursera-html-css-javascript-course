// let XMLHttpRequest = require("xmlhttprequest").XMLHttpRequest;

// let data = 'urls=https://cdn.vertex42.com/ExcelTemplates/Images/packing-slip.gif';

// let xhr = new XMLHttpRequest();

// xhr.addEventListener("readystatechange", function () {
//     if (this.readyState === this.DONE) {
//         console.log(this.responseText);
//     }
// });

// xhr.open("POST", "https://app.nanonets.com/api/v2/OCR/Model/4f2bc6d7-4ec5-455c-8ee3-aca1b8e7ea1f/LabelUrls/");
// xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
// xhr.setRequestHeader("authorization", "Basic " + Buffer.from("zMudGLtSnrGkRoy8kziiHVV3Um5JDNrd:").toString('base64'));

// xhr.send(data);
// // btoa("zMudGLtSnrGkRoy8kziiHVV3Um5JDNrd:")

var request = require('request')
const form_data = {'categories' : ['category1', 'category2']}
const options = {
    url : 'https://app.nanonets.com/api/v2/OCR/Model/',
    body: JSON.stringify(form_data),
    headers: {
        'Authorization' : 'Basic ' + Buffer.from('zMudGLtSnrGkRoy8kziiHVV3Um5JDNrd' + ':').toString('base64'),
        'Content-Type': "application/json",
    }
}
request.post(options, function(err, httpResponse, body) {

  console.log(body)
});