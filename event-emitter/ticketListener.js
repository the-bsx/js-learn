import TicketManager from "./ticketManager.js";

const  ticketManager = new TicketManager(2);

ticketManager.on("error", (error) =>{
    console.log(`Error handled gracefully: ${error}`)
})
ticketManager.on("buy", () =>{
    console.log("someone bought the ticket");
})


ticketManager.buy("example@mail.com", 20);
ticketManager.buy("example@mail.com", 20);
ticketManager.buy("example@mail.com", 20);



