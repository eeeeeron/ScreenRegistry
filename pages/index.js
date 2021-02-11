import React from 'react';
import { Button, Container, Input } from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { AiOutlineSearch } from 'react-icons/ai';

function HomePage() {

	function handleClick() {
		const number = document.querySelector('.numeric');
		document.write(`Número do pedido é: ${number.value}`);
	}

	// Input Mask
	const numeric = (value) => {
		return value.replace(/\D/g, '');
	}
 		
	return (
		<div>
			<div className="conteiner-fluid top">
				<Container className="text-center">	
					<h1>Cartório 1ª Zona</h1>
					<div>
						<h3><u>Consultar andamento do pedido:</u></h3>

						<input
							autoFocus={true}
							required={true}
							type="text"
							className="numeric"
							placeholder="Digite o número do pedido"
							onChange={(e) => {e.target.value = numeric(e.target.value)}}
						/>
						<AiOutlineSearch className="icon"/>
					</div>
						
					<Button 
						type="submit" 
						color="primary" 
						className="mt-4" 
						onClick={handleClick}>
						Pesquisar
					</Button>
					
				</Container>
			</div>	
		</div>
	);
}
  
export default HomePage;	