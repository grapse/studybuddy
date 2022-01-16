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

const decks = ['Comp Sci', 'Bio', 'Math'];
const flashcards = [{question: 'test1', answer: 'test'},
                    {question: 'test2', answer: 'test'},
                    {question: 'test3', answer: 'test'}];
function FlashcardView(props){
    const [deckList, setDeckList] = useState()
    const [selectedDeck, setSelectedDeck] = useState();
    const [collection, setCollection] = useState(flashcards); // contains flashcards for selectedDeck
    const [edit, setEdit] = useState(false);

    useEffect(() => {
        async function fetchAPI() {
            let response = await fetch('http://localhost:8000/api/flashcards/?format=api');       
            response = await response.json()
            console.log(response)
            setCollection(response)
        }
        fetchAPI();
    }, [])

    const toggleDeck = useCallback((title) => {
        setSelectedDeck(title);
        setEdit(false);

        //TODO: get all flashcards for deck backend
    }, [])

    const addDeck = useCallback(() => {
        setCollection([{question: '', answer: ''}]);
        setEdit(true);
    }, [])

    const deleteDeck = useCallback(() => {
        setSelectedDeck();
        //TODO: filter collection and delete backend
        // delete collection and remove from deck titles
    }, [])

    const toggleEdit = useCallback(() => {
        setEdit(!edit);
    }, [edit])

    return (     
        <FlashcardContent>
            <Sidebar>
            {deckList?.map(title => (
                <DeckToggle
                key={title}
                active={selectedDeck === title}
                onClick={() => toggleDeck(title)}
                >
                {title}
                </DeckToggle>
            ))}
            <PlusButton bottom={50} left={100} iconName='plus' onClickButton={addDeck}></PlusButton>
            </Sidebar>
            <MainView>
                {!edit && selectedDeck && <FlashcardCollection editDeck={toggleEdit} deleteDeck={deleteDeck} selectedDeck={selectedDeck} flashcardCollection={collection}/>}
                {edit && <EditFlashCardCollection editDeck={toggleEdit} selectedDeck={selectedDeck} flashcardCollection={collection}/>}
            </MainView>
        </FlashcardContent>
    );
}

export default FlashcardView;