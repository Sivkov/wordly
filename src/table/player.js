import React from 'react';
import mp1 from '../music/1.mp3'
import mp2 from '../music/2.mp3'


const Player = ({ wordArray }) => {
  let source= Math.random()  > 0.5 ? mp1 : mp2
  return (
    <div>
      {wordArray.GAME === 'WIN' && (
        <audio src={source} autoPlay loop></audio>
      )}
    </div>
  );
};

export default Player;

