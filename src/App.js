import React from "react";
import CardList from "./components/CardList";
import "./App.css";
import Form from "./components/Form";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      profiles: [],
    };
  }

  addNewProfile = (profileData) => {
    this.setState((prevState) => ({
      profiles: [...prevState.profiles, profileData],
    }));
  };

  render() {
    return (
      <React.Fragment>
        <div className='header'>{this.props.title}</div>
        <Form onAdd={this.addNewProfile} />
        <CardList profiles={this.state.profiles} />
      </React.Fragment>
    );
  }
}

//Functional Component
// const App = ({ title }) => {
//   return <div className='header'>{title}</div>;
// };

export default App;
