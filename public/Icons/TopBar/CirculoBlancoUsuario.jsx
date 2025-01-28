import * as React from "react";

const CirculoBlancoUsuario = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="44"
    height="44"
    fill="none"
    viewBox="0 0 44 44"
  >
    <g clipPath="url(#clip0_222_505)">
      <g filter="url(#filter0_d_222_505)">
        <path
          fill="#fff"
          d="M22 38.5c9.113 0 16.5-7.387 16.5-16.5S31.113 5.5 22 5.5 5.5 12.887 5.5 22 12.887 38.5 22 38.5"
        ></path>
      </g>
      <path
        stroke="#306CFE"
        strokeLinecap="round"
        strokeWidth="2"
        d="M22 23.833a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11ZM33 34.294c-.649-1.948-2.079-3.672-4.068-4.9C26.942 28.166 24.506 27.5 22 27.5s-4.945.666-6.932 1.894-3.419 2.952-4.068 4.9"
      ></path>
    </g>
    <defs>
      <clipPath id="clip0_222_505">
        <path fill="#fff" d="M0 0h44v44H0z"></path>
      </clipPath>
      <filter
        id="filter0_d_222_505"
        width="41"
        height="41"
        x="1.5"
        y="5.5"
        colorInterpolationFilters="sRGB"
        filterUnits="userSpaceOnUse"
      >
        <feFlood floodOpacity="0" result="BackgroundImageFix"></feFlood>
        <feColorMatrix
          in="SourceAlpha"
          result="hardAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
        ></feColorMatrix>
        <feOffset dy="4"></feOffset>
        <feGaussianBlur stdDeviation="2"></feGaussianBlur>
        <feComposite in2="hardAlpha" operator="out"></feComposite>
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"></feColorMatrix>
        <feBlend
          in2="BackgroundImageFix"
          result="effect1_dropShadow_222_505"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_222_505"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default CirculoBlancoUsuario;
