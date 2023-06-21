import React from "react";
import Stack from "react-bootstrap/Stack";

import JokeLoading from "./loading";
import Joke from "./joke";

import "./jokes.scss";

interface JokesProps {
    isLoading: boolean;
    jokes: Array<{}>;
    error: string;
}

const Jokes: React.FC<JokesProps> = ({ jokes, isLoading, error }) => {
    let renderedJokes: any;
    
    if (!isLoading) {
        if (error !== "") {
            renderedJokes = <p className="error">{error}</p>;
        } else {
            renderedJokes = jokes.map((jokeText, k) => {
                return typeof jokeText === "string" && jokeText !== '' ? <Joke key={k} joke={jokeText} /> : <span key={k}></span>;
            });
        }
    } else {
        renderedJokes = <JokeLoading />;
    }

    return (
        <Stack className="jokes" gap={3}>
            {renderedJokes}
        </Stack>
    );
};

export default Jokes;
