// import { useState } from 'react';
import styled from 'styled-components';
import ContainerCarrinho from './ContainerCarrinho.js';
import ContainerLista from './ContainerLista.js';

export default function App() {
	const PRODUTOS = [
		{
			id: 1,
			nome: 'Camiseta',
			preco: '50.00',
			imagem: 'https://cdn.awsli.com.br/600x450/238/238483/produto/40016383/7337aa5991.jpg',
		},
		{
			id: 2,
			nome: 'Calça',
			preco: '150.00',
			imagem:
				'https://www.invictus.com.br/media/catalog/product/cache/1/image/9df78eab33525d08d6e5fb8d27136e95/l/e/legion-azul-frente.jpg',
		},
		{
			id: 3,
			nome: 'Vestido',
			preco: '70.00',
			imagem: 'https://voudevestido.com.br/358-large_default/vestido-maine.jpg',
		},
		{
			id: 4,
			nome: 'Saia',
			preco: '60.00',
			imagem:
				'https://images.tcdn.com.br/img/img_prod/708130/saia_midi_preto_193_1_a378b613b61b49f93360f562b1307299.jpg',
		},
		{
			id: 5,
			nome: 'Bermuda',
			preco: '40.00',
			imagem:
				'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcTwkCo0Dmgb7OTEfGgqsazj2ZQoeZIz4nJK5oXC2z1iUuMiLo4UjetiHPQMIJQMlGrAgycqbWLv99j36iiB6TJguNsUv8_OZHUukmoAztlbwcd7K4SkCT-x7sUC&usqp=CAE',
		},
		{
			id: 6,
			nome: 'Shorts',
			preco: '60.00',
			imagem: 'https://cdn-images.farfetch-contents.com/14/16/01/84/14160184_18904041_300.jpg',
		},
	];

	const listaCompra = [1];
	const setListaCompra = 0;
	// const [listaCompra, setListaCompra] = useState([]);

	return (
		<ContainerApp>
			<ContainerLista
				produtos={PRODUTOS}
				setListaCompra={setListaCompra}
				listaCompra={listaCompra}
			/>
			<ContainerCarrinho
				produtos={PRODUTOS}
				listaCompra={listaCompra}
				setListaCompra={setListaCompra}
			/>
		</ContainerApp>
	);
}

const ContainerApp = styled.div`
	display: flex;
	align-items: flex-start;
	position: relative;
	padding-right: 400px;
`;
