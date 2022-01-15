import React, { useState } from 'react';
import './Form.css'

function Form() {
    const [countMessage, setCountMessage] = useState(0);
    const [historyMessages, setHistoryMessages] = useState([]);
    
    const pullHistoryMessages = (historyMessages) => {
        const message = {
            name: "", 
            text: "",
            dataTime: new Date
        }

        historyMessages.push(message);
        setCountMessage(historyMessages.length);
        setHistoryMessages([...historyMessages]);
    }

    return(
        <div className="Form__box">
            <div className = "Box__title">
                Сообщения {countMessage}
            </div>
            <div>
                тут будут сообщения
            </div>
            <div className="Box__send">
                <label>
                    Name
                    <input type="text"/>
                </label>    
                <label>
                    Message
                    <textarea />
                </label>
                <button 
                onClick={
                        () => pullHistoryMessages(historyMessages)
                    }>
                    Add
                </button>
            </div>
        </div>
    );
}

export default Form;