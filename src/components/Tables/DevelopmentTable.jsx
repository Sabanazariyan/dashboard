import styles from "./DevelopmentTable.module.css";
import { IoIosArrowDown } from "react-icons/io";
import ProgressBar from "@ramonak/react-progress-bar";

import { AiOutlineEllipsis } from "react-icons/ai";
import { FaApple } from "react-icons/fa6";
import { IoLogoAndroid } from "react-icons/io";
import { GrWindows } from "react-icons/gr";

function DevelopmentTable() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>Development Table</p>
        <div className={styles.icon}>
          <AiOutlineEllipsis />
        </div>
      </div>
      <div className={styles.table}>
        <table>
          <thead>
            <tr>
              <th>
                <div className={styles.withicon}>
                  Title
                  <IoIosArrowDown />
                </div>
              </th>
              <th>
                <div className={styles.withicon}>
                  Title
                  <IoIosArrowDown />
                </div>
              </th>
              <th>
                <div className={styles.withicon}>
                  Title
                  <IoIosArrowDown />
                </div>
              </th>
              <th>
                <div className={styles.withicon}>
                  Title
                  <IoIosArrowDown />
                </div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Marketplace</td>
              <td>
                <div className={styles.tdicons}>
                  <FaApple />
                  <IoLogoAndroid />
                  <GrWindows />
                </div>
              </td>
              <td>12.Jan.2021</td>
              <td>
                <ProgressBar
                  completed="75.5"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>Venus DB PRO</td>
              <td>
                <div className={styles.tdicons}>
                  <FaApple />
                </div>
              </td>
              <td>21.Feb.2021</td>
              <td>
                <ProgressBar
                  completed="35.4"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>Venus DS</td>
              <td>
                <div className={styles.tdicons}>
                  <FaApple />
                  <IoLogoAndroid />
                  <GrWindows />
                </div>
              </td>
              <td>13.Mar.2021</td>
              <td>
                <ProgressBar
                  completed="25"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
            <tr>
              <td>Venus 3D Asset</td>
              <td>
                <div className={styles.tdicons}>
                  <FaApple />

                  <GrWindows />
                </div>
              </td>
              <td>24.Jan.2021</td>
              <td>
                <ProgressBar
                  completed="100"
                  customLabel=" "
                  height="8px"
                  bgColor="#4318FF"
                />
              </td>
            </tr>
             <tr>
              <td>Uranus</td>
              <td>
                <div className={styles.tdicons}>
                  <FaApple />

                  <GrWindows />
                </div>
              </td>
              <td>21.Sep.2021</td>
              <td>
                <ProgressBar
                  completed="13"
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

export default DevelopmentTable;
