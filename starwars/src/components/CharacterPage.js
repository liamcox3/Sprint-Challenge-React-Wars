import React, { useState, useEffect } from "react";
import axios from "axios";
import Character from "./Character";
import { Container, Row } from "reactstrap";

let CharacterPage = () => {
    let [characterData, setCharacterData] = useState([]);

    useEffect(() => {
        axios
            .get("https://rickandmortyapi.com/api/character/")
            .then((response) => {
                const data = response.data.results;

                console.log(data);

                setCharacterData(data);
            })
            .catch((error) => {
                console.log("Sorry no nasa picture", error);
            });
    }, []);

    return (
        <Container>
            <Row>
                {characterData.map((p, index) => (
                    <Character key={index} characterData={p} />
                ))}
            </Row>
        </Container>
    );
};

export default CharacterPage;
