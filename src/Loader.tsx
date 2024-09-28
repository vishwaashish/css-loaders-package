import React, { useEffect } from "react";
import { LOADER } from "./constant";
import { InitLoader, LoaderProps } from "./types";

const injectedStyles = new Set<string>();

const injectStyles = (css: string) => {
  if (injectedStyles.has(css)) return; // Avoid duplicate styles
  const style = document.createElement("style");
  style.textContent = css;
  document.head.appendChild(style);
  injectedStyles.add(css);
};


const Loader: React.FC<LoaderProps> = (props) => {
  const { loader = 1, customCSS = "" } = props;
  const item = LOADER.find((item) => item.id === loader);

  useEffect(() => {
    if (item) {
      const loaderProps: LoaderProps = new InitLoader(props);
      let css = item.css(loaderProps);
      if (customCSS) {
        css += `\n${customCSS}`;
      }
      injectStyles(css);
    }
  }, [props]);

  if (!item) return null;

  return <div dangerouslySetInnerHTML={{ __html: item.html }} />;
};

export default Loader;
