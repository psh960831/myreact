import React from 'react';
import "./Main.css";
import Searchbar from './SearchBar';


const Main = () => {
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
                    <div>
                    <Searchbar searchItems={searchItems}/>
                    <Searchbar searchItems={["apple", "banana", "watermelon", "melon"]}/>
                    </div>
                </div>
            </div>
        </main>
    );
};
export default Main;
