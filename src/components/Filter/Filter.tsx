import React from "react";
import { useTaskStore } from "../../store/useTaskStore";
import { CheckBox } from "../Checkbox/CheckBox";
import styles from "./Filter.module.scss";

const FILTER_OPTIONS = [
  { label: "All", value: "all" },
  { label: "Active", value: "active" },
  { label: "Completed", value: "completed" },
] as const;

const Filter: React.FC = () => {
  const filter = useTaskStore((state) => state.filter);
  const setFilter = useTaskStore((state) => state.setFilter);

  return (
    <div className={styles.filterContainer}>
      {FILTER_OPTIONS.map(({ label, value }) => (
        <CheckBox
          key={value}
          type="radio"
          label={label}
          name="filter"
          checked={filter === value}
          onChange={() => setFilter(value)}
          value={value}
        />
      ))}
    </div>
  );
};

export default Filter;
