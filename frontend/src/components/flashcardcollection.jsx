import { useState, useCallback } from "react";
import styled from 'styled-components';
import { StyledButton } from "../styles/styles";
import { Icon } from '@iconify/react';

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    bottom:        0; 
    right:       0; 
    position:   fixed; 
    padding: 30px;
`;

const PrimaryButton = styled(StyledButton)`
    background-color: #DB504A;
    color: white;
`;

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

const flashcards = [{question: 'test1', answer: 'test'},
                    {question: 'test2', answer: 'test'},
                    {question: 'test3', answer: 'test'}];
function FlashcardCollection(props){
    //const { flashcards, newDeck } = props;
    const { newDeck, deleteDeck, selectedDeck } = props;

    const [collection, setCollection] = useState(flashcards);
    const [edit, setEdit] = useState(newDeck);

    const onDeleteDeck = () => {
        setCollection();
        deleteDeck();
    }
    
    const addCard = () => {
        const temporaryCollection = [...collection];
        temporaryCollection.push({question: '', answer: ''});
        setCollection(temporaryCollection);
    }

    const updateQuestion = useCallback((newQuestion, i) => {
        const temporaryCollection = [...collection];
        temporaryCollection[i].question = newQuestion;
        setCollection(temporaryCollection);
    }, [collection])

    const updateAnswer = useCallback((newAnswer, i) => {
        const temporaryCollection = [...collection];
        temporaryCollection[i].answer = newAnswer;
        setCollection(temporaryCollection);
    }, [collection])

    const deleteCard = useCallback((removeCard) => {
        let temporaryCollection = [...collection];
        temporaryCollection = temporaryCollection.filter(card => card !== removeCard);
        setCollection(temporaryCollection);
    }, [collection])

    const saveDeck = () => {
        let temporaryCollection = [...collection];
        temporaryCollection = temporaryCollection.filter(card => card?.question !== '' && card?.answer !== '');
        setCollection(temporaryCollection);
        setEdit(false);

        // TODO: save backend
    }

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

    const getEditFlashcards = useCallback(() => {
        return (
            collection.map((card, i) => (
                <Flashcard>
                    <input 
                        type="text" 
                        key={i} 
                        value={card?.question} 
                        onChange={(e) => updateQuestion(e.target.value, i)} />
                    <input 
                        type="text" 
                        key={i} 
                        value={card?.answer} 
                        onChange={(e) => updateAnswer(e.target.value, i)} />
                    <Icon icon="mdi:trash-can-outline" color="#db504a" onClick={() => deleteCard(card)} />
                </Flashcard>
            ))
        )
    }, [collection, deleteCard, updateAnswer, updateQuestion])

    return edit ? (     
        <div>
            <Collection>
            {edit && collection && getEditFlashcards()}
            </Collection>
            <Footer>
                <StyledButton onClick={() => addCard()}>Add Card</StyledButton>
                <PrimaryButton onClick={() => saveDeck()}>Save</PrimaryButton>
            </Footer>
        </div>
    ) : (     
        <div>
            <Collection>
            <Title>{selectedDeck}</Title>
            {collection && getFlashcards()}
            </Collection>
            <Footer>
                <StyledButton onClick={() => setEdit(true)}>Edit</StyledButton>
                <StyledButton onClick={() => onDeleteDeck()}>Delete All</StyledButton>
                <PrimaryButton onClick={() => alert('review')}>Review</PrimaryButton>
            </Footer>
        </div>
    );
}


export default FlashcardCollection;