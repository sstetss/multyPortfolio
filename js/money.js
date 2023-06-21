






let moneyVal = document.getElementById('money-val')
let moneyPrice = document.getElementById('money-price')

let money = document.getElementById('money')

window.addEventListener('load', ()=>{
   let url = `https://api.exchangerate.host/latest`


         axios.get(url , {
            params: {
               base: "USD",
               symbols: "PLN,UAH",
            }
         })
               .then(function (response) {
                  let allRates = response.data.rates
                  console.log(allRates);
                  for (const key in allRates) {
                     if (Object.hasOwnProperty.call(allRates, key)) {
                        const element = allRates[key];
                        money.insertAdjacentHTML('beforeend', `
                        <div class="money-item">
                           <span class="span-val" id="money-val">${key}</span>
                           <span class="span-price" id="money-price">${Math.round(response.data.rates[key])}</span>
                        </div>
                        `)
                        // moneyPrice.innerText = Math.round(response.data.rates[key])
                     }
                  }



                  // console.log(allRates);
                  // // handle success
                  // moneyPrice.innerText = Math.round(response.data.rates["UAH"])
                  // console.log(Math.round(response.data.rates["UAH"]));
               })
               .catch(function (error) {
                  // handle error
                  console.log("error");
               })
})