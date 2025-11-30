const container = document.querySelector(".container")

fetch("data.json")
    .then((res) => res.json())
    .then((data) => {
        data.forEach((country) => {
            console.log(country)
            const countryCard = document.createElement("a")
            countryCard.classList.add("countryCard")

            const countryText = `
                <img src="${country.flags.svg}" alt="flag">
                <div class="card-text">
                    <h2 class="card-title">${country.name}</h2>
                    <p><b>Population:</b> </p>
                    <p><b>Region:</b> </p>
                    <p><b>Capital:</b> </p>
                </div>
            `

            countryCard.innerHTML = countryText
            container.append(countryCard)

        })
    })

