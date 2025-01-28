import * as React from "react";

const CalendarIcon = (props) => (
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
    <rect
      width="27.4"
      height="27.4"
      x="17.8"
      y="15.8"
      fill="#fff"
      stroke="#306CFE"
      strokeWidth="1.6"
      rx="1.2"
    ></rect>
    <path
      fill="#306CFE"
      d="M43.688 15.18h-3.961v-1.524a.914.914 0 1 0-1.829 0v1.524H25.102v-1.524a.914.914 0 1 0-1.829 0v1.524h-3.96a2.133 2.133 0 0 0-2.133 2.133v24.375a2.133 2.133 0 0 0 2.133 2.132h24.375a2.133 2.133 0 0 0 2.132-2.133V17.314a2.133 2.133 0 0 0-2.133-2.133m-24.376 1.828h3.961v1.523a.914.914 0 1 0 1.829 0v-1.523h12.796v1.523a.914.914 0 1 0 1.829 0v-1.523h3.96a.304.304 0 0 1 .305.305v5.18H19.008v-5.18a.304.304 0 0 1 .305-.305m24.376 24.984H19.312a.304.304 0 0 1-.304-.304V24.32h24.984v17.368a.304.304 0 0 1-.304.304M33.023 30.11a1.524 1.524 0 1 1-3.047 0 1.524 1.524 0 0 1 3.047 0m6.704 0a1.524 1.524 0 1 1-3.048 0 1.524 1.524 0 0 1 3.048 0M26.32 36.203a1.523 1.523 0 1 1-3.046 0 1.523 1.523 0 0 1 3.046 0m6.703 0a1.523 1.523 0 1 1-3.046 0 1.523 1.523 0 0 1 3.046 0m6.704 0a1.523 1.523 0 1 1-3.047 0 1.523 1.523 0 0 1 3.047 0"
    ></path>
    <path
      fill="#fff"
      stroke="#787878"
      strokeWidth="1.6"
      d="M18.217 17.417a1.2 1.2 0 0 1 1.2-1.2h24.166a1.2 1.2 0 0 1 1.2 1.2v8.033H18.217z"
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

export default CalendarIcon;