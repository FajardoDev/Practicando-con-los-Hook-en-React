import { useContador } from "../hooks/useContador";
import { LoadingQuote } from "../03-examples/LoadingQuote";
import { QuoteResultApi } from "../03-examples/QuoteResultApi";
import { useFetch } from "../03-examples/hooks/useFetch";

export const Layout = () => {
	const { contador, incrementar, descrementar } = useContador(1);

	const { data, cargando, hasError } = useFetch(
		`https://api.breakingbadquotes.xyz/v1/quotes/${contador}`,
	);

	const { author, quote } = !!data && data[0];

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
