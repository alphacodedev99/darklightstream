import { useState } from "react";
import NavbarComponent from "./components/NavbarComponent";
import HeroComponent from "./components/HeroComponent";
import ExploreComponent from "./components/ExploreComponent";
import ExtensionsComponent from "./components/ExtensionsComponent";

function App() {

	const [darkMode, setDarkMode] = useState(false);

	return (
		<div className={darkMode ? 'dark' : ''}>
			<div className="dark:bg-darkMainBG">
				<div className="container mx-auto">
					<NavbarComponent darkMode={darkMode} setDarkMode={setDarkMode} />
					<HeroComponent />
					<ExploreComponent />
					<ExtensionsComponent />
				</div>
			</div>
			
		</div>
	);
}

export default App;
