import styled from 'styled-components';
import ItemProduto from './ItemProduto.js';

export default function ContainerLista({ produtos, listaCompra, setListaCompra }) {
	return (
		<ContainerListaDiv>
			{produtos.map((e) => (
				<ItemProduto
					key={e.id}
					produto={e}
					listaCompra={listaCompra}
					setListaCompra={setListaCompra}
				/>
			))}
		</ContainerListaDiv>
	);
}

const ContainerListaDiv = styled.div`
	display: flex;
	flex-wrap: wrap;
`;
