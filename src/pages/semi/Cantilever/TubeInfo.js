// BendinInfo.jsx

import { tab } from "@testing-library/user-event/dist/tab";
import React from "react";
import styled, { keyframes } from "styled-components";

const SVG = styled.svg`
  max-width: 900px;
  top: 45%;
  left: 50%;
  transform: translate(6%, -2%) scale(0.9);
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
const TubeInfo = ({ tableHeader }) => (
  <SVG
    id="uuid-af7b25da-c89e-49c5-a7c5-4646792f8bbb"
    data-name="레이어 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 445.62 121.53"
  >
    <defs>
      <style>
        {`
        .uuid-d033623d-63c6-46bb-a65f-e3556e9a9307 {
          fill: #0269b7;
          stroke-width: 0px;
        }
  
        .uuid-6c486745-fc52-4b0a-a9df-2bf4a507d1c9 {
          letter-spacing: -.03em;
        }
  
        .uuid-5e18aa8a-1127-4914-a49d-e9a57885b88a {
          letter-spacing: -.03em;
        }
  
        .uuid-ed317675-b00a-4918-9551-ffc427d50a95 {
          stroke: #a6a6a7;
        }
  
        .uuid-ed317675-b00a-4918-9551-ffc427d50a95, .uuid-d320c057-5045-435d-8c7c-427fea932d58 {
          fill: none;
          stroke-miterlimit: 10;
          stroke-width: .5px;
        }
  
        .uuid-d6ef547d-0fda-4114-9be1-1dce7e1e2206 {
          letter-spacing: -.01em;
        }
  
        .uuid-a58f84ec-f30b-4008-b9dd-5039be78da21 {
          letter-spacing: -.04em;
        }
  
        .uuid-8bfee9a2-d211-4334-953a-8246e034306b {
          letter-spacing: -.08em;
        }
  
        .uuid-f3aab373-cd9f-424f-9e1e-d5f36d1dfc38 {
          fill: #000;
          font-family: Pretendard-Light-KSCpc-EUC-H, Pretendard;
          font-size: 8px;
          font-weight: 300;
        }
  
        .uuid-d320c057-5045-435d-8c7c-427fea932d58 {
          stroke: #0269b7;
        }
  
        .uuid-9f1eb707-79f9-45c9-9241-b0ff6567c5b7 {
          letter-spacing: -.03em;
        }
  
        .uuid-79b900b3-b190-4a9a-a58e-e9ec76ea4282 {
          letter-spacing: -.02em;
        }
  
        .uuid-ddda2281-b9bf-425d-9ab0-1ea816dba25e {
          letter-spacing: -.03em;
        }
  
        .uuid-ac299e5b-40c0-4371-a080-cd04fcb7b445 {
          letter-spacing: -.01em;
        }`}
      </style>
    </defs>
    <g id="uuid-2e67e37d-1e8a-49a0-aa41-04b3434105d7" data-name="레이어 1">
      <g>
        <Line
          $hover={tableHeader === "4"}
          class="uuid-d320c057-5045-435d-8c7c-427fea932d58"
          x1="3.11"
          y1="60.02"
          x2="283.76"
          y2="33.03"
        />
        <Polygon
          $hover={tableHeader === "4"}
          class="uuid-d033623d-63c6-46bb-a65f-e3556e9a9307"
          points="3.88 61.95 .25 60.29 3.5 57.97 3.88 61.95"
        />
        <Polygon
          $hover={tableHeader === "4"}
          class="uuid-d033623d-63c6-46bb-a65f-e3556e9a9307"
          points="283.37 35.07 286.61 32.75 282.99 31.1 283.37 35.07"
        />
      </g>
      <text
        class="uuid-f3aab373-cd9f-424f-9e1e-d5f36d1dfc38"
        transform="translate(110.19 40.22)"
      >
        <tspan class="uuid-9f1eb707-79f9-45c9-9241-b0ff6567c5b7" x="0" y="0">
          Stan
        </tspan>
        <tspan
          class="uuid-ac299e5b-40c0-4371-a080-cd04fcb7b445"
          x="15.25"
          y="0"
        >
          d
        </tspan>
        <tspan class="uuid-9f1eb707-79f9-45c9-9241-b0ff6567c5b7" x="19.8" y="0">
          a
        </tspan>
        <tspan
          class="uuid-a58f84ec-f30b-4008-b9dd-5039be78da21"
          x="23.81"
          y="0"
        >
          r
        </tspan>
        <tspan
          class="uuid-79b900b3-b190-4a9a-a58e-e9ec76ea4282"
          x="26.14"
          y="0"
        >
          d Leng
        </tspan>
        <tspan
          class="uuid-d6ef547d-0fda-4114-9be1-1dce7e1e2206"
          x="49.12"
          y="0"
        >
          t
        </tspan>
        <tspan
          class="uuid-9f1eb707-79f9-45c9-9241-b0ff6567c5b7"
          x="51.68"
          y="0"
        >
          h
        </tspan>
      </text>
      <line
        class="uuid-ed317675-b00a-4918-9551-ffc427d50a95"
        x1=".25"
        y1="80.46"
        x2=".25"
        y2="51.29"
      />
      <line
        class="uuid-ed317675-b00a-4918-9551-ffc427d50a95"
        x1="287.37"
        y1="53.54"
        x2="287.37"
        y2="26.89"
      />
      <line
        class="uuid-ed317675-b00a-4918-9551-ffc427d50a95"
        x1="436.5"
        y1="12.45"
        x2="436.5"
        y2="56.64"
      />
      <line
        class="uuid-ed317675-b00a-4918-9551-ffc427d50a95"
        x1="384.01"
        y1="110"
        x2="384.01"
        y2="43.36"
      />
      <line
        class="uuid-ed317675-b00a-4918-9551-ffc427d50a95"
        x1="390.39"
        y1="12.45"
        x2="390.39"
        y2="65.62"
      />
      <line
        class="uuid-ed317675-b00a-4918-9551-ffc427d50a95"
        x1="442.72"
        y1="108.73"
        x2="442.72"
        y2="50.91"
      />
      <g>
        <Line
          $hover={tableHeader === "2"}
          class="uuid-d320c057-5045-435d-8c7c-427fea932d58"
          x1="394.35"
          y1="54.59"
          x2="399.98"
          y2="54.59"
        />
        <Polygon
          $hover={tableHeader === "2"}
          class="uuid-d033623d-63c6-46bb-a65f-e3556e9a9307"
          points="395.08 57.08 390.76 54.59 395.08 52.1 395.08 57.08"
        />
      </g>
      <g>
        <Line
          $hover={tableHeader === "2"}
          class="uuid-d320c057-5045-435d-8c7c-427fea932d58"
          x1="379.44"
          y1="54.59"
          x2="372.47"
          y2="54.59"
        />
        <Polygon
          $hover={tableHeader === "2"}
          class="uuid-d033623d-63c6-46bb-a65f-e3556e9a9307"
          points="378.71 52.1 383.03 54.59 378.71 57.08 378.71 52.1"
        />
      </g>
      <g>
        <Line
          $hover={tableHeader === "3"}
          class="uuid-d320c057-5045-435d-8c7c-427fea932d58"
          x1="386.88"
          y1="104.25"
          x2="439.85"
          y2="104.25"
        />
        <Polygon
          $hover={tableHeader === "3"}
          class="uuid-d033623d-63c6-46bb-a65f-e3556e9a9307"
          points="387.47 106.25 384.01 104.25 387.47 102.26 387.47 106.25"
        />
        <Polygon
          $hover={tableHeader === "3"}
          class="uuid-d033623d-63c6-46bb-a65f-e3556e9a9307"
          points="439.27 106.25 442.72 104.25 439.27 102.26 439.27 106.25"
        />
      </g>
      <g>
        <Line
          $hover={tableHeader === "0" || tableHeader === "1"}
          class="uuid-d320c057-5045-435d-8c7c-427fea932d58"
          x1="432.99"
          y1="17.79"
          x2="393.64"
          y2="17.79"
        />
        <Polygon
          $hover={tableHeader === "0" || tableHeader === "1"}
          class="uuid-d033623d-63c6-46bb-a65f-e3556e9a9307"
          points="432.41 15.8 435.86 17.79 432.41 19.79 432.41 15.8"
        />
        <Polygon
          $hover={tableHeader === "0" || tableHeader === "1"}
          class="uuid-d033623d-63c6-46bb-a65f-e3556e9a9307"
          points="394.22 15.8 390.76 17.79 394.22 19.79 394.22 15.8"
        />
      </g>
      <text
        class="uuid-f3aab373-cd9f-424f-9e1e-d5f36d1dfc38"
        transform="translate(384.68 119.24)"
      >
        <tspan class="uuid-9f1eb707-79f9-45c9-9241-b0ff6567c5b7" x="0" y="0">
          Ou
        </tspan>
        <tspan class="uuid-5e18aa8a-1127-4914-a49d-e9a57885b88a" x="9.73" y="0">
          t
        </tspan>
        <tspan
          class="uuid-9f1eb707-79f9-45c9-9241-b0ff6567c5b7"
          x="12.12"
          y="0"
        >
          sude Diame
        </tspan>
        <tspan
          class="uuid-ddda2281-b9bf-425d-9ab0-1ea816dba25e"
          x="51.66"
          y="0"
        >
          t
        </tspan>
        <tspan
          class="uuid-9f1eb707-79f9-45c9-9241-b0ff6567c5b7"
          x="54.08"
          y="0"
        >
          er
        </tspan>
      </text>
      <text
        class="uuid-f3aab373-cd9f-424f-9e1e-d5f36d1dfc38"
        transform="translate(387.32 7.62)"
      >
        <tspan class="uuid-9f1eb707-79f9-45c9-9241-b0ff6567c5b7" x="0" y="0">
          Inside Diame
        </tspan>
        <tspan
          class="uuid-6c486745-fc52-4b0a-a9df-2bf4a507d1c9"
          x="42.75"
          y="0"
        >
          t
        </tspan>
        <tspan
          class="uuid-9f1eb707-79f9-45c9-9241-b0ff6567c5b7"
          x="45.17"
          y="0"
        >
          er
        </tspan>
      </text>
      <text
        class="uuid-f3aab373-cd9f-424f-9e1e-d5f36d1dfc38"
        transform="translate(351.65 57.35)"
      >
        <tspan class="uuid-8bfee9a2-d211-4334-953a-8246e034306b" x="0" y="0">
          W
        </tspan>
        <tspan class="uuid-9f1eb707-79f9-45c9-9241-b0ff6567c5b7" x="6.56" y="0">
          all
        </tspan>
        <tspan class="uuid-9f1eb707-79f9-45c9-9241-b0ff6567c5b7">
          <tspan x="-10.16" y="9.6">
            Thickness
          </tspan>
        </tspan>
      </text>
    </g>
  </SVG>
);

export default TubeInfo;
