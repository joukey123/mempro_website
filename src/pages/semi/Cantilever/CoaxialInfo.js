// CantileverProbeInfo.jsx

import React from "react";
import styled, { keyframes } from "styled-components";

const SVG = styled.svg`
  position: absolute;
  width: 100%;
  max-width: 900px;
  top: 41%;
  left: 50%;
  transform: translate(-49%, -24%);
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

const CoaxialInfo = ({ tableHeader }) => (
  <SVG
    id="uuid-9d04e00a-eb5d-467f-bbf7-85241627f0da"
    data-name="레이어 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 457.88 105.12"
  >
    <defs>
      <style>
        {`
      .uuid-59494df7-e9f3-4299-9e2b-f20a8fcec500 {
        fill: #0269b7;
        stroke-width: 0px;
      }

      .uuid-3ec9fdc3-364b-4f2d-b928-3d754508d02a {
        stroke: #a6a6a7;
      }

      .uuid-3ec9fdc3-364b-4f2d-b928-3d754508d02a, .uuid-cb4a41a7-23bc-4d46-bb11-9b11a5fe9efb {
        fill: none;
        stroke-miterlimit: 10;
        stroke-width: .5px;
      }

      .uuid-35993d83-9f0b-4aaa-8f53-4da2d8ee88bb {
        letter-spacing: -.01em;
      }

      .uuid-35440266-3136-49f9-8198-70bb71781d46 {
        letter-spacing: -.1em;
      }

      .uuid-4d1bbb26-b170-4f08-9127-d0e2f6f7ea49 {
        letter-spacing: -.1em;
      }

      .uuid-d888a802-6384-4654-a3a2-b417579b6a24 {
        fill: #000;
        font-family: Pretendard-Light-KSCpc-EUC-H, Pretendard;
        font-size: 8px;
        font-weight: 350;
      }

      .uuid-cb4a41a7-23bc-4d46-bb11-9b11a5fe9efb {
        stroke: #0269b7;
      }

      .uuid-06425765-3cd4-4068-8c16-ce4036f51ee6 {
        letter-spacing: -.03em;
      }

      .uuid-55952c6f-c4af-45b7-a060-711f6f2865cb {
        letter-spacing: -.02em;
      }

      .uuid-843a4e11-fb04-40e1-b115-10ed7fdaa0d6 {
        letter-spacing: -.03em;
      }`}
      </style>
    </defs>
    <g id="uuid-6dc58e03-2751-48d5-8786-3835b08cd11a" data-name="레이어 1">
      <g>
        <g>
          <line
            class="uuid-cb4a41a7-23bc-4d46-bb11-9b11a5fe9efb"
            x1="437.28"
            y1="10.51"
            x2="4.09"
            y2="10.51"
          />
          <polygon
            class="uuid-59494df7-e9f3-4299-9e2b-f20a8fcec500"
            points="436.56 8.01 440.87 10.51 436.56 13 436.56 8.01"
          />
          <polygon
            class="uuid-59494df7-e9f3-4299-9e2b-f20a8fcec500"
            points="4.82 8.01 .5 10.51 4.82 13 4.82 8.01"
          />
        </g>
        <g>
          <line
            class="uuid-cb4a41a7-23bc-4d46-bb11-9b11a5fe9efb"
            x1="95.22"
            y1="49.7"
            x2="4.09"
            y2="49.7"
          />
          <polygon
            class="uuid-59494df7-e9f3-4299-9e2b-f20a8fcec500"
            points="94.49 47.21 98.8 49.7 94.49 52.2 94.49 47.21"
          />
          <polygon
            class="uuid-59494df7-e9f3-4299-9e2b-f20a8fcec500"
            points="4.82 47.21 .5 49.7 4.82 52.2 4.82 47.21"
          />
        </g>
        <line
          class="uuid-3ec9fdc3-364b-4f2d-b928-3d754508d02a"
          x1=".25"
          x2=".25"
          y2="70.32"
        />
        <line
          class="uuid-3ec9fdc3-364b-4f2d-b928-3d754508d02a"
          x1="441.32"
          y1=".04"
          x2="441.32"
          y2="70.32"
        />
        <text
          class="uuid-d888a802-6384-4654-a3a2-b417579b6a24"
          transform="translate(199.83 7.81)"
        >
          <tspan class="uuid-4d1bbb26-b170-4f08-9127-d0e2f6f7ea49" x="0" y="0">
            T
          </tspan>
          <tspan
            class="uuid-06425765-3cd4-4068-8c16-ce4036f51ee6"
            x="3.99"
            y="0"
          >
            otal Leng
          </tspan>
          <tspan
            class="uuid-35993d83-9f0b-4aaa-8f53-4da2d8ee88bb"
            x="34.74"
            y="0"
          >
            t
          </tspan>
          <tspan
            class="uuid-06425765-3cd4-4068-8c16-ce4036f51ee6"
            x="37.3"
            y="0"
          >
            h
          </tspan>
        </text>
        <text
          class="uuid-d888a802-6384-4654-a3a2-b417579b6a24"
          transform="translate(30.59 46.62)"
        >
          <tspan class="uuid-4d1bbb26-b170-4f08-9127-d0e2f6f7ea49" x="0" y="0">
            T
          </tspan>
          <tspan
            class="uuid-06425765-3cd4-4068-8c16-ce4036f51ee6"
            x="3.99"
            y="0"
          >
            op Leng
          </tspan>
          <tspan
            class="uuid-35993d83-9f0b-4aaa-8f53-4da2d8ee88bb"
            x="31.14"
            y="0"
          >
            t
          </tspan>
          <tspan
            class="uuid-06425765-3cd4-4068-8c16-ce4036f51ee6"
            x="33.7"
            y="0"
          >
            h
          </tspan>
        </text>
        <g>
          <line
            class="uuid-cb4a41a7-23bc-4d46-bb11-9b11a5fe9efb"
            x1="235.53"
            y1="42.43"
            x2="103.35"
            y2="42.43"
          />
          <polygon
            class="uuid-59494df7-e9f3-4299-9e2b-f20a8fcec500"
            points="234.8 39.94 239.12 42.43 234.8 44.93 234.8 39.94"
          />
          <polygon
            class="uuid-59494df7-e9f3-4299-9e2b-f20a8fcec500"
            points="104.07 39.94 99.76 42.43 104.07 44.93 104.07 39.94"
          />
        </g>
        <text
          class="uuid-d888a802-6384-4654-a3a2-b417579b6a24"
          transform="translate(138.12 39.35)"
        >
          <tspan class="uuid-06425765-3cd4-4068-8c16-ce4036f51ee6" x="0" y="0">
            Brass{" "}
          </tspan>
          <tspan
            class="uuid-35440266-3136-49f9-8198-70bb71781d46"
            x="20.29"
            y="0"
          >
            T
          </tspan>
          <tspan
            class="uuid-55952c6f-c4af-45b7-a060-711f6f2865cb"
            x="24.32"
            y="0"
          >
            ube Leng
          </tspan>
          <tspan
            class="uuid-35993d83-9f0b-4aaa-8f53-4da2d8ee88bb"
            x="55.66"
            y="0"
          >
            t
          </tspan>
          <tspan
            class="uuid-06425765-3cd4-4068-8c16-ce4036f51ee6"
            x="58.21"
            y="0"
          >
            h
          </tspan>
        </text>
        <text
          class="uuid-d888a802-6384-4654-a3a2-b417579b6a24"
          transform="translate(399.95 95.74)"
        >
          <tspan class="uuid-843a4e11-fb04-40e1-b115-10ed7fdaa0d6" x="0" y="0">
            R
          </tspan>
          <tspan
            class="uuid-06425765-3cd4-4068-8c16-ce4036f51ee6"
            x="4.55"
            y="0"
          >
            od Diame
          </tspan>
          <tspan
            class="uuid-843a4e11-fb04-40e1-b115-10ed7fdaa0d6"
            x="36.33"
            y="0"
          >
            t
          </tspan>
          <tspan
            class="uuid-06425765-3cd4-4068-8c16-ce4036f51ee6"
            x="38.75"
            y="0"
          >
            er
          </tspan>
        </text>
        <line
          class="uuid-3ec9fdc3-364b-4f2d-b928-3d754508d02a"
          x1="99.76"
          y1="56.98"
          x2="99.76"
          y2="38.35"
        />
        <line
          class="uuid-3ec9fdc3-364b-4f2d-b928-3d754508d02a"
          x1="240.53"
          y1="56.98"
          x2="240.53"
          y2="38.35"
        />
        <line
          class="uuid-3ec9fdc3-364b-4f2d-b928-3d754508d02a"
          x1="445.34"
          y1="61.2"
          x2="457.88"
          y2="61.2"
        />
        <line
          class="uuid-3ec9fdc3-364b-4f2d-b928-3d754508d02a"
          x1="445.34"
          y1="77.56"
          x2="457.88"
          y2="77.56"
        />
        <line
          class="uuid-3ec9fdc3-364b-4f2d-b928-3d754508d02a"
          x1="163.09"
          y1="58.17"
          x2="175.63"
          y2="58.17"
        />
        <line
          class="uuid-3ec9fdc3-364b-4f2d-b928-3d754508d02a"
          x1="163.09"
          y1="79.74"
          x2="175.63"
          y2="79.74"
        />
        <g>
          <line
            class="uuid-cb4a41a7-23bc-4d46-bb11-9b11a5fe9efb"
            x1="451.61"
            y1="57.61"
            x2="451.61"
            y2="41.79"
          />
          <polygon
            class="uuid-59494df7-e9f3-4299-9e2b-f20a8fcec500"
            points="454.11 56.88 451.61 61.2 449.12 56.88 454.11 56.88"
          />
        </g>
        <g>
          <line
            class="uuid-cb4a41a7-23bc-4d46-bb11-9b11a5fe9efb"
            x1="451.61"
            y1="81.15"
            x2="451.61"
            y2="96.98"
          />
          <polygon
            class="uuid-59494df7-e9f3-4299-9e2b-f20a8fcec500"
            points="449.12 81.88 451.61 77.56 454.11 81.88 449.12 81.88"
          />
        </g>
        <text
          class="uuid-d888a802-6384-4654-a3a2-b417579b6a24"
          transform="translate(171.98 95.74)"
        >
          <tspan class="uuid-06425765-3cd4-4068-8c16-ce4036f51ee6" x="0" y="0">
            Brass
          </tspan>
          <tspan
            class="uuid-35440266-3136-49f9-8198-70bb71781d46"
            x="20.29"
            y="0"
          >
            T
          </tspan>
          <tspan
            class="uuid-55952c6f-c4af-45b7-a060-711f6f2865cb"
            x="24.32"
            y="0"
          >
            ube Diame
          </tspan>
          <tspan
            class="uuid-843a4e11-fb04-40e1-b115-10ed7fdaa0d6"
            x="60.17"
            y="0"
          >
            t
          </tspan>
          <tspan
            class="uuid-55952c6f-c4af-45b7-a060-711f6f2865cb"
            x="62.6"
            y="0"
          >
            er
          </tspan>
        </text>
        <g>
          <line
            class="uuid-cb4a41a7-23bc-4d46-bb11-9b11a5fe9efb"
            x1="169.36"
            y1="83.33"
            x2="169.36"
            y2="89.45"
          />
          <polygon
            class="uuid-59494df7-e9f3-4299-9e2b-f20a8fcec500"
            points="166.87 84.06 169.36 79.74 171.85 84.06 166.87 84.06"
          />
        </g>
        <g>
          <line
            class="uuid-cb4a41a7-23bc-4d46-bb11-9b11a5fe9efb"
            x1="169.36"
            y1="54.82"
            x2="169.36"
            y2="47.99"
          />
          <polygon
            class="uuid-59494df7-e9f3-4299-9e2b-f20a8fcec500"
            points="171.85 54.09 169.36 58.41 166.87 54.09 171.85 54.09"
          />
        </g>
      </g>
    </g>
  </SVG>
);

export default CoaxialInfo;
