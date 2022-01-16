import { useState, useCallback, useEffect } from "react";
import styled from 'styled-components';
import { StyledButton } from "../styles/styles";
import FlashcardCollection from "../components/FlashcardCollection";
import EditFlashCardCollection from "../components/EditFlashcardCollection";
import PlusButton from "../components/plusButton";

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

const MainView = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    padding-top: 30px;
`;

function FlashcardView(props){
    const [deckList, setDeckList] = useState();
    const [selectedDeck, setSelectedDeck] = useState();
    const [collection, setCollection] = useState(); // contains flashcards for selectedDeck
    const [selectedCollection, setSelectedCollection] = useState();
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        async function fetchAPI() {
            let collectionres = await fetch('http://localhost:8000/api/flashcards/?format=json');       
            collectionres = await collectionres.json();
            setCollection(collectionres);
            let deckres = await fetch('http://localhost:8000/api/deck/?format=json');       
            deckres = await deckres.json();
            setDeckList(deckres);
        }
        fetchAPI();
    }, [])

    const toggleDeck = useCallback((name) => {
        let temporaryCollection = [...collection];
        temporaryCollection = temporaryCollection.filter(card => card.deck === name);
        setSelectedCollection(temporaryCollection);
        setSelectedDeck(name);
        setEdit(false);
    }, [collection])

    const addDeck = useCallback(() => {
        setCollection([{question: '', answer: ''}]);
        setEdit(true);
    }, [])

    const deleteDeck = useCallback(() => {
        const deletedDeck = selectedDeck;
        let newDeck = deckList.filter(deck => deck.name !== deletedDeck);
        setDeckList(newDeck);
        setSelectedDeck();
        setSelectedCollection();

        const deleteUrl = `https://401-todo-api.azurewebsites.net/api/deck
        /${deletedDeck}/?format=api`;
        fetch(deleteUrl, {method: 'DELETE'});
    }, [selectedDeck, deckList])

    const toggleEdit = useCallback(() => {
        setEdit(!edit);
    }, [edit])

    const getDeckList = useCallback(() => {
        return (
            deckList?.map((deck, i) => (
                <DeckToggle
                key={i}
                active={selectedDeck === deck.name}
                onClick={() => toggleDeck(deck.name)}
                >
                {deck.name}
                </DeckToggle>
            ))
        )
    }, [deckList, selectedDeck, toggleDeck])

    return (     
        <FlashcardContent>
            <Sidebar>
            {getDeckList()}
            <PlusButton bottom={50} left={100} iconName='plus' onClickButton={addDeck}></PlusButton>
            </Sidebar>
            <MainView>
                {selectedDeck && !edit && <FlashcardCollection editDeck={toggleEdit} deleteDeck={deleteDeck} selectedDeck={selectedDeck} flashcardCollection={selectedCollection}/>}
                {edit && <EditFlashCardCollection editDeck={toggleEdit} selectedDeck={selectedDeck} flashcardCollection={selectedCollection}/>}
            </MainView>
        </FlashcardContent>
    );
}

export default FlashcardView;