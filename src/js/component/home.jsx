import React, { useState } from "react";
import propTypes from "prop-types";
import add from "./notes.jsx";




//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [inputNotes, setInputNotes] = useState();
	const [inputNew, setInputNew] = useState();
	const data_entry = (event) => {
		setInputNotes(event.target.value)
	};
	const key_down = (e) => {
		if (e.keyCode == 13) {
			return (
				<>
					setInputNew(inputNotes);
					<div className="input_value">{inputNew}</div>
				</>
			);
		}
	};

	return (
		<>
			<div className="container">
				<div className="row">
					<input type="text" className="input col-5"
						onChange={data_entry}
						onKeyDown={key_down}
					/>

				</div>
			</div>
		</>
	);
};

export default Home;





/*const AnyComponent = () => {
		const [inputValue, setInputValue ] = useState('');
		return (
		<input type="text" onChange={e => setInputValue(e.target.value)} value={inputValue} />
	);
};*/