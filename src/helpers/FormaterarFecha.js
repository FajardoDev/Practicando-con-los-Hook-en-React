export const FormatearFecha = (fecha) => {
	const newFecha = new Date(fecha);
	const opciones = {
		year: "numeric",
		month: "long",
		day: "2-digit",
	};
	return newFecha.toLocaleString("es-ES", opciones); // ('en-US') EE.UU
};

export const horaActual = () => {
	const fechaActual = new Date();

	let horas = fechaActual.getHours();
	const minutos = fechaActual.getMinutes();
	const segundos = fechaActual.getSeconds();

	// Determinar si es AM o PM
	const periodo = horas < 12 ? "AM" : "PM";

	// Convertir las horas al formato de 12 horas
	horas = horas % 12 || 12;

	// Formatear la hora en un formato deseado (por ejemplo, HH:MM:SS)
	const horaFormateada =
		horas +
		":" +
		(minutos < 10 ? "0" : "") +
		minutos +
		":" +
		(segundos < 10 ? "0" : "") +
		segundos +
		" " +
		periodo;

	// Retornar la hora formateada
	return horaFormateada;
};
