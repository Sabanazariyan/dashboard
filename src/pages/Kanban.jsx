import DashboardNavbar from "../components/DashboardNavbar";
import KanbanBacklog from "../components/Kanban/KanbanBacklog";
import KanbanDone from "../components/Kanban/KanbanDone";
import KanbanHeader from "../components/Kanban/KanbanHeader";
import KanbanInProgress from "../components/Kanban/KanbanInProgress";
import styles from "./Kanban.module.css";

function Kanban() {
  return (
    <div className={styles.main}>
      <div className={styles.container}>
        <DashboardNavbar />
        <div className={styles.columns}>
          <KanbanHeader />
          <div className={styles.rows}>
            <KanbanBacklog />
            <KanbanInProgress />
            <KanbanDone />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Kanban;
