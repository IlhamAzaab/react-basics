import ListGroup from "./components/ListGroup";
import Button from "./components/Button";
import Alert from "./components/Alert";
import { useState } from "react";

function App() {
  let items = ["New york", "Tokyo", "London", "Kinniya", "Rio De Geniro"];
  let heading = ["Roads", "Cities", "Countries"];
  const [alertVisible,setAlertVisible]=useState(false);
  return (
    <div>
{alertVisible &&<Alert onClose={() => setAlertVisible(false)}>Alert!</Alert>}
    <ListGroup
        items={items}
        heading={heading}
        onSelectItem={(item) => console.log(item)}
      />
      <Button color="dark" onClick={() => setAlertVisible(true)}>my button</Button>
    </div>
  );
}

export default App;
