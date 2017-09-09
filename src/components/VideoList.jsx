var VideoList = (prop) => (
  <div className="video-list">
    <div className="vid1">
      <VideoListEntry video={prop.videos[0]}/>
    </div>
    <div className="vid2">
      <VideoListEntry video={prop.videos[1]}/>
    </div>
    <div className="vid3">
      <VideoListEntry video={prop.videos[2]}/>
    </div>
    <div className="vid4">
      <VideoListEntry video={prop.videos[3]}/>
    </div>
    <div className="vid5">
      <VideoListEntry video={prop.videos[4]}/>
    </div>
  </div>
);



// ReactDOM.render(<VideoListEntry video={prop}/>, $('.vid1')[0]);


// PropTypes tell other developers what `props` a component expects
// Warnings will be shown in the console when the defined rules are violated
VideoList.propTypes = {
  videos: React.PropTypes.array.isRequired
};

// In the ES6 spec, files are "modules" and do not share a top-level scope.
// `var` declarations will only exist globally where explicitly defined.
window.VideoList = VideoList;
