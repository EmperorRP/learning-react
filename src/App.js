import logo from "./logo.svg";
import "./App.css";
import Greet from "./components/Greet";
import Hello from "./components/Hello";
import Message from "./components/Message";
import Profile from "./components/Profile";
import Counter from "./components/Counter";
import Resume from "./components/Resume";
import FunctionEvent from "./components/FunctionEvent";
import ClassEvent from "./components/ClassEvent";
import FunctionalCounter from "./components/FunctionalCounter";
import ConditionalComponent from "./components/ConditionalComponent";

function App() {
  return (
    <div className="App">
      <ConditionalComponent></ConditionalComponent>
      {/* <FunctionalCounter /> */}

      {/* <Counter></Counter>
      <FunctionEvent></FunctionEvent>
      <ClassEvent></ClassEvent> */}

      {/* <Resume name="rahul"></Resume>
      <Profile name="rahul" lastname="pujari"></Profile> */}
      {/* <Counter /> */}

      {/* <Profile name="Rahul" />
      <Profile name="Nikil" />
      <Profile name="Joseph">
        <h6>
          This is a child component that will be called as a props.children in
          Profile.js
        </h6>
      </Profile>
      <Message messageContent="this is a message from props" messageCode="10" /> */}
      {/* <Hello />
      <Message /> */}
    </div>
  );
}

export default App;
