import React from "react";
import { BarChart, Bar, XAxis, YAxis, Tooltip, Legend, Label } from "recharts";

export interface dataFormat{
  Date: string;
  AFP?: number;
  CEA?: number;
  CV19?: number;
}

interface labelFormat{
  key: string;
  color: string;
}

type Props = {
  title: string;
  dataKey:string;
  oxLabel:string;
  oyLabel:string;
  values:dataFormat[];
  yLimit:number[];
  labels:labelFormat[];
};


const BarGraph = ({
  title,
  dataKey,
  oxLabel,
  oyLabel,
  values,
  yLimit,
  labels
}:Props) => {

  return (
    <div>
      <h3>{title}</h3>
      <BarChart
        width={900}
        height={300}
        data={values}
        margin={{ top: 30, right: 30, left: 20, bottom: 5 }}
      >
        <XAxis dataKey={dataKey}>
          <Label value={oxLabel} position="insideBottomRight" dy={10} dx={20} fill="gray" />
        </XAxis>
        <YAxis type="number" domain={yLimit}>
          <Label
            value={oyLabel}
            position="left"
            angle={-90}
            dy={-20}
            dx={-10}
            fill="gray"
          />
        </YAxis>
        <Tooltip />
        <Legend
          // onClick={selectBar}
          // onMouseOver={handleLegendMouseEnter}
          // onMouseOut={handleLegendMouseLeave}
        />
        {labels.map((label, index) => (
          <Bar
            key={index}
            dataKey={label.key}
            fill={label.color}
            stackId={dataKey}
          />
        ))}
      </BarChart>
    </div>
  );
};

export default BarGraph;
