import React from "react";
import Card from "./components/Card";

class App extends React.Component {
  //constructor

  render() {
    return (
      <div>
        <div className='header'>{this.props.title}</div>
        <Card />
      </div>
    );
  }
}

//Functional Component
// const App = ({ title }) => {
//   return <div className='header'>{title}</div>;
// };

export default App;
