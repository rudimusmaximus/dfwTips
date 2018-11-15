# dfwTips JSON API

This respository serves as my own API of static JSON data for the creation of google maps markers.

This list curates a list of places to see when in DFW grouped by category.

It's intended to feed a single page React app, but can be used for any reason.

Cheers!

# To use  
## Fetch with linked promises
This approach based on [this article](https://developers.google.com/web/updates/2015/03/introduction-to-fetch).  
### Required Code  
see `fetch-basicBrowswerClient.js`

### Example Usage  
const DFW_TIPS_API_URL = 'https://rudimusmaximus.github.io/dfwTips/dfwTipsAPI.json'

```js
fetch(DFW_TIPS_API_URL)
  .then(status)
  .then(json)
  .then(function(data) {
    console.log('Request succeeded with JSON response', data);
  }).catch(function(error) {
    console.log('Request failed', error);
  });
```
## XMLHttpRequest  
### Required Code  
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

TODO: image

I use this sheets addon to export to JSON: 
[Esport Sheet Data sheets addon](https://chrome.google.com/webstore/detail/export-sheet-data/bfdcopkbamihhchdnjghdknibmcnfplk?utm_source=permalink)

TODO: image

# Attributions  
Original idea from this article [Making a JSON API with GitHub Pages](https://paulsalaets.com/posts/json-api-with-github-pages).
The add on is open source and can be found on GitHub at: [github.com/Synthoid/ExportSheetData](https://github.com/Synthoid/ExportSheetData)

I use [this tool](https://google-developers.appspot.com/maps/documentation/utils/geocoder/) to get the lat/lng for the markers using the address of each location.

# Challenges
## TODO: H2 best determine center for map to drop the markers on?
