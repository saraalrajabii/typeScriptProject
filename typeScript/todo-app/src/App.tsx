import { useState } from "react";
import { Counter } from "./components/Counter";
import { Heading } from "./components/Heading";
import { Section } from "./components/Section";
import { List } from "./components/List";

function App() {
  const [count, setCount] = useState(1);
  return (
    <>
      <Heading title={"Hello again "} />
      {/* <Section children={3} /> // i can not do it because it has children , should i put it inside tags */}
      <Section>Hi from section </Section>
      <Counter setCount={setCount}>count is {count}</Counter>
      <List items={["coffee", "tea"]}  render ={(item:string)=><span className="gold">{item}</span>}/>
    </>
  );
}

export default App;
