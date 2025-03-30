//estado da aplicação
const tarefas = ["Estudar Js"]
const jsonArr = JSON.stringify(tarefas)
console.log(jsonArr)
localStorage.setItem("kArr", jsonArr)
const str = localStorage.getItem("kArr")
console.log(str)
const parsedArr = JSON.parse(str)
console.log(parsedArr)

function render() {
    const ul = document.getElementById('lista')
    ul.innerHTML = "";

    tarefas.forEach(function (tarefa){
        const li = document.createElement("li")
        li.innerText = tarefa
        ul.appendChild(li)
    
    })
    
}
function add() {
    const input = document.querySelector("input")
    const tarefa = input.value
    tarefas.push(tarefa)
    input.value = ""
    render()
}
render()

function salvartarefa() {
    let todo = document.getElementById('Tarefa').value
    localStorage.setItem('To do', todo)
    exibirmsg('Tarefa salva!')
}
function exibirmsg(mensagem) {
    let pMsg = document.getElementById('mensagem')
    pMsg.textContent = mensagem
}



window.onload = function() {
    let tarefasalva = localStorage.getItem('To do')
    if (tarefasalva) {
        exibirmsg(`ja fez sua ultima tarefa salva: ${tarefasalva}?`)
        
    } else {
        exibirmsg(`Salve sua tarefa`)
    }
}
console.log(tarefas)
