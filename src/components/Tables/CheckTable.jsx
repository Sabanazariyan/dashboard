import styles from "./CheckTable.module.css";

import { AiOutlineEllipsis } from "react-icons/ai";
import { IoIosArrowDown } from "react-icons/io";

function CheckTable() {
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
              <td>
                <div className={styles.input}>
                  <input id="td1" type="checkbox" />
                  <label htmlFor="td1">Marketplace</label>
                </div>
              </td>
              <td>17.5%</td>
              <td>2.458</td>
              <td>24.Jan.2021</td>
            </tr>
            <tr>
              <td>
                <div className={styles.input}>
                  <input id="td1" type="checkbox" />
                  <label htmlFor="td1">Venus PRO</label>
                </div>
              </td>
              <td>10.8%</td>
              <td>1.485</td>
              <td>12.Jun.2021</td>
            </tr>
            <tr>
              <td>
                <div className={styles.input}>
                  <input id="td1" type="checkbox" />
                  <label htmlFor="td1">Uranus Kit</label>
                </div>
              </td>
              <td>21.3%</td>
              <td>1.024</td>
              <td>5.Jan.2021</td>
            </tr>
            <tr>
              <td>
                <div className={styles.input}>
                  <input id="td1" type="checkbox" />
                  <label htmlFor="td1">Venus DS</label>
                </div>
              </td>
              <td>31.5%</td>
              <td>858</td>
              <td>7.Mar.2021</td>
            </tr>
            <tr>
              <td>
                <div className={styles.input}>
                  <input id="td1" type="checkbox" />
                  <label htmlFor="td1">Venus 3D Asset</label>
                </div>
              </td>
              <td>12.2%</td>
              <td>258</td>
              <td>17.Dec.2021</td>
            </tr>
            <tr>
              <td>
                <div className={styles.input}>
                  <input id="td1" type="checkbox" />
                  <label htmlFor="td1">Venus 3D Asset</label>
                </div>
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

export default CheckTable;
