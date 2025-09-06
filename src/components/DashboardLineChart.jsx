import styles from "./DashboardLineChart.module.css";

import { MdOutlineSegment } from "react-icons/md";
import { AiOutlineCalendar } from "react-icons/ai";
import { AiOutlineCaretUp } from "react-icons/ai";
import { AiOutlineCheckCircle } from "react-icons/ai";

import {
  CartesianGrid,
  Legend,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const data = [
  {
    name: "SEP",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "OCT",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "NOV",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "DEC",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "JAN",
    uv: 1890,
    pv: 4800,
    amt: 2181,
  },
  {
    name: "FEB",
    uv: 2390,
    pv: 3800,
    amt: 2500,
  },
];

function DashboardLineChart() {
  return (
    <div className={styles.container}>
      <div className={styles.icon}>
        <MdOutlineSegment />
      </div>
      <div className={styles.info}>
        <div className={styles.text1}>
          <AiOutlineCalendar />
          <p>This month</p>
        </div>
        <h3>$37.5K</h3>
        <div className={styles.text2}>
          <p>Total Spent</p>
          <AiOutlineCaretUp />
          <span>+2.45%</span>
        </div>
        <div className={styles.text3}>
          <AiOutlineCheckCircle />
          <p>On track</p>
        </div>
      </div>
      <div>
        <div className={styles.chart}>
          <ResponsiveContainer width="100%" height="100%">
            <LineChart width={500} height={300} data={data}>
              {/* <CartesianGrid strokeDasharray="3 3" /> */}
              <XAxis dataKey="name" padding={{ left: 30, right: 30 }} />
              {/* <YAxis /> */}
              <Tooltip />
              <Line
                type="monotone"
                dataKey="pv"
                stroke="rgba(67, 24, 255, 0.25)"
                activeDot={{ r: 8 }}
              />
              <Line
                type="monotone"
                dataKey="uv"
                stroke="rgba(106, 210, 255, 1)"
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

export default DashboardLineChart;
