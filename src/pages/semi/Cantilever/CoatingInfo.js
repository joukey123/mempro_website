// BendinInfo.jsx

import React from "react";
import styled, { keyframes } from "styled-components";

const SVG = styled.svg`
  max-width: 800px;
  position: absolute;
  width: 100%;
  max-width: 800px;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  @media (max-width: 1023px) {
    width: 95%;
    transform: translate(-50%, -46%);
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
const Circle = styled.circle`
  fill: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
  transition: all 0.4s ease-in-out;
`;

const CoatingInfo = ({ hover }) => (
  <SVG
    id="uuid-7429c185-89e9-40de-897a-061a2654dd3d"
    data-name="레이어 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 412.91 187.68"
  >
    <defs>
      <style>
        {`
        .uuid-65f1c120-2896-4838-9711-693170b1af28 {
          fill: #0269b7;
          stroke-width: 0px;
        }
  
        .uuid-bfabcfbd-d7b6-4082-be9c-8883d81ade1e {
          stroke: #a6a6a7;
        }
  
        .uuid-bfabcfbd-d7b6-4082-be9c-8883d81ade1e, .uuid-32023248-d5b9-4ad1-be30-668d8e33de6c {
          fill: none;
          stroke-miterlimit: 10;
          stroke-width: .5px;
        }
  
        .uuid-32023248-d5b9-4ad1-be30-668d8e33de6c {
          stroke: #0269b7;
        }
  
        .uuid-aa195cce-739b-43f7-82fa-d3bd4bec88af {
          letter-spacing: -.04em;
        }
  
        .uuid-aa195cce-739b-43f7-82fa-d3bd4bec88af, .uuid-6cc37a1e-9238-4301-a4c2-93c893f53e44 {
          fill: #fff;
          font-family: Pretendard-Medium-KSCpc-EUC-H, Pretendard;
          font-size: 8.75px;
          font-weight: 500;
        }
  
        .uuid-6cc37a1e-9238-4301-a4c2-93c893f53e44 {
          letter-spacing: -.04em;
        }`}
      </style>
    </defs>
    <g id="uuid-2a46a987-1029-4164-a009-4c3f813305dd" data-name="레이어 1">
      <g>
        <line
          class="uuid-bfabcfbd-d7b6-4082-be9c-8883d81ade1e"
          x1=".25"
          y1="49.52"
          x2=".25"
          y2="9.6"
        />
        <line
          class="uuid-bfabcfbd-d7b6-4082-be9c-8883d81ade1e"
          x1="93.94"
          y1="41.9"
          x2="93.94"
          y2="29.56"
        />
        <line
          class="uuid-bfabcfbd-d7b6-4082-be9c-8883d81ade1e"
          x1="155.42"
          y1="41.9"
          x2="155.42"
          y2="29.56"
        />
        <line
          class="uuid-bfabcfbd-d7b6-4082-be9c-8883d81ade1e"
          x1="412.66"
          y1="44.2"
          x2="412.66"
          y2="9.6"
        />
        <g>
          <Line
            $hover={hover === 3}
            x1="3.84"
            y1="15.24"
            x2="409.07"
            y2="15.24"
          />
          <Polygon
            $hover={hover === 3}
            class="uuid-65f1c120-2896-4838-9711-693170b1af28"
            points="4.57 17.73 .25 15.24 4.57 12.75 4.57 17.73"
          />
          <Polygon
            $hover={hover === 3}
            class="uuid-65f1c120-2896-4838-9711-693170b1af28"
            points="408.34 17.73 412.66 15.24 408.34 12.75 408.34 17.73"
          />
        </g>
        <Circle
          $hover={hover === 3}
          class="uuid-65f1c120-2896-4838-9711-693170b1af28"
          cx="206.45"
          cy="5.67"
          r="5.67"
        />
        <text
          class="uuid-6cc37a1e-9238-4301-a4c2-93c893f53e44"
          transform="translate(203.9 8.67)"
        >
          <tspan x="0" y="0">
            3
          </tspan>
        </text>
        <g>
          <Line
            $hover={hover === 1}
            class="uuid-32023248-d5b9-4ad1-be30-668d8e33de6c"
            x1="97.49"
            y1="35.03"
            x2="150.33"
            y2="35.03"
          />
          <Polygon
            $hover={hover === 1}
            class="uuid-65f1c120-2896-4838-9711-693170b1af28"
            points="98.22 37.52 93.9 35.03 98.22 32.53 98.22 37.52"
          />
          <Polygon
            $hover={hover === 1}
            class="uuid-65f1c120-2896-4838-9711-693170b1af28"
            points="149.6 37.52 153.92 35.03 149.6 32.53 149.6 37.52"
          />
        </g>
        <Circle
          $hover={hover === 1}
          class="uuid-65f1c120-2896-4838-9711-693170b1af28"
          cx="123.91"
          cy="26.6"
          r="5.67"
        />
        <text
          class="uuid-6cc37a1e-9238-4301-a4c2-93c893f53e44"
          transform="translate(121.79 29.6)"
        >
          <tspan x="0" y="0">
            1
          </tspan>
        </text>
        <line
          class="uuid-bfabcfbd-d7b6-4082-be9c-8883d81ade1e"
          x1=".25"
          y1="156.67"
          x2=".25"
          y2="116.75"
        />
        <line
          class="uuid-bfabcfbd-d7b6-4082-be9c-8883d81ade1e"
          x1="412.66"
          y1="151.34"
          x2="412.66"
          y2="116.75"
        />
        <g>
          <Line
            $hover={hover === 3}
            class="uuid-32023248-d5b9-4ad1-be30-668d8e33de6c"
            x1="3.84"
            y1="122.38"
            x2="409.07"
            y2="122.38"
          />
          <Polygon
            $hover={hover === 3}
            class="uuid-65f1c120-2896-4838-9711-693170b1af28"
            points="4.57 124.88 .25 122.38 4.57 119.89 4.57 124.88"
          />
          <Polygon
            $hover={hover === 3}
            class="uuid-65f1c120-2896-4838-9711-693170b1af28"
            points="408.34 124.88 412.66 122.38 408.34 119.89 408.34 124.88"
          />
        </g>
        <Circle
          $hover={hover === 3}
          class="uuid-65f1c120-2896-4838-9711-693170b1af28"
          cx="206.45"
          cy="113.48"
          r="5.67"
        />
        <text
          class="uuid-6cc37a1e-9238-4301-a4c2-93c893f53e44"
          transform="translate(203.9 116.48)"
        >
          <tspan x="0" y="0">
            3
          </tspan>
        </text>
        <Circle
          $hover={hover === 2}
          class="uuid-65f1c120-2896-4838-9711-693170b1af28"
          cx="123.34"
          cy="182.01"
          r="5.67"
        />
        <text
          class="uuid-aa195cce-739b-43f7-82fa-d3bd4bec88af"
          transform="translate(120.75 185.01)"
        >
          <tspan x="0" y="0">
            2
          </tspan>
        </text>
        <line
          class="uuid-bfabcfbd-d7b6-4082-be9c-8883d81ade1e"
          x1="131.28"
          y1="168.96"
          x2="138.16"
          y2="168.96"
        />
        <line
          class="uuid-bfabcfbd-d7b6-4082-be9c-8883d81ade1e"
          x1="131.28"
          y1="171.51"
          x2="138.16"
          y2="171.51"
        />
        <g>
          <Line
            $hover={hover === 2}
            class="uuid-32023248-d5b9-4ad1-be30-668d8e33de6c"
            x1="134.72"
            y1="164.2"
            x2="134.72"
            y2="152.51"
          />
          <Polygon
            $hover={hover === 2}
            class="uuid-65f1c120-2896-4838-9711-693170b1af28"
            points="137.21 163.47 134.72 167.78 132.23 163.47 137.21 163.47"
          />
        </g>
        <g>
          <Line
            $hover={hover === 2}
            class="uuid-32023248-d5b9-4ad1-be30-668d8e33de6c"
            x1="134.72"
            y1="175.09"
            x2="134.72"
            y2="186.78"
          />
          <Polygon
            $hover={hover === 2}
            class="uuid-65f1c120-2896-4838-9711-693170b1af28"
            points="132.23 175.82 134.72 171.51 137.21 175.82 132.23 175.82"
          />
        </g>
        <line
          class="uuid-bfabcfbd-d7b6-4082-be9c-8883d81ade1e"
          x1="143.61"
          y1="150.62"
          x2="143.61"
          y2="138.28"
        />
        <g>
          <Line
            $hover={hover === 1}
            class="uuid-32023248-d5b9-4ad1-be30-668d8e33de6c"
            x1="147.17"
            y1="143.75"
            x2="409.07"
            y2="143.75"
          />
          <Polygon
            $hover={hover === 1}
            class="uuid-65f1c120-2896-4838-9711-693170b1af28"
            points="147.9 146.24 143.58 143.75 147.9 141.26 147.9 146.24"
          />
          <Polygon
            $hover={hover === 1}
            class="uuid-65f1c120-2896-4838-9711-693170b1af28"
            points="408.34 146.24 412.66 143.75 408.34 141.26 408.34 146.24"
          />
        </g>
        <Circle
          $hover={hover === 1}
          class="uuid-65f1c120-2896-4838-9711-693170b1af28"
          cx="278.12"
          cy="135.36"
          r="5.67"
        />
        <text
          class="uuid-6cc37a1e-9238-4301-a4c2-93c893f53e44"
          transform="translate(276 138.36)"
        >
          <tspan x="0" y="0">
            1
          </tspan>
        </text>
      </g>
    </g>
  </SVG>
);

export default CoatingInfo;
