import React, { useState } from "react";


//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputValue, setInputValue] = useState()
	const [inputData, setInputData] = useState()

	return (
		<>
		<input type="text" className="input" />

		<div className="input_value"></div>
		</>
	);
};

export default Home;
