import { Component } from "react";
import "./App.css";
import Books from "./components/Books";

class App extends Component {
  //state
  state = {
    books: [
      { bookName: "Gommatsara Jivakanda", writer: "Chakravarti" },
      { bookName: "Mokshamala", writer: "Rajchandra" },
      { bookName: "Philosophy of Scientific religion", writer: "Nandi" },
    ],
  };

  ChangeState = () => {
    this.setState({
      books: [
        { bookName: "Gommatsara Jivakanda", writer: "Chakravarti" },
        { bookName: "Jnanasara", writer: "Yashovijayaji Mahopadhyaya" },
        { bookName: "Philosophy of Scientific religion", writer: "Nandi" },
      ],
    });
  };
  render() {
    return (
      <div className="App">
        <h1>Book list</h1>
        <button onClick={this.ChangeState}>Change State</button>
        <Books
          bookName={this.state.books[0].bookName}
          writer={this.state.books[0].writer}
        />
        <Books
          bookName={this.state.books[1].bookName}
          writer={this.state.books[1].writer}
        />
        <Books
          bookName={this.state.books[2].bookName}
          writer={this.state.books[2].writer}
        />
      </div>
    );
  }
}

export default App;
