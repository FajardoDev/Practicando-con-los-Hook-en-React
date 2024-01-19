import { useLayoutEffect, useRef, useState } from "react";
import { useContador } from "../hooks/useContador";

export const QuoteResultApi = ({
	quote,
	author,
	incrementar,
	descrementar,
	contador,
}) => {
	const [boxSize, setboxSize] = useState({ width: 0, height: 0 });

	const quoteRef = useRef();

	useLayoutEffect(() => {
		const { width, height } = quoteRef.current.getBoundingClientRect();

		const newWidth = width.toFixed(2);
		const newHeight = height.toFixed(2);

		setboxSize({ newWidth, newHeight });
	}, [quote]);

	return (
		<div className="">
			<code className="mt-4 text-xl float-end">{JSON.stringify(boxSize)}</code>

			<div className="bg-white dark:bg-slate-900 rounded-lg px-6 py-8 ring-1 ring-slate-900/5 shadow-xl max-w-xl absolute bottom-10 right-10">
				<p
					className="text-slate-500 dark:text-slate-400 mt-2 text-lg  "
					ref={quoteRef}
				>
					{/* {data[0].quote}  w-[30rem] h-[8rem]*/}
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
