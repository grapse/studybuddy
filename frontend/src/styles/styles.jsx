import styled from 'styled-components';

export const StyledButton = styled.button`
    width: 200px;
    height: 50px;
    margin: 5px;
    background-color: #F1F1F1;
    align-self: center;
    font-weight: 500;
    border-radius: 15px;
    border: none;
`
export const Footer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    bottom:        0; 
    right:       0; 
    position:   fixed; 
    padding: 30px;
`;

export const PrimaryButton = styled(StyledButton)`
    background-color: #DB504A;
    color: white;
`;