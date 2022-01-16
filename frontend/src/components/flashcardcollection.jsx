import { useState, useCallback } from "react";
import styled from 'styled-components';
import { StyledButton, Footer, PrimaryButton } from "../styles/styles";

const Flashcard = styled.div`
    width: 80%; 
    height: 100px;
    background-color: white;
    box-sizing: border-box;
    filter: drop-shadow(2px 4px 5px #CCCCCC);
    border-radius: 10px;
    align-self: center;
    margin: 10px;
    display: flex:
    flex-direction: row;
`;

const Collection = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    padding: 10px; 
    overflow-y: auto;
`;

const Question = styled.div`
    font-weight: 500;
    width: 50%;
    padding: 5px;
    margin: 0px;
`;

const Answer = styled.div`
    color: #DB504A;
    font-weight: 500;
    width: 50%;
    padding: 5px;
    margin: 0px;
`;

const Title = styled.div`
    color: #DB504A;
    font-weight: 500;
    font-size: 30px;
    align-self: center;
`;

function FlashcardCollection(props){
    const { deleteDeck, selectedDeck, editDeck, flashcardCollection } = props;

    const [collection, setCollection] = useState(flashcardCollection);

    const onDeleteDeck = useCallback(() => {
        setCollection();
        deleteDeck();
    }, [deleteDeck])

    const getFlashcards = useCallback(() => {
        return (
            collection.map((card, i) => (
                <Flashcard>
                    <Question>{card?.question}</Question>
                    <Answer>{card?.answer}</Answer>
                </Flashcard>
            ))
        )
    }, [collection])

    return (     
        <div>
            <Collection>
            <Title>{selectedDeck}</Title>
            {collection && getFlashcards()}
            </Collection>
            <Footer>
                <StyledButton onClick={() => editDeck()}>Edit</StyledButton>
                <StyledButton onClick={() => onDeleteDeck()}>Delete All</StyledButton>
                <PrimaryButton onClick={() => alert('review')}>Review</PrimaryButton>
            </Footer>
        </div>
    );
}


export default FlashcardCollection;