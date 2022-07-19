import "./TodoList.css"

function TodoList(){
    return(
        <ul>
            <li>
                <input type="checkbox" id="checkbox1"/>
                <label htmlFor="checkbox1">Wash Clothes</label>
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