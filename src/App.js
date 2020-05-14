import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

//Components
import Navbar from './layout/Navbar';
import Home from './components/Home';
import Collections from './collections/Collections';
import GalleryNavbar from './layout/GalleryNavbar';
import CollectionDetails from './collections/CollectionDetails';
import Search from './search/Search';

const App = () => (
  <Router>
    <div className="App">
      <Navbar />
      <div className="container main-container">
        <GalleryNavbar />
        <hr />
        <br />
        <Switch>
          <Route exact path="/photo-gallery/" component={Home} />
          <Route path="/collections" component={Collections} />
          <Route path="/collection/:id" component={CollectionDetails} />
          <Route path="/search" component={Search} />
        </Switch>
      </div>
    </div>

  </Router>
);

export default App;
