import "./App.less";
import Info from "./coms/info";
import Skill from "./coms/skill";
import OpenSource from "./coms/open-source";
import ExpressInfo from "./coms/express";

function App() {
	return (
		<div className="resume" >
			<div className="container">
				<Info/>
				<Skill />
			</div>
			<div className="container">
				<OpenSource/>
				<ExpressInfo/>
			</div>
		</div>
	);
}

export default App;
