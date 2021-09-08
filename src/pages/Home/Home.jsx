import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Loader from "react-loader-spinner";
import Header from "../../components/Header/Header";
import CharacterCard from "../../components/CharacterCard";

import * as DataActions from "../../store/modules/data/actions";

export default function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(DataActions.loadDataRequest());
  }, [dispatch]);

  const { dataCharacters, dataHouses, isLoading } = useSelector(
    (state) => state.data
  );

  return (
    <>
      <Header />
      {isLoading ? (
        <span
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "450px",
          }}
        >
          <Loader type="TailSpin" color="#002045" height={170} width={170} />
        </span>
      ) : (
        <>
          <section className="search">
            <div className="housesWrapper">
              {dataHouses.map((house) => (
                <div
                  className="house"
                  key={house._id}
                  onClick={() =>
                    dispatch(DataActions.getCharacterByHouse(house.name))
                  }
                >
                  <img
                    className="houseImage"
                    src={house.logoURL}
                    alt={house.name}
                  />
                  <p>{house.name}</p>
                </div>
              ))}
            </div>
          </section>
          <CharacterCard data={dataCharacters} />
        </>
      )}
    </>
  );
}
