import styled from 'styled-components';

export const Wrapper = styled.div`
   width: 500px;
   font-size:22px;
   border: 1px;
`

export const Button = styled.button`
    padding: 12px 6px;
    font-size:12px;
    background-color: ${props => props.color || 'blue'}
`