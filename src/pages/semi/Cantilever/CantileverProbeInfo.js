// CantileverProbeInfo.jsx

import React from "react";
import styled, { keyframes } from "styled-components";

const SVG = styled.svg`
  position: absolute;
  width: 100%;
  max-width: 900px;
  top: 45%;
  left: 50%;
  transform: translate(-49%, -24%);
  @media (max-width: 1023px) {
    width: 95%;
  }
  @media (max-width: 500px) {
    width: 90%;
  }
`;
const Line = styled.line`
  stroke: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
  transition: all 0.4s ease-in-out;
  stroke-width: 0.7px;
`;

const Polygon = styled.polygon`
  fill: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
  transition: all 0.4s ease-in-out;
`;

const CantileverProbeInfo = ({ tableHeader }) => (
  <SVG
    id="uuid-aa7b1e4c-4c18-4ebc-88c4-9c87db319c3b"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 487.3 117.66"
  >
    <defs>
      <style>
        {`
          .uuid-a58f8c11-3974-4c45-a0cd-985a07aa3852 {
            fill: #0269b7;
            stroke-width: 0px;
          }

          .uuid-9498fec2-b7b7-478b-8485-9ef74b8e7115 {
            stroke: #a6a6a7;
          }

          .uuid-9498fec2-b7b7-478b-8485-9ef74b8e7115,
          .uuid-95799921-8ea9-4335-a933-e000e894abb8 {
            fill: none;
            stroke-miterlimit: 10;
            stroke-width: 0.5px;
          }

          .uuid-cf4ed379-e7d9-45cd-af78-f9d7e6e4bef7 {
            letter-spacing: -0.01em;
          }

          .uuid-6fb9b1bf-2fef-4f81-a9b0-00e573b322c6 {
            letter-spacing: -0.1em;
          }

          .uuid-9f10f33a-3dfa-4d34-9aee-00fc89358c46 {
            fill: #000;
            font-family: 'Pretendard-Light-KSCpc-EUC-H', 'Pretendard';
            font-size: 8px;
            font-weight: 350;
          }

          .uuid-95799921-8ea9-4335-a933-e000e894abb8 {
            stroke: #0269b7;
          }

          .uuid-c882057e-46af-443a-bc42-68e6ab8277a5 {
            letter-spacing: -0.03em;
          }

          .uuid-8cd5c435-a361-4c47-9d49-dfc6efc8bff5 {
            letter-spacing: -0.02em;
          }

          .uuid-9f922dd5-4ade-48be-92e4-171de48047e3 {
            letter-spacing: -0.09em;
          }

          .uuid-dcf53101-759f-429e-81f6-9901d940e17e {
            letter-spacing: -0.03em;
          }
        `}
      </style>
    </defs>
    <g id="uuid-473e8873-a50b-4e82-8154-501c50d08f4b" data-name="레이어 1">
      <Line
        className="uuid-9498fec2-b7b7-478b-8485-9ef74b8e7115"
        x1=".25"
        y1="116.18"
        x2=".25"
        y2="30.73"
      />
      <Line
        className="uuid-9498fec2-b7b7-478b-8485-9ef74b8e7115"
        x1="474.04"
        y1="116.18"
        x2="474.04"
        y2="30.73"
      />
      <Line
        className="uuid-9498fec2-b7b7-478b-8485-9ef74b8e7115"
        x1="53.57"
        y1="74.47"
        x2="53.57"
        y2="36.03"
      />
      <Line
        className="uuid-9498fec2-b7b7-478b-8485-9ef74b8e7115"
        x1="141.07"
        y1="88.95"
        x2="141.07"
        y2="39"
      />
      {/* pinLength */}
      <g>
        <Line
          x1="4.02"
          y1="105.3"
          x2="471.17"
          y2="105.3"
          $hover={tableHeader === "3"}
        />
        <Polygon
          points="4.6 107.3 1.15 105.3 4.6 103.31 4.6 107.3"
          $hover={tableHeader === "3"}
        />
        <Polygon
          points="470.58 107.3 474.04 105.3 470.58 103.31 470.58 107.3"
          $hover={tableHeader === "3"}
        />
      </g>
      {/* X-position */}
      <g>
        <Line
          x1="4.02"
          y1="56.63"
          x2="50.7"
          y2="56.63"
          $hover={tableHeader === "0"}
        />
        <Polygon
          points="4.6 58.62 1.15 56.63 4.6 54.63 4.6 58.62"
          $hover={tableHeader === "0"}
        />
        <Polygon
          points="50.11 58.62 53.57 56.63 50.11 54.63 50.11 58.62"
          $hover={tableHeader === "0"}
        />
      </g>
      <text
        className="uuid-9f10f33a-3dfa-4d34-9aee-00fc89358c46"
        transform="translate(215.39 115.37)"
      >
        <tspan
          className="uuid-c882057e-46af-443a-bc42-68e6ab8277a5"
          x="0"
          y="0"
        >
          Pin Leng
        </tspan>
        <tspan
          className="uuid-cf4ed379-e7d9-45cd-af78-f9d7e6e4bef7"
          x="28.75"
          y="0"
        >
          t
        </tspan>
        <tspan
          className="uuid-c882057e-46af-443a-bc42-68e6ab8277a5"
          x="31.31"
          y="0"
        >
          h
        </tspan>
      </text>
      <text
        className="uuid-9f10f33a-3dfa-4d34-9aee-00fc89358c46"
        transform="translate(10.63 66.65)"
      >
        <tspan
          className="uuid-9f922dd5-4ade-48be-92e4-171de48047e3"
          x="0"
          y="0"
        >
          X
        </tspan>
        <tspan
          className="uuid-c882057e-46af-443a-bc42-68e6ab8277a5"
          x="4.02"
          y="0"
        >
          -position
        </tspan>
      </text>
      <text
        className="uuid-9f10f33a-3dfa-4d34-9aee-00fc89358c46"
        transform="translate(110.02 7.62)"
      >
        <tspan
          className="uuid-6fb9b1bf-2fef-4f81-a9b0-00e573b322c6"
          x="0"
          y="0"
        >
          T
        </tspan>
        <tspan
          className="uuid-c882057e-46af-443a-bc42-68e6ab8277a5"
          x="4.03"
          y="0"
        >
          aper Diame
        </tspan>
        <tspan
          className="uuid-dcf53101-759f-429e-81f6-9901d940e17e"
          x="42.1"
          y="0"
        >
          t
        </tspan>
        <tspan
          className="uuid-8cd5c435-a361-4c47-9d49-dfc6efc8bff5"
          x="44.52"
          y="0"
        >
          er
        </tspan>
      </text>
      {/* Taper Length */}
      <g>
        <Line
          x1="4.02"
          y1="81.52"
          x2="138.2"
          y2="81.52"
          $hover={tableHeader === "2"}
        />
        <Polygon
          points="4.6 83.52 1.15 81.52 4.6 79.53 4.6 83.52"
          $hover={tableHeader === "2"}
        />
        <Polygon
          points="137.62 83.52 141.07 81.52 137.62 79.53 137.62 83.52"
          $hover={tableHeader === "2"}
        />
      </g>
      <text
        className="uuid-9f10f33a-3dfa-4d34-9aee-00fc89358c46"
        transform="translate(71.11 91.54)"
      >
        <tspan
          className="uuid-6fb9b1bf-2fef-4f81-a9b0-00e573b322c6"
          x="0"
          y="0"
        >
          T
        </tspan>
        <tspan
          className="uuid-c882057e-46af-443a-bc42-68e6ab8277a5"
          x="4.03"
          y="0"
        >
          aper Leng
        </tspan>
        <tspan
          className="uuid-cf4ed379-e7d9-45cd-af78-f9d7e6e4bef7"
          x="37.58"
          y="0"
        >
          t
        </tspan>
        <tspan
          className="uuid-c882057e-46af-443a-bc42-68e6ab8277a5"
          x="40.14"
          y="0"
        >
          h
        </tspan>
      </text>
      <Line
        className="uuid-9498fec2-b7b7-478b-8485-9ef74b8e7115"
        x1="119.2"
        y1="22.69"
        x2="105.93"
        y2="22.69"
      />
      <Line
        className="uuid-9498fec2-b7b7-478b-8485-9ef74b8e7115"
        x1="119.2"
        y1="39"
        x2="105.93"
        y2="39"
      />
      {/* Tap Diameter */}
      <g>
        <Line
          $hover={tableHeader === "1"}
          x1="112.56"
          y1="43.12"
          x2="112.56"
          y2="48.75"
        />
        <Polygon
          $hover={tableHeader === "1"}
          points="110.07 43.85 112.56 39.54 115.06 43.85 110.07 43.85"
        />
      </g>
      <g>
        <Line
          $hover={tableHeader === "1"}
          x1="112.56"
          y1="18.86"
          x2="112.56"
          y2="11.89"
        />
        <Polygon
          $hover={tableHeader === "1"}
          points="115.06 18.13 112.56 22.45 110.07 18.13 115.06 18.13"
        />
      </g>
      <text
        className="uuid-9f10f33a-3dfa-4d34-9aee-00fc89358c46"
        transform="translate(424.13 7.62)"
      >
        <tspan
          className="uuid-c882057e-46af-443a-bc42-68e6ab8277a5"
          x="0"
          y="0"
        >
          Pin Diame
        </tspan>
        <tspan
          className="uuid-dcf53101-759f-429e-81f6-9901d940e17e"
          x="33.27"
          y="0"
        >
          t
        </tspan>
        <tspan
          className="uuid-c882057e-46af-443a-bc42-68e6ab8277a5"
          x="35.69"
          y="0"
        >
          er
        </tspan>
      </text>
      <Line
        className="uuid-9498fec2-b7b7-478b-8485-9ef74b8e7115"
        x1="487.3"
        y1="22.69"
        x2="474.04"
        y2="22.69"
      />
      <Line
        className="uuid-9498fec2-b7b7-478b-8485-9ef74b8e7115"
        x1="487.3"
        y1="39"
        x2="474.04"
        y2="39"
      />
      {/* pin diameter */}
      <g>
        <Line
          x1="480.67"
          y1="43.12"
          x2="480.67"
          y2="48.75"
          $hover={tableHeader === "4"}
        />
        <Polygon
          $hover={tableHeader === "4"}
          points="478.18 43.85 480.67 39.54 483.16 43.85 478.18 43.85"
        />
      </g>
      <g>
        <Line
          x1="480.67"
          y1="18.86"
          x2="480.67"
          y2="11.89"
          $hover={tableHeader === "4"}
        />
        <Polygon
          $hover={tableHeader === "4"}
          points="483.16 18.13 480.67 22.45 478.18 18.13 483.16 18.13"
        />
      </g>
    </g>
  </SVG>
);

export default CantileverProbeInfo;
