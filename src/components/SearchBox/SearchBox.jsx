import css from "./SearchBox.module.css";

const SearchBox = ({ filter, onChange }) => {
  return (
    <div className={css.container}>
      <label className={css.label}>
        Find contacts by name
        <input
          type="text"
          value={filter}
          onChange={onChange}
          className={css.field}
        />
      </label>
    </div>
  );
};

export default SearchBox;
