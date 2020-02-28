// @ts-nocheck
import React, { useState, useEffect } from "react";
import styled from "styled-components";
import Input from "../../components/input";
import Button from "../../components/button";

const NewWorkout = () => {
	return (
		<Layout>
			<Background></Background>
			<SelectOptions>
				<header>
					<h1>New Workout</h1>
					<p>Create your new workout</p>
				</header>
			</SelectOptions>
			<AllExercises>
				<header>
					<h1>Current exercises:</h1>
				</header>
			</AllExercises>
			<AddExercise>
				<header>
					<h1>Add an exercise:</h1>
				</header>
			</AddExercise>
		</Layout>
	);
};

const Layout = styled.article`
	height: calc(100vh - 4rem);
	display: grid;
	grid-template-columns: 2rem 1fr 2rem;
	grid-template-rows: 5rem;
	grid-auto-rows: min-content;
	grid-row-gap: 2rem;

	&:before {
		content: "";
		grid-column: 1/4;
	}
`;

const Background = styled.aside`
	grid-column: 1/4;
	grid-row: 1/4;
	background-color: grey;
`;

const SelectOptions = styled.section`
	grid-column: 2/3;
	grid-row: 2/3;
`;

const AllExercises = styled.section`
	grid-column: 2/3;
`;

const AddExercise = styled.section`
	grid-column: 2/3;
`;

export default NewWorkout;
