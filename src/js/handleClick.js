/* Seletores ***/
const taskInput = $('#inp-task'),
  btn = $('.add_btn'),
  taskDiv = $('.task_list ul')

/* Adiciona a task ao click ***/
btn.on('click', addTask)

/*Adiciona um item na ul, com o texto do input ***/
function addTask() {
  const taskVal = taskInput.val()
  const newTask = $('<li></li>', {
    'class': 'task',
    'text': taskVal
  })
  taskDiv.append(newTask)
}

/*
  - Essa execução adiciona um toggle de classe aos elementos '.task', atribuindo ao elemento pai "document", para que os novos elementos adicionados também recebam sua função click para o toggle de classe
  - Diferente do método nativo JS "querySelectorAll()" que traz uma NodeList de elementos que se atualiza sozinha a cada execução, é necessário adicionar o método "on" à um elemento-pai para que se tenha a lista de elementos que são adicionados dinamicamente sempre, ao invés de atribuir diretamente aos itens '.task'.
   */
$(document).on('click', '.task', function () {
  $(this).toggleClass('done');
})