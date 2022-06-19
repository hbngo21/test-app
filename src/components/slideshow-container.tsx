import { useEffect, useRef, useState } from "react";
import { SlideImage, SlideShowContainerDiv, CarouselDiv, CarouselDot } from "../styles/all";

type SlideShowProps = {
    imageList: string[],
}

export function SlideShowContainer({imageList}: SlideShowProps){
    const list = [];
    const [selected, setSelected] = useState(0);
    for (let i = 0; i < imageList.length; i++)
        list.push(i)

    useEffect(() => {
        console.log(selected, imageList.length);
        setTimeout(
            () =>
            setSelected((selected) =>
                selected === imageList.length - 1 ? 0 : selected + 1
            ),
            5000
        );
        
    }, [selected]);

    return (
        <>
        <SlideShowContainerDiv>
            {imageList.map((_, idx: number) => (
                <SlideImage id={'image-'+idx} display={selected === idx? "true": "false"} src={imageList[idx]}></SlideImage>
            ))}
        </SlideShowContainerDiv>
            <CarouselDiv>
            {imageList.map((_, idx: number) => (
                <CarouselDot id={'casousel-dot-'+idx} display={selected === idx? "true": "false"} onClick={() => setSelected(idx)}>
                </CarouselDot>
            ))}
            </CarouselDiv>
        </>
    )
}