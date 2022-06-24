import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) =>
        this.setState(
          () => {
            return { Monsters: users };
          }
          // () => {
          //   console.log(this.state);
          // }
        )
      );
  }
  render() {
    return (
      <div className="App">
        <input
          className="search-box"
          placeholder="search monsters"
          type="search"
          onChange={(event) => {
            const searchString = event.target.value.toLowerCase();
            const filteredMonsters = this.state.Monsters.filter((monster) => {
              return monster.name.toLowerCase().includes(searchString);
            });
            this.setState(() => {
              return { Monsters: filteredMonsters };
            });
          }}
        />
        {this.state.Monsters.map((monster) => {
          return (
            <div key={monster.id}>
              <h1>{monster.name}</h1>
            </div>
          );
        })}
      </div>
    );
  }
}

export default App;
