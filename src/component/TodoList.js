import React from "react";
import Todo from "./Todo";
export default function TodoList({ todoList, onCBtnClick }) {
    return (
        <>
            {todoList.map((todo) => (<Todo todo={todo} onCBtnClick={onCBtnClick} />))}

        </>
    );
}