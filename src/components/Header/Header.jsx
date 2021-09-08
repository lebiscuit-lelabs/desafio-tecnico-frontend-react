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
      setSearchValue("");
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
              <span className="favorite">{favSize}</span>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
