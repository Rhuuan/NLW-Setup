const form = document.querySelector("#form-habits")
const nlwSetup = new NLWSetup(form)
const button = document.querySelector("header button")

button.addEventListener("click", add) // EVENTO E FUNÇÃO, DE CLICK
form.addEventListener("change", save) // EVENTO E FUNÇÃO DE SALVAR

function add() {
  const today = new Date().toLocaleDateString("pt-br").slice(0, -5) // TRABALHANDO COM DIAS!
  const dayExists = nlwSetup.dayExists(today)
  if (dayExists) {
    alert("Dia já incluso")
    return
  }
  nlwSetup.addDay(today)
}

function save() {
  localStorage.setItem("NLWSetup@habist", JSON.stringify(nlwSetup.data))
}

const data = JSON.parse(localStorage.getItem("NLWSetup@habist")) || {}
nlwSetup.setData(data)
nlwSetup.load()
