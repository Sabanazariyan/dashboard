import { AiOutlineEllipsis } from "react-icons/ai";
import styles from "./DashboardTable.module.css";

function DashboardTable() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>Check Table</p>
        <div className={styles.icon}>
          <AiOutlineEllipsis />
        </div>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>PROGRESS</th>
              <th>QUANTITY</th>
              <th>DATE</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <input type="checkbox" /> Horizon UI PRO
              </td>
              <td>17.5%</td>
              <td>2.458</td>
              <td>24.Jan.2021</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" /> Horizon UI Free
              </td>
              <td>10.8%</td>
              <td>1.485</td>
              <td>12.Jun.2021</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" /> Weekly Update
              </td>
              <td>21.3%</td>
              <td>1.024</td>
              <td>5.Jan.2021</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" /> Venus 3D Asset
              </td>
              <td>31.5%</td>
              <td>858</td>
              <td>7.Mar.2021</td>
            </tr>
            <tr>
              <td>
                <input type="checkbox" /> Marketplace
              </td>
              <td>12.2%</td>
              <td>258</td>
              <td>17.Dec.2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardTable;
