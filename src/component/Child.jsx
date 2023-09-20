const Child = (myProps) => {
    console.log("myProps: ", myProps);
    return (
      <div>
        <p>
          My name is {myProps.uName}
        </p>
      </div>
    );
  };
  export default Child;