import { AlertContainer } from "../../components/alert-container";
import { BodyContainerDiv } from "../../styles/all";

function DetailPage(){
    return (
        <BodyContainerDiv>
            <AlertContainer title="This is an alert notification!" content="Please tell me why ... Please tell me why ... Please tell me why ... Please tell me why ... This is an alert notification! This is an alert notification!" />
        </BodyContainerDiv>
    );
}

export default DetailPage;