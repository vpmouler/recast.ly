var searchYouTube = (options, callback) => {
  $.ajax({
    type: 'GET',
    url: `https://www.googleapis.com/youtube/v3/search?part=snippet
                     &order=rating
                     &type=video
                     &videoDefinition=high
                     &videoEmbeddable=true
                     &key=${window.YOUTUBE_API_KEY}`
  })

};

window.searchYouTube = searchYouTube;

// AIzaSyBqVTo-TbHy0zJ67Hb3BmFbPaIJYVsQ-iQ

/*GET {base_URL}/search?part=snippet
                     &order=rating
                     &type=video
                     &videoDefinition=high
                     &videoEmbeddable=true
                     &key={YOUR_API_KEY}

*/
