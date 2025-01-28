import * as React from "react";

const HomeIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="64"
    height="64"
    fill="none"
    viewBox="0 0 64 64"
  >
    <g filter="url(#filter0_d_0_1)">
      <path
        fill="#fff"
        d="M32 56c15.464 0 28-12.536 28-28S47.464 0 32 0 4 12.536 4 28s12.536 28 28 28"
      ></path>
    </g>
    <path
      stroke="#306CFE"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M42.875 23.25v16.738a1.25 1.25 0 0 1-1.349 1.137h-6.288V29.913h-7.476v11.212h-6.288a1.25 1.25 0 0 1-1.35-1.137V23.25"
    ></path>
    <path
      stroke="#787878"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M46.125 26.5 31.5 11.875 16.875 26.5"
    ></path>
    <defs>
      <filter
        id="filter0_d_0_1"
        width="64"
        height="64"
        x="0"
        y="0"
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
          result="effect1_dropShadow_0_1"
        ></feBlend>
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_0_1"
          result="shape"
        ></feBlend>
      </filter>
    </defs>
  </svg>
);

export default HomeIcon;