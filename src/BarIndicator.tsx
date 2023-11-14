import { CSSProperties } from "react";

export function BarIndicator(props: {
    min: number;
    max: number;
    val: number;
    alignRight?: boolean;
    containerStyle?: CSSProperties;
    barStyle?: CSSProperties;
  }) {
    const { min, max, val } = props;
    const width = ((val - min) / (max - min)) * 100; // Calculate the width as a percentage
  
    return (
      <div className="rounded-sm bg-gray-200 w-56" style={props.containerStyle}>
        <div className="relative h-6">
          <div
            className={`bg-green-500 h-full absolute ${
              props.alignRight ? " top-0 right-0" : ""
            } rounded-sm`}
            style={{
              ...props.barStyle,
              width: `${width}%`,
            }}
          ></div>
        </div>
      </div>
    );
  }