import React from "react";
import ReactDOM from "react-dom";
import App from "./App";

import "bootstrap/dist/css/bootstrap.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.render(
	<BrowserRouter forceRefresh>
		<App />
	</BrowserRouter>,
	document.getElementById("root")
);

export default App;
