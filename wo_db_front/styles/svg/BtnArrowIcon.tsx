import React from 'react';
type PropsType = {
  type: 'right' | 'left';
};
function BtnArrowIcon({ type }: PropsType) {
  return (
    <>
      {type === 'right' && (
        <svg xmlns='http://www.w3.org/2000/svg' width='80' height='80' viewBox='0 0 43 80' fill='none'>
          <path d='M2 2L40 40L2 78' stroke='rgba(206, 206, 206, 0.6)' strokeWidth='4' />
        </svg>
      )}
      {type === 'left' && (
        <svg xmlns='http://www.w3.org/2000/svg' width='43' height='80' viewBox='0 0 43 80' fill='none'>
          <path d='M41 78L3 40L41 2' stroke='rgba(206, 206, 206, 0.6)' strokeWidth='4' />
        </svg>
      )}
    </>
  );
}

export default BtnArrowIcon;
