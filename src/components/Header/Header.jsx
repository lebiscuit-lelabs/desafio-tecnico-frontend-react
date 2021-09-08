import React, { useState } from "react";
import { FiHeart } from "react-icons/fi";
import { GrSearch as SearchButton } from "react-icons/gr";
import { useDispatch, useSelector } from "react-redux";
import * as DataActions from "../../store/modules/data/actions";

export default function Header() {
  const [searchValue, setSearchValue] = useState("");

  const dispatch = useDispatch();

  function handleSubmit(e) {
    e.preventDefault();
    if (searchValue) {
      dispatch(DataActions.getCharacterByName(searchValue));
    }
  }

  const favSize = useSelector((state) => state.favorite.length);

  return (
    <header className="menuBg">
      <div className="menu">
        <div className="menuLogo">
          <a href="/">leLabs</a>
        </div>
        <form className="searchForm" onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="Search for characters or select a house."
            value={searchValue}
            onChange={(e) => setSearchValue(e.target.value)}
          />
          <SearchButton size={20} onClick={(e) => handleSubmit(e)} />
        </form>
        <nav className="menuNav">
          <ul>
            <li style={{ position: "relative", cursor: "not-allowed" }}>
              <FiHeart size={28} color="#fff" />
              <span
                style={{
                  background: "#2185D5",
                  width: "22px",
                  height: "22px",

                  borderRadius: "25%",
                  fontWeight: "700",
                  fontSize: "14px",
                  letterSpacing: ".0025em",
                  color: "#fff",
                  position: "absolute",
                  top: "-13px",
                  right: "-15px",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  border: "1px solid #3A4750",
                }}
              >
                {favSize}
              </span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
