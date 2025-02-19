import React from 'react';

const CheckMarkCircle = ({ strokeColor = "#9c1fd6", fillColor = "#ffffff", size = 24 }) => (
  <svg
    fill={fillColor}
    viewBox="0 0 24 24"
    xmlns="http://www.w3.org/2000/svg"
    aria-hidden="true"
    role="img"
    className="icon line-color"
    width={size}
    height={size}
  >
    <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
    <g
      id="SVGRepo_tracerCarrier"
      strokeLinecap="round"
      strokeLinejoin="round"
    ></g>
    <g id="SVGRepo_iconCarrier">
      <polyline
        id="secondary"
        points="21 5 12 14 8 10"
        style={{ fill: 'none', stroke: fillColor, strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}
      ></polyline>
      <path
        id="primary"
        d="M20.94,11A8.26,8.26,0,0,1,21,12a9,9,0,1,1-9-9,8.83,8.83,0,0,1,4,1"
        style={{ fill: 'none', stroke: strokeColor, strokeLinecap: 'round', strokeLinejoin: 'round', strokeWidth: 2 }}
      ></path>
    </g>
  </svg>
);

export default CheckMarkCircle;
