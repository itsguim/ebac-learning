const inputA = document.querySelector('#input_a'),
  inputB = document.querySelector('#input_b'),
  submit = document.querySelector('#enviar');

submit.addEventListener('click', verificaCampos)

function verificaCampos(evt) {
  evt.preventDefault()
  let valorA = parseInt(inputA.value)
  let valorB = parseInt(inputB.value)
  if (valorB > valorA) {
    alert(`SUCESSO! ${valorB} (Valor B) é MAIOR que ${valorA} (Valor A)`)
  } else {
    alert(`Falha :/ , ${valorB} (Valor B) é MENOR que ${valorA} (Valor A)`)
  }
}