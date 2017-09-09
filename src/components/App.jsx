
class App extends React.Component {
  constructor (prop) {
    super(prop);
    this.state = {
      selected: prop.videos[0]
    }; 
  }

  handleClick (e) {
    console.log('click event', e);
    // this.setState({
    //   selected: e.target
    // });
  }

  handleSearch (e) {
    console.log('search event', e.target.value);
    searchYoutube
  }

  render () {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <Search onSearch={this.handleSearch}/>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <VideoPlayer video={this.state.selected}/>
          </div>
          <div className="col-md-5">
            <VideoList 
              videos={this.props.videos}
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
