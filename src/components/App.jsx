
class App extends React.Component {
  constructor () {
    super();
    this.state = {
      selected: exampleVideoData[0],
      data: exampleVideoData
    }; 
  }

  handleClick (e) {
    console.log('click event', e);
    // this.setState({
    //   selected: e.target
    // });
  }

  handleSearch (e) {
    console.log('this', this);
    searchYouTube(e.target.value, this.changeProp.bind(this));
    
  }

  changeProp (data) {
    this.setState({
      selected: data[0],
      data: data
    });
    console.log('this.props.videos', this.props.videos);
    console.log('this.state.selected', this.state.selected);
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
              onClickVideo={this.handleClick} />
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
