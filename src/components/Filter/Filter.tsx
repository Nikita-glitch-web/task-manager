import React from "react";
import { useTaskStore } from "../../store/useTaskStore";
import { CheckBox } from "../RadioButton/CheckBox";
import styles from "./Filter.module.scss";

const Filter: React.FC = () => {
  const { filter, setFilter } = useTaskStore();

  return (
    <div className={styles.filterContainer}>
      <CheckBox
        label="All"
        name="filter"
        checked={filter === "all"}
        onChange={() => setFilter("all")}
        value="all"
      />
      <CheckBox
        label="Active"
        name="filter"
        checked={filter === "active"}
        onChange={() => setFilter("active")}
        value="active"
      />
      <CheckBox
        label="Completed"
        name="filter"
        checked={filter === "completed"}
        onChange={() => setFilter("completed")}
        value="completed"
      />
    </div>
  );
};

export default Filter;
