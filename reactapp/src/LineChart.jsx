import { Button } from "@mui/material";
import React, { useState } from "react";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Cell,
} from "recharts";
import "./EarningsCharts.css";
const data = [
  { month: "January", earnings: 5000, color: "#ff0000" },
  { month: "February", earnings: 6000, color: "#00ff00" },
  { month: "March", earnings: 7500, color: "#0000ff" },
  { month: "April", earnings: 8200, color: "#ff9900" },
  { month: "May", earnings: 6800, color: "#6600cc" },
  { month: "June", earnings: 7300, color: "#ff66b3" },
  { month: "July", earnings: 8900, color: "#0099cc" },
];

const EarningsCharts = ({ weeklyData, monthlyData, yearlyData }) => {
  const [chartType, setChartType] = useState("line");

  const handleLineChart = () => setChartType("line");
  const handleBarChart = () => setChartType("bar");
  const handlePieChart = () => setChartType("pie");

  return (
    <div className="container">
      {/* Add chart type selection */}
      <div className="button-container">
        <Button className="chart-button" onClick={handleLineChart}>
          Line Chart
        </Button>
        <Button className="chart-button" onClick={handleBarChart}>
          Bar Chart
        </Button>
        <Button className="chart-button" onClick={handlePieChart}>
          Pie Chart
        </Button>
      </div>

      {chartType === "line" && (
        <LineChart width={800} height={500} data={weeklyData} className="chart">
          <XAxis dataKey="week" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Line type="monotone" dataKey="earnings" stroke="#ffffff" />{" "}
        </LineChart>
      )}
      {chartType === "bar" && (
        <BarChart width={800} height={500} data={data} className="chart">
          <XAxis dataKey="month" />
          <YAxis />
          <CartesianGrid stroke="#ccc" />
          <Tooltip />
          <Legend />
          <Bar dataKey="earnings" fill="#00ffa6">
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={entry.color} />
            ))}
          </Bar>
        </BarChart>
      )}
      {chartType === "pie" && (
        <PieChart width={800} height={500}>
          <Tooltip />
          <Legend />
          <Pie
            dataKey="earnings"
            data={yearlyData}
            cx="50%"
            cy="50%"
            outerRadius={120}
            label
          >
            {yearlyData.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={`#${Math.floor(Math.random() * 16777215).toString(16)}`}
              />
            ))}
          </Pie>
        </PieChart>
      )}
    </div>
  );
};

export default EarningsCharts;
