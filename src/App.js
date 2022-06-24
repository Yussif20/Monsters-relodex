import { Component } from "react";
import logo from "./logo.svg";
import "./App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Monsters: [],
      searchField: "",
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
    const filteredMonsters = this.state.Monsters.filter((monster) => {
      return monster.name.toLowerCase().includes(this.state.searchField);
    });
    return (
      <div className="App">
        <input
          className="search-box"
          placeholder="search monsters"
          type="search"
          onChange={(event) => {
            const searchField = event.target.value.toLowerCase();
            this.setState(() => {
              return { searchField };
            });
          }}
        />
        {filteredMonsters.map((monster) => {
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
