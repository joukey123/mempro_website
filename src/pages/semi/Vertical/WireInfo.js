import styled from "styled-components";

const SVG = styled.svg`
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -108%) scale(1.8);
`;

const Line = styled.line`
  stroke: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
  stroke-width: 0.5px;
`;
const Polygon = styled.polygon`
  fill: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
`;
const Circle = styled.circle`
  fill: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
`;
const Rect = styled.rect`
  fill: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
`;

const WireInfo = ({ specId, tableHeader }) => (
  <SVG
    id="uuid-2c1a6073-9653-4ded-8da5-92448fb932f7"
    data-name="레이어 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 450.83 96.13"
  >
    <defs>
      <style>
        {`
        .uuid-8e332025-fdd0-45e2-b41f-d8904460629e {
          fill: #0269b7;
          stroke-width: 0px;
        }
  
        .uuid-e57c417f-6d98-4c93-8038-491fda796f50 {
          letter-spacing: -.04em;
        }
  
        .uuid-e57c417f-6d98-4c93-8038-491fda796f50, .uuid-c8ad2a26-c6d8-439e-8ff7-fe1d5e4c01e1 {
          fill: #fff;
         font-family: Roboto, sans-serif;
          font-size: 8px;
          font-weight: 400;
           letter-spacing: -.04em;
        }
  
        .uuid-39bf3759-d526-4c87-9cb7-e62f01225994 {
          stroke: #a6a6a7;
        }
  
        .uuid-39bf3759-d526-4c87-9cb7-e62f01225994, .uuid-c953ba02-6144-4743-862f-23d040b11833 {
          fill: none;
          stroke-miterlimit: 10;
          stroke-width: .5px;
        }
  
        .uuid-c953ba02-6144-4743-862f-23d040b11833 {
          stroke: #0269b7;
        }`}
      </style>
    </defs>
    <g id="uuid-75b7303f-b87e-47a0-b728-5fd0fa67ce94" data-name="레이어 1">
      <g>
        <Line
          $hover={tableHeader === "3" || tableHeader === "4"}
          class="uuid-c953ba02-6144-4743-862f-23d040b11833"
          x1="446.18"
          y1="15.63"
          x2="28.15"
          y2="15.63"
        />
        <Polygon
          $hover={tableHeader === "3" || tableHeader === "4"}
          class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
          points="445.45 13.13 449.77 15.63 445.45 18.12 445.45 13.13"
        />
        <Polygon
          $hover={tableHeader === "3" || tableHeader === "4"}
          class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
          points="28.88 13.13 24.56 15.63 28.88 18.12 28.88 13.13"
        />
      </g>
      <g>
        <Line
          $hover={tableHeader === "5"}
          class="uuid-c953ba02-6144-4743-862f-23d040b11833"
          x1="121.34"
          y1="35.06"
          x2="27.9"
          y2="35.06"
        />
        <Polygon
          $hover={tableHeader === "5"}
          class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
          points="120.62 32.56 124.93 35.06 120.62 37.55 120.62 32.56"
        />
        <Polygon
          $hover={tableHeader === "5"}
          class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
          points="28.62 32.56 24.31 35.06 28.62 37.55 28.62 32.56"
        />
      </g>
      <line
        class="uuid-39bf3759-d526-4c87-9cb7-e62f01225994"
        x1="450.58"
        y1="7.51"
        x2="450.58"
        y2="57.31"
      />
      <line
        class="uuid-39bf3759-d526-4c87-9cb7-e62f01225994"
        x1="24.31"
        y1="7.35"
        x2="24.31"
        y2="58.82"
      />
      <line
        class="uuid-39bf3759-d526-4c87-9cb7-e62f01225994"
        x1="125.32"
        y1="31.38"
        x2="125.32"
        y2="58.82"
      />
      <line
        class="uuid-39bf3759-d526-4c87-9cb7-e62f01225994"
        x1="396.89"
        y1="88.55"
        x2="396.89"
        y2="69.86"
      />
      <line
        class="uuid-39bf3759-d526-4c87-9cb7-e62f01225994"
        x1="450.58"
        y1="88.55"
        x2="450.58"
        y2="69.86"
      />
      <g>
        <Line
          $hover={tableHeader === "6"}
          class="uuid-c953ba02-6144-4743-862f-23d040b11833"
          x1="447.12"
          y1="79.2"
          x2="400.89"
          y2="79.2"
        />
        <Polygon
          $hover={tableHeader === "6"}
          class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
          points="446.39 76.71 450.71 79.2 446.39 81.7 446.39 76.71"
        />
        <Polygon
          $hover={tableHeader === "6"}
          class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
          points="401.62 76.71 397.3 79.2 401.62 81.7 401.62 76.71"
        />
      </g>
      <Circle
        $hover={tableHeader === "6"}
        class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
        cx="423.74"
        cy="89.47"
        r="6.66"
      />
      <text
        class="uuid-c8ad2a26-c6d8-439e-8ff7-fe1d5e4c01e1"
        transform="translate(421.19 92.73)"
      >
        <tspan x="0" y="0">
          B
        </tspan>
      </text>
      <Rect
        $hover={tableHeader === "2"}
        class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
        x="227.69"
        y="81.18"
        width="30.46"
        height="14.95"
        rx="7.47"
        ry="7.47"
      />
      <text
        class="uuid-c8ad2a26-c6d8-439e-8ff7-fe1d5e4c01e1"
        transform="translate(233.44 91.72)"
      >
        <tspan x="2" y="0">
          ØCD
        </tspan>
      </text>
      <line
        class="uuid-39bf3759-d526-4c87-9cb7-e62f01225994"
        x1="19.64"
        y1="58.82"
        x2="2.68"
        y2="58.82"
      />
      <line
        class="uuid-39bf3759-d526-4c87-9cb7-e62f01225994"
        x1="19.64"
        y1="68.49"
        x2="2.68"
        y2="68.49"
      />
      <g>
        <Rect
          $hover={tableHeader === "0" || tableHeader === "1"}
          class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
          x="0"
          y="82.18"
          width="22.68"
          height="13.95"
          rx="6.68"
          ry="6.68"
        />
        <text
          class="uuid-c8ad2a26-c6d8-439e-8ff7-fe1d5e4c01e1"
          transform="translate(4.81 92.43)"
        >
          <tspan x="1" y="0">
            ØD
          </tspan>
        </text>
      </g>
      <Circle
        $hover={tableHeader === "3" || tableHeader === "4"}
        class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
        cx="237.17"
        cy="5.67"
        r="5.67"
      />
      <text
        class="uuid-e57c417f-6d98-4c93-8038-491fda796f50"
        transform="translate(234.71 8.41)"
      >
        <tspan x="0" y="0">
          L
        </tspan>
      </text>
      <g>
        <Circle
          $hover={tableHeader === "5"}
          class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
          cx="74.31"
          cy="43.81"
          r="5.67"
        />
        <text
          class="uuid-e57c417f-6d98-4c93-8038-491fda796f50"
          transform="translate(71.22 46.34)"
        >
          <tspan x="0" y="0">
            A
          </tspan>
        </text>
      </g>
      <g>
        <Line
          $hover={tableHeader === "0" || tableHeader === "1"}
          class="uuid-c953ba02-6144-4743-862f-23d040b11833"
          x1="11.08"
          y1="84.73"
          x2="11.22"
          y2="71.36"
        />
        <Polygon
          $hover={tableHeader === "0" || tableHeader === "1"}
          class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
          points="13.21 71.97 11.25 68.49 9.22 71.93 13.21 71.97"
        />
      </g>
      <g>
        <Line
          $hover={tableHeader === "2"}
          class="uuid-c953ba02-6144-4743-862f-23d040b11833"
          x1="242.75"
          y1="84.73"
          x2="242.89"
          y2="71.36"
        />
        <Polygon
          $hover={tableHeader === "2"}
          class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
          points="244.88 71.97 242.92 68.49 240.89 71.93 244.88 71.97"
        />
      </g>
      <g>
        <Line
          $hover={tableHeader === "0" || tableHeader === "1"}
          class="uuid-c953ba02-6144-4743-862f-23d040b11833"
          x1="11.34"
          y1="41.52"
          x2="11.19"
          y2="55.96"
        />
        <Polygon
          $hover={tableHeader === "0" || tableHeader === "1"}
          class="uuid-8e332025-fdd0-45e2-b41f-d8904460629e"
          points="9.2 55.36 11.16 58.83 13.19 55.4 9.2 55.36"
        />
      </g>
    </g>
  </SVG>
);

export default WireInfo;
