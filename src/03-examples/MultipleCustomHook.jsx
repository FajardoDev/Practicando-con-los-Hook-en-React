import { useContador } from "../hooks/useContador";
import { LoadingQuote } from "./LoadingQuote";
import { QuoteResultApi } from "./QuoteResultApi";
import { useFetch } from "./hooks/useFetch";

export const MultipleCustomHook = () => {
	const { contador, incrementar, descrementar } = useContador(1);

	const { data, cargando, hasError } = useFetch(
		`https://api.breakingbadquotes.xyz/v1/quotes/${contador}`,
	);

	// Hago esto porque a principio la data viene null
	const { author, quote } = !!data && data[0];

	// console.log("Data:", data);

	return (
		<div>
			<h1>Breaking Bad Quotes</h1>
			<hr />

			<div>
				{cargando ? (
					<LoadingQuote />
				) : (
					<QuoteResultApi
						quote={quote}
						author={author}
						incrementar={incrementar}
						descrementar={descrementar}
						contador={contador}
					/>
				)}
			</div>
		</div>
	);
};
