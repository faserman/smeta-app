import React from 'react';
import { observer } from 'mobx-react';
import { appStore } from './store/app';

import './App.css';

import { Header } from './components/Header/index';
import { Body } from './components/Body/index';
import { Footer } from './components/Footer/index';

@observer
class App extends React.Component {
  
  render() {

    appStore.gettingWorkTypes();

    return (
      <div className="App">
        <Header />
        <Body />
        <Footer />
      </div>
    );
  }
}

export default App;
