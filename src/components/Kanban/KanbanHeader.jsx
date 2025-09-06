import styles from "./KanbanHeader.module.css"

import { CiSearch } from "react-icons/ci";
import { BsBell } from "react-icons/bs";
import { FaMoon } from "react-icons/fa";
import { IoIosInformationCircleOutline } from "react-icons/io";

function KanbanHeader() {
  return (
        <div>
          <div className={styles.container}>
            <div className={styles.text}>
              <p>Pages / Kanban</p>
              <h3>Kanban</h3>
            </div>
            <div className={styles.info}>
              <div className={styles.search}>
                <CiSearch />
                <input type="text" placeholder="Search" />
              </div>
              <BsBell style={{ fontSize: "1.1rem" }} />
              <FaMoon style={{ fontSize: "1rem" }} />
              <IoIosInformationCircleOutline style={{ fontSize: "1.3rem" }} />
              <img src="./profiles/profile.png" alt="" />
            </div>
          </div>
        </div>
  )
}

export default KanbanHeader