const Main = ({ children }) => {
	const location = useLocation();

	console.log(location.pathname); // outputs currently active route
	return children;
};

export default Main;
