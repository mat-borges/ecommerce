import styled from 'styled-components';
import ItemCarrinho from './ItemCarrinho.js';

export default function ContainerCarrinho({ produtos, listaCompra, setListaCompra }) {
	return (
		<ContainerCarrinhoDiv>
			{listaCompra.map((e, i) => (
				<ItemCarrinho
					key={i}
					identificador={e}
					produtos={produtos}
					setListaCompra={setListaCompra}
					i={i}
				/>
			))}
		</ContainerCarrinhoDiv>
	);
}

const ContainerCarrinhoDiv = styled.div`
	border: 1px solid black;
	width: 400px;
	height: 100vh;
	position: absolute;
	right: 0;
`;
