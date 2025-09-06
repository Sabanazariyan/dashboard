import DashboardHeader from "../components/DashboardHeader";
import DashboardLineChart from "../components/DashboardLineChart";
import DashboardNavbar from "../components/DashboardNavbar";
import DashboardPrices from "../components/DashboardPrices";
import DashboardBardChart from "../components/DashboardBarChart";

import styles from "./Dashboard.module.css";
import DashboardTable from "../components/DashboardTable";
import DashboardBarChartTwo from "../components/DashboardBarChartTwo";
import DashboardPieChart from "../components/DashboardPieChart";
import DashboardComplex from "../components/DashboardComplex";
import DashboardTasks from "../components/DashboardTasks";
import DashboardCallender from "../components/DashboardCallender";
import DashboardArticleOne from "../components/DashboardArticleone";
import DashboardArticleTwo from "../components/DashboardArticleTwo";
import DashboardArticleThree from "../components/DashboardArticleThree";
import DashboardArticleFour from "../components/DashboardArticleFour";

function Dashboard() {
  return (
    <div className={styles.main}>
      <DashboardNavbar />
      <div className={styles.content}>
        <div>
          <DashboardHeader />
          <DashboardPrices />
        </div>
        <div className={styles.firstcharts}>
          <DashboardLineChart />
          <DashboardBardChart />
        </div>
        <div className={styles.tablechart}>
          <DashboardTable />
          <div className={styles.secondcharts}>
            <DashboardBarChartTwo />
            <DashboardPieChart />
          </div>
        </div>
        <div className={styles.complexcallender}>
          <DashboardComplex />
          <div className={styles.taskscallender}>
            <DashboardTasks />
            <DashboardCallender />
          </div>
        </div>
        <div className={styles.articles}>
          <div className={styles.fisrtarticles}>
            <DashboardArticleOne />
            <DashboardArticleTwo />
          </div>
          <div className={styles.secondarticles}>
            <DashboardArticleThree />
            <DashboardArticleFour />
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
}

export default Dashboard;
