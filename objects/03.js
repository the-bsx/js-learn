
//* Object methods, "this"

let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    count() {
        console.log(this.step)
        return this
    }
}

// ladder.up()
// ladder.up()
// ladder.up()
// ladder.count()
// ladder.down()
// ladder.count()

ladder.up().up().down().count().down().count(); 