import { useEffect, useState } from "react";

export const Mensaje = () => {
	const [coors, setCoors] = useState({ x: 0, y: 0 });

	useEffect(() => {
		// console.log("Mensaje Montado");

		const onMouseMove = ({ x, y }) => {
			// const coors = { x, y };
			// console.log(coors);
			setCoors({ x, y });
		};

		window.addEventListener("mousemove", onMouseMove);

		return () => {
			// console.log("Mensaje Desmontado");
			window.removeEventListener("mousemove", onMouseMove);
		};
	}, []);

	return (
		<div className="text-2xl">
			<h2 className="">Usuario ya existe!!!</h2>

			{JSON.stringify(coors)}
		</div>
	);
};
