import React, { Component } from 'react';
import { Layout } from './components/layout/layout';
import BodyBox from './containers/bodyBox';
class App extends Component {
  render(){
    return (
      <div>
        <Layout>
          <BodyBox/>
        </Layout>
      </div>
    );
  }
}

export default App;
