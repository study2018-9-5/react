import React, {Component} from 'react';
// import { Row, Col, Input, Button } from 'antd';
import './App.css';
import Index from './components/index.js';
import SearchTable from './components/searchTable.js';
// function App() {
//   return (
//     <div className="App">
//       新建reactApp
//     </div>
//   );
// }

// class App extends React.Component {
//   render(){
//     return(
//       <div className="App">
//         新建reactApp
//       </div>
//     );
//   }
// }

class App extends Component {
  render(){
    return(
      <div className="App">
        <Index/>
        <SearchTable/>
      </div>
    );
  }
}

export default App;
