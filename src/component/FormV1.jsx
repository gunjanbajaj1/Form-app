import { useState } from "react";
const FormV1 = () => {
  const [profile, setProfile] = useState({
    gender: "",
    Height: "",
    Weight: "",
    Activity: "",
    Diabetes: "",
  });

  const onInputChange = (e) => {
    //console.log("e:", e);
    //console.log("e:", e.target);
    //console.log("Value: ", e.target.value, e.target.name, e.target.type);
    const { name, value } = e.target;

    console.log({ name, value });

    // First Way - Normal way
    setProfile({ ...profile, [name]: value });
    // const o = {...i, [key]:'Europe'}

    // Second way - Best way -> setter(arrowFunction)
    //setProfile((abTakKiState) => ({ ...abTakKiState, [name]: value }));
  };

  return (
    <div>
      <div className="form-element">
        <p>Gender </p>
        <input
          type="radio"
          name="gender"
          placeholder="Enter name"
          value="Male"
          //value={profile.name}
          //onChange={onInputChange}
          onChange={(e) => onInputChange(e)}
        />
        <label for="html">Male</label>
         <input
          type="radio"
          name="gender"
          placeholder="Enter name"
          value="Female"
         // value={profile.name}
          //onChange={onInputChange}
          onChange={(e) => onInputChange(e)}
        />
        <label for="html">Female</label>
      </div>
      <div className="form-element">
        <p>Height and Weight</p>
        <input type="text" name="ft"/><label htmlFor="">ft.</label> <input type="text" name="in"/><label htmlFor="in">in.</label> <input type="text" name="kg"/><label htmlFor="">kg.</label>
      </div>
      <div className="form-element">
        <p>Family History</p>
        <input type="checkbox" name="history"/><label htmlFor="">Parents</label> <input type="checkbox" name="ihistoryn"/><label htmlFor="in">Siblings</label>
      </div>
      <div className="form-element">
        <p>Activity Level </p>
        <input
          type="radio"
          name="Activity"
          //placeholder="Enter name"
          value="Not very active"
          //value={profile.name}
          //onChange={onInputChange}
          onChange={(e) => onInputChange(e)}
        />
        <label for="html">Not very active</label>
         <input
          type="radio"
          name="Activity"
          //placeholder="Enter name"
          value="Active"
         // value={profile.name}
          //onChange={onInputChange}
          onChange={(e) => onInputChange(e)}
        />
        <label for="html">Active</label>
      </div>
      <div className="form-element">
        <p>Diabetes </p>
        <input
          type="radio"
          name="Diabetes"
          //placeholder="Enter name"
          value="Pre-diabetes"
          //value={profile.name}
          //onChange={onInputChange}
          onChange={(e) => onInputChange(e)}
        />
        <label for="html">Pre-diabetes</label>
         <input
          type="radio"
          name="Diabetes"
          //placeholder="Enter name"
          value="Type-2"
         // value={profile.name}
          //onChange={onInputChange}
          onChange={(e) => onInputChange(e)}
        />
        <label for="html">Type-2</label>
        <input
          type="radio"
          name="Diabetes"
          //placeholder="Enter name"
          value="Neither"
         // value={profile.name}
          //onChange={onInputChange}
          onChange={(e) => onInputChange(e)}
        />
        <label for="html">Neither</label>
      </div>

    </div>
  );
};

export default FormV1;