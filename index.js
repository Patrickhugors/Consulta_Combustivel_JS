alert(" Relação de consumo Álcool x Gasolina" + "\n")

var gasolina = parseInt(prompt(" Digite o preço da gasolina: R$"))
var alcool = parseInt(prompt(" Digite o preço do álcool: R$"))

combustivel(gasolina, alcool)

function combustivel(gasolina, alcool){
   consumo = alcool/gasolina
   consumo = consumo.toFixed(2)
  
  if(consumo<0.7){
    alert("\n Relação de consumo = "+ consumo + "\n É aconselhável o abastecimento de Álcool. \n")
  }
  if(consumo>0.7){
    alert("\n Relação de consumo = "+ consumo + "\n É aconselhável o abastecimento de Gasolina. \n")
  }
  if(consumo==0.7){
    alert("\n Relação de consumo = "+ consumo + "\n O abastecimento pode ser feito com Gasolina ou Álcool. \n")
  }
  return consumo;
}

pergunta = prompt("Deseja fazer uma nova consulta? Digite sim ou nao")

while(pergunta=="sim"){
  var gasolina = parseInt(prompt("Insira o preço da gasolina: R$"))
  var alcool = parseInt(prompt("Insira o preço do álcool: RS"))
  combustivel(gasolina, alcool)
  pergunta = prompt(" Deseja fazer uma nova consulta? Digite sim ou nao")
}