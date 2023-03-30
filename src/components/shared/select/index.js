import selectStyler from "./index.module.css";

const Select = ({ options }) => {
  return (
    <label className={selectStyler.label}>
      <select className={selectStyler.select}>
        <option selected>all</option>
        {options.map((opt) => (
          <option value={opt.value}>{opt.label}</option>
        ))}
      </select>
    </label>
  );
};

export default Select;
