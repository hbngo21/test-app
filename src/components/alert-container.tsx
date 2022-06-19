import { AlertContainerDiv, FirstLineAlert, SecondLineAlert, TextInside } from "../styles/all";
import { GrCircleInformation } from "react-icons/gr";

export type AlertProps = {
    title?: string,
    content: string
}

export function AlertContainer({title = "", content}: AlertProps){
    return (
        <AlertContainerDiv>   
            <FirstLineAlert>
                <GrCircleInformation size={24}/>
                <TextInside>
                    {title}
                </TextInside>
            </FirstLineAlert>     
            <SecondLineAlert>
                <TextInside>
                    {content}
                </TextInside>
            </SecondLineAlert>        
        </AlertContainerDiv>
    )
}