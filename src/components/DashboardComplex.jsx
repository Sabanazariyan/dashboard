import styles from "./DashboardComplex.module.css";
import ProgressBar from "@ramonak/react-progress-bar";

import { AiOutlineEllipsis } from "react-icons/ai";
import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";

function DashboardComplex() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>Complex Table</p>
        <div className={styles.icon}>
          <AiOutlineEllipsis />
        </div>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>NAME</th>
              <th>STATUS</th>
              <th>DATE</th>
              <th>PROGRESS</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Horizon UI PRO</td>
              <td>
                <div className={styles.tddiv}>
                  <IoCheckmarkCircleSharp color="#05CD99" />
                  <p>Approved</p>
                </div>
              </td>
              <td>18 Apr 2021</td>
              <td>
                <ProgressBar
                  completed="80"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>Horizon UI Free</td>
              <td>
                <div className={styles.tddiv}>
                  <IoCloseCircleSharp color="#EE5D50" />
                  <p>Disable</p>
                </div>
              </td>
              <td>18 Apr 2021</td>
              <td>
                <ProgressBar
                  completed="40"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>Marketplace</td>
              <td>
                <div className={styles.tddiv}>
                  <IoIosInformationCircle color="#FFCE20" />
                  <p>Error</p>
                </div>
              </td>
              <td>20 May 2021</td>
              <td>
                <ProgressBar
                  completed="90"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>Weekly Updates</td>
              <td>
                <div className={styles.tddiv}>
                  <IoCheckmarkCircleSharp color="#05CD99" />
                  <p>Approved</p>
                </div>
              </td>
              <td>12 Jul 2021</td>
              <td>
                <ProgressBar
                  completed="20"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DashboardComplex;
