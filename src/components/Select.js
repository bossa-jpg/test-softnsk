export const Select = ({ defaultValue, list }) => {
  return (
    <div>
      <select className="input">
        <option value="" hidden>
          {defaultValue}
        </option>
        {list.map((item) => {
          return <option value={item}>{item}</option>;
        })}
      </select>
    </div>
  );
};
