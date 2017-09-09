var VideoList = (prop) => (
    <div className="video-list">
      <div className="vid">
        {
          prop.videos.map((vid, i) => 
            <VideoListEntry video={vid} key={i + 1} onClickVideo={prop.onClickVideo}/>
          )
        }
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
