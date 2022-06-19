import { SlideShowContainer } from "../../components/slideshow-container";
import TestButtonComponent from "../../components/test-button";
import { BodyContainerDiv } from "../../styles/all";

const imageList = ["https://cf.shopee.vn/file/2cb1ea49f910a28b4d1b1ac2bba4110b",
                    "https://cf.shopee.vn/file/3d29566227988b209610230c80184c1a",
                    "https://cf.shopee.vn/file/2cb1ea49f910a28b4d1b1ac2bba4110b",
                    "https://cf.shopee.vn/file/3d29566227988b209610230c80184c1a",
                    "https://cf.shopee.vn/file/2cb1ea49f910a28b4d1b1ac2bba4110b"]

function HomePage(){
    return (
        <BodyContainerDiv>
            <TestButtonComponent text="NTHB"/>
            <SlideShowContainer imageList={imageList}></SlideShowContainer>
        </BodyContainerDiv>
    );
}

export default HomePage;