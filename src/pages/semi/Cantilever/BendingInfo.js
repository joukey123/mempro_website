// BendinInfo.jsx

import React from "react";
import styled, { keyframes } from "styled-components";

const SVG = styled.svg`
  max-width: 900px;
  top: 45%;
  left: 50%;
  transform: translate(-40%, -8%) scale(0.8);
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
const Circle = styled.circle`
  fill: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
  transition: all 0.4s ease-in-out;
`;

const Path = styled.path`
  stroke: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
  fill: none;
  transition: all 0.4s ease-in-out;
  stroke-width: 0.7px;
`;
const BendinInfo = ({ hover }) => (
  <SVG
    id="uuid-6a1a5fc1-dede-4acb-bff9-4153e0436220"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 92.04 99.1"
  >
    <defs>
      <style>
        {`.uuid-7d3ec958-f26a-4f5d-b353-66b027784f2c {
          fill: #0269b7;
          stroke-width: 0px;
        }
  
        .uuid-6391c584-84d1-4bfa-85f7-23842a329586 {
          stroke: #a6a6a7;
        }
  
        .uuid-6391c584-84d1-4bfa-85f7-23842a329586, .uuid-5ec72620-2e5d-43b8-b998-ab9390f7599d {
          fill: none;
          stroke-miterlimit: 10;
          stroke-width: .5px;
        }
  
        .uuid-5ec72620-2e5d-43b8-b998-ab9390f7599d {
          stroke: #0269b7;
        }
  
        .uuid-d330d3e7-89f8-4108-93a4-d45e2adbfc1a {
          letter-spacing: -.04em;
        }
  
        .uuid-d330d3e7-89f8-4108-93a4-d45e2adbfc1a, .uuid-2fca9305-7a70-44c1-837e-468ebc695dfa {
          fill: #fff;
          font-family: Pretendard-Medium-KSCpc-EUC-H, Pretendard;
          font-size: 8.75px;
          font-weight: 500;
        }
  
        .uuid-2fca9305-7a70-44c1-837e-468ebc695dfa {
          letter-spacing: -.04em;
        }`}
      </style>
    </defs>
    <g id="uuid-6f6a2083-6ebd-42c3-a7b2-62c0e932e885" data-name="레이어 1">
      <g>
        <Line $hover={hover === 1} x1="14.49" y1="67.75" x2="14.49" y2="3.12" />
        <Polygon
          $hover={hover === 1}
          class="uuid-7d3ec958-f26a-4f5d-b353-66b027784f2c"
          points="16.48 67.17 14.49 70.62 12.49 67.17 16.48 67.17"
        />
        <Polygon
          $hover={hover === 1}
          class="uuid-7d3ec958-f26a-4f5d-b353-66b027784f2c"
          points="16.48 3.7 14.49 .25 12.49 3.7 16.48 3.7"
        />
      </g>
      <line
        class="uuid-6391c584-84d1-4bfa-85f7-23842a329586"
        x1="49.91"
        y1=".25"
        x2="6.18"
        y2=".25"
      />
      <line
        class="uuid-6391c584-84d1-4bfa-85f7-23842a329586"
        x1="6.18"
        y1="70.71"
        x2="22.79"
        y2="70.71"
      />
      <line
        class="uuid-6391c584-84d1-4bfa-85f7-23842a329586"
        x1="25.82"
        y1="77.64"
        x2="16.5"
        y2="93.43"
      />
      <line
        class="uuid-6391c584-84d1-4bfa-85f7-23842a329586"
        x1="32.8"
        y1="80.88"
        x2="23.48"
        y2="96.67"
      />
      <g>
        <Line
          $hover={hover === 3}
          x1="42.47"
          y1="98.35"
          x2="30.97"
          y2="91.54"
        />
        <Polygon
          $hover={hover === 3}
          points="32.48 90.12 28.49 90.08 30.45 93.56 32.48 90.12"
        />
      </g>
      <g>
        <Line $hover={hover === 3} x1="5.67" y1="76.72" x2="18.11" y2="84.07" />
        <Polygon
          $hover={hover === 3}
          points="16.59 85.49 20.58 85.53 18.62 82.06 16.59 85.49"
        />
      </g>
      <g>
        <Path
          $hover={hover === 2}
          class="uuid-5ec72620-2e5d-43b8-b998-ab9390f7599d"
          d="M88.25,13.47c4.26,9.05,1.32,20.09-7.29,25.73-8.61,5.64-19.91,3.93-26.5-3.6"
        />
        <Polygon
          $hover={hover === 2}
          class="uuid-7d3ec958-f26a-4f5d-b353-66b027784f2c"
          points="86.73 14.95 86.85 10.97 90.24 13.07 86.73 14.95"
        />
        <Polygon
          $hover={hover === 2}
          class="uuid-7d3ec958-f26a-4f5d-b353-66b027784f2c"
          points="56.43 34.8 52.73 33.32 53.3 37.27 56.43 34.8"
        />
      </g>
      <Circle $hover={hover === 1} cx="5.67" cy="23.01" r="5.67" />
      <text
        class="uuid-2fca9305-7a70-44c1-837e-468ebc695dfa"
        transform="translate(3.44 26.01)"
      >
        <tspan x="0" y="0">
          1
        </tspan>
      </text>
      <Circle
        $hover={hover === 2}
        class="uuid-7d3ec958-f26a-4f5d-b353-66b027784f2c"
        cx="86.38"
        cy="45.01"
        r="5.67"
      />
      <text
        class="uuid-d330d3e7-89f8-4108-93a4-d45e2adbfc1a"
        transform="translate(83.72 48)"
      >
        <tspan x="0" y="0">
          2
        </tspan>
      </text>
      <Circle $hover={hover === 3} cx="49.69" cy="93.43" r="5.67" />
      <text
        class="uuid-2fca9305-7a70-44c1-837e-468ebc695dfa"
        transform="translate(46.89 96.43)"
      >
        <tspan x="0" y="0">
          3
        </tspan>
      </text>
    </g>
  </SVG>
);

export default BendinInfo;
