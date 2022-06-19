import styled, { keyframes } from 'styled-components';

export const TestButton = styled.button`
    background: green;
    width: fit-content;
    border-radius: 5px;
    border: none;
    cursor: pointer;

    &:hover {
        background: blue;
        transition: 0.2s;
    }

    margin-bottom: 30px;
`

export const TextInside = styled.text`
    font-size: 1 em;
    color: palevioletred;
`

export const BodyContainerDiv = styled.div`
    margin: 100px;
`

export const AlertContainerDiv = styled.div`
    width: 800px;
    height: fit-content;
    background: papayawhip;
    margin: auto;
    border-left: 5px solid red;   
    box-sizing: border-box
`

export const FirstLineAlert = styled.div`
    padding: 10px 18px;
    display: flex;
    gap: 15px;
`

export const SecondLineAlert = styled.div`
    padding-left: 56px;
    padding-top: 5px;
    padding-bottom: 10px;
`

export const CarouselDiv = styled.div`
    width: 100%;
    height: fit-content;   
    display: flex; 
    justify-content: center;
    margin: -20px;
    position: relative;
`

const fade = keyframes`
    from {opacity: .4} 
    to {opacity: 1}
`

type CarouselDotProps = {
    display: string
}

export const CarouselDot = styled.span.attrs((props: CarouselDotProps) => ({
    display: props.display
}))`
    cursor: pointer;
    height: 10px;
    width: 10px;
    margin: 0 5px;
    background-color: ${props => props.display === "true"? "black": "#bbb"};
    border-radius: 50%;
    animation-name: ${fade};
    animation-duration: 5s;

    &:hover{
        background-color: #717171;
    }

    &:active{
        background-color: black;
    }
`

export const SlideShowContainerDiv = styled.div`
    max-width: 1000px;
    position: relative;
    margin: auto;  
`

type SlideImageProps = {
    display: string
}

export const SlideImage = styled.img.attrs((props: SlideImageProps) => ({
    display: props.display
}))`
    width: 100%;
    display: ${props => props.display === 'true'? "inline-block": "none"};
    animation-name: ${fade};
    animation-duration: 5s;  
`