import { useContext } from "react";
import { UserContext } from "./context/UserContext";

export const LoginPage = () => {
	const { user, setUser } = useContext(UserContext);

	return (
		<>
			<div className="contenedor">
				<h1>
					Login Page: <small>{user?.name}</small>
				</h1>
				<hr className="mb-6" />
				<pre>{JSON.stringify(user, null, 3)}</pre>

				<button
					onClick={() =>
						setUser({
							id: 123,
							name: "Ariel Fajardo React",
							correo: "correo@correo.com",
						})
					}
					type="button"
					className="bg-black/50"
				>
					Establecer Usuario
				</button>
			</div>
		</>
	);
};
