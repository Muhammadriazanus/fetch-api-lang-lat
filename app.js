const btn = document.querySelector(".btn")
const card  = document.querySelector(".card")
const image  = document.querySelector('#image')
const cardTitle = document.querySelector(".card-title")
console.log(image); 

// console.log(card);
card.style.display = "none"



btn.addEventListener('click',btnHandler)
function btnHandler(){
    card.style.display = "block"

    const  renderCountry = (data)=>{
        cardTitle.textContent = data.city;



    }

    const WhereAmI = function(lat,lng){
        fetch(`https://geocode.xyz/${lat},${lng}?geoit=json`)
        .then(res =>{
            if(!res.ok) throw new Error(`problem with geocoding ${res.status}`)
            return res.json()
        })
        .then(data =>{
            console.log(data);
            console.log(`you are int e ${data.city} and ${data.country}`);
            return fetch(`https://restcountries.eu/rest/v2/name/${data.country}`)
        })
        .then(res =>{
            if(!res.ok) throw new Error(`country not found ${res.status}`)
            return res.json()
        })
        .then(data => renderCountry (data[0]))
        .catch(err => console.log(`${err.message}`))

    }

    WhereAmI(52.588,13.381)
}