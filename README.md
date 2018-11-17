# dfwTips JSON API

This repository serves as my own API of static JSON data for the creation of google maps markers.

This list curates a list of places to see when in DFW grouped by category.

It's intended to feed a single page React app, but can be used for any reason.

Cheers!

# To use  
## Fetch with Chained Promises
This approach based on [this article](https://developers.google.com/web/updates/2015/03/introduction-to-fetch).  
### Required Code  
See `src` directory.
See `fetch-basicBrowswerClient.js`

```js
//see https://developers.google.com/web/updates/2015/03/introduction-to-fetch
function status(response) {
    if (response.status >= 200 && response.status < 300) {
        return Promise.resolve(response);
    } else {
        return Promise.reject(new Error(response.statusText));
    }
}

function json(response) {
  return response.json();
}
```


### Example Usage  
```js
const DFW_TIPS_API_URL =
'https://rudimusmaximus.github.io/dfwTips/dfwTipsAPI.json';

fetch(DFW_TIPS_API_URL)
  .then(status)
  .then(json)
  .then(  data => console.log(`Request succeeded with JSON response: `, data))
  .catch(error => console.log(`Request failed: `, error));
```
## XMLHttpRequest  
### Required Code  
See `src` directory.
If using a copy of `XMLHttpRequest-basicBrowserClient.js`  

### Example Usage  

```js
const DFW_TIPS_API_URL = 'https://rudimusmaximus.github.io/dfwTips/dfwTipsAPI.json'

hitApi(DFW_TIPS_API_URL, function(error, data) {
  if (error) {
    console.log('there was an error', error);
  } else {
    console.log('data is', data);
  }
});
```

# The JSON  
I curate a list and keep it in a google sheets file [here](https://drive.google.com/open?id=1XipGWL20rvQYT_cVdvTqkz0UTZ_2oJ8Xqp8D7JUR83A).

<img width="2098" alt="master list maintained in a google sheet" src="https://user-images.githubusercontent.com/21182598/48654076-8691bc00-e9cf-11e8-8ad8-7b15d582cbb9.png">

I use this sheets add-on to export to JSON: 
[Export Sheet Data sheets add-on](https://chrome.google.com/webstore/detail/export-sheet-data/bfdcopkbamihhchdnjghdknibmcnfplk?utm_source=permalink)

<img width="1033" alt="export sheets data add-on" src="https://user-images.githubusercontent.com/21182598/48654075-8691bc00-e9cf-11e8-9997-1df80d356f36.png">

# Additional Attributions  
Original idea from this article [Making a JSON API with GitHub Pages](https://paulsalaets.com/posts/json-api-with-github-pages).
The add on is open source and can be found on GitHub at: [github.com/Synthoid/ExportSheetData](https://github.com/Synthoid/ExportSheetData)

I use [this tool](https://google-developers.appspot.com/maps/documentation/utils/geocoder/) to get the lat/lng for the markers using the address of each location.

<img width="998" alt="google maps api geocoder tool" src="https://user-images.githubusercontent.com/21182598/48654074-8691bc00-e9cf-11e8-9eaf-fdeb88e31b4a.png">
