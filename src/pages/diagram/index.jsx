import "./index.scss";
import React from "react";

import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";

ChartJS.register(ArcElement, Tooltip, Legend);

const dataNum = {
  one: [234840, 246051],
  two: [252289, 283500],
};
const percent1 = Math.round((dataNum.one[0] / dataNum.one[1]) * 100);
const percent1Remainder = 100 - percent1;
const percent2 = Math.round((dataNum.two[0] / dataNum.two[1]) * 100);
const percent2Remainder = 100 - percent2;

export const data = {
  labels: ["", ""],
  datasets: [
    {
      data: [percent1, percent1Remainder],
      backgroundColor: ["gray"],
      weight: 0.2,
      rotation: 110,
    },
    {
      data: [percent2, percent2Remainder],
      backgroundColor: ["#F49356"],
      weight: 0.8,
      rotation: 110,
    },
  ],
};

export function DiagramPage() {
  return (
    <div
      style={{
        width: "auto",
        height: "auto",
        float: "none",
        position: "relative",
      }}
    >
      <div
        style={{
          width: "100%",
          position: "absolute",
          top: "50%",
          left: "50%",
          lineHeight: "0px",
          textAlign: "center",
          zIndex: -1,
          transform: "translate(-50%, -50%)"


        }}
      >
        <p style={{ fontSize: "36px" }}>{percent2}%</p>
      </div>
      <Doughnut
        data={data}
        options={{
          plugins: {
            legend: {
              display: false,
            },
          },
        }}
      />
    </div>
  );
}
