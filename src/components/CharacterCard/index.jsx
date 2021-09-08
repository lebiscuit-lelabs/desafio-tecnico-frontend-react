import React from "react";
import { FaHeartbeat } from "react-icons/fa";
import { GiDeathSkull } from "react-icons/gi";
import { FiHeart } from "react-icons/fi";
import { CgDetailsMore } from "react-icons/cg";
import { BiFemaleSign, BiMaleSign } from "react-icons/bi";
import { Alert as Modal } from "react-st-modal";

import * as FavoriteActions from "../../store/modules/favorite/actions";
import { useDispatch } from "react-redux";

export default function CharacterCard({ data }) {
  const dispatch = useDispatch();

  function handleFavoriteCharacter(name) {
    dispatch(FavoriteActions.addToFavoriteRequest(name));
  }

  return (
    <section className="character">
      <div className="container">
        {data.length > 0 ? (
          data.map((character) => (
            <div key={character.id} className="characterCard">
              <div className="imageWrapper">
                <img src={character.image} alt={character.name} />
              </div>
              <h3>{character.name}</h3>
              <div className="characterInfo">
                {character.gender === "male" ? (
                  <BiMaleSign size={20} color="#2264d1" />
                ) : (
                  <BiFemaleSign size={20} color="#6e22d1" />
                )}
                <button
                  onClick={async () => {
                    await Modal(
                      character.titles.map((item) => (
                        <ul style={{ listStyleType: "none" }}>
                          <li>{item}</li>
                        </ul>
                      )),
                      `${character.name} Titles`
                    );
                  }}
                >
                  <CgDetailsMore size={16} color="#2264d1" />
                  <span style={{ marginLeft: "5px" }}>TITLES</span>
                </button>
              </div>

              <div className="characterInfo">
                {character.alive ? (
                  <FaHeartbeat size={20} color="#AF1F24" />
                ) : (
                  <GiDeathSkull size={20} color="#282828" />
                )}
                <button onClick={() => handleFavoriteCharacter(character.name)}>
                  <FiHeart size={16} color="#2264d1" />
                  <span style={{ marginLeft: "5px" }}>ADD</span>
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="emptyContainer">
            <p style={{ fontWeight: "bold" }}>Sorry, No results found.</p>
            <p>
              Try entering your favorite character's name correctly. example:
              Jon Snow.
            </p>
          </div>
        )}
      </div>
    </section>
  );
}
