import React, {useState} from 'react';
import "./Main.css";
import Searchbar from './SearchBar';
import LoginPopup from "./LoginPopup";


const Main = () => {
    // useState를 사용하여 open상태를 변경한다. (open일때 true로 만들어 열리는 방식)
    const [modalOpen, setModalOpen] = useState(false);
    const openModal = () => {
        setModalOpen(true);
    };
    const closeModal = () => {
        setModalOpen(false);
    };

    const searchItems = [
        "desktop",
        "notebook",
        "smart phone",
        "clock",
        "chair",
        "iPad"
    ]

    return(
        <main className="home_content">
            <div className="intro">
                <div className="intro_info">
                    <div className="main_info">방탈출 어때?</div>
                    <div className="sub_info">방탈출 어딘지 찾아보자</div>
                    <button onClick={openModal}>로그인</button>
                    <LoginPopup open={modalOpen} close={closeModal} header="Modal heading">
                        // Modal.js 에 내용이 입력된다. 리액트 함수형 모달
                        팝업창입니다. 쉽게 만들 수 있어요. 같이 만들어봐요!
                    </LoginPopup>
                    <div>
                    <Searchbar searchItems={searchItems}/>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Main;
