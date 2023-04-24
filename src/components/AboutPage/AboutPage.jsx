import React from 'react';

// This is one of our simplest components
// It doesn't have local state,
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is'

function AboutPage() {
  return (
    <div className="container">
      <div>
        
        <p>As Minneasotans, we know how to make the most of every season, and this app helps you enjoy our
          beautiful Minneapolis lakes without any worry!</p>
        <p>Weather you are a local or a visitor, this app will provide you
          with up-to-date information on the status of our most popular lake beaches. You will be able to get out there and enjoy one of
          Minneastoa's favorite summer activities without a care.</p>
        <p>Happy Swimming!</p>
        <p>How to Use the App:
          <ul>
            <li>Blue means 'Swim!'</li>
            <li>Green Alge means 'Getting a little dicey . . .'</li>
            <li>Red/Brown means 'Nope, don't do it'</li>
            <li>Clicking on the Name of the lake gives you the current water data.</li>
            <li>Signing-in will let you see the lakes you most care about, weather that be because they are closest to you or </li>
          </ul>
        </p>

      </div>
    </div>
  );
}

export default AboutPage;
