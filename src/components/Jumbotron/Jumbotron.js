//sets up the reusable Jumbotron component
import React from "react";
import "./Jumbotron.css";

const Jumbotron = () => (
	<header className = "header">
		<h1>Fish Clicky Game!</h1>
		<h2>Click on an image to earn points, but don't click on the same image more than once . . . or else...</h2>
	</header>
);

export default Jumbotron;