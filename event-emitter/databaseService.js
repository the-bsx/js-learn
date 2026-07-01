class DatabaseService{
    save(email, price, timestamp) {
        console.log(`Running query: INSERT INTO  orders (email, price, created) VALUES(${email}, ${price}, ${timestamp})`)
    }
}

export default DatabaseService;