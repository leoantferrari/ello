import React from 'react';
import {useLetterOverview} from "./LetterOverview.hooks";
import {LetterRow} from "./LetterRow";
import {Button} from "react-bootstrap";
import {TbReload} from "react-icons/tb";
import {PageLoader} from "../../account/PageLoader";

// This component display all events as a grid of cards. the grid contains 2 items per row
const LetterOverviewComponent: React.FC = () => {

    const {isLoading, myLetters, setIsForceReload} = useLetterOverview();

    if (isLoading) {
        return <PageLoader/>
    }

    return (
        <div>
            <LetterRow title={'Your Letters'} letters={myLetters} emptyText={'You have no hosted events'}
                       disappearOnEmpty={true}/>
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <div/>
                <Button onClick={() => setIsForceReload(true)} variant="outline-primary">
                    <TbReload size={20} style={{marginRight: "5px", marginBottom: "3px"}}/>Reload Page
                </Button>
            </div>
        </div>
    );
}
export default LetterOverviewComponent;