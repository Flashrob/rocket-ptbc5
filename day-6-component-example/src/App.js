import "./App.css";
import { useState } from "react";

const withRedColor = (Component) => {
  const ComponentWithRedColor = (props) => {
    const [color, setColor] = useState("green");

    setTimeout(() => {
      setColor("red");
    }, 5000);

    return <Component style={{ color }} {...props} />;
  };

  return ComponentWithRedColor;
};

const HelloWorld = ({ ...props }) => {
  return <h1 {...props}>Hello World</h1>;
};

const GoodBye = ({ ...props }) => {
  return <h1 {...props}>Good Bye</h1>;
};

const RedHelloWorld = withRedColor(HelloWorld);
const RedGoodBye = withRedColor(GoodBye);

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <RedHelloWorld name="Yuji" />
        <RedGoodBye banana="tasty" />
      </header>
    </div>
  );
}

export default App;
