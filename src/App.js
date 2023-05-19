import "./App.scss";
import React, { useState, useEffect } from "react";
import { Note, arrText } from "./components/notes/notes";
import Modal from "./components/modalWindow/Modal";

export default function App() {
    const [text, setText] = useState("");
    const [countText, setCountText] = useState(0);
    const [isModal, setModal] = useState(false);

    let date;

    const deleteNoteArr = () => {
        setCountText(countText - 1);
    };
    const onChange = (e) => {
        e.stopPropagation();
        setText(e.target.value);
    };
    document.addEventListener("DOMContentLoaded", () => {
        console.log("ok");
    });
    const onClick = (e) => {
        e.preventDefault();
        if (text === "") return;
        date = Date.now();
        arrText.push({ text: text, date: date });
        let arrJson = JSON.stringify(arrText);
        localStorage.setItem("notes", arrJson);
        setText("");
    };

    const openModalWindow = () => setModal(true);
    const closeModalWindow = () => setModal(false);
    return (
        <div className="body">
            <header className="header">
                <h1 className="header__title">заметки</h1>
                <form>
                    <input onChange={onChange} value={text} placeholder="text.." />
                    <button onClick={onClick}>click</button>
                </form>
            </header>
            <main className="main">
            
                <Note arrText={arrText} 
                deleteNoteArr={deleteNoteArr} 
                buttonAlertModal={<button onClick={openModalWindow}>Click Here</button>} 
                />
                <>
                    <Modal
                        isVisible={isModal}
                        content={<p>Удалить заметку?</p>}
                        footer={
                            <>
                                <button onClick={closeModalWindow}>ОK</button>
                                <button onClick={closeModalWindow}>Отмена</button>
                            </>
                        }
                        onClose={closeModalWindow}
                    />
                </>
            </main>
        </div>
    );
}
