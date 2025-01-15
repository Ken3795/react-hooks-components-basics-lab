import React from "react";
import ExampleComponent from "./ExampleComponent";
import TestComponent from "./TestComponent"; // Import the TestComponent

function App() {
  return (
    <div className="App">
      {/* Display "Now" in the h1 */}
      <h1>Now</h1>
      <p className="App-intro">
        In React apps, we write JSX - it looks like HTML, and uses a lot of HTML
        syntax. JSX lets us include JavaScript functions right along with the HTML,
        and also allows us to add in components, which are separate, self-contained
        chunks of JSX.
      </p>
      {/* Ensure a single ExampleComponent */}
      <ExampleComponent />
      {/* Add TestComponent */}
      <TestComponent />
    </div>
  );
}

export default App;
