import styled from 'styled-components';

export const Nav = styled.nav`
	border: 1px solid red;
	margin: auto;
	width: 80%;
	padding: 25px;
	display: flex;
	justify-content: space-between;
	& > * {
		display: flex;
		align-items: center;
		border: 1px solid blue;
	}
	.logo {
		padding-right: 30px;
	}
	.category {
		display: flex;
		align-items: center;
	}
	.category > li {
		margin-right: 15px;
		cursor: pointer;
	}
	.cart {
		margin-right: 20px;
		cursor: pointer;
	}
	.user {
		width: 40px;
		height: 40px;
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
