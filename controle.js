let lista = ["lara", "isa"];
const atualiza_lista = () =>{
    let mostrar = "Lista Vazia";
    console.log(alunos.length)
    if(lista.length > 0){   
        mostrar = "";
        for(let i = 0; i < alunos.length; i++ ){
            console.log(alunos[i]);
            mostrar += lista[i] + "<br>";
        }
    }
    document.getElementById("lista").innerHTML = mostrar;
}
const pegar_nome = () => validar_nome(document.getElementById("nome").value);
const mostra_erro = (erro) =>  document.getElementById("error").innerHTML = erro;
const validar_nome = (nome) => {
    mostra_erro("");
    for(let i = 0; i < lista.length; i++ ){
        if(lista[i].toUpperCase() == nome.toUpperCase()){
            mostra_erro("Nome já está na lista");
            return "";
        }
    }
    document.getElementById("nome").value = "";
    return nome;
}

//Faça os botões no minha_lista.html e a função neste arquivo js.
// inserir_primeiro  deletar_ultimo  deletar_primeiro deletar_nome
// O deletar_nome deverá deletar o nome digitado, na posição que quiser.
// limpar_lista, deverá apagar toda a lista.
// odernar_az deverá ordenar em ordem alfabética crescente
// ordenar_za deverá ordenar em ordem alfabética decrescente

const inserir_ultimo = () => {
    if( lista.length > 0){
        lista.pop;
        atualiza_lista();
    } 
}
const inserir_primeiro = () => {
    if( lista.length > 0){
        lista.pop;
        atualiza_lista();
    } 
}    
const deletar_ultimo = () => {
    if( lista.length > 0){
        lista.pop;
        atualiza_lista();
    } 
}
const deletar_primeiro = () => {
    if( lista.length > 0){
        lista.pop;
        atualiza_lista();
    } 
}
const deletar_nome = () => {
    if( lista.length > 0){
        lista.pop;
        atualiza_lista();
    } 
}
const limpar_lista = () => {
     lista = [];
     atualiza_lista();


}
const ordenar_az = () => {
    lista = sort();
    atualiza_lista();
}
for(let i = 0; i<lista.length; i++){
    if (nome = lista[i]){
        lista.splice(i,1);
    }
}
atualizar_lista();