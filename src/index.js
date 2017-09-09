// TODO: Render the `App` component to the DOM
searchYouTube('cats', function(data) {
  ReactDOM.render(<App videos={data}/>, document.getElementById('app'));
});