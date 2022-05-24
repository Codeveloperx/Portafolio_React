import styled from "styled-components";

export const H2 = styled.h2`
color: #659eff;
font-size: 30px;
font-family: sans-serif;
margin: 0;`

export const H1 = styled.h1`
letter-spacing: 5px;
font-family: sans-serif;
margin:0;
color: #659eff;`

export const Title_nombre = styled.h4`
color: #659effb5;
margin-bottom: 0;
font-family: sans-serif;`

export const P = styled.p`
color:#191919b8;
font-family: sans-serif;;
`
export const Subtitle = styled.p`
color:#191919;
font-family: sans-serif;
font-size: 18px;
font-weight: bold;
`
export const A = styled.a`
text-decoration :none;
`

export const Redes = styled.div`
display: flex;
gap: 1rem;
flex-wrap: wrap`

export const Grid = styled.div`
display: grid;
grid-template-columns: 15rem 1fr;
max-width: 75%;
margin:20px auto;
align-items:center;
gap: .5rem;`;

export const Grid_item = styled.div`
grid-row: 1/5;
display: flex;
flex-direction: column;
justify-content: flex-start;
align-items: center;
text-align: center;`;

export const Grid_item2 = styled.div`
    border: 2px solid #de9104;
    padding: 8px 8px 8px 15px;
`

export const Grid_item3 = styled.div`
    border: 2px solid #9c27b0;
    padding: 8px 8px 8px 15px;
`

export const Grid_item4 = styled.div`
    border: 2px solid #ffeb3b;
    padding: 8px 8px 8px 15px;
`
export const Grid_item5 = styled.div`
    border: 2px solid #673ab7;
    padding: 8px 8px 8px 15px;
`

export const Div_component = styled.div`
max-width; 50%;
background: blue`;


export const Img_avatar = styled.img`
    width:150px;
    height:150px;
    border-radius:150px;
    border:3px solid #659eff;
    padding: .2rem;`;
