import React from "react";
import Header from "../components/Header";
import Main from "../components/Main";
import "../styles/about.css";

function About() {
  return (
    <>
      <Header titleHandle="About" />
      <Main>
        <div className="about-container">
          <p className="info-text">
            This program is designed to take user inputs for overall budget as
            well as individual transactions. It will then take said transactions
            and categorize them so the user can see how much of their budget is
            currently used and what it has been spent on so far.
          </p>
          <p className="info-text">
            Code Authors:
            <ul>
              <li className="list-item">
                <p className="list-name">Matthew Davis</p>
                <p className="list-info">Created Insights Page</p>
              </li>
              <li className="list-item">
                <p className="list-name">Kostiantyn Karzhanov</p>
                <p className="list-info">
                  Created Custom Hooks, Context Pages, and Expenses Main Page
                </p>
              </li>
              <li className="list-item">
                <p className="list-name">Raymond Payne</p>
                <p className="list-info">Created Categories Page</p>
              </li>
              <li>
                <p className="list-name">Michael Sheridan</p>
                <p className="list-info">
                  Created About Page and overall styling
                </p>
              </li>
            </ul>
          </p>
        </div>
      </Main>
    </>
  );
}

{
  /* <li>Kostiantyn Karzhanov</li>
<li>Raymond Payne</li>
<li>Michael Sheridan</li> */
}
export default About;
