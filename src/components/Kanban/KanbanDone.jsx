import styles from "./KanbanDone.module.css";

import { FaPlus } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import AvatarStack from "../AvatarStack";

const avatars = [
  "./profiles/profile.png",
  "./profiles/2.jpg",
  "./profiles/3.jpg",
  "./profiles/4.jpg",
  "./profiles/5.png",
];

function KanbanDone() {
  return (
    <div className={styles.container}>
      <div className={styles.head}>
        <h3>Done</h3>
        <div className={styles.icon}>
          <FaPlus />
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.text}>
          <p>Copy/Paste elements between pages</p>
          <MdEdit />
        </div>
        <p>
          We can only copy/paste elements (or group of elements) in the same
          page, which is quite limited.
        </p>
        <div className={styles.photobutton}>
          <AvatarStack
            avatars={avatars}
            size={25}
            overlap={10}
            maxVisible={1}
          />
          <button>DONE</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.text}>
          <p>Remove Extra DIV for each container added</p>
          <MdEdit />
        </div>
        <p>
          I still hope there won't have an extra div for each container we
          added. It should be something for better styling...
        </p>
        <div className={styles.photobutton}>
          <AvatarStack
            avatars={avatars}
            size={25}
            overlap={10}
            maxVisible={3}
          />
          <button>DONE</button>
        </div>
      </div>
      <div className={styles.card}>
        <div className={styles.text}>
          <p>Add Figma files for the Library design blocks</p>
          <MdEdit />
        </div>
        <p>
          I want to present my clients the Figma files first, so it would be
          great if you add those as well, more manual downloads...
        </p>
        <div className={styles.photobutton}>
          <AvatarStack
            avatars={avatars}
            size={25}
            overlap={10}
            maxVisible={2}
          />
          <button>DONE</button>
        </div>
      </div>
    </div>
  );
}

export default KanbanDone;
