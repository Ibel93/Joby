import React from 'react';
import './Cards.css';
import CardItem from './CardItem';

function Cards({jobs}) {
  var ads = jobs.map((el) => {
    return ( <CardItem
      src='images/img-3.jpg'
      text='Set Sail in the Atlantic Ocean visiting Uncharted Waters'
      label={el.title}
      ad={el}
      path='/jobb'
    />)
  })
  return (
    <div className='cards' id="jobs">
      <h1>Check out these EPIC Destinations!</h1>
      <div class="container-fluid">
        <div id="wrraper" class="row">
            {ads}
        </div>
      </div>
    </div>
  );
}

export default Cards;
