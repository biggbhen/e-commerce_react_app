import styled from 'styled-components';

export const Nav = styled.nav`
	position: relative;
	margin: auto;
	width: 95%;
	max-width: 900px;
	border-bottom: 1px solid #e8e7ec;
	display: flex;
	justify-content: space-between;

	& > * {
		display: flex;
		align-items: center;
	}
	.leftSect {
		width: 75%;
		// border: 1px solid red;
	}
	.rightSect {
		display: flex;
		width: 15%;
		justify-content: space-around;
		align-items: center;
	}
	.logo {
		cursor: pointer;
		padding-right: 5%;
		width: clamp(7rem, 35vw, 7.5rem);
		height: 1.2rem;
	}
	.logo > img {
		width: 100%;
		height: 100%;
		display: block;
	}
	.category {
		// border: 1px solid red;
		padding-top: 4px;
		height: 5.2rem;
		width: 75%;
		display: flex;
		justify-content: space-around;
	}
	.category > li {
		display: flex;
		align-items: center;
		padding-bottom: 3px;
		cursor: pointer;
		font-size: clamp(0.9rem, 1.5vw, 1rem);
		color: #b4b5b9;
	}
	.category > li:hover {
		border-bottom: 3px solid #ff7a16;
		padding-bottom: 0;
		color: black;
	}
	.cart {
		width: clamp(1.375rem, 3vw, 1.5625rem);
		cursor: pointer;
		:hover {
			img {
				filter: brightness(0) saturate(90%);
			}
		}
	}
	.cart > img {
		width: 100%;
		height: 100%;
		position: relative;
	}
	.user {
		width: 30px;
		cursor: pointer;
		border-radius: 50%;
		:hover {
			outline: 2px solid #ff7a16;
		}
	}
	.user img {
		width: 100%;
		height: 100%;
	}

	.ham {
		position: absolute;
		left: 20px;
		top: 58%;
		transform: translateY(-50%);
		display: none;
	}

	@media screen and (max-width: 900px) {
		width: 85%;
	}
	@media screen and (max-width: 750px) {
		.leftSect {
			width: 80%;
		}
	}
	@media screen and (max-width: 600px) {
		padding: 15px 0 15px 10%;
		width: 100%;
		.category {
			display: none;
		}
		.rightSect {
			width: 40%;
		}
		.leftSect {
			width: max-content;
		}
		.ham {
			display: block;
		}
	}
`;
