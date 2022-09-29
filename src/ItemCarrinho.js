import styled from 'styled-components';

export default function ItemCarrinho(props) {
	const { identificador, produtos, listaCompra, setListaCompra, produto, i } = props;
	function removerCarrinho() {
		const novaListaCompra = listaCompra.filter(() => {
			if (!listaCompra.includes) {
				return true;
			}
		});
		console.log(novaListaCompra);
		console.log('removeu');
		// setListaCompra(novaListaCompra);
	}
	return (
		<ItemCarrinhoDiv>
			<img src={produtos[i].imagem} alt="a" />
			<div>
				<strong>{produtos[i].nome}</strong>
				<p>R${produtos[i].preco}</p>
			</div>
			<button onClick={removerCarrinho}>X</button>
		</ItemCarrinhoDiv>
	);
}

const ItemCarrinhoDiv = styled.div`
	border: 1px solid black;
	display: flex;
	margin: 10px;
	padding: 10px;
	justify-content: space-between;
	align-items: center;
	img {
		width: 50px;
		height: 50px;
	}
	div {
		display: flex;
		flex-direction: column;
		align-items: center;
	}
	strong {
		margin-bottom: 5px;
		font-weight: bold;
	}
`;
