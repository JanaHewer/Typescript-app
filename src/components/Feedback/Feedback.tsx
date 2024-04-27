import { useState } from "react";
import { FeedbackProps } from "./types";
import Button from "components/Button/Button";
import { FeedbackContainer, FeedbackResultContainer, LikeDislikeContainer, Result } from "./styles";


function Feedback({like =0, dislike=0, addLike, addDislike, resetResults}: FeedbackProps) {
  return (
    <FeedbackContainer>
      <FeedbackResultContainer>
        <LikeDislikeContainer>
          <Button name="Like" onButtonClick={addLike} />
          <Result>{like}</Result>
        </LikeDislikeContainer>
        <LikeDislikeContainer>
          <Button name="Dislike" onButtonClick={addDislike} />
          < Result>{dislike}</Result>
        </LikeDislikeContainer>
      </FeedbackResultContainer>
      <Button name="Reset Results" onButtonClick={resetResults} />
    </FeedbackContainer>
  );
}

export default Feedback;
