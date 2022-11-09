import styled from 'styled-components';

export const Nav = styled.nav`
	border-bottom: 1px solid red;
	margin: auto;
	width: 70%;
	padding: 25px;
	display: flex;
	justify-content: space-between;
	& > * {
		display: flex;
		align-items: center;
		border: 1px solid blue;
	}
	.leftSect {
		width: 75%;
	}
	.rightSect {
		width: 20%;
	}
	.logo {
		padding-right: 5%;
	}
	.category {
		width: 75%;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.category > li {
		// margin-right: 15px;
		cursor: pointer;
	}
	.cart {
		width: 25px;
		cursor: pointer;
	}
	.cart > img {
		width: 100%;
		height: 100%;
	}
	.user {
		width: 30px;
		cursor: pointer;
	}
	.user img {
		width: 100%;
		height: 100%;
	}
	@media screen and (max-width: 900px) {
		width: 85%;
	}
`;
