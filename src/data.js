import semiBook from "./img/semiBook.svg";
import parts from "./img/parts.svg";
import machines from "./img/machines.svg";
//header 이미지 경로
import aboutImg from "../src/img/about.jpg";
import semiImg from "../src/img/semi.jpg";

export const linkBtns = [
  {
    text: "blog",
    icon: <i class="fa-brands fa-blogger-b"></i>,
    link: "http://blog.naver.com/mempro_sales",
  },
  {
    text: "catalog",
    icon: <i class="fa-solid fa-book"></i>,
    link: "http://www.mempro.co.kr",
  },
];

export const add = [
  {
    type: "Headquarters",
    nation: "Republic of Korea",
    address:
      "GIDC-C dong 1109, 43, iljik-ro, Gwangmyeong-si, Gyeonggi-do, 14353, Republic of Korea",
    tell: "+82 2-6265-2495",
    fax: "+82 2-6265-2496",
    mail: "mempro_group@mempro.co.kr",
  },
  {
    type: "OverSeas Offices",
    nation: "Taiwan",
    address:
      "Rm. 1,3F., No.15 Aly.29, Ln. 136, Kangle St., Neihu Dist., Taipai City, Taiwan(R.O.C), 114038",
    tell: "+886-918-6761502",
    fax: "+82 2-6265-2496",
    mail: "mempro_group@mempro.co.kr",
  },
];

export const items = [
  {
    category: "about MEMPro",
    link: "about",
    headerImg: aboutImg,
  },
  {
    category: "semiconductor",
    id: "parts",
    link: "semi",
    headerImg: semiImg,
    tag: (
      <path d="M924.29,143.44l-377.51,215.2-35.12,20.02L213.67,210.14l-.24-.15-22.3-12.87c-16.04-9.26-16.15-24.29-.19-33.57l121.7-70.72c15.96-9.27,41.91-9.26,57.95,0l22.3,12.87c16.06,9.28,42.01,9.26,57.97-.01l25.55-14.85c15.96-9.28,41.93-9.28,58,0l47.7,27.54c16.06,9.27,42.01,9.26,57.97-.01l91.1-52.95c15.96-9.27,41.93-9.27,57.99,0l135.12,78.02Z" />
    ),
    subcategories: [
      {
        diagram: "wafer",
        subcategory: [
          { name: "Diamond Wire", link: "diamond" },
          { name: "Twist Diamond Wire", link: "twistdiamond" },
        ],
      },
      {
        diagram: "etching",
        subcategory: [{ name: "Focus Ring Electode", link: "etching" }],
      },
      {
        diagram: "EDS-cantilever",
        subcategory: [
          { name: "Cantilever", link: "cantilever" },
          { name: "Cantilever-Stiffener", link: "stiffener" },
          { name: "Cantilever-Probe", link: "cprobe" },
          { name: "PI-Tube", link: "tube" },
        ],
      },
      {
        diagram: "EDS-vertical",
        subcategory: [
          { name: "Vertical", link: "vertical" },
          { name: "Vertical-Stiffener", link: "vstiffener" },
          { name: "Vertical-Probe", link: "vprobe" },
          { name: "Ceramic HoleGuide", link: "ceramic" },
        ],
      },
    ],
  },
  {
    category: "led",
    subcategories: [
      {
        diagram: "process",
        subcategory: [{ name: "Coater", link: "coater" }],
      },
      {
        diagram: "eds",
        subcategory: [{ name: "Led Probe", link: "ledprobe" }],
      },
    ],
    link: "led",
    tag: (
      <path d="M331.9,476.36l167.16,95.02-102.02,64.15-28.39-16.39c-16.06-9.28-42.01-9.27-57.97.01l-19.38,11.26c-15.96,9.28-41.93,9.28-58,0L12.1,502.7c-16.07-9.27-16.13-24.3-.17-33.58l77.17-44.84c15.96-9.28,15.87-24.32-.19-33.6l-36.38-21c-16.06-9.27-16.15-24.32-.19-33.59l160.55-93.3c15.87-9.22,15.89-24.15.07-33.43l297.99,168.52-179.05,98.48Z" />
    ),
  },
  {
    category: "substrate",
    subcategories: [
      {
        diagram: "Process",
        subcategory: [
          { name: "PP Sheet", link: "pp" },
          { name: "Ceramic Brush", link: "brush" },
        ],
      },
    ],
    link: "subs",
    tag: (
      <path d="M870.93,547.21l-225.01,130.76c-15.96,9.28-41.93,9.28-57.99.01l-9.41-5.43c-16.06-9.28-42.03-9.28-57.99,0-15.94,9.26-41.91,9.26-57.97-.01l-64.45-37.21,102.02-64.15-167.16-95.02,179.05-98.48,35.12-20.02,218.07,127.66,105.72,61.89Z" />
    ),
  },
  {
    category: "BBT",
    subcategories: [
      {
        diagram: "BBT",
        subcategory: [
          { name: "Wire Probe", link: "wire" },
          { name: "Universal Probe", link: "universal" },
          { name: "Dimple Probe", link: "dimple" },
          { name: "Spring Wire Probe", link: "spring" },
        ],
      },
    ],
    link: "bbt",

    tag: (
      <path d="M1026.94,311.09l-25.67,14.92c-11.52,6.7-14.69,16.39-9.52,24.75l-226,135.17-218.07-127.66,377.51-215.2,86.09,49.7c16.06,9.27,16.13,24.3.17,33.58l-7.65,4.44c-15.96,9.28-15.85,24.31.21,33.58l22.74,13.13c16.07,9.28,16.15,24.32.19,33.59Z" />
    ),
  },
  {
    category: "capted",
    subcategories: [
      {
        diagram: "Process",
        subcategory: [
          { name: "Road Stus", link: "stus" },
          { name: "Bollard", link: "bollard" },
          { name: "Solar Lighr", link: "solar" },
          { name: "Logo Jector", link: "logojector" },
        ],
      },
    ],
    link: "capted",

    tag: (
      <path d="M1069.39,431.59l-198.35,115.27-105.72-61.89,226-135.17c1.99,3.23,5.22,6.25,9.69,8.83l68.19,39.37c16.07,9.28,16.15,24.32.19,33.59Z" />
    ),
  },
  {
    category: "contact",
    link: "contact",
  },
];

export const machine = [
  {
    category: "machine",
    subcategories: [
      {
        diagram: "Sanding Machine",
        subcategory: [
          { name: "330 Sanding Machine", link: "330" },
          { name: "Vertical Sanding Machine", link: "vertical" },
          { name: "Multi Sanding Machine", link: "multi" },
          { name: "Vision Sanding Machine", link: "vision" },
          { name: "Idling Sanding Machine", link: "idling" },
        ],
        link: "sanding",
      },

      {
        diagram: "Bending Machine",
        subcategory: [{ name: "Length Benging Machine", link: "length" }],
        link: "bending",
      },
      {
        diagram: "Manual Prober",
        subcategory: [
          { name: "330 Manual Prober", link: "330" },
          { name: "440 Manual Prober", link: "440" },
          { name: "480 Manual Prober", link: "480" },
          { name: "520 Semi Auto Prober", link: "520" },
        ],
        link: "manual",
      },
      {
        diagram: "Punching Machine",
        subcategory: [{ name: "Punching Machine", link: "punching" }],
        link: "punching",
      },
      {
        diagram: "Prober Tester",
        subcategory: [
          { name: "Probe C.C.C Tester", link: "ccc" },
          { name: "Probe Life Cycle Tester", link: "lifecycle" },
        ],
        link: "tester",
      },
      {
        diagram: "PogoPin Caulking",
        subcategory: [
          { name: "R-Caulking Machine", link: "rcaulking" },
          { name: "Roll Caulking Machine", link: "rollcaulking" },
        ],
        link: "pogo",
      },
      {
        diagram: "Rubber Socket Tester",
        subcategory: [
          { name: "MRC Contact Machine", link: "mrc" },
          { name: "Multi Auto Contact Machine", link: "multi" },
          { name: "Socket Aging Machine", link: "socket" },
        ],
        link: "rubber",
      },
    ],
    link: "machine",
  },
];

export const books = [
  {
    name: "Semicondutor",
    dec: [
      {
        type: "Parts",
        img: parts,
      },
      {
        type: "Machines",
        img: machines,
      },
    ],
    img: semiBook,
    url: "http://mempro.myqnapcloud.com:80/",
  },
];
