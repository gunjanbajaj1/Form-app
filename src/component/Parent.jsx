import { useState } from "react";
import Child from "./Child";
//import "./FormV1.css";


const Parent = () => {
  const [profile, setProfile] = useState({
    uName:""
  });
  const onInputChange = (e) => {

    const { name, value } = e.target;

    console.log({ name, value });
    setProfile({ ...profile, [name]: value });
  };


  return (
    <>
    <div>
    Name: <input type="text" name="uName" value={profile.uName} onChange={(e) => onInputChange(e)}></input>
    </div>
    <Child uName={profile.uName}/>
    </>  
  );
};

export default Parent;