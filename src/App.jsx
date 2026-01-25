import Card from "./components/Card/Card.jsx";
import {CARDS_DATA} from "./data.js";

function App() {

  return (
    <>
      <h1>HomeWork #1</h1>
        <div className="cards">
            {CARDS_DATA.map((item) => (
                <Card key={item.id} data={item} />
            ))}
        </div>
    </>
  )
}

export default App
