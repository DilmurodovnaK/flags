const BASE_URL = "https://restcountries.com/v3.1";
const getUsers = async() => {
    const response = await fetch(`${BASE_URL}/all`);
    if (response.status !== 200) {
        throw new Error("Failed to fetch users");
    }
    const data = response.json();
    return data;
};
const createUserCard = (data) => {
    all.ForEach((user) => {
        const userCard = document.createElement("div");
        userCard.classList.add("list");
        userCard.innerHTML = ` <li class="item js-item">
    <img  src=${"element.flags.svg"} alt="">
     <span class="item__span population">${all.population}</span>
    <span class="item__span capital">${all.capital}< /span> <
        span class = "item__span region" > ${all.region} < /span> 
        </li>`
    })
}