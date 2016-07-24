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
		table += '<tr> <td>'+ formatDesc(list[key].desc)+'</td> <td>'+ formatAmount(list[key].amount)+'</td> <td>'+ formatValue(list[key].value)+'</td> <td><button class="btn btn-default" onclick="setUpdate('+key+');">Edit</button> <button class="btn btn-default" onclick="deleteData('+key+');">Delete</button></td> </tr>';
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

/* Formatando a Quantidade */
function formatAmount(amount){
	return parseInt(amount); 
}

/* adicionando novo registro */
function addData(){
	if(!validation()){
		return;
	}
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

	document.getElementById("inputIdUpdate").innerHTML = '<input type="hidden" id="idUpdate" value="'+id+'">';
}

/* resetForm() */
function resetForm(){
	document.getElementById("desc").value = "";
	document.getElementById("amount").value = "";
	document.getElementById("value").value = "";

	document.getElementById("btnUpdate").style.display = "none";
	document.getElementById("inputIdUpdate").innerHTML = "";
	//document.getElementById("idUpdate").value = "";
	document.getElementById("errors").innerHTML = "";
	document.getElementById("btnAdd").style.display = "inline-block";
	//setList();

}

function updateData(){
	if(!validation()){
		return;
	}
	var id = document.getElementById("idUpdate").value;
	var desc = document.getElementById("desc").value;
	var amount = document.getElementById("amount").value;
	var value = document.getElementById("value").value;

	list[id] = {"desc": desc, "amount": amount, "value":value};
	resetForm();
	setList(list);
	
}


function deleteData(id){
	if(confirm("Deletar esse item?")){
		if(id === list.length - 1){
			list.pop();
		}else if(id === 0){
			list.shift();
		}else{
			var arrayAuxIni = list.slice(0, id);
			var arrayAuxEnd = list.slice(id + 1);
			list = arrayAuxIni.concat(arrayAuxEnd);
		}
		setList(list);
	}else{

	}
}

function validation(){
	var desc = document.getElementById("desc").value;
	var amount= document.getElementById("amount").value;
	var value = document.getElementById("value").value;
	var errors = "";

	if(desc === ""){
		errors += '<p>Digite uma descrição!</p>';
	}

	if(amount === null){
		errors += '<p>Digite uma quantidade!</p>';	
	}else if(amount  != parseInt(amount)){
		errors += '<p>Digite uma valor numerico!</p>';
	}


	if(value === null){
		errors += '<p>Digite uma quantidade!</p>';	
	}else if(value  != parseFloat(value)){
		errors += '<p>Digite uma valor correto!</p>';
	}

	if(errors != ""){
		document.getElementById("errors").innerHTML = "<h3>Error: </h3>" + errors;
		return 0;
	}else{
		document.getElementById("errors").innerHTML = "";
		return 1;
	}

}

/* Usando a funcao setList() */
setList(list);