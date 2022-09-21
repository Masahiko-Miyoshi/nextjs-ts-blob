import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import { Box, Grid } from "@/components/common/Layout";
const BarGraph = dynamic(
  import("@/components/graph/BarGraph"),
  { ssr: false }
);
import type {dataFormat} from "@/components/graph/BarGraph";


const ReagentClock = () =>{
  const [nowTime,setNowTime] = useState<string>("");

  useEffect(()=>{
    const intervalId:NodeJS.Timer = setInterval(()=>
      {
        setNowTime(new Date().toTimeString());
    }, 1000);
    return ()=>{
      clearInterval(intervalId);
    } 
  },
  []);
  return(
    <div>
      {nowTime}
    </div>

  );
}

export const ReagentGraph = () => {
  const inputData = {
    dataKey: "Date",
    oyLabel: "検査数",
    oxLabel: "日時",
    yLimit: [0, 1],
  };

 const initValue:dataFormat[] = [
      { Date: "2020-09-01", AFP: 123, CEA: 240, CV19: 212 },
      { Date: "2020-09-02", AFP: 43, CEA: 139 },
      { Date: "2020-09-03", AFP: 23, CEA: 100, CV19: 32 },
      { Date: "2020-09-04", AFP: 231, CEA: 18 },
      { Date: "2020-09-05", AFP: 143, CEA: 48, CV19: 122 },
      { Date: "2020-09-06", AFP: 29, CEA: 38 },
      { Date: "2020-09-07", AFP: 23, CEA: 43 },
      { Date: "2020-09-08", AFP: 124, CEA: 24, CV19: 212 },
      { Date: "2020-09-09", AFP: 231, CEA: 13 },
      { Date: "2020-09-10", AFP: 215, CEA: 98, CV19: 30 },
    ]

  const inputLabels = [
    { key: "AFP", color: "#8884d8" },
    { key: "CEA", color: "#82ca9d" },
    { key: "CV19", color: "#81cc2d" }
  ];
  
  const [data,setData] = useState<dataFormat[]>(initValue);

  const fetchData = async () => {
    const response = await fetch('/api/azuredb/?table=ReagentConsume');
    const respData:dataFormat[] = await response.json();
    const respDataDateChanged:dataFormat[] = respData.map((value)=>{
      const valueBak:dataFormat = value;
      valueBak.Date = value.Date.slice(0,10);
      return valueBak;
    })
    setData(respDataDateChanged);
  }

  useEffect(()=>{
    const intervalId:NodeJS.Timer = setInterval(()=>
      {
        fetchData();
        
    }, 2000);
    return ()=>{
      clearInterval(intervalId);
    } 
  },
  []);


  return (

      <Grid gap="4" columns={{ '@initial': '1', '@md': '1', '@lg': '1' }}>
        <ReagentClock />
        <Box
          css={{
            position: 'relative',
            h: '100%',
            p: 20,
            borderRadius: 6,
            bgColor: '$loContrast',
            boxShadow: '$colors$shadow1',
          }}
        >
         <BarGraph
        title="Reagent consumption"
        values={data}
        {...inputData}
        labels={inputLabels}
        />
        </Box>
        <p></p>
      </Grid>
  );
}






