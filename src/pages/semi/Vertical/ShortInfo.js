import styled from "styled-components";

const SVG = styled.svg`
  width: 100%;
  max-width: 900px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-51%, -57%) scale(1);
`;
const Text = styled.text`
  font-size: 10px;
  fill: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
  font-weight: 600;
  tspan: {
    letter-spacing: 0em;
  }
`;
const Line = styled.line`
  stroke: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
`;
const Polygon = styled.polygon`
  fill: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
`;
const Circle = styled.circle`
  fill: ${(props) =>
    props.$hover ? props.theme.colors.gold : props.theme.colors.blue};
`;

const ShortInfo = ({ tableHeader }) => (
  <SVG
    id="uuid-dbcfcf9a-15d5-46b2-963a-2654892a9673"
    data-name="레이어 2"
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 444.08 111.75"
  >
    <defs>
      <style>
        {`
      .uuid-08776eb7-e473-4b8d-92bf-3f103b0da70b {
        stroke-width: 0px;
      }

      .uuid-08776eb7-e473-4b8d-92bf-3f103b0da70b, .uuid-de12e8f2-a220-4b5d-ae4e-66c7cb1de3a0 {
        fill: #0269b7;
      }

      .uuid-244edb2a-9317-48d4-b9ad-43e54f1cf141 {
        letter-spacing: -.02em;
      }

      .uuid-c8a6ff61-3cd6-402b-b1f3-2598228c18d5 {
        letter-spacing: .01em;
      }

      .uuid-de12e8f2-a220-4b5d-ae4e-66c7cb1de3a0, .uuid-c4a8fc87-c602-4e87-a459-df91c961bd3a {
        font-family: Pretendard-SemiBold-KSCpc-EUC-H, Pretendard;
        font-size: 10px;
        font-weight: 600;
      }

      .uuid-7cc12c89-e348-4f5f-a36b-2db502c38437 {
        stroke: #a6a6a7;
      }

      .uuid-7cc12c89-e348-4f5f-a36b-2db502c38437, .uuid-8f46dbe0-5f3f-4bde-a13d-08cc96f242f2 {
        fill: none;
        stroke-miterlimit: 10;
        stroke-width: .5px;
      }

      .uuid-c4a8fc87-c602-4e87-a459-df91c961bd3a {
        fill: #333;
      }

      .uuid-3e2ce877-dee5-4fa2-a3c6-4a97084557b7 {
        letter-spacing: -.03em;
      }

      .uuid-8f46dbe0-5f3f-4bde-a13d-08cc96f242f2 {
        stroke: #0269b7;
      }

      .uuid-20e68fa3-ba4c-4dc3-900f-29c681816d59 {
        letter-spacing: -.02em;
      }

      .uuid-03ae8d9d-a372-4d91-906c-923b248e5fbb {
        letter-spacing: 0em;
      }

      .uuid-5acb73e6-7370-44c5-92fd-2113fbc1036c {
        letter-spacing: -.02em;
      }

      .uuid-40fd9b54-68a3-407a-afe2-ee5736fde7dd {
        letter-spacing: -.04em;
      }

      .uuid-4175e895-935b-485b-be45-0a98ae268aff {
        letter-spacing: 0em;
      }`}
      </style>
    </defs>
    <g id="uuid-9bf3949e-6ac5-49eb-8e54-5da10aa63dd2" data-name="레이어 1">
      <g>
        <g>
          <Line
            $hover={tableHeader === "2"}
            class="uuid-8f46dbe0-5f3f-4bde-a13d-08cc96f242f2"
            x1="440.5"
            y1="32.63"
            x2="5.47"
            y2="32.63"
          />
          <Polygon
            $hover={tableHeader === "2"}
            class="uuid-08776eb7-e473-4b8d-92bf-3f103b0da70b"
            points="439.77 30.13 444.08 32.63 439.77 35.12 439.77 30.13"
          />
          <Polygon
            $hover={tableHeader === "2"}
            class="uuid-08776eb7-e473-4b8d-92bf-3f103b0da70b"
            points="6.2 30.13 1.88 32.63 6.2 35.12 6.2 30.13"
          />
        </g>
        <line
          class="uuid-7cc12c89-e348-4f5f-a36b-2db502c38437"
          x1="405.22"
          y1="57.37"
          x2="388.26"
          y2="57.37"
        />
        <line
          class="uuid-7cc12c89-e348-4f5f-a36b-2db502c38437"
          x1="405.22"
          y1="72.43"
          x2="388.26"
          y2="72.43"
        />
        <text
          class="uuid-c4a8fc87-c602-4e87-a459-df91c961bd3a"
          transform="translate(18.71 93.69)"
        >
          <tspan x="0" y="0">
            Ø 0.040 - 1.2 mm
          </tspan>
          <tspan
            class="uuid-3e2ce877-dee5-4fa2-a3c6-4a97084557b7"
            x="11.78"
            y="0"
          ></tspan>
          <tspan x="22.04" y="0"></tspan>
          <tspan
            class="uuid-40fd9b54-68a3-407a-afe2-ee5736fde7dd"
            x="56.13"
            y="0"
          ></tspan>
          <tspan x="61.18" y="0"></tspan>
          <tspan x="-18.71" y="14.4">
            Sharp Tip on Both Sides
          </tspan>
          <tspan
            class="uuid-c8a6ff61-3cd6-402b-b1f3-2598228c18d5"
            x="68.88"
            y="14.4"
          ></tspan>
          <tspan x="73.34" y="14.4"></tspan>
        </text>
        <Text
          $hover={tableHeader === "2"}
          class="uuid-de12e8f2-a220-4b5d-ae4e-66c7cb1de3a0"
          transform="translate(211.82 11.43)"
        >
          <tspan x="0" y="0">
            Length
          </tspan>
          <tspan
            class="uuid-c8a6ff61-3cd6-402b-b1f3-2598228c18d5"
            x="27.49"
            y="0"
          ></tspan>
          <tspan x="31.95" y="0"></tspan>
          <tspan x="-13.23" y="14.4">
            1285.70 μm
          </tspan>
          <tspan
            class="uuid-244edb2a-9317-48d4-b9ad-43e54f1cf141"
            x="7.08"
            y="14.4"
          ></tspan>
          <tspan
            class="uuid-20e68fa3-ba4c-4dc3-900f-29c681816d59"
            x="14.21"
            y="14.4"
          ></tspan>
          <tspan
            class="uuid-5acb73e6-7370-44c5-92fd-2113fbc1036c"
            x="17.21"
            y="14.4"
          ></tspan>
          <tspan x="23.84" y="14.4"></tspan>
        </Text>
        <Text
          $hover={tableHeader === "1"}
          class="uuid-de12e8f2-a220-4b5d-ae4e-66c7cb1de3a0"
          transform="translate(338.1 93.69)"
        >
          <tspan x="0" y="0">
            Diameter
          </tspan>
          <tspan x="35.05" y="0"></tspan>
          <tspan x="39.31" y="0"></tspan>
          <tspan x="-1.48" y="14.4">
            40.52 μm
          </tspan>
          <tspan
            class="uuid-3e2ce877-dee5-4fa2-a3c6-4a97084557b7"
            x="6.27"
            y="14.4"
          ></tspan>
          <tspan
            class="uuid-4175e895-935b-485b-be45-0a98ae268aff"
            x="13.6"
            y="14.4"
          ></tspan>
          <tspan x="16.77" y="14.4"></tspan>
        </Text>
        <line
          class="uuid-7cc12c89-e348-4f5f-a36b-2db502c38437"
          x1="1.88"
          y1="60.29"
          x2="1.88"
          y2="14.12"
        />
        <line
          class="uuid-7cc12c89-e348-4f5f-a36b-2db502c38437"
          x1="443.71"
          y1="56.64"
          x2="443.71"
          y2="14.12"
        />
        <g>
          <Line
            $hover={tableHeader === "1"}
            class="uuid-8f46dbe0-5f3f-4bde-a13d-08cc96f242f2"
            x1="396.61"
            y1="88.06"
            x2="396.75"
            y2="74.69"
          />
          <Polygon
            $hover={tableHeader === "1"}
            class="uuid-08776eb7-e473-4b8d-92bf-3f103b0da70b"
            points="398.74 75.3 396.78 71.82 394.75 75.26 398.74 75.3"
          />
        </g>
        <g>
          <Line
            $hover={tableHeader === "1"}
            class="uuid-8f46dbe0-5f3f-4bde-a13d-08cc96f242f2"
            x1="396.87"
            y1="39.5"
            x2="396.72"
            y2="53.95"
          />
          <Polygon
            $hover={tableHeader === "1"}
            class="uuid-08776eb7-e473-4b8d-92bf-3f103b0da70b"
            points="394.73 53.34 396.69 56.82 398.72 53.38 394.73 53.34"
          />
        </g>
      </g>
    </g>
  </SVG>
);

export default ShortInfo;
