import { BarChart, Bar, ResponsiveContainer, Tooltip, XAxis } from "recharts";

import styles from "./DashboardBarChartTwo.module.css";

const data = [
  {
    name: "00",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "04",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "08",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "12",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "14",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "16",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
  {
    name: "18",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

function DashboardBarChartTwo() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <div className={styles.info}>
          <p>Daily Traffic</p>
          <span>+2.45%</span>
        </div>
        <div className={styles.infoo}>
          <h3>2.579</h3>
          <p>Visitors</p>
        </div>
      </div>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <BarChart width={150} height={40} data={data}>
            <defs>
              <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#4318FF" />
                <stop offset="100%" stopColor="#b84bbe" />
              </linearGradient>
            </defs>
            <Tooltip />
            <Bar
              dataKey="uv"
              fill="url(#colorGradient)"
              radius={[10, 10, 0, 0]}
              barSize={15}
            />
            <XAxis dataKey="name" tick={{fontSize : "12px"}} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}

export default DashboardBarChartTwo;
