import logo from "./logo.svg";
import "./App.css";
import { render } from "@testing-library/react";
import { useState } from "react";

export default function App() {
  return (
    <div>
      <h1>Hello World</h1>
      <Component />
      <SecondComponent />
      <ThirdComponent />
      <FourthComponent />
      <ListComponent />
      <ListRandomComponent />
      <ListRandomComponent2 />
      <DynamicInputComponent />
    </div>
  );
}
const DynamicInputComponent = () => {
  const [list, setList] = useState([]);

  const [tweetInput, setTweetInput] = useState("");

  const readAndUpdateTweet = (e) => setTweetInput(e.target.value);

  const postTheTweet = () => {
    setList([tweetInput, ...list]);
    setTweetInput("");
  };

  return (
    <div>
      <h2>Tweets</h2>
      <div>
        <input
          type="text"
          value={tweetInput}
          onChange={(e) => readAndUpdateTweet(e)}
          placeholder="type your tweet..."
        />
        <input
          type="button"
          value="Tweet here"
          onClick={() => postTheTweet()}
        />
      </div>

      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
const ListRandomComponent2 = () => {
  const [list, setList] = useState(["Aneesh", "Ram"]);
  const addNewItem = () => {
    setList([Math.random(), ...list]);
  };
  return (
    <div>
      <h1>ListRandomComponent2</h1>
      <div>
        <input
          type="button"
          value="New Element Added"
          onClick={() => addNewItem()}
        />
      </div>
      {list.map((item, index) => (
        <div key={index} className="colourful">
          {item}
        </div>
      ))}
    </div>
  );
};
const ListRandomComponent = () => {
  const [list, setList] = useState([1, Math.random()]);
  const updateList = () => {
    const newList = [...list];
    newList.unshift(Math.random());
    setList(newList);
  };
  return (
    <div>
      <h1>List Random Component</h1>
      <div>
        <input
          type="button"
          value="New element added"
          onClick={() => updateList()}
        />
      </div>
      {list.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
};
const ListComponent = () => {
  const [counter] = useState(10);
  const [userName] = useState("Aneesh");
  const [list] = useState(["Ram", "Ravi", "Raj", "Rakesh"]);
  return (
    <div>
      <h2>List</h2>
      <h3>{counter}</h3>
      <h3>{userName}</h3>
      {list.map((item, index) => (
        <h3 key={index}>{item}</h3>
      ))}
    </div>
  );
};
function FourthComponent() {
  const [counter] = useState(10);
  const [userName] = useState("Aneesh");

  return (
    <div>
      <h1>Fourth Component</h1>
      <div>Counter{counter}</div>
      <div>UserName {userName}</div>
    </div>
  );
}
function ThirdComponent() {
  let localCounter = 10;
  let [counter, setCounter] = useState(10);

  const updateCounter = () => {
    localCounter = localCounter + 1;
    setCounter(counter + 1);
  };
  return (
    <div>
      <h1>Use of UseState making Dynamic</h1>
      <input type="button" value="updateCounter" onClick={updateCounter} />
      <input
        type="button"
        value="updateCounter1"
        onClick={() => updateCounter()}
      />
      <div>React NOt Aware-{localCounter}</div>
      <div>React Aware -{counter}</div>
    </div>
  );
}
function SecondComponent() {
  const localCounter = 10;
  const [counter] = useState(10);
  return (
    <div>
      <h1>use of useState</h1>
      <div>React Not Aware - {localCounter}</div>
      <div>React Aware - {counter}</div>
    </div>
  );
}
const Component = () => {
  return (
    <div>
      <h1>React Basics</h1>
      <div>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Eum, minus!
        Fuga corrupti maxime exercitationem quis.
      </div>
    </div>
  );
};
