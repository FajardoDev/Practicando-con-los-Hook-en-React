import {
	Navigate,
	Route,
	Routes,
} from "react-router-dom";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { AboutPage } from "./AboutPage";
import { Navbar } from "./Navbar";
import { UserProvider } from "./context/UserProvider";

export const MainApp = () => {
	return (
		<UserProvider>
			{/* <h1 className="text-center font-semibold mb-1">
				Main App
			</h1> */}

			<div className=" shadow-lg dark:shadow-black/50">
				<Navbar />
			</div>

			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/login" element={<LoginPage />} />
				<Route path="/about" element={<AboutPage />} />

				{/* Técnica para si no se encuentra la ruta lo dirija a esta página */}
				{/* <Route path="/*" element={<HomePage />} /> */}
				<Route path="/*" element={<Navigate to="/" />} />
			</Routes>
		</UserProvider>
	);
};
