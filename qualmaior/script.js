function maior() {
    let n1 = Number(window.prompt('Digite aqui um número: '))
   let n2 = Number(window.prompt('Digite outo número menó: '))
  
  let res = document.querySelector('section#saída')
   if (n1 > n2) {
      res.innerHTML = ` <p> Analisando os valores ${n1} é maior que ${n2} </p> `
   }else if (n1 < n2) {
      res.innerHTML = `<p>Analisando os valores ${n1} é menor que ${n2} </p>`
   }else {
      res.innerHTML = `<p>Analisando os valores ${n1} e ${n2} </p>`
   }
  
  }