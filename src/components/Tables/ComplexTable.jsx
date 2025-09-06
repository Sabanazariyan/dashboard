import styles from "./ComplexTable.module.css";

import { AiOutlineEllipsis } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

import { IoCheckmarkCircleSharp } from "react-icons/io5";
import { IoCloseCircleSharp } from "react-icons/io5";
import { IoIosInformationCircle } from "react-icons/io";

function ComplexTable() {
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
              <div className={styles.tddiv}>
                <IoCheckmarkCircleSharp color="#05CD99" />
                <p>Approved</p>
              </div>
              <td>2.458</td>
              <td>24.Jan.2021</td>
            </tr>
            <tr>
              <td>Venus PRO</td>
              <div className={styles.tddiv}>
                <IoCloseCircleSharp color="#EE5D50" />
                <p>Disable</p>
              </div>
              <td>1.485</td>
              <td>12.Jun.2021</td>
            </tr>
            <tr>
              <td>Uranus Kit</td>
              <div className={styles.tddiv}>
                <IoIosInformationCircle color="#FFCE20" />
                <p>Error</p>
              </div>
              <td>1.024</td>
              <td>5.Jan.2021</td>
            </tr>

            <tr>
              <td>Venus 3D Asset</td>
              <div className={styles.tddiv}>
                <IoCheckmarkCircleSharp color="#05CD99" />
                <p>Approved</p>
              </div>
              <td>258</td>
              <td>17.Dec.2021</td>
            </tr>
           
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ComplexTable;
