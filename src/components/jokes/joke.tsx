import React from "react";

interface JokeProps {
    joke:string;
};

const Joke: React.FC<JokeProps> = ({ joke }) => {
    return (<p className="joke">{`${joke}`}</p>);
};

export default Joke;