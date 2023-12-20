import * as ReactDOM from "react-dom";
import { createStore } from "redux";
import todoSlice from "../slices/todoSlice";
const store = createStore({
    reducer: todoSlice.reducer
});

const root = ReactDOM.createStore(document.getElementById("root"));
root.render();
