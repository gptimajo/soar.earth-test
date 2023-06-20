import React from "react";
import Button from "react-bootstrap/Button";

interface JokeRefresherProps {
  label: string;
  onClick: () => void;
}

const JokeRefresher: React.FC<JokeRefresherProps> = ({ label, onClick }) => {
  return <p className="controls"><Button onClick={(e) => onClick()}>{label}</Button></p>;
};

export default JokeRefresher;
