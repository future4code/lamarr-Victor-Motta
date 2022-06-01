```function contaOcorrencias(arrayDeNumeros, numeroEscolhido) {

	let quantNum4 = arrayDeNumeros.filter(numero => numero == numeroEscolhido).length;
	if(quantNum4 == 0){
		return 'Número não encontrado';
	}else{
		return `O número ${numeroEscolhido} aparece ${quantNum4}x`;
	}
}
```
