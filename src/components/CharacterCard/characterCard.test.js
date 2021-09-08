import { render, screen } from "@testing-library/react";
import React from "react";
import CharacterCard from "./index";

const characters = [
  {
    titles: [
      "Warden",
      "King in the North",
      "Lord Commander of the Night's Watch",
    ],
    _id: "5cc0757c04e71a0010b86bfb",
    name: "Jon Snow",
    slug: "Jon_Snow",
    image:
      "https://vignette.wikia.nocookie.net/gameofthrones/images/d/d3/JonSnowSeason8HB.jpg/revision/latest/scale-to-width-down/333?cb=20190401173347",
    gender: "male",
    alive: true,
    house: "House Stark",
    first_seen: 'Winter is Coming"',
    actor: "Kit Harington",
    age: {
      name: "Jon Snow",
      age: 33,
    },
    id: "5cc0757c04e71a0010b86bfb",
  },
];

describe("CharacterCard component", () => {
  it("checking that the character name appears correctly", () => {
    render(<CharacterCard data={characters} />);
    expect(screen.getByText(/jon snow/i)).toBeInTheDocument();
  });
});
