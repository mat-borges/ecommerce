import styled from 'styled-components';

export default function ItemProduto({ produto, listaCompra, setListaCompra }) {
	function adicionarListaCompra() {
		if (!listaCompra.includes(produto.id)) {
			const novaListaCompra = [...listaCompra, produto.id];
			// setListaCompra(novaListaCompra);
			console.log(novaListaCompra);
		}
	}
	return (
		<ItemProdutoDiv>
			<img src={produto.imagem} alt="a"></img>
			<div>
				<p>{produto.nome}</p>
				<p>R${produto.preco}</p>
			</div>
			<button onClick={adicionarListaCompra}>Comprar</button>
		</ItemProdutoDiv>
	);
}

const ItemProdutoDiv = styled.div`
	border: 1px solid black;
	width: 200px;
	display: flex;
	flex-direction: column;
	margin: 10px;
	padding: 10px;
	img {
		width: 200px;
		height: 200px;
	}
	div {
		display: flex;
		align-items: center;
		justify-content: space-between;
		margin: 10px 0;
	}
`;
