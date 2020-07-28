// Import and invoke the ticket booth component function
import {TicketBooth} from "./TicketBooth.js"
import {RideTicketHolders} from "./rides/RideTicketHolders.js"
import {FoodTicketHolders} from "./food/FoodTicketHolder.js"
import {GameTicketHolders} from "./games/GameTicketHolder.js"
import {SideshowTicketHolders} from "./sideshows/SideshowTicketHolder.js"
import {FullPackageTicketHolders} from "./FullPackageTicketHolder.js"
import {totalTickets} from "./TotalTickets.js"


TicketBooth()
RideTicketHolders()
FoodTicketHolders()
GameTicketHolders()
SideshowTicketHolders()
FullPackageTicketHolders()
totalTickets()