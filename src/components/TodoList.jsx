import "./TodoList.css"

function TodoList(){ 
    const taskOne = "Wash Clothes"
    return(
        <ul>
            <li className="checkbox__item">
                <input type="checkbox" id="checkbox1"/>
                <label htmlFor="checkbox1">{`${taskOne}`}</label>
            </li>
            <li>
                <input type="checkbox" id="checkbox2"/>
                <label htmlFor="checkbox2">Get Grocries</label>
            </li>
            <li>
                <input type="checkbox" id="checkbox3"/>
                <label htmlFor="checkbox3">Make Matcha</label>
            </li>
        </ul>
    );
}

export default TodoList;