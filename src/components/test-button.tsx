import { useNavigate } from "react-router-dom";
import { TestButton, TextInside } from "../styles/all";

export type BtnProps = {
    text: string,
    link?: string
}

function TestButtonComponent({text, link="/alert"}: BtnProps){
    const navigate = useNavigate();
    return (
        <TestButton onClick={() => navigate(link)}>
            <TextInside>{text}</TextInside>
        </TestButton>
    );
}

export default TestButtonComponent;