import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const AboutPage = () => {
	const { user } = useContext(UserContext);

	return (
		<>
			<div className="contenedor">
				<h1>
					About Page: <small>{user?.name}</small>
				</h1>

				<hr className="mb-6" />
				<pre>{JSON.stringify(user, null, 3)}</pre>
			</div>
		</>
	);
};
