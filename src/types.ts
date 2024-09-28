import { initialLoaderValue } from "./constant";

export interface RequiredLoaderProps {
  width: number | string;
  primary: string;
  secondary: string;
  border: number | string;
  speed: number | string;
}

export interface LoaderProps extends Partial<RequiredLoaderProps> {
  loader?: number;
  customCSS?: string;
}

export class InitLoader implements RequiredLoaderProps {
  loader?: number;
  width: string;
  primary: string;
  secondary: string;
  border: string;
  speed: string;

 
  constructor(props: LoaderProps = {}) {
    this.loader = props.loader;
    this.width = this.mutateValue(props.width, String(initialLoaderValue.width), "px");
    this.primary = props.primary ?? "#570df8";
    this.secondary = props.secondary ?? "#ffffff";
    this.border = this.mutateValue(props.border, String(initialLoaderValue.border), "px");
    this.speed = this.mutateValue(props.speed, String(initialLoaderValue.speed), "s");
  }

  mutateValue(data: string | number | undefined, defaultValue: string, ext: string): string {
    if (!data) return defaultValue;
    if (typeof data === "number") return `${String(data)}${ext}`;
    return data;
  }

}

export type ICategory = "Bar" | "Spinner";

export interface ILoaderType {
  id: number;
  html: string;
  css: (props: LoaderProps) => string;
  categories: ICategory[];
}