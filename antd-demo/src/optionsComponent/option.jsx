function Options({ keys, value }) {
    console.log(keys, value);
  
    return (
      <option value={value} key={keys} className="bg-purple-950">
        {value}
      </option>
    );
  }
  
  export default Options;
  