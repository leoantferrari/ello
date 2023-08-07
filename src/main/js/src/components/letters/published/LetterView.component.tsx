import React from "react";
import {useLetterView} from "./LetterView.hooks";

const LetterView: React.FC = () => {
    const {letter} = useLetterView();

    return <div>
        {letter.title} <br/>{letter.message}
    </div>
}
export default LetterView;