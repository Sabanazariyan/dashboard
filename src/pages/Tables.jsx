import DashboardNavbar from "../components/DashboardNavbar";
import CheckTable from "../components/Tables/CheckTable";
import ComplexTable from "../components/Tables/ComplexTable";
import DevelopmentTable from "../components/Tables/DevelopmentTable";
import FourColumnTable from "../components/Tables/FourColumnTable";
import TableMain from "../components/Tables/TableMain";

import styles from "./Tables.module.css";

function Tables() {
  return (
    <div className={styles.container}>
      <div className={styles.main}>
        <DashboardNavbar />
        <div className={styles.headtables}>
          <TableMain />
          <div className={styles.firstrow}>
            <DevelopmentTable />
            <CheckTable />
          </div>
          <div className={styles.secondrow}>
            <FourColumnTable />
            <ComplexTable />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Tables;
