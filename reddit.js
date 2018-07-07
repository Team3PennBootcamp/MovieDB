// REDDIT API - requires no apikey, pure access to json
const parentDiv = document.getElementById('reddit-reviews');
let search = `deadpool`;

function RedditAPI() {
  let redditQuery = `https://www.reddit.com/search.json?q=${search}&limit=3&lang=en`;
  // INITIALIZE AJAX REQUEST
  let xhr = new XMLHttpRequest();
  // OPEN AJAX REQUEST
  xhr.open('GET', redditQuery, true);
  // FUNCTION TO RUN FOR REQUEST
  xhr.onload = function() {
    if (xhr.status === 200) {
      let response = JSON.parse(xhr.responseText);
      let results = response.data.children;
      for (let i = 0; i < results.length; i++) {
        let redditDiv = document.createElement('div');
        redditDiv.className = 'one-third';
        redditDiv.innerHTML = `${results[i].data.title}<br>
        ${results[i].data.subreddit_name_prefixed}<br>
        ${results[i].data.url}<br><br>`;
        parentDiv.appendChild(redditDiv);
        console.log(results);
      }
    }
  }
  //SEND AJAX REQUEST
  xhr.send();
}

RedditAPI();
