import { useState, useCallback } from "react";
import styled from 'styled-components';
import PlusButton from "../components/plusButton";

const ButtonDiv = styled.div`
    align-self: center;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
`;

const ButtonGroup = styled.div`
    align-self: center;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: row;
`;

const Flashcard = styled.div`
    width: 80%; 
    height: 500px;
    background-color: white;
    box-sizing: border-box;
    filter: drop-shadow(2px 4px 5px #CCCCCC);
    border-radius: 10px;
    align-self: center;
    margin: 10px;
    display: flex;
    align-items: center;
    justify-content: center;
`;

const Collection = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px; 
    overflow-y: auto;
`;

const Display = styled.div`
    color: ${props => props.isAnswer ? '#DB504A' : 'black'};
    font-weight: 500;
    font-size: 30px;
`;

function ReviewView(props){
    const { flashcardCollection } = props;

    const [collection, setCollection] = useState(flashcardCollection);
    const [currentCard, setCurrentCard] = useState(collection[0]); 
    const [displayText, setDisplayText] = useState(collection[0]?.question);
    const [answer, setAnswer] = useState(false);

    const onNext = useCallback(() => {
        if (answer && collection.length > 1) {
            let newCollection = collection.filter(card => card !== currentCard);
            let newCard = newCollection[Math.floor(Math.random()*collection.length)];

            setCollection(newCollection);
            setCurrentCard(newCard);
            setAnswer(false);
            setDisplayText(newCard?.question);
        } else {
            setDisplayText(currentCard?.answer);
            setAnswer(true);
        }
    }, [answer, currentCard, collection])

    return (     
        <div>
            <Collection>
                <Flashcard>
                    <Display isAnswer={answer}>{displayText}</Display>
                </Flashcard>
                <ButtonGroup>
                    <ButtonDiv>
                        <PlusButton iconName='chevron-right' onClickButton={onNext}/>
                    </ButtonDiv>
                </ButtonGroup>
            </Collection>
        </div>
    );
}

export default ReviewView;