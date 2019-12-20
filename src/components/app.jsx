import React, { Component } from 'react';
import giphy from 'giphy-api';
import Search from './search';
import Gif from './gif';
import GifList from './gif_list';

class App extends Component {
  constructor (props) {
    super(props);

    this.state = {
      gifs: [],
      selectedGifId: 'TS4lhxfqE6Ix2'
    };
  }

  search = (query) => {
    giphy('Xd0EfgdC0Xva2dl1ERW7oPCzXIIc7lEz').search({
      q: query,
      rating: 'g',
      limit: 10
    }, (err, res) => {
      this.setState({
        gifs: res.data
      });
    });
  }

  select = (event) => {
    this.setState({
      selectedGifId: event
    });
  }

  render () {
    return (
      <div>
        <div className="left-scene">
          <Search searchFunction={this.search}/>
          <div className="selected-gif" >
            <Gif id={this.state.selectedGifId} />
          </div>
        </div>
        <div className="right-scene">
          <GifList gifs={this.state.gifs} selectFunction={this.select} />
        </div>
      </div>
    );
  }
}

export default App;
