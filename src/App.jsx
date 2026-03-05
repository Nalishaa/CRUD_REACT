import Items from "./components/Items";
import { groceryItems } from "./data/groceryItems";
import "./App.css";

const App = () => {
  return (
    <section className="section-center">
      <h1>Grocery Bud</h1>
      <Items items={groceryItems} />
    </section>
  );
};

export default App;
