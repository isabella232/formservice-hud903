import './home.scss';
import React from 'react';
export const Home = () => {
  return (
    <div id="home">
      <ul className="usa-card-group" style={{ paddingLeft: '0px' }}>
        <li className="usa--card">
          <div className="usa-card__container">
            <header className="usa-card__header">
              <h3 className="usa-card__heading">Should I fill out this form?</h3>
            </header>
            <div className="usa-card__body">
              <p>You should complete this form if you experienced <strong>housing discrimination </strong>because of your:  <br />
              1) race; 2) color; 3) religion; 4) national origin; 5) sex; 6) disability; or 7) familial status.
              <br /><br />
              NOTE: These characteristics are konwn as<strong> protetcted classes </strong>under federal law.
              <br />
              </p>

              <div className="usa-accordion">
                <h2 className="usa-accordion__heading">
                  <button className="usa-accordion__button"
                    aria-expanded="false"
                    aria-controls="a1">
                    What is housing discrimination?
              </button>
                </h2>
                <div id="a1" className="usa-accordion__content usa-prose">
                  <p>Congress shall make no law respecting an establishment of religion, or prohibiting the free exercise thereof;
                  or abridging the freedom of speech, or of the press; or the right of the people peaceably to assemble,
                      and to petition the Government for a redress of grievances.</p>
                </div>
                <h2 className="usa-accordion__heading">
                  <button className="usa-accordion__button"
                    aria-expanded="false"
                    aria-controls="a2">
                    What are the protected protetcted classes?
              </button>
                </h2>
                <div id="a2" className="usa-accordion__content usa-prose">
                  <p>The Fair Housing Act also requires certain new multifamily dwellings to be accessible for persons with disabilities.</p>
                  <ul className="custome">
                    <li >Your name,address phone number</li>
                    <li>A second point of contact</li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="usa-card__container mt-3">
              <header className="usa-card__header">
                <h3 className="usa-card__heading">What will I need to provide?</h3>
              </header>
              <div className="usa-card__body">
                <strong>Contact information</strong>
                <ul className="custome">
                  <li>Your name,address phone number</li>
                  <li>A second point of contact</li>
                </ul>
              </div>
            </div>
            <div className="usa-card__container mt-2">
              <header className="usa-card__header">
                <h3 className="usa-card__heading">Details about what happened</h3>
              </header>
              <div className="usa-card__body">
                <ul className="custome">
                  <li> <strong>Why:</strong> Whyyou were discriminated against</li>
                  <li> <strong>Who:</strong> Who discriminated against you</li>
                  <li> <strong>Where:</strong> Where the discrimination happened</li>
                  <li> <strong>When:</strong> The date the discrimination happened</li>
                  <li> <strong>What:</strong> A written summary of what happened</li>
                </ul>
              </div>
            </div>
            <div className="usa-card__container mt-2">
              <header className="usa-card__header">
                <h3 className="usa-card__heading">How long will it take?</h3>
              </header>
              <div className="usa-card__body">
                <p>It will take you <strong>15-20 minutes</strong> to fill out the form. The form won&apos;t time out until you close your Internet browser.</p>
              </div>
            </div>

            <div className="usa-card__footer mt-2">
              <button className="usa-button">Start my complaint</button>
            </div>
          </div>
        </li>
      </ul>
    </div>
  );
};
export default Home;
