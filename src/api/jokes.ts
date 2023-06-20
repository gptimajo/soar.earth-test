import axios from "axios";

interface JokeInterface {
  id: number;
  category: string;
  joke: string;
} 

type GetJokesReponse = { status: number; data: any };

export type JokeType = {
  id: number;
  category: string;
  joke: string;
};

export type JokeTypeError = { error: string }; 

export type GetJokesType = JokeType[] | JokeTypeError;    

export const getJokes = async (): Promise<GetJokesType> => {
  try {
    const getJokesResponse: GetJokesReponse = await axios.get("https://v2.jokeapi.dev/joke/Programming?type=single&amount=3");

    const { status, data } = getJokesResponse;

    switch (status) {
      case 200: {
        if (data.error) {
          throw new Error(data?.message);
        } else {
          return data.jokes.map((jokeItem: JokeInterface) => {
            const { id, category, joke } = jokeItem;

            return { id, category, joke };
          });
        }
      }
      default:
        throw getJokesResponse;
    }
  } catch (e) {
    console.error(e);
    return { error: "Something went wrong!" };
  }
};
