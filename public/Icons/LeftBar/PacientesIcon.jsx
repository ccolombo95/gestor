import * as React from "react";

const PacientesIcon = (props) => (
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
      fill="#686868"
      d="M49.11 30.669a.913.913 0 0 1-1.279-.183 8.16 8.16 0 0 0-6.581-3.29.914.914 0 0 1 0-1.829 3.962 3.962 0 1 0-3.836-4.951.914.914 0 0 1-1.77-.457 5.788 5.788 0 1 1 9.127 6.037 10 10 0 0 1 4.523 3.393.915.915 0 0 1-.183 1.28M22.665 26.28a.914.914 0 0 0-.914-.914 3.96 3.96 0 1 1 3.836-4.953.914.914 0 0 0 1.77-.457 5.788 5.788 0 1 0-9.127 6.038 10 10 0 0 0-4.523 3.394.913.913 0 1 0 1.463 1.097 8.16 8.16 0 0 1 6.581-3.29.914.914 0 0 0 .914-.915"
    ></path>
    <path
      stroke="#306CFE"
      strokeLinecap="round"
      strokeWidth="2"
      d="M32 36a6 6 0 1 0 0-12 6 6 0 0 0 0 12ZM41 41.559c-.531-1.594-1.701-3.004-3.328-4.01C36.044 36.545 34.05 36 32 36s-4.046.544-5.672 1.55c-1.625 1.005-2.797 2.415-3.328 4.009"
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

export default PacientesIcon;
