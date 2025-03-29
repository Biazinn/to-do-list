//estado da aplicação
const tarefas = ["Estudar Js"]

function add() {
    const input = document.querySelector("input")
    const tarefa = input.value
    tarefas.push(tarefa)
    input.value = ""
    render()
}

function render() {
    const ul = document.querySelector("ul")
    ul.innerHTML = null

    tarefas.forEach(function (tarefa){
        const li = document.createElement("li")
        li.innerText = tarefa
        ul.appendChild(li)
    })
    
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

window.onload = function () {
    let tarefasalva = localStorage.getItem('To do')
    if (tarefasalva) {
        exibirmsg(`ja fez sua ultima tarefa salva: ${tarefasalva}?`)
        
    } else {
        exibirmsg(`Salve sua tarefa`)
    }
}