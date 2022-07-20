import "./joke.css";

function getQuestion(props){
    if(props.jokeqa.question){
        return `${props.jokeqa.question}`;
    }
}

function Joke(props){
    console.log(props);
    return(
        <div>
            <div className="question">
            {getQuestion(props)}
            </div>
            <div className="answer">
            {props.jokeqa.answer}
            </div>
        </div>
    );
}

export default Joke;