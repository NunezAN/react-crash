import "./conditional.css";

function Conditional(props){
    let text = props.isLoading ? "loading..." : "Done"

    return(
        <div className={props.isLoading ? "loading" : "done"}>
            {text}
        </div>
    )
}

export default Conditional;