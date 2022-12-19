const name = "Rahul";

const displayMessage = () => {
  return "This is the Display Message";
};

function Hello() {
  return (
    <h1>
      Hello, world! I am {name} and {displayMessage()}
    </h1>
  );
}

export default Hello;
