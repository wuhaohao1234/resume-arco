import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import "@arco-design/web-react/dist/css/arco.css";
import App from "./App";
document.body.setAttribute("arco-theme", "dark");
ReactDOM.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>,
	document.getElementById("root")
);
