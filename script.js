let num1 ="";
let num2 ="";
let valor ="";
let temPonto = false

mensagem = (msg) => console.log(msg);
soma = (a,b) => a + b;
sub = (a,b) => a - b;
mult = (a,b) => a * b;
div = (a,b) => a / b;
juros_simples = (c,j) => mult(c,div(j,100));
montante_juro_simples = (c,j) => soma(juros_simples(c,j),c);

mostrar_display = (msg) =>{
    document.getElementById("resultado").value = msg;
}

function digitando (tecla){
  if(tecla == "."){
    if(!temPonto){
        valor += tecla;
        mostrar_display(valor);
        temPonto = true;
    }
    return;
  }
    valor += tecla;
    mostrar_display(valor);
}
function operaçao(op){
  executa = op;
  numl = valor;
}

function calcula(){
  if(executa != ""){
    num2 = valor;
    if(executa == "soma") mostrar_display(soma(num1,num2));
    if(executa == "sub") mostrar_display(sub(num1,num2));
    if(executa == "div") mostrar_display(div(num1,num2));
    if(executa == "mult") mostrar_display(mult(num1,num2));
    num1 = "";
    num2 = "";
    valor = "";
    temPonto = false;
    executa = "";
  }
}
let a = 0;
let b = 0;
let c = 0;

function calcula_eq(){
  if(a != 0){
     let delta
  }

}



function muda_sinal_a(){
    a = (-1)*a;
    calcula_eq();
}
const muda_sinal_b(){
  b = (-1)*b;
  calcula_eq();
}
const muda_sinal_c(){
  c = (-1)*c;
  calcula_eq();
}
function set_valor_a(){
  a = document.getElementById("valor_a").value;
  calcula_eq();
}
function set_valor_b(){
  b = document.getElementById("valor_b").value;
  calcula_eq();
}
function set_valor_c(){
  c = document.getElementById("valor_c").value;
  calcula_eq();
}

