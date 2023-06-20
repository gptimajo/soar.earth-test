import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";

import "./app.scss";

import Jokes from "./components/jokes/jokes";
import JokeRefresher from "./components/jokes/refresher";

import { GetJokesType, getJokes as getJokesAPI } from "./api/jokes";

function App() {
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState("");
    const [jokes, setJokes] = useState([""]);

    const getJokes = async () => {
        setLoading(true);
        try {
            const jokesResponse: GetJokesType = await getJokesAPI();

            if (Array.isArray(jokesResponse)) {
                setJokes(jokesResponse.map(({ joke }) => joke));
            }
        } catch (e) {
            setError("Ooops... something went wrong!");
        }
        setLoading(false);
    };

    useEffect(() => {
        getJokes();
    }, []);

    return (
        <div className="app">
            <Container>
                <main>
                    <Jokes isLoading={loading} jokes={jokes} error={error} />
                    <JokeRefresher label="Laugh More..." onClick={() => getJokes()} />
                </main>
            </Container>
        </div>
    );
}

export default App;
