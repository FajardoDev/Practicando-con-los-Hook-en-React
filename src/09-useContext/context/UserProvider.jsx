// Este componente se pone en el lugar más alto de la app para acceder a los datos
import { useState } from "react";
import { UserContext } from "./UserContext";

// const user = {
// 	id: 123,
// 	name: "Ariel Fajardo",
// 	correo: "correo@correo.com",
// };

export const UserProvider = ({ children }) => {
	const [user, setUser] = useState();

	return (
		<UserContext.Provider value={{ user, setUser }}>
			{children}
		</UserContext.Provider>
		// <UserContext.Provider
		// 	value={{ hola: "Mundo", user: user }}
		// >
		// 	{children}
		// </UserContext.Provider>
	);
};
