const countryName = new URLSearchParams(location.search).get("name")
const qs = (selector) => document.querySelector(selector)
const darkMode = document.querySelector(".dark-mode")

const element = {
    flag: qs(".country-details img"),
    name: qs(".country-details h1"),
    nativeName: qs(".native-name"),
    population: qs(".population"),
    region: qs(".region"),
    subRegion: qs(".sub-region"),
    capital: qs(".capital"),
    tld: qs(".domain"),
    currencies: qs(".currencies"),
    languages: qs(".languages"),
    borders: qs(".border-countries"),
}

fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`)
    .then((res) => res.json())
    .then(([country]) => {
        const { flags,name,population,region,subregion,capital,tld,currencies,languages,borders,} = country

        element.flag.src = flags.svg
        element.name.textContent =  name.common
        element.population.textContent = population.toLocaleString("en-US")
        element.region.textContent = region
        element.tld.textContent = tld?.join(", ")
        element.subRegion.textContent = subregion || "N/A"
        element.capital.textContent = capital?.[0] || "N/A"
        element.nativeName.textContent = Object.values(name.nativeName ||  { x: { common: name.common } })[0].common
        element.currencies.textContent = currencies
            ? Object.values(currencies).map((c) => c.name).join(", ")
            : "N/A"
        element.languages.textContent = languages
            ? Object.values(languages).join(", ")
            : "N/A";
        if (borders) {
        borders.forEach((code) => {
            fetch(`https://restcountries.com/v3.1/alpha/${code}`)
            .then((res) => res.json())
            .then(([borderCountry]) => {
                const tag = document.createElement("a");
                tag.textContent = borderCountry.name.common;
                tag.href = `country.html?name=${borderCountry.name.common}`;
                element.borders.append(tag);
            })
        })
        }
    })

darkMode.addEventListener("click", () => {
    document.body.classList.toggle("dark")
})