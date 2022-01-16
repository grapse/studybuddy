import { useState } from "react";
import styled from 'styled-components';
import { StyledButton } from "../styles/styles";
import FlashcardCollection from "../components/flashcardcollection";

const FlashcardContent = styled.div`
    display: flex;
    flex-direction: row;
`;

const DeckToggle = styled(StyledButton)`
    background-color: #F1F1F1;

    ${({ active }) => active &&`
    background-color: #DB504A;
    color: #FFFFFF;
    transition: .3s ease-in-out;
    `}
`;

const Sidebar = styled.div`
    width: 300px;
    height: 100%;
    overflow: auto;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
`;

const AddButton = styled(StyledButton)`
    width: 50px;
    border-radius: 50%;
`;

const MainView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
`;

const deckTitles = ['Comp Sci', 'Bio', 'Math'];
function FlashcardView(props){
    const [selectedDeck, setSelectedDeck] = useState();
    const [newDeck, setNewDeck] = useState(false);

    const toggleDeck = (title) => {
        setSelectedDeck(title);
        setNewDeck(false);
        //TODO: get all flashcards for deck backend
    }

    const addDeck = () => {
        setNewDeck(true);
        //TODO: add cards here
    }

    const deleteDeck = () => {
        setSelectedDeck();
        alert('delete deck')
        //TODO: delete deck backend
    }

    return (     
        <FlashcardContent>
            <Sidebar>
            {deckTitles.map(title => (
                <DeckToggle
                key={title}
                active={selectedDeck === title}
                onClick={() => toggleDeck(title)}
                >
                {title}
                </DeckToggle>
            ))}
            <AddButton onClick={() => addDeck()}>+</AddButton>
            </Sidebar>
            <MainView>
                <FlashcardCollection newDeck={newDeck} deleteDeck={deleteDeck}/>
            </MainView>
        </FlashcardContent>
    );
}


export default FlashcardView;