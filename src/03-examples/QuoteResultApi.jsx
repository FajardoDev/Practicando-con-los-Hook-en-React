import { useContador } from "../hooks/useContador";

export const QuoteResultApi = ({
	quote,
	author,
	incrementar,
	descrementar,
	contador,
}) => {
	return (
		<div className="">
			<div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl max-w-md absolute bottom-10 right-10">
				<p className="text-slate-500 dark:text-slate-400 mt-2 text-lg">
					{/* {data[0].quote} */}
					{quote}
				</p>

				<h3 className="text-slate-900 dark:text-white mt-5 text-xl font-medium tracking-tight">
					{/* -- {data[0].author} -- */}
					-- {author} --
				</h3>

				<div className="flex justify-between space-x-2">
					<button
						type="button"
						className={`bg-indigo-800 py-1 px-8 ${
							contador > 1 ? "" : "cursor-not-allowed opacity-50"
						}`}
						onClick={() => descrementar(1)}
						disabled={contador === 1}
					>
						Before Quote
					</button>
					<button
						type="button"
						className={`bg-indigo-800 py-1 px-8 ${
							contador < 10 ? "" : "cursor-not-allowed opacity-50"
						}`}
						onClick={() => incrementar(1)}
						disabled={contador === 10}
					>
						Next Quote
					</button>
				</div>
			</div>
		</div>
	);
};
