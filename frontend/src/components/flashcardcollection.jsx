import { useState } from "react";
import styled from 'styled-components';
import { StyledButton } from "../styles/styles";

const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
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
    padding: 30px; 
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

const flashcards = [{question: 'test1', answer: 'test'},
                    {question: 'test2', answer: 'test'},
                    {question: 'test3', answer: 'test'}];
function FlashcardCollection(props){
    //const { flashcards, newDeck, onDeleteDeck, deckName } = props;
    const { newDeck, deleteDeck } = props;

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

    const updateQuestion = (newQuestion, i) => {
        const temporaryCollection = [...collection];
        temporaryCollection[i].question = newQuestion;
        setCollection(temporaryCollection);
    }

    const updateAnswer = (newAnswer, i) => {
        const temporaryCollection = [...collection];
        temporaryCollection[i].answer = newAnswer;
        setCollection(temporaryCollection);
    }

    const deleteCard = () => {
        // TODO: delete to collection here
    }

    const saveDeck = () => {
        const temporaryCollection = [...collection];
        Object.keys(temporaryCollection).forEach(k => (temporaryCollection[k].question === '' && temporaryCollection[k].answer === '') && delete temporaryCollection[k]);
        setCollection(temporaryCollection);
        setEdit(false);

        // TODO: save backend
    }

    return edit ? (     
        <div>
            <Collection>
            {collection && 
                collection.map((card, i) => (
                    <Flashcard>
                        <input type="text" key={i} value={card.question} onChange={(e) => updateQuestion(e.target.value, i)} />
                        <input type="text" key={i} value={card.answer} onChange={(e) => updateAnswer(e.target.value, i)} />
                    </Flashcard>
                ))}
            </Collection>
            <Footer>
                <StyledButton onClick={() => addCard()}>Add Card</StyledButton>
                <PrimaryButton onClick={() => saveDeck()}>Save</PrimaryButton>
            </Footer>
        </div>
    ) : (     
        <div>
            <Collection>
            {collection && 
                collection.map((card, i) => (
                    <Flashcard>
                        <Question>{card.question}</Question>
                        <Answer>{card.answer}</Answer>
                    </Flashcard>
                ))}
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