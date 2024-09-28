import { type ILoaderType, InitLoader, RequiredLoaderProps } from "./types";

export const initialLoaderValue: RequiredLoaderProps = {
  width: "48px",
  secondary: "#ffffff",
  primary: "blue",
  border: "5px",
  speed: "1.5s"
};

export const LOADER: ILoaderType[] = [
  {
    id: 1,
    html: "<div class=\"loader1\"></div>",
    categories: ["Spinner"],
    css: (props) => {
      const { width, secondary, primary, border, speed } = new InitLoader(props);
      return `.loader1 {
        width: ${width};
        height: ${width};
        border: ${border} solid ${secondary};
        border-bottom-color: ${primary};
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation ${speed} linear infinite;
      }
      @keyframes rotation {
        0% {
          transform: rotate(0deg);
        }
      
        100% {
          transform: rotate(360deg);
        }
      }`;
    }
  },

  {
    id: 2,
    html: "<div class=\"loader2\"></div>",
    categories: ["Spinner"],
    css: (props) => {
      const { width, primary, border, speed } = new InitLoader(props);
      return `.loader2 {
        width: ${width};
        height: ${width};
        border: ${border} solid ${primary};
        border-bottom-color: transparent;
        border-radius: 50%;
        display: inline-block;
        box-sizing: border-box;
        animation: rotation2 ${speed} linear infinite;
    }
    
    @keyframes rotation2 {
        0% {
            transform: rotate(0deg);
        }
    
        100% {
            transform: rotate(360deg);
        }
    }`;
    }
  },
  {
    "id": 3,
    "html": "<div class=\"loader3\"></div>",
    "categories": ["Spinner"],
    "css": (props) => {
      const { width, secondary, primary, border, speed } = new InitLoader(props);
      return `.loader3 {
        width: ${width};
        height: ${width};
        border-radius: 50%;
        position: relative;
        display:inline-block;
        animation: rotate3 ${speed} linear infinite;
      }

      .loader3::after, .loader3::before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: ${border} solid ${secondary};
        animation: prixClipFix3 2s linear infinite;
      }
      
      .loader3::after {
        transform: rotate3d(90, 90, 0, 180deg);
        border-color: ${primary};
      }

      @keyframes rotate3 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      @keyframes prixClipFix3 {
        0% {
          clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
        }
        50% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
        }
        75%, 100% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
        }
      }`;
    }
  },
  {
    "id": 4,
    "html": "<div class=\"loader4\"></div>",
    "categories": ["Spinner"],
    "css": (props) => {
      const { width, primary, border, speed } = new InitLoader(props);
      return `.loader4 {
        width: ${width};
        height: ${width};
        border-radius: 50%;
        position: relative;
        display:inline-block;
        animation: rotate4 ${speed} linear infinite;
      }
      
      .loader4::before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: ${border} solid ${primary};
        animation: prixClipFix4 2s linear infinite;
      }
      
      @keyframes rotate4 {
        100% {
          transform: rotate(360deg);
        }
      }
      
      @keyframes prixClipFix4 {
        0% {
          clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
        }
        25% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
        }
        50% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
        }
        75% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
        }
        100% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
        }
      }`;
    }
  },
  {
    "id": 5,
    "html": "<div class=\"loader5\"></div>",
    "categories": ["Spinner"],
    "css": (props) => {
      const { width, secondary, primary, border, speed } = new InitLoader(props);
      return `.loader5 {
        width: ${width};
        height: ${width};
        border-radius: 50%;
        position: relative;
        display:inline-block;
        animation: rotate5 ${speed} linear infinite;
      }
      
      .loader5::before, .loader5::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: ${border} solid ${secondary};
        animation: prixClipFix5 2s linear infinite;
      }
      
      .loader5::after {
        inset: 8px;
        transform: rotate3d(90, 90, 0, 180deg);
        border-color: ${primary};
      }
      
      @keyframes rotate5 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      
      @keyframes prixClipFix5 {
        0% {
          clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
        }
        50% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
        }
        75%, 100% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
        }
      }`;
    }
  },
  {
    "id": 6,
    "html": "<div class=\"loader6\"></div>",
    "categories": ["Spinner"],
    "css": (props) => {
      const { width, secondary, primary, border, speed } = new InitLoader(props);
      return `.loader6 {
        width: ${width};
        height: ${width};
        border-radius: 50%;
        position: relative;
        display:inline-block;
        animation: rotate6 ${speed} linear infinite;
      }

      .loader6::before, .loader6::after {
        content: "";
        box-sizing: border-box;
        position: absolute;
        inset: 0px;
        border-radius: 50%;
        border: ${border} solid ${secondary};
        animation: prixClipFix6 2s linear infinite;
      }

      .loader6::after {
        border-color: ${primary};
        animation: prixClipFix6 2s linear infinite, rotate 0.5s linear infinite reverse;
        inset: 6px;
      }

      @keyframes rotate6 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }

      @keyframes prixClipFix6 {
        0% {
          clip-path: polygon(50% 50%, 0 0, 0 0, 0 0, 0 0, 0 0);
        }
        25% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 0, 100% 0, 100% 0);
        }
        50% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 100% 100%, 100% 100%);
        }
        75% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 100%);
        }
        100% {
          clip-path: polygon(50% 50%, 0 0, 100% 0, 100% 100%, 0 100%, 0 0);
        }
      }`;
    }
  },
  {
    "id": 7,
    "html": "<div class=\"loader7\"></div>",
    "categories": ["Spinner"],
    "css": (props) => {
      const { width, secondary, primary, border, speed } = new InitLoader(props);
      return `.loader7 {
        width: ${width};
        height: ${width};
        border: ${border} solid ${secondary};
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation7 ${speed} linear infinite;
      }

      .loader7::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(${width} + 18px);
        height: calc(${width} + 18px);
        border-radius: 50%;
        border: ${border} solid transparent;
        border-bottom-color: ${primary};
      }

      @keyframes rotation7 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }`;
    }
  },
  {
    "id": 8,
    "html": "<div class=\"loader8\"></div>",
    "categories": ["Spinner"],
    "css": (props) => {
      const { width, primary, border, speed } = new InitLoader(props);
      return `.loader8 {
        width: ${width};
        height: ${width};
        border-radius: 50%;
        display: inline-block;
        border-top: ${border} solid ${primary};
        border-right: ${border} solid transparent;
        box-sizing: border-box;
        animation: rotation8 ${speed} linear infinite;
      }

      @keyframes rotation8 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }`;
    }
  },
  {
    "id": 9,
    "html": "<div class=\"loader9\"></div>",
    "categories": ["Spinner"],
    "css": (props) => {
      const { width, secondary, primary, border, speed } = new InitLoader(props);
      return `.loader9 {
        width: ${width};
        height: ${width};
        border: ${border} solid ${secondary};
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation9 ${speed} linear infinite;
      }
      .loader9::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(${width} - 15px);
        height: calc(${width} - 15px);
        border-radius: 50%;
        border: ${border} solid;
        border-color: ${primary} transparent;
      }
      @keyframes rotation9 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }`;
    }
  },
  {
    "id": 10,
    "html": "<div class=\"loader10\"></div>",
    "categories": ["Spinner"],
    "css": (props) => {
      const { width, secondary, primary, border, speed } = new InitLoader(props);
      return `.loader10 {
        width: ${width};
        height: ${width};
        border: ${border} solid ${secondary};
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation10 ${speed} linear infinite;
      }
      .loader10::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        width: calc(${width} + 15px);
        height: calc(${width} + 15px);
        border-radius: 50%;
        border: ${border} solid;
        border-color: ${primary} transparent;
      }
      @keyframes rotation10 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }`;
    }
  },
  {
    "id": 11,
    "html": "<div class=\"loader11\"></div>",
    "categories": ["Spinner"],
    "css": (props) => {
      const { width, secondary, primary, border, speed } = new InitLoader(props);
      return `.loader11 {
        width: ${width};
        height: ${width};
        border: ${border} solid ${secondary};
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation11 ${speed} linear infinite;
      }
      .loader11::after,
      .loader11::before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        background: ${primary};
        width: ${border};
        height: ${border};
        transform: translate(150%, 150%);
        border-radius: 50%;
      }
      .loader11::before {
        left: auto;
        top: auto;
        right: 0;
        bottom: 0;
        transform: translate(-150%, -150%);
      }
      @keyframes rotation11 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }`;
    }
  },
  {
    "id": 12,
    "html": "<div class=\"loader12\"></div>",
    "categories": ["Spinner"],
    "css": (props) => {
      const { width, secondary, primary, border, speed } = new InitLoader(props);
      return `.loader12 {
        width: ${width};
        height: ${width};
        border: ${border} solid ${secondary};
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation12 ${speed} linear infinite;
      }
      .loader12::after,
      .loader12::before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        background: ${primary};
        width: calc(${border});
        height: calc(${border});
        border-radius: 50%;
      }
      .loader12::before {
        left: auto;
        top: auto;
        right: 0;
        bottom: 0;
      }
      @keyframes rotation12 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }`;
    }
  },

  {
    id: 13,
    html: "<div class=\"loader13\"></div>",
    categories: ["Spinner"],
    css: (props) => {
      const { width, primary, secondary, border, speed } = new InitLoader(props);
      return `.loader13 {
        width: ${width};
        height: ${width};
        border: ${border} solid ${secondary};
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation13 ${speed} linear infinite;
      }
      .loader13::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 0;
        top: 0;
        background: ${primary};
        width: calc(${border} + 10px);
        height: calc(${border} + 10px);
        transform: translate(-50%, 50%);
        border-radius: 50%;
      }
      @keyframes rotation13 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }`;
    },
  },
  {
    id: 14,
    html: "<div class=\"loader14\"></div>",
    categories: ["Spinner"],
    css: (props) => {
      const { width, primary, secondary, border, speed } = new InitLoader(props);
      return `.loader14 {
        width: ${width};
        height: ${width};
        border-radius: 50%;
        display: inline-block;
        position: relative;
        border: ${border} solid;
        border-color: ${secondary} ${secondary} transparent;
        box-sizing: border-box;
        animation: rotation14 ${speed} linear infinite;
      }
      .loader14::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border: ${border} solid;
        border-color: transparent ${primary} ${primary};
        width: calc(${width} - 20px);
        height: calc(${width} - 20px);
        border-radius: 50%;
        animation: rotationBack14 0.5s linear infinite;
        transform-origin: center center;
      }
      @keyframes rotation14 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @keyframes rotationBack14 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }`;
    },
  },
  {
    id: 15,
    html: "<div class=\"loader15\"></div>",
    categories: ["Spinner"],
    css: (props) => {
      const { width, primary, secondary, border, speed } = new InitLoader(props);
      return `.loader15 {
        width: ${width};
        height: ${width};
        border-radius: 50%;
        display: inline-block;
        position: relative;
        border: ${border} solid;
        border-color: ${secondary} ${secondary} transparent transparent;
        box-sizing: border-box;
        animation: rotation15 ${speed} linear infinite;
      }
      .loader15::after,
      .loader15::before {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border: ${border} solid;
        border-color: transparent transparent ${primary} ${primary};
        width: calc(${width} - 24px);
        height: calc(${width} - 24px);
        border-radius: 50%;
        animation: rotationBack15 0.5s linear infinite;
        transform-origin: center center;
      }
      .loader15::before {
        width: calc(${width} - 12px);
        height: calc(${width} - 12px);
        border-color: ${secondary} ${secondary} transparent transparent;
        animation: rotation15 1.5s linear infinite;
      }
      @keyframes rotation15 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @keyframes rotationBack15 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }`;
    },
  },
  {
    id: 16,
    html: "<div class=\"loader16\"></div>",
    categories: ["Spinner"],
    css: (props) => {
      const { width, primary, secondary, border, speed } = new InitLoader(props);
      return `.loader16 {
        width: ${width};
        height: ${width};
        border: ${border} dotted ${secondary};
        border-style: solid solid dotted dotted;
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation16 2s linear infinite;
      }
      .loader16::after {
        content: '';
        box-sizing: border-box;
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        border: ${border} dotted ${primary};
        border-style: solid solid dotted;
        width: calc(${width} - 15px);
        height: calc(${width} - 15px);
        border-radius: 50%;
        animation: rotationBack16 ${speed} linear infinite;
        transform-origin: center center;
      }
      @keyframes rotation16 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }
      @keyframes rotationBack16 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(-360deg);
        }
      }`;
    },
  },
  {
    id: 17,
    html: "<div class=\"loader17\"></div>",
    categories: ["Spinner"],
    css: (props) => {
      const { width, primary, secondary, border, speed } = new InitLoader(props);
      return `.loader17 {
        width: ${width};
        height: ${width};
        border: ${border} solid ${secondary};
        border-radius: 50%;
        display: inline-block;
        position: relative;
        box-sizing: border-box;
        animation: rotation17 ${speed} linear infinite;
      }
      .loader17::after {
        content: '';  
        box-sizing: border-box;
        position: absolute;
        left: 50%;
        top: 0;
        background: ${primary};
        width: ${border};
        height: calc(${width} - 70%);
        transform: translateX(-50%);
      }
      @keyframes rotation17 {
        0% {
          transform: rotate(0deg);
        }
        100% {
          transform: rotate(360deg);
        }
      }`;
    },
  },


  {
    id: 18,
    html: "<div class=\"loader18\"></div>",
    categories: ["Spinner"],
    css: (props) => {
      const { width, secondary, border } = new InitLoader(props);
      return `.loader18 {
          color: ${secondary};
          font-size: calc(${border} + 5px);
          width: calc(${width} - 1.9rem);
          height: calc(${width} - 1.9rem);
          border-radius: 50%;
          position: relative;
          text-indent: -9999em;
          display: inline-block;
          animation: mulShdSpin18 1.3s infinite linear;
          transform: translateZ(0);
      }
      
      @keyframes mulShdSpin18 {
          0%,
          100% {
              box-shadow:
                  0 -3em 0 0.2em,
                  2em -2em 0 0em,
                  3em 0 0 -1em,
                  2em 2em 0 -1em,
                  0 3em 0 -1em,
                  -2em 2em 0 -1em,
                  -3em 0 0 -1em,
                  -2em -2em 0 0;
          }
          12.5% {
              box-shadow:
                  0 -3em 0 0,
                  2em -2em 0 0.2em,
                  3em 0 0 0,
                  2em 2em 0 -1em,
                  0 3em 0 -1em,
                  -2em 2em 0 -1em,
                  -3em 0 0 -1em,
                  -2em -2em 0 -1em;
          }
          25% {
              box-shadow:
                  0 -3em 0 -0.5em,
                  2em -2em 0 0,
                  3em 0 0 0.2em,
                  2em 2em 0 0,
                  0 3em 0 -1em,
                  -2em 2em 0 -1em,
                  -3em 0 0 -1em,
                  -2em -2em 0 -1em;
          }
          37.5% {
              box-shadow:
                  0 -3em 0 -1em,
                  2em -2em 0 -1em,
                  3em 0em 0 0,
                  2em 2em 0 0.2em,
                  0 3em 0 0em,
                  -2em 2em 0 -1em,
                  -3em 0em 0 -1em,
                  -2em -2em 0 -1em;
          }
          50% {
              box-shadow:
                  0 -3em 0 -1em,
                  2em -2em 0 -1em,
                  3em 0 0 -1em,
                  2em 2em 0 0em,
                  0 3em 0 0.2em,
                  -2em 2em 0 0,
                  -3em 0em 0 -1em,
                  -2em -2em 0 -1em;
          }
          62.5% {
              box-shadow:
                  0 -3em 0 -1em,
                  2em -2em 0 -1em,
                  3em 0 0 -1em,
                  2em 2em 0 -1em,
                  0 3em 0 0,
                  -2em 2em 0 0.2em,
                  -3em 0 0 0,
                  -2em -2em 0 -1em;
          }
          75% {
              box-shadow:
                  0em -3em 0 -1em,
                  2em -2em 0 -1em,
                  3em 0em 0 -1em,
                  2em 2em 0 -1em,
                  0 3em 0 -1em,
                  -2em 2em 0 0,
                  -3em 0em 0 0.2em,
                  -2em -2em 0 0;
          }
          87.5% {
              box-shadow:
                  0em -3em 0 0,
                  2em -2em 0 -1em,
                  3em 0 0 -1em,
                  2em 2em 0 -1em,
                  0 3em 0 -1em,
                  -2em 2em 0 0,
                  -3em 0em 0 0,
                  -2em -2em 0 0.2em;
          }
      }`;
    }
  },
  {
    id: 19,
    html: "<div class=\"loader19\"></div>",
    categories: ["Spinner"],
    css: (props) => {
      const { width, secondary, } = new InitLoader(props);
      return `.loader19 {
          color: ${secondary};
          font-size: calc(${width} - 15px);
          text-indent: -9999em;
          overflow: hidden;
          width: 1em;
          height: 1em;
          border-radius: 50%;
          position: relative;
          display: inline-block;
          transform: translateZ(0);
          animation:
            mltShdSpin19 1.7s infinite ease,
            round19 1.7s infinite ease;
      }
      
      @keyframes mltShdSpin19 {
          0% {
              box-shadow:
                  0 -0.83em 0 -0.4em,
                  0 -0.83em 0 -0.42em,
                  0 -0.83em 0 -0.44em,
                  0 -0.83em 0 -0.46em,
                  0 -0.83em 0 -0.477em;
          }
          5%,
          95% {
              box-shadow:
                  0 -0.83em 0 -0.4em,
                  0 -0.83em 0 -0.42em,
                  0 -0.83em 0 -0.44em,
                  0 -0.83em 0 -0.46em,
                  0 -0.83em 0 -0.477em;
          }
          10%,
          59% {
              box-shadow:
                  0 -0.83em 0 -0.4em,
                  -0.087em -0.825em 0 -0.42em,
                  -0.173em -0.812em 0 -0.44em,
                  -0.256em -0.789em 0 -0.46em,
                  -0.297em -0.775em 0 -0.477em;
          }
          20% {
              box-shadow:
                  0 -0.83em 0 -0.4em,
                  -0.338em -0.758em 0 -0.42em,
                  -0.555em -0.617em 0 -0.44em,
                  -0.671em -0.488em 0 -0.46em,
                  -0.749em -0.34em 0 -0.477em;
          }
          38% {
              box-shadow:
                  0 -0.83em 0 -0.4em,
                  -0.377em -0.74em 0 -0.42em,
                  -0.645em -0.522em 0 -0.44em,
                  -0.775em -0.297em 0 -0.46em,
                  -0.82em -0.09em 0 -0.477em;
          }
          100% {
              box-shadow:
                  0 -0.83em 0 -0.4em,
                  0 -0.83em 0 -0.42em,
                  0 -0.83em 0 -0.44em,
                  0 -0.83em 0 -0.46em,
                  0 -0.83em 0 -0.477em;
          }
      }
      
      @keyframes round19 {
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: rotate(360deg);
          }
      }`;
    }
  },
  {
    id: 20,
    html: "<div class=\"loader20\"></div>",
    categories: ["Spinner"],
    css: (props) => {
      const { width, border, speed
      } = new InitLoader(props);
      return `.loader20 {
          font-size: calc(${border} + 2px);
          width: calc(${width} - 10px);
          height: calc(${width} - 10px);
          border-radius: 50%;
          position: relative;
          text-indent: -9999em;
          display: inline-block;
          animation: mulShdSpin20 ${speed} infinite ease;
          transform: translateZ(0);
      }
      @keyframes mulShdSpin20 {
          0%,
          100% {
              box-shadow:
                  0 0 0 -1em,
                  2em 0 0 -1em,
                  3em 0 0 -1em,
                  2em 0 0 -1em,
                  0 0 0 -1em,
                  -2em 0 0 -1em,
                  -3em 0 0 -1em,
                  -2em 0 0 -1em;
          }
          12.5% {
              box-shadow:
                  0 0 0 0,
                  2em 0 0 0.2em,
                  3em 0 0 0.3em,
                  2em 0 0 -1em,
                  0 0 0 -1em,
                  -2em 0 0 -1em,
                  -3em 0 0 -1em,
                  -2em 0 0 -1em;
          }
          25% {
              box-shadow:
                  0 0 0 -0.5em,
                  2em 0 0 0,
                  3em 0 0 0.2em,
                  2em 0 0 0,
                  0 0 0 -1em,
                  -2em 0 0 -1em,
                  -3em 0 0 -1em,
                  -2em 0 0 -1em;
          }
      }`;
    }
  },

  {
    id: 23,
    html: "<div class=\"loader23\"></div>",
    categories: ["Spinner"],
    css: (props) => {
      const { width, primary, border, speed } = new InitLoader(props);
      return `.loader23 {
          width: ${width};
          height: ${width};
          border: ${border} solid;
          border-color: ${primary} transparent;
          border-radius: 50%;
          display: inline-block;
          box-sizing: border-box;
          animation: rotation23 ${speed} linear infinite;
      }
      
      @keyframes rotation23 {
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: rotate(360deg);
          }
      }`;
    }
  },
  {
    id: 24,
    html: "<div class=\"loader24\"></div>",
    categories: ["Spinner"],
    css: (props) => {
      const { width, border, speed } = new InitLoader(props);
      return `.loader24 {
          width: ${width};
          height: ${width};
          border-radius: 50%;
          display: inline-block;
          position: relative;
          border: calc(${border} + 5px) solid;
          border-color: rgba(216, 221, 228, 0.15) rgba(216, 221, 228, 0.5)
            rgba(216, 221, 228, 0.6) rgba(216, 221, 228, 0.8);
          box-sizing: border-box;
          animation: rotation24 ${speed} linear infinite;
      }
      
      @keyframes rotation24 {
          0% {
              transform: rotate(0deg);
          }
          100% {
              transform: rotate(360deg);
          }
      }`;
    }
  }

];

export const totalLoaderCount = LOADER.length;
