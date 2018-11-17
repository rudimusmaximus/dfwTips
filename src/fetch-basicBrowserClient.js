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

//### Example Usage
const DFW_TIPS_API_URL =
  'https://rudimusmaximus.github.io/dfwTips/dfwTipsAPI.json';

fetch(DFW_TIPS_API_URL)
    .then(status)
    .then(json)
    .then(data => console.log(`Request succeeded with JSON response: `, data))
    .catch(error => console.log(`Request failed: `, error));
