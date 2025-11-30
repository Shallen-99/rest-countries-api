const container = document.querySelector(".container")

fetch("../data.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((country) => {
            console.log(country)
            const countryCard = document.createElement("a")
            countryCard.classList.add("countryCard")
            countryCard.href = `/text/country.html?name=${country.name}`

            const countryText = `
                <img src="${country.flags.svg}" alt="flag">
                <div class="card-text">
                    <h2 class="card-title">${country.name}</h2>
                    <p><b>Population:</b> ${country.population.toLocaleString("en-US")}</p>
                    <p><b>Region:</b> ${country.region}</p>
                    <p><b>Capital:</b> ${country.capital}</p>
                </div>
            `

            countryCard.innerHTML = countryText
            container.append(countryCard)

        })
    })

