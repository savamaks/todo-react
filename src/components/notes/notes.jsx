import React from "react";
import { useEffect } from "react";
import style from "./style.module.scss";


export const arrText = [];

export function Note(props) {
    const arrText = props.arrText;
    const deleteNoteArr = props.deleteNoteArr;
    const buttonAlertModal= props.buttonAlertModal

    const buttonDelete = (attrParent) => {
        deleteArrElement(attrParent);
    };


    const deleteArrElement = (attrParent) => {
        let element = arrText.indexOf(arrText.find((el) => el.date === +attrParent));
        arrText.splice(element, 1);
        let arrJson = JSON.stringify(arrText);
        localStorage.setItem("notes", arrJson);
    };


    const todo = arrText.map((num) => (
        <div className={style.note} attr={`${num.date.toString()}`} key={num.date.toString()}>
            <p className={style.note__text}> {num.text}</p>
            <button
                className={style.note__button}
                onClick={buttonAlertModal}
            >
                {"\u00D7"}
            </button>
        </div>
    ));

    return <>{todo}</>;
}
