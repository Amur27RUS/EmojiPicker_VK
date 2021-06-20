import React, {useState} from 'react';
import "./App.css"
import EmojiPicker from "./components/EmojiPicker";

const App = () => {

    const [isEmojiMenuOpened, setIsEmojiMenuOpened] = useState(false);
    const [inputValue, setInputValue] = useState('');


    //Меняем размер textArea в зависимости от введённого текста
    function resizeTextArea(){

        if(document.getElementById('textArea').scrollHeight < 140){
            document.getElementById('textArea').style.height = 'auto';
            document.getElementById('textArea').style.height = `${document.getElementById('textArea').scrollHeight - 36}px`;
            if(document.getElementById('textArea').scrollHeight > 50){
                document.getElementById('textArea').style.height = `${document.getElementById('textArea').scrollHeight - 18}px`;
            }
            document.getElementById('textArea').style.overflowY = 'hidden';
        }else{
            document.getElementById('textArea').style.overflowY = 'scroll';
        }
    }

    function handleInputValue(e){
        setInputValue(e.target.value);
    }

    //Если пользователь нажал на стрелку вверх, то открывается меню с эмодзи
    function handleUpKeyPress(e){
        if(e.key === 'ArrowUp'){
            setIsEmojiMenuOpened(!isEmojiMenuOpened)
        }
    }

    return (
        <div className="app">
            <a href={'https://vk.com/amur27rus'} target="_blank" rel="noreferrer"  style={{position: "absolute", top: 0, left: 10}}>Клюев Андрей</a>

            <EmojiPicker isEmojiMenuOpened={isEmojiMenuOpened} setInputValue={setInputValue} inputValue={inputValue} resizeTextArea={resizeTextArea}/>
            <div className={`${isEmojiMenuOpened ? 'arrow' : 'emojiPick-disabled'}`}/>
            <div className={`${isEmojiMenuOpened ? 'arrow2' : 'emojiPick-disabled'}`}/>
            <textarea id={'textArea'} className={'inputWithEmoji'} onKeyUp={resizeTextArea}
                      onKeyDownCapture={resizeTextArea}
                      onKeyPress={resizeTextArea} onKeyDown={handleUpKeyPress}
                      value={inputValue}
                   onChange={handleInputValue} placeholder={'Ваше сообщение'}/>
            <svg className={'emojiBtn'} onClick={()=>setIsEmojiMenuOpened(!isEmojiMenuOpened)} width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M6.43778 12.2972C6.82341 11.9887 7.38497 12.0489 7.69674 12.4303C7.69855 12.4324 7.70334 12.4379 7.71111 12.4464C7.72801 12.4649 7.7587 12.4972 7.80306 12.5387C7.89213 12.6222 8.03375 12.741 8.22701 12.8618C8.60996 13.1012 9.19692 13.35 10 13.35C10.8031 13.35 11.3901 13.1012 11.773 12.8618C11.9663 12.741 12.1079 12.6222 12.197 12.5387C12.2413 12.4972 12.272 12.4649 12.2889 12.4464L12.3008 12.4331L12.3033 12.4303C12.6151 12.0488 13.1766 11.9887 13.5622 12.2972C13.9504 12.6077 14.0133 13.1741 13.7028 13.5622L13 13C13.7028 13.5622 13.7028 13.5622 13.7028 13.5622L13.7017 13.5636L13.7004 13.5651L13.6977 13.5685L13.691 13.5767L13.6729 13.5983C13.6587 13.6149 13.6402 13.6361 13.6174 13.661C13.5718 13.7109 13.5087 13.7763 13.4281 13.8519C13.2671 14.0028 13.0338 14.1965 12.727 14.3882C12.11 14.7739 11.1969 15.15 10 15.15C8.8031 15.15 7.89006 14.7739 7.27301 14.3882C6.96627 14.1965 6.73289 14.0028 6.57196 13.8519C6.49132 13.7763 6.42825 13.7109 6.38266 13.661C6.35984 13.6361 6.34133 13.6149 6.32711 13.5983L6.30898 13.5767L6.30231 13.5685L6.29957 13.5651L6.29835 13.5636C6.29835 13.5636 6.29723 13.5622 7.00001 13L6.29723 13.5622C5.98672 13.1741 6.04965 12.6077 6.43778 12.2972Z" fill="#C5D0DB"/>
                <path d="M8.25 8.25C8.25 8.94036 7.69036 9.5 7 9.5C6.30964 9.5 5.75 8.94036 5.75 8.25C5.75 7.55964 6.30964 7 7 7C7.69036 7 8.25 7.55964 8.25 8.25Z" fill="#C5D0DB"/>
                <path d="M13 9.5C13.6904 9.5 14.25 8.94036 14.25 8.25C14.25 7.55964 13.6904 7 13 7C12.3096 7 11.75 7.55964 11.75 8.25C11.75 8.94036 12.3096 9.5 13 9.5Z" fill="#C5D0DB"/>
                <path fillRule="evenodd" clipRule="evenodd" d="M10 0.100006C4.53239 0.100006 0.100006 4.53239 0.100006 10C0.100006 15.4676 4.53239 19.9 10 19.9C15.4676 19.9 19.9 15.4676 19.9 10C19.9 4.53239 15.4676 0.100006 10 0.100006ZM1.90001 10C1.90001 5.5265 5.5265 1.90001 10 1.90001C14.4735 1.90001 18.1 5.5265 18.1 10C18.1 14.4735 14.4735 18.1 10 18.1C5.5265 18.1 1.90001 14.4735 1.90001 10Z" fill="#C5D0DB"/>
            </svg>

        </div>
    );
}

export default App;