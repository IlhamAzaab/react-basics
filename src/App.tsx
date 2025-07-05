import ListGroup from "./components/ListGroup";
import Button from "./components/Button";

function App() {
  let items = ["New york", "Tokyo", "London", "Kinniya", "Rio De Geniro"];
  let heading = ["Roads", "Cities", "Countries"];
  return (
    <div>
      <ListGroup
        items={items}
        heading={heading}
        onSelectItem={(item) => console.log(item)}
      />
      <Button color="dark" onClick={() => console.log('Clicked')}>my button</Button>
    </div>
  );
}

export default App;
