import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
*,
:after,
:before {
	/* Positioning */
	margin: 0;
	padding: 0;
	/* Box-model */
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	/* Typography */
	text-decoration: none;
	/* Visual */
	/* Misc */
}

html,
body,
#app {
	/* Positioning */
	/* Box-model */
	height: 100%;
	/* Typography */
	font-family: "Poppins", sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	/* Visual */
	background-color:  hsla(0, 0%, 30%, 1);
	/* Misc */
}

p,
a,
i,
li,
textarea,
select {
	/* Positioning */
	/* Box-model */
	/* Typography */
	font-size: 1rem;
	line-height: 150%;
	/* Visual */
	color: hsla(0, 0%, 0%, 0.8);
	/* Misc */
}

a {
	/* Positioning */
	/* Box-model */
	/* Typography */
	text-decoration: underline;
	/* Visual */
	/* Misc */
	cursor: pointer;
}

ul {
	/* Positioning */
	/* Box-model */
	/* Typography */
	/* Visual */
	/* Misc */
	list-style: none;
}
`;

export default GlobalStyle;
