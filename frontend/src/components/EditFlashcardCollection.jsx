import { useState, useCallback } from "react";
import styled from 'styled-components';
import { StyledButton, Footer, PrimaryButton } from "../styles/styles";
import { Icon } from '@iconify/react';

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
    overflow-y: auto;
`;

const Title = styled.div`
    color: #DB504A;
    font-weight: 500;
    font-size: 30px;
    align-self: center;
    margin-bottom: 30px;
`;

function EditFlashCardCollection(props){
    const { selectedDeck, editDeck, flashcardCollection} = props;

    const [collectionTitle, setCollectionTitle] = useState(selectedDeck);
    const [collection, setCollection] = useState(flashcardCollection);
    
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

    const saveDeck = useCallback(() => {
        let temporaryCollection = [...collection];
        temporaryCollection = temporaryCollection.filter(card => card?.question !== '' && card?.answer !== '');
        setCollection(temporaryCollection);
        editDeck();

        // TODO: save backend
    }, [collection, editDeck])

    const updateTitle = useCallback((title) => {
        setCollectionTitle(title);
    }, [])

    const getEditFlashcards = useCallback(() => {
        return (
            collection.map((card, i) => (
                <Flashcard>
                    <input 
                        type="text" 
                        key={i} 
                        value={card?.question} 
                        placeholder='question...'
                        onChange={(e) => updateQuestion(e.target.value, i)} />
                    <input 
                        type="text" 
                        key={i} 
                        value={card?.answer} 
                        placeholder='answer...'
                        onChange={(e) => updateAnswer(e.target.value, i)} />
                    <Icon icon="mdi:trash-can-outline" color="#db504a" onClick={() => deleteCard(card)} />
                </Flashcard>
            ))
        )
    }, [collection, deleteCard, updateAnswer, updateQuestion])

    return(     
        <div>
            <input 
                type="text" 
                value={collectionTitle} 
                placeholder='Title'
                onChange={(e) => updateTitle(e.target.value)} />
            <Collection>
            {collection && getEditFlashcards()}
            </Collection>
            <Footer>
                <StyledButton onClick={() => addCard()}>Add Card</StyledButton>
                <PrimaryButton onClick={() => saveDeck()}>Save</PrimaryButton>
            </Footer>
        </div>
    );
}


export default EditFlashCardCollection;