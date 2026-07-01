import TicketManager from "./ticketManager.js";
import EmailService from "./emailService.js";
import DatabaseService from "./databaseService.js";


const ticketManager = new TicketManager(3);
const emailService = new EmailService();
const databaseService = new DatabaseService();

ticketManager.once("error", (error) =>{
    console.log(`Error handled gracefully: ${error}`)
})


ticketManager.on("buy", (email, price, timestamp) => {
    emailService.send(email);
    databaseService.save(email, price, timestamp)
})



// ticketManager.buy("example@mail.com", 20);
// ticketManager.buy("example@mail.com", 20);
// ticketManager.buy("example@mail.com", 20);
// ticketManager.buy("example@mail.com", 20);

console.log(`We have ${ticketManager.listenerCount("buy")} listener(s) for the buy event`);
console.log(`We have ${ticketManager.listenerCount("error")} listener(s) for the error event`);