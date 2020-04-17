import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './layout/Navbar';
import Home from './components/Home';
import Collections from './collections/Collections';
import GalleryNavbar from './layout/GalleryNavbar';
import CollectionDetails from './collections/CollectionDetails';
import Search from './search/Search';

class App extends Component {

  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <div className="container main-container">
          <GalleryNavbar />
          <hr />
          <br />
            <Switch>
              <Route exact path="/photo-gallery/home" component={Home} />
              <Route path="/photo-gallery/collections" component={Collections} />
              <Route path="/photo-gallery/collection/:id" component={CollectionDetails} />
              <Route path="/photo-gallery/search" component={Search} />
            </Switch>
          </div>
        </div>

      </BrowserRouter>
    );
  }
}

export default App;
