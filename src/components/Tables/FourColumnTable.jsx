import styles from "./FourColumnTable.module.css";

import { AiOutlineEllipsis } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function FourColumnTable() {
  return (
    <div className={styles.container}>
      <div className={styles.text}>
        <p>4-Column Table</p>
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
              <td>17.5%</td>
              <td>2.458</td>
              <td>24.Jan.2021</td>
            </tr>
            <tr>
              <td>Venus PRO</td>
              <td>10.8%</td>
              <td>1.485</td>
              <td>12.Jun.2021</td>
            </tr>
            <tr>
              <td>Uranus Kit</td>
              <td>21.3%</td>
              <td>1.024</td>
              <td>5.Jan.2021</td>
            </tr>
            <tr>
              <td>Venus DS</td>
              <td>31.5%</td>
              <td>858</td>
              <td>7.Mar.2021</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default FourColumnTable;
