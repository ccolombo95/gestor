import * as React from "react";

const AgendaIcon = (props) => (
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
      d="M18.5 34h3m-3-12h3m-3 6h3M20 40V16a1.5 1.5 0 0 1 1.5-1.5H44a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1-1.5 1.5H21.5A1.5 1.5 0 0 1 20 40"
    ></path>
    <path
      stroke="#787878"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      d="M44 41.5h-4.5v-27H44a1.5 1.5 0 0 1 1.5 1.5v24a1.5 1.5 0 0 1-1.5 1.5"
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

export default AgendaIcon;
