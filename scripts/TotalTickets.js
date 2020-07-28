const contentElement = document.querySelector ( ".customers")
const eventHub = document.querySelector ("#state-fair")
let tickets = 0

export const totalTickets = () => {
    eventHub.addEventListener("rideTicketPurchased", rideEvent => {
        tickets++
        contentElement.innerHTML = `Total tickets purchased: ${tickets}`
    })
    eventHub.addEventListener("foodTicketPurchased", foodEvent => {
        tickets++
        contentElement.innerHTML = `Total tickets purchased: ${tickets}`

    })
    eventHub.addEventListener("gameTicketPurchased", gameEvent => {
        tickets++
        contentElement.innerHTML = `Total tickets purchased: ${tickets}`

    })
    eventHub.addEventListener("sideshowTicketPurchased", sideshowEvent => {
        tickets++
        contentElement.innerHTML = `Total tickets purchased: ${tickets}`

    })
    eventHub.addEventListener("fullPackageTicketPurchased", (fullPackage) => {
        tickets++
        contentElement.innerHTML = `Total tickets purchased: ${tickets}`
    })
 }

 

    
