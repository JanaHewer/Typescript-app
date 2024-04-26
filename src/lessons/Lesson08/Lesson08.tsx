import { 
  BoxComponent, 
  Lesson08Component,
  ButtonComponent,
  InfoBoxComponent
 } from "./styles";

function Lesson08() {

// 2 подход - inline styles
  // const styleObject = {
  //   fontSize: '42px',
  //   color: 'red'
  // }
const typeButton= true;
  return (
    <Lesson08Component>
        <BoxComponent>My first emotion block</BoxComponent>
        <ButtonComponent mainButton>Custom Button</ButtonComponent>
        <ButtonComponent mainButton={false}>Custom Button</ButtonComponent>
        <InfoBoxComponent>Info</InfoBoxComponent>
    {/* // 2. Metode: inline styles */}
      {/* <p style={{ fontSize: "32px", color: "blue" }}>Hello</p>
      <p style={styleObject}>Hello</p>
      <div style={styleObject}>Bye</div> */}
      </Lesson08Component>
  )

}
export default Lesson08;
