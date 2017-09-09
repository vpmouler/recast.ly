var searchYouTube = (options, callback) => {
  var searchResult = $.ajax({
    type: 'GET',
    // url: `https://www.googleapis.com/youtube/v3/search?part=snippet&order=rating&type=video&videoDefinition=high&videoEmbeddable=true&key=${window.YOUTUBE_API_KEY}&q=${options}`
    url: 'https://www.googleapis.com/youtube/v3/search',
    data: {
      part: 'snippet',
      type: 'video',
      videoDefinition: 'high',
      videoEmbeddable: true,
      key: YOUTUBE_API_KEY,
      maxResults: 5
    }
  });

  searchResult.done((data) => {
    // console.log('SUCCESS', data.items);
    callback(data.items);
  });

  searchResult.fail((data) => {
    console.warn('Failed query');
  });

};

window.searchYouTube = searchYouTube;

