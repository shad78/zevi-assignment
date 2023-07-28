import React, { useState } from "react";
import "./HomeScreen.scss";
import { faker } from "@faker-js/faker";

export default function HomeScreen() {
  const [display, setDisplay] = useState(false);

  const randomName1 = faker.person.fullName();
  const randomName2 = faker.person.fullName();
  // const randomEmail = faker.internet.email();

  return (
    <div className="homescreen">
      <div className="contents">
        <input
          type="text"
          placeholder="Search"
          onClick={() => setDisplay(true)}
        />
        {display && (
          <div className="trend-items">{`${randomName1} ${randomName2}`}</div>
        )}
      </div>
    </div>
  );
}
