
class App extends React.Component {
  constructor (prop) {
    super(prop);
    this.state = {
      selected: this.props.videos[0],
      data: this.props.videos
    }; 
  }

  handleClick (selectedVideo) {
    this.setState({
      selected: selectedVideo
    });
  }

  handleSearch (e) {
    searchYouTube(e.target.value, this.resetState.bind(this));
  }

  resetState (data) {
    this.setState({
      selected: data[0],
      data: data
    });
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearch={this.handleSearch.bind(this)}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selected}/>
          </div>
          <div className="col-md-5">
            <VideoList 
              videos={this.state.data}
              onClickVideo={this.handleClick.bind(this)} />
          </div>
        </div>
      </div>      
    );
  }

}





// var App = (prop) => (
//   <div>
//     <nav className="navbar">
//       <div className="col-md-6 offset-md-3">
//         <Search />
//       </div>
//     </nav>
//     <div className="row">
//       <div className="col-md-7">
//         <VideoPlayer video={prop.videos[0]} />
//       </div>
//       <div className="col-md-5">
//         <VideoList videos={prop.videos} />
//       </div>
//     </div>
//   </div>
// );

// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
