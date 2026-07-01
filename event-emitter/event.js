import { EventEmitter } from "events";

const firstEmitter = new EventEmitter();

//* emit is used to trigger an event
//* on is used to add the callback function thats going to executed when event is triggered

firstEmitter.on('start', (string) => {
    console.log("our first event started");
    console.log(`data we get: ${string}`)
})

firstEmitter.emit("start", "argument can be pass to events");