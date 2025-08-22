import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css"


ReactDOM.createRoot(document.getElementById("root")).render(<App />);


const Persons = ({ persons, }) => (
  <div>
         {persons.map((person, index) => (
            <div key={person.name}> {person.name} {person.number}</div>))}
        </div>)

export default Persons;
