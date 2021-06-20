import React from 'react';
import './emojiPicker.scss';

const Emoji = ({recentEmoji, setRecentEmoji, symbol, type, setInputValue, inputValue, resizeTextArea}) => (
    <span
        className="emoji"
        role="img"
        onClick={()=> {
            resizeTextArea();
            if(type === 'all'){
                let isNotInRecent = true;

                //Проверяем, чтобы нашего emoji не было в недавних:
                recentEmoji.map((emoji, index) =>{
                    if(emoji === symbol){
                        isNotInRecent = false;
                        console.log(recentEmoji);
                        console.log(recentEmoji.splice(index, 1));
                        //Если эмодзи уже есть в использованных, то добавляем его просто в начало недавних
                        setRecentEmoji([symbol, ...recentEmoji.slice(0, index), ...recentEmoji.slice(index, 25)]);
                    }
                });

                if(isNotInRecent) {
                    //Если уже есть 25 элементов, то добавляем новый в начало и убираем один из конца
                    if (recentEmoji.length === 25) {
                        setRecentEmoji([symbol, ...recentEmoji.slice(0, 24)])
                    }else {
                        setRecentEmoji([symbol, ...recentEmoji]);
                    }
                }


            }

            //Добавляем эмодзи в инпут
            setInputValue(inputValue + symbol);
        }}
    >
        {symbol}
    </span>
);
export default Emoji;