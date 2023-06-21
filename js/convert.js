let btnGetConvert = document.getElementById('btnGetConvert')
let output = document.getElementById('output')
let fromInput = document.getElementById('selectCurrencyFrom')
let toInput = document.getElementById('selectCurrencyTo')



window.addEventListener('load',()=>{
   let url = `https://api.exchangerate.host/latest`



   axios.get(url)
         .then(function (response) {
            // handle success
            let allRates = response.data.rates

            for (const i in allRates) {
               if (Object.hasOwnProperty.call(allRates, i)) {
                  const element = allRates[i];
                  fromInput.insertAdjacentHTML('beforeend', `
                  <option value="${i}">${i}</option>
                  `)
                  toInput.insertAdjacentHTML('beforeend', `
                  <option value="${i}">${i}</option>
                  `)
               }
            }

            console.log(allRates);

         
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })
})

btnGetConvert.addEventListener('click', () => {

    // синхронний запит(false)
    // let xhr = new XMLHttpRequest()
    // xhr.open('GET', "info.html", false)

    // xhr.send()

    // output.innerHTML = xhr.responseText


    // асинхронний запит(true)

   //  let xhr = new XMLHttpRequest()
   //  xhr.open('GET', "https://jsonplaceholder.typicode.com/photos", true)

   //  xhr.send()

    // функция-обработчик срабатывает при изменении свойства readyState
    // Значения свойства readyState:
    // 0 - Метод open() еще не вызывался
    // 1 - Метод open() уже был вызван, но метод send() еще не вызывался.
    // 2 - Метод send() был вызван, но ответ от сервера еще не получен
    // 3 - Идет прием данных от сервера. Для значения 3 Firefox вызывает обработчик события несколько раз IE только один раз.
    // 4 - Ответ от сервера полностью получен (Запрос успешно завершен).

   //  xhr.onreadystatechange = function () {
   //      if (xhr.readyState == 4) { // если получен ответ
   //          if (xhr.status == 200) { // и если статус код ответа 200
   //              document.getElementById("output").innerHTML += xhr.responseText; // responseText - текст ответа полученного с сервера.
   //          }
   //      }
   //  }


   //  output.innerHTML = xhr.responseText



   // fetch api

      // fetch(url)
      //    .then(response => response.json())
      //    .then(data => {
      //       console.log(data);
      //    })

      // symbols.forEach(element => {
      
      // });


   // axios
   let dataInput = document.getElementById('data')
   let url = `https://api.exchangerate.host/${dataInput.value}`
   let toValue = toInput.value
   let fromValue = fromInput.value

   


   axios.get(url , {
      params: {
         base: fromValue,
         symbols: toValue,
      }
   })
         .then(function (response) {
            // handle success

            output.innerText = `${response.data.rates[toValue]}`
            console.log(response.data.rates[toValue]);
            console.log(toValue);
         })
         .catch(function (error) {
            // handle error
            console.log(error);
         })


})