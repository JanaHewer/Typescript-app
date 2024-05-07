import Button from "components/Button/Button";
import { Homework09Wrapper, ResultWrapper, ResultsBlock } from "./styles";
import Input from "components/Input/Input";
import { ChangeEvent, useState } from "react";

//- Cоздайте компонент Homework09 в папке homeworks, в нем должно быть
//  2 компонента Input и компонент кнопки Button
//- Каждый из инпутов должен быть котролируемым компонентом и
//  контролироваться с помощью родительского состояния
//- При нажатии на кнопку значения из полей должны быть выведены на экран
//  в двух стилизованных блоках

function Homework09() {
  const [firstNote, setFirstNote] = useState<String>("");
  const [secondNote, setSecondNote] = useState<String>("");
  const [isShowResult, setIsShowResult] = useState<boolean>(false);

  const onFirstNoteChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setFirstNote(event.target.value);
  };
  const onSecondNoteChange = (event: ChangeEvent<HTMLInputElement>): void => {
    setSecondNote(event.target.value);
  };
  const onShowResult = () => {
    // setIsShowResult(true);
    setIsShowResult(!isShowResult);
  };
  return (
    <Homework09Wrapper>
      <Input
        placeholder="First note"
        onInputChange={onFirstNoteChange}
        name="firstNote"
        label="First note"
      />
      <Input
        placeholder="Second note"
        onInputChange={onSecondNoteChange}
        name="secondNote"
        label="Second note"
      />
      <Button name="Show nots" onButtonClick={onShowResult} />
      <ResultsBlock isShowResult={isShowResult}>
        <ResultWrapper>{firstNote}</ResultWrapper>
        <ResultWrapper>{secondNote}</ResultWrapper>
      </ResultsBlock>
    </Homework09Wrapper>
  );
}

export default Homework09;
