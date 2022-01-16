import { useState, useCallback } from "react";
import styled from 'styled-components';
import { StyledButton, Footer } from "../styles/styles";
import { Button } from 'react-bootstrap';
import ReviewView from "../views/ReviewView";

export const PrimaryButton = styled(Button)`
    width: 200px;
    height: 50px;
    padding: 11px;
    align-self: center;
    align-items: center;
    font-weight: 500 !important;;
    border-radius: 15px;
    border: none;
    background-color: #DB504A !important;
    color: white !important;
`

const Flashcard = styled.div`
    width: 80%; 
    height: 100px;
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
    justify-content: center;
    padding: 10px; 
    overflow-y: auto;
`;

const Question = styled.div`
    font-weight: 500;
    padding: 20px;
`;

const Answer = styled.div`
    color: #DB504A;
    font-weight: 500;
    padding: 20px;
`;

const Title = styled.div`
    color: #DB504A;
    font-weight: 500;
    font-size: 30px;
    align-self: center;
`;

const ReviewContent = styled.div`
    display: flex;
    flex-direction: column;
    size: 200%;
    background-color: white;
    width:      100%;
    height:     100%; 
    z-index:    10;
    top:        0; 
    left:       0; 
    position:   fixed; 
`;

function FlashcardCollection(props){
    const { deleteDeck, selectedDeck, editDeck, flashcardCollection } = props;

    const [collection, setCollection] = useState(flashcardCollection);
    const [review, setReview] = useState(false);

    const onDeleteDeck = useCallback(() => {
        setCollection();
        deleteDeck();
    }, [deleteDeck])

    const getFlashcards = useCallback(() => {
        return (
            collection.map((card, i) => (
                <Flashcard key={i}>
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
                <PrimaryButton disabled={!collection} onClick={() => setReview(true)}>Review</PrimaryButton>
            </Footer>
            {review &&
                <ReviewContent>
                    <ReviewView flashcardCollection={collection}/>
                    <Footer>
                        <PrimaryButton onClick={() => setReview(false)}>Done</PrimaryButton>
                    </Footer>
                </ReviewContent>
            }
        </div>
    );
}


export default FlashcardCollection;