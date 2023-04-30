import React from 'react';


function AboutPage() {
  return (
    <div className="container">
      <div className="aboutBox">

        <p>As Minnesotans, we know how to make the most of every season, and this app helps you enjoy our
          beautiful Minneapolis lakes without any worry!<br />
          <br />
          Whether you are a local or a visitor, this app will provide you
          with up-to-date information on the status of our most popular lake beaches.<br />
          <br />
          Happy Swimming!</p>

        <h4>How to Use the App:</h4>
        <ul className="aboutList">
          <li>Blue means 'Swim!'</li>
          <li>Green Algae means 'Start watching the data . . .'</li>
          <li>Red/Brown means 'Beach Closed'</li>
          <br />
          <li>Click on the Name of the lake to see the current water data.</li>
          <br />
          <li>Signing-in will let you select the lakes you most care about, whether that be because they are closest to you or the ones you love to visit!</li>
        </ul>

        <p>Water data provided by Minneapolis Park and Recreation Board.<br />
          <br />For more information about Minneapolis Water Testing Details go to:<br />
          <a href='https://www.minneapolisparks.org/park-care-improvements/water_resources/lake_water_resources'>https://www.minneapolisparks.org/
            park-care-improvements/water_resources
            /lake_water_resources</a><br />
        </p>

      </div>

      <div className="aboutBox2">
        <h4>Project Made with:</h4>
        <ul>
          <li>React.js</li>
          <li>Redux.js</li>
          <li>Node.js</li>
          <li>Express</li>
          <li>Postgres</li>
          <li>Material UI</li>
          <li>CSS</li>
        </ul>

        <a href="https://github.com/sam4class">https://github.com/sam4class</a>
        <h4>Thank you to:</h4>
        <ul>
          <li>Aquamarine Cohort!!</li>
          <li>-you are all so wonderful</li>
          <br />
          <li>Prime Instructors:</li>
          <li>-Emma, Key & Kris</li>
          <br />
          <li>Family and Friends <i className='fa fa-heart'></i></li>
        </ul>

      </div>
    </div>
  );
}

export default AboutPage;
