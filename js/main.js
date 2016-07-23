/* Autor: Danilo Righetto */

/* Criando um ARRAY de Produtos */

/* Lista de Compras */
var list = [
	// desc - Descrição
	// Aamount - Quantidade
	// value - Preço ou Valor
	{"desc": "rice", "amount":"1", "value":"5.40"},
	{"desc": "beer", "amount":"12", "value":"1.99"},
	{"desc": "meet", "amount":"1", "value":"15.00"}

];

/* valor total da nosso compra */
function getTotal(list){
	var total = 0;
	for (var key in list) {
		total += list[key].value * list[key].amount;
	}
	return total;
}

/* testando a nossa função getTotal*/
console.log(getTotal(list));

/*  */
function setList(list){
	var table = '<thead> <tr> <td>Description</td> <td>Amount</td> <td>Value</td> <td>Action</td> </tr> </thead><tbody>';
	for (var key in list) {
		table += '<tr> <td>'+ list[key].desc+'</td> <td>'+ list[key].amount+'</td> <td>$ '+ list[key].value+'</td> <td>Edit | Delete</td> </tr>';
	}
	table += '</tbody>';
	document.getElementById("listTable").innerHTML = table;
}

/* Usando a funcao setList() */
setList(list);