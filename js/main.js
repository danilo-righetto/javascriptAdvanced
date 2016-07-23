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
		table += '<tr> <td>'+ formatDesc(list[key].desc)+'</td> <td>'+ list[key].amount+'</td> <td>'+ formatValue(list[key].value)+'</td> <td><button class="btn btn-default" onclick="setUpdate('+key+');">Edit</button>  | Delete</td> </tr>';
	}
	table += '</tbody>';
	document.getElementById("listTable").innerHTML = table;
}



/* Formatando a Descrição */

function formatDesc(desc){
	// transforma o texto desc para minusculo
	var str = desc.toLowerCase();
	// charAt - pega a primeira letra
	// toUpperCase - Deixa a primeira letra em Maiusculo
	// slice - Vai pegar da segunda letra em diante
	str = str.charAt(0).toUpperCase() + str.slice(1);

	return str;
}

/* Formatando os Preços */
function formatValue(value){
	// toFixed(2) - Define que serão apenas dois
	// numeros decimais
	// parseFloat - Converte para Float
	// + "" - transforma para String
	var str = parseFloat(value).toFixed(2) + "";
	str = str.replace(".",",");
	str = "$ " + str;

	return str; 
}

/* adicionando novo registro */
function addData(){
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;

	// Adicionando um novo objeto pro começo da lista
	list.unshift({"desc": desc, "amount":amount, "value":value});

	setList(list);
}

/* Implementando o botão Edit */
function setUpdate(id){
	var obj = list[id];
	document.getElementById("desc").value = obj.desc;
	document.getElementById("amount").value = obj.amount;
	document.getElementById("value").value = obj.value;
	document.getElementById("btnUpdate").style.display = "inline-block";
	document.getElementById("btnAdd").style.display = "none";
}

/* resetForm() */
function resetForm(){
	document.getElementById("desc").value = "";
	document.getElementById("amount").value = "";
	document.getElementById("value").value = "";

	document.getElementById("btnUpdate").style.display = "none";
	document.getElementById("btnAdd").style.display = "inline-block";

}

/* Usando a funcao setList() */
setList(list);