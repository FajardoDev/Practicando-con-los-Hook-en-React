import {
	Bars3Icon,
	XMarkIcon,
} from "@heroicons/react/24/outline";
import { Disclosure } from "@headlessui/react";
import {
	Link,
	NavLink,
	useLocation,
} from "react-router-dom";

export const Navbar = () => {
	const location = useLocation();

	const { pathname } = location;
	// console.log("pathname: ", pathname);

	return (
		<>
			<div className="min-h-full">
				<Disclosure
					as="nav"
					className="bg-gray-800 py-1"
				>
					{({ open }) => (
						<>
							<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
								<div className="flex h-16 items-center justify-between">
									<div className="flex items-center">
										<div className="flex-shrink-0">
											<img
												className="h-10 w-10 rounded-full"
												src="https://i.ytimg.com/vi/WXhTx1xfmnw/maxresdefault.jpg"
												alt="Use Context"
												title="Use Context React"
											/>
										</div>
										<div className="hidden md:block">
											<div className="ml-10 flex items-baseline space-x-4">
												{/* Aquí */}

												<NavLink
													className={({ isActive }) =>
														`text-blue-500  transition-colors duration-300 mt-2 hover:text-white  hover:bg-slate-200/50 py-2 px-6 rounded-md ${
															isActive
																? "text-sky-200 font-bold"
																: ""
														}`
													}
													to="/"
												>
													useContext
												</NavLink>

												<Link
													className={`${
														pathname === "/" &&
														"text-sky-200 font-bold"
													} text-blue-500  transition-colors duration-300 mt-2 hover:text-white  hover:bg-slate-200/50 py-2 px-6 rounded-md`}
													to="/"
												>
													Home
												</Link>
												<Link
													className={`${
														pathname === "/about" &&
														"text-sky-200 font-bold"
													} text-blue-500  transition-colors duration-300 mt-2 hover:text-white hover:bg-slate-200/50 py-2 px-6 rounded-md`}
													to="/about"
												>
													About
												</Link>
												<Link
													className={`${
														pathname === "/login" &&
														"text-sky-200 font-bold"
													} text-blue-500  transition-colors duration-300 mt-2 hover:text-white hover:bg-slate-200/50 py-2 px-6 rounded-md `}
													to="/login"
												>
													Login
												</Link>
											</div>
										</div>
									</div>

									{/* Aquí */}

									<div className="-mr-2 flex md:hidden">
										{/* Mobile menu button */}
										<Disclosure.Button className="relative inline-flex items-center justify-center rounded-md bg-gray-800 p-2 mb-8 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-1 focus:ring-teal-400 focus:ring-offset-2 focus:ring-offset-gray-800">
											<span className="absolute -inset-0.5" />
											<span className="sr-only">
												Open main menu
											</span>
											{open ? (
												<XMarkIcon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											) : (
												<Bars3Icon
													className="block h-6 w-6"
													aria-hidden="true"
												/>
											)}
										</Disclosure.Button>
									</div>
								</div>
							</div>

							{/* Menú peueño */}
							<Disclosure.Panel className="md:hidden">
								<div className="space-y-4 px-2 pb-3 pt-0 sm:px-3">
									<div className="flex flex-col ">
										<Link
											className={`${
												pathname === "/" &&
												"text-sky-200 font-bold"
											} text-blue-500  transition-colors duration-300 mt-2 hover:text-white  hover:bg-slate-200/50 py-2 px-6 rounded-md`}
											to="/"
										>
											Home
										</Link>
										<Link
											className={`${
												pathname === "/about" &&
												"text-sky-200 font-bold"
											} text-blue-500  transition-colors duration-300 mt-2 hover:text-white  hover:bg-slate-200/50 py-2 px-6 rounded-md`}
											to="/about"
										>
											About
										</Link>
										<Link
											className={`${
												pathname === "/login" &&
												"text-sky-200 font-bold"
											} text-blue-500  transition-colors duration-300 mt-2 hover:text-white  hover:bg-slate-200/50 py-2 px-6 rounded-md `}
											to="/login"
										>
											Login
										</Link>
									</div>
								</div>
							</Disclosure.Panel>
						</>
					)}
				</Disclosure>
				{/* Contenido Principal */}
				{/* <header className="bg-white shadow">
					<div className="mx-auto max-w-7xl px-4 py-6 sm:px-6 lg:px-8">
						<h1 className="text-2xl font-bold tracking-tight text-gray-900">
							Dashboard
						</h1>
					</div>
				</header> */}
				<main>
					{/* <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
						<h2 className="text-2xl">Hola Mundo</h2>
					</div> */}
				</main>
			</div>
		</>
	);
};
