import React from "react";

//Tip#4a: props add property to function
const MultiComponent = (props) => {
    const a = 150;

//Tip#5: Destructuing at 41:00

  return <>
  <h2>This is multiComponent Example</h2>
  <h4>My name is {props.name}</h4>
  <h4>I have {props.text}</h4>
  <div>{a}</div>
  <MultiSmallComponent />
  </>;
};
const MultiSmallComponent = () => <h4>MultiSmallComponent</h4>;
const MultiSmallComponent2 = () => <h4>MultiSmallComponent</h4>;

//Tip#3c: you can export ont the spot as well
export const MultiSmallComponent3 = () => <h4>MultiSmallComponent</h4>;

export default MultiComponent;
//Tip#3a: to export other components, add is {}

export { MultiSmallComponent, MultiSmallComponent2 };

