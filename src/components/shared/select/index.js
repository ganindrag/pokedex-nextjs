import selectStyler from "./index.module.css";

const Select = ({ options, onChange }) => {
  return (
    <label className={selectStyler.label}>
      <select className={selectStyler.select} onChange={onChange}>
        <option>all</option>
        {options.map((opt) => (
          <option value={opt.value} key={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
    </label>
  );
};

export default Select;
