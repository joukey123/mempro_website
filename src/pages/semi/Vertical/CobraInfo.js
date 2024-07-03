import styled from "styled-components";

const SVG = styled.svg`
  max-width: 900px;
  width: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -105%) scale(1);
`;

const Line = styled.line`
  stroke: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
  stroke-width: 0.7;
`;
const Polygon = styled.polygon`
  fill: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
`;
const Circle = styled.circle`
  fill: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
`;
const CobraInfo = ({ specId }) => (
  <SVG
    id="uuid-d89842b3-25f0-43ed-a144-9e8af64f6d3f"
    data-name="레이어 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 480.49 139.26"
  >
    <defs>
      <style>
        {`
      .uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c {
        fill: #0269b7;
        stroke-width: 0px;
      }

      .uuid-9ac6b6c2-af06-4069-a852-b44f17d59a2b {
        stroke: #a6a6a7;
      }

      .uuid-9ac6b6c2-af06-4069-a852-b44f17d59a2b, .uuid-643d1d67-cb37-4a10-adab-c38480353626 {
        fill: none;
        stroke-miterlimit: 10;
        stroke-width: .5px;
      }

      .uuid-643d1d67-cb37-4a10-adab-c38480353626 {
        stroke: #0269b7;
      }

      .uuid-4323abc0-96ad-4e3f-a461-3f81e29de71f {
        letter-spacing: -.04em;
      }

      .uuid-4323abc0-96ad-4e3f-a461-3f81e29de71f, .uuid-8b9516ef-ff89-456d-bbbc-2330861abce4 {
        fill: #fff;
        font-family: Roboto, sans-serif;
        font-size: 8px;
        font-weight: 400;
      }

      .uuid-8b9516ef-ff89-456d-bbbc-2330861abce4 {
        letter-spacing: -.04em;
      }`}
      </style>
    </defs>
    <g id="uuid-a13c038d-558d-463e-b609-e24f5ecd5cd3" data-name="레이어 1">
      <g>
        <line
          class="uuid-9ac6b6c2-af06-4069-a852-b44f17d59a2b"
          x1="42.13"
          y1="137.81"
          x2="7.62"
          y2="137.81"
        />
        <line
          class="uuid-9ac6b6c2-af06-4069-a852-b44f17d59a2b"
          x1="7.62"
          y1="132.67"
          x2="42.13"
          y2="132.67"
        />
        <g>
          <Line
            $hover={specId === 1}
            class="uuid-643d1d67-cb37-4a10-adab-c38480353626"
            x1="4.54"
            y1="133.16"
            x2="4.54"
            y2="136.64"
          />
          <Polygon
            $hover={specId === 1}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            points="2.72 133.7 4.54 130.54 6.36 133.7 2.72 133.7"
          />
          <Polygon
            $hover={specId === 1}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            points="2.72 136.1 4.54 139.26 6.36 136.1 2.72 136.1"
          />
        </g>
        <line
          class="uuid-9ac6b6c2-af06-4069-a852-b44f17d59a2b"
          x1="126.11"
          y1="130.92"
          x2="126.11"
          y2="49.35"
        />
        <line
          class="uuid-9ac6b6c2-af06-4069-a852-b44f17d59a2b"
          x1="32.23"
          y1="131.15"
          x2="32.23"
        />
        <g>
          <Line
            $hover={specId === 3}
            class="uuid-643d1d67-cb37-4a10-adab-c38480353626"
            x1="38.08"
            y1="57.76"
            x2="122.52"
            y2="57.76"
          />
          <Polygon
            $hover={specId === 3}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            points="38.81 60.26 34.49 57.76 38.81 55.27 38.81 60.26"
          />
          <Polygon
            $hover={specId === 3}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            points="121.79 60.26 126.11 57.76 121.79 55.27 121.79 60.26"
          />
        </g>
        <g>
          <Line
            $hover={specId === 4}
            class="uuid-643d1d67-cb37-4a10-adab-c38480353626"
            x1="388.07"
            y1="34.76"
            x2="472.21"
            y2="34.76"
          />
          <Polygon
            $hover={specId === 4}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            points="388.8 37.26 384.49 34.76 388.8 32.27 388.8 37.26"
          />
          <Polygon
            $hover={specId === 4}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            points="471.48 37.26 475.8 34.76 471.48 32.27 471.48 37.26"
          />
        </g>
        <line
          class="uuid-9ac6b6c2-af06-4069-a852-b44f17d59a2b"
          x1="478.63"
          y1="58.99"
          x2="478.63"
          y2="2.02"
        />
        <g>
          <Line
            $hover={specId === 2}
            class="uuid-643d1d67-cb37-4a10-adab-c38480353626"
            x1="37.51"
            y1="11.31"
            x2="473.5"
            y2="11.31"
          />
          <Polygon
            $hover={specId === 2}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            points="38.24 13.8 33.93 11.31 38.24 8.82 38.24 13.8"
          />
          <Polygon
            $hover={specId === 2}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            points="472.77 13.8 477.09 11.31 472.77 8.82 472.77 13.8"
          />
        </g>
        <line
          class="uuid-9ac6b6c2-af06-4069-a852-b44f17d59a2b"
          x1="384.49"
          y1="52.36"
          x2="384.49"
          y2="27.32"
        />
        <line
          class="uuid-9ac6b6c2-af06-4069-a852-b44f17d59a2b"
          x1="129.99"
          y1="137.36"
          x2="474.67"
          y2="137.36"
        />
        <g>
          <Line
            $hover={specId === 5}
            class="uuid-643d1d67-cb37-4a10-adab-c38480353626"
            x1="478"
            y1="67.59"
            x2="478"
            y2="133.77"
          />
          <Polygon
            $hover={specId === 5}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            points="475.5 68.32 478 64.01 480.49 68.32 475.5 68.32"
          />
          <Polygon
            $hover={specId === 5}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            points="475.5 133.05 478 137.36 480.49 133.05 475.5 133.05"
          />
        </g>
        <g>
          <Circle
            $hover={specId === 2}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            cx="255.51"
            cy="19.04"
            r="4.54"
          />
          <text
            class="uuid-4323abc0-96ad-4e3f-a461-3f81e29de71f"
            transform="translate(252.86 22.04)"
          >
            <tspan x="0" y="0">
              2
            </tspan>
          </text>
        </g>
        <g>
          <Circle
            $hover={specId === 3}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            cx="80.3"
            cy="64.57"
            r="4.54"
          />
          <text
            class="uuid-8b9516ef-ff89-456d-bbbc-2330861abce4"
            transform="translate(77.65 67.57)"
          >
            <tspan x="0" y="0">
              3
            </tspan>
          </text>
        </g>
        <g>
          <Circle
            $hover={specId === 1}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            cx="4.54"
            cy="123.42"
            r="4.54"
          />
          <text
            class="uuid-8b9516ef-ff89-456d-bbbc-2330861abce4"
            transform="translate(2.42 126.42)"
          >
            <tspan x="0" y="0">
              1
            </tspan>
          </text>
        </g>
        <g>
          <Circle
            $hover={specId === 4}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            cx="430.14"
            cy="41.89"
            r="4.54"
          />
          <text
            class="uuid-4323abc0-96ad-4e3f-a461-3f81e29de71f"
            transform="translate(427.49 44.89)"
          >
            <tspan x="0" y="0">
              4
            </tspan>
          </text>
        </g>
        <g>
          <Circle
            $hover={specId === 5}
            class="uuid-570818bc-aa6b-47e2-95c1-38dedf52a79c"
            cx="471.77"
            cy="93.72"
            r="4.54"
          />
          <text
            class="uuid-4323abc0-96ad-4e3f-a461-3f81e29de71f"
            transform="translate(469.12 96.72)"
          >
            <tspan x="0" y="0">
              5
            </tspan>
          </text>
        </g>
      </g>
    </g>
  </SVG>
);

export default CobraInfo;
