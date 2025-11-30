const container = document.querySelector(".container")
const searchInput = document.getElementById("search");

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

searchInput.addEventListener("input", () => {
    const value = searchInput.value.toLowerCase()
    const cards = document.querySelectorAll(".countryCard")

    cards.forEach(card => {
        const title = card.querySelector(".card-title").textContent.toLowerCase()
        card.style.display = title.includes(value) ? "block" : "none"
    })
})