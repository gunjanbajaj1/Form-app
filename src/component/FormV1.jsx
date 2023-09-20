import { useState } from "react";
import "./FormV1.css";


const FormV1 = () => {
  const [profile, setProfile] = useState({
    gender: "",
    Heightft: "",
    Heightin: "",
    Weight: "",
    Activity: "",
    Diabetes: "",
    Pregancy:"",
  });

  const [history, setHistory] = useState({
    Parents: false,
    Siblings: false,
  });

  const handleCheck = (e) => {
    const { checked, name } = e.target;

    // Way 1
    setHistory({ ...history, [name]: checked });

    // way 2
    //setHistory((prevState) => ({ ...prevState, [name]: checked }));
  };

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

  const callSubmit =(e) => {

      console.log(profile);
      console.log(history);

  }

  return (
    <div id="root">
      <div className="form-element">
        <p>Gender </p>
          <input
          type="radio"
          name="gender"
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
        <input type="text" name="Heightft" value={profile.Heightft} onChange={(e) => onInputChange(e)}/><label htmlFor="">ft.</label> <input type="text" name="Heightin" value={profile.Heightin} onChange={(e) => onInputChange(e)}/><label htmlFor="in">in.</label> <input type="text" name="Weight" value={profile.Weight} onChange={(e) => onInputChange(e)}/><label htmlFor="">kg.</label>
      </div>
      <div className="form-element">
        <p>Family History</p>
        <input type="checkbox" name="Parents" checked={history.Parents} Change={(e) => handleCheck(e)}/><label htmlFor="">Parents</label> <input type="checkbox" onChange={(e) => handleCheck(e)} name="Siblings"  checked={history.Siblings}/><label htmlFor="in">Siblings</label>
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
      <div className="form-element">
        <p>Pregancy </p>
        <input
          type="radio"
          name="Pregancy"
          //placeholder="Enter name"
          value="Pregnant"
          //value={profile.name}
          //onChange={onInputChange}
          onChange={(e) => onInputChange(e)}
        />
        <label for="html">Pregnant</label>
         <input
          type="radio"
          name="Pregancy"
          //placeholder="Enter name"
          value="Not Pregnant"
         // value={profile.name}
          //onChange={onInputChange}
          onChange={(e) => onInputChange(e)}
        />
        <label for="html">Not Pregnant</label>
      </div><br />
      <div>
        <input type="submit" 
        onClick={callSubmit}
        />
      </div>

    </div>
  );
};

export default FormV1;