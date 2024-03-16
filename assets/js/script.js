	/* Links de referencia do projeto para sortear numeros aleatorio.
	 *	
	 * https://devfuria.com.br/javascript/numeros-aleatorios/
	 * https://github.com/alura-cursos/logica-js
	 */

	 alert('Jogo do advinha JS Game!!');
	 
	 let numeroSorte = Math.floor(Math.random() * 10 + 1);
	 var numeroEscolha;
	 let numeroTentativa = 1;
	  
	 function soteiaNumero(){
	  entradaUsuario();
		while (numeroEscolha != numeroSorte ){

			if(numeroSorte >= numeroEscolha){
			
				 alert('o numero é maior!' );
				  entradaUsuario();
			}else{
	
				alert('o numero é menor!' );
				entradaUsuario();	
				}
			numeroTentativa++;
		 }
			alert(`Você acertou em ${numeroTentativa} ${numeroTentativa==1?'tentativa':'tentativas'}, o numero da sorte é  ${numeroSorte}!`);
	}

	
	function entradaUsuario(){
	numeroEscolha = prompt('Escolhar um numero entre 1 e 10.');
	}
	
	soteiaNumero();
	