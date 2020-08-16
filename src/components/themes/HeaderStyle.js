import styled from "styled-components"

export default styled.div`
background: ${props => props.theme.headerBackground};
background-color: ${props => props.theme.headerBackground};
border-color: ${props => props.theme.borderColor}; 
color:${props => props.theme.text};
font-size:15px;
text-align:center;
padding-top: 20px;
padding-bottom: 20px;
position:relative;
border-radius: 25px;
left:auto; right:auto; margin:auto; 
box-shadow: 10px 5px ${props => props.theme.shadow};
`