/** @format */

import React from 'react';
import ReactDOM from 'react-dom';
import Money from './assets/images/money.png';
import Question from './assets/images/question-mark.png';
import Hundred from './assets/images/hundred.png';
import './styles.css';

function App() {
  return (
    <div className='App'>
      <div className='Parent'>
        <div className='TopContent'>
          <img src={Money} className='Emoji' alt='Money' />
          <div className='TopText'>Upto 5% Cashback </div>
          <img src={Question} className='Emoji Question' alt='Money' />
        </div>
        <div className='MiddleContent'>
          <div className='From'>from</div>
          <div className='PriceTag'>£139</div>
          <div className='Dropdown'>
            <div className='DropdownPlaceholder'>Select a date</div>
            <div className='TriangleContainer'>
              <div className='DropdownTriangle' />
            </div>
          </div>
          <div className='Button'>
            <div className='ButtonText'>CHECK AVAILABILITY</div>
          </div>
        </div>
        <div className='BottomContent'>
          <img src={Hundred} className='Emoji' alt='Money' />
          <div className='BottomText'>BEST PRICE GUARANTEED</div>
        </div>
      </div>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
