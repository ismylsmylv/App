import { useState } from "react";
import "./App.css";
function App() {
  const [data, setdata] = useState("");
  const [todosData, settodosData] = useState([]);

  return (
    <>
      <input
      value={data}
        type="text"
        onChange={(e) => {
          setdata(e.target.value);
        }}
      />
      <button
        onClick={() => {
          setdata("")
          settodosData([...todosData, data]);
        }}
      >
        Add
      </button>
      {/* listing */}
      <ul>
        {todosData &&
          todosData.map((elem, i) => {
            return (
              <li key={i}>
                {elem}{" "}
                <button
                  onClick={() => {
                    console.log("delete");
                    let filtered: string = todosData.filter(
                      (element) => element != elem
                    );
                    settodosData(filtered);
                  }}
                >
                  delete
                </button>
                <button
                  onClick={() => {
                    console.log("edit");
                    let dataEdit = prompt("edit value");

                    let filtered: string = todosData.filter(
                      (element) => element != elem
                    );
                    filtered.push(dataEdit);
                    console.log(dataEdit);
                    settodosData(filtered);
                  }}
                >
                  Edit
                </button>
               
              </li>
            );
          })}
      </ul>
    </>
  );
}

export default App;
