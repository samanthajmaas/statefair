const contentElement = document.querySelector(".food")
const eventHub = document.querySelector("#state-fair")

export const FoodTicketHolders = () => {
    eventHub.addEventListener("foodTicketPurchased", foodEvent => {
        contentElement.innerHTML += `
        <div class= "person eater"></div>`
    })
}