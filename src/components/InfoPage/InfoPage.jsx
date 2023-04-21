import React from 'react';

// This is one of our simplest components
// It doesn't have local state
// It doesn't dispatch any redux actions or display any part of redux state
// or even care what the redux state is

function InfoPage() {
  return (
    <div className="container">
<p>Water data brought to by Minneapolis Park and Recreation Board.<br/>
All data is gathered once a week, while Minneapolis beaches are open, and tested for safty.<br/>

For more information about Minneapolis water testing details go to: https://www.minneapolisparks.org/park-care-improvements/water_resources/lake_water_resources</p>    
</div>
  );
}

export default InfoPage;
