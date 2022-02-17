import React from "react";
import SearchBar from "./SearchBar";
import youtube from "./apis/youtube";
import VideoList from "./videoList";
import VideoRender from "./videoDisplay";

class App extends React.Component {
  state = { videos: [], videoSelected: null };

    componentDidMount(){
        this.onTextSubmit("Avengers")
    }

  onTextSubmit = async (text) => {
    const response = await youtube.get("/search", {
      params: {
        q: text,
      },
    });
    console.log(response);
    this.setState({ 
        videos: response.data.items ,
        videoSelected : response.data.items[0]        
    });
  };

  onVideoSelect = (video) => {
    console.log(video);
    this.setState({ videoSelected: video });
  };
  render() {
    return (
      <div className="ui container">
        <SearchBar onFormSubmit={this.onTextSubmit} />
        <div className="ui grid">
          <div className="ui row">
              <div className="eleven wide column">
            <VideoRender video={this.state.videoSelected} />
            </div>
            <div className="five wide column">
            <VideoList
              onVideoSelect={this.onVideoSelect}
              videoList={this.state.videos}
            />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default App;
