class Person {
  constructor(name, color) {
    this.name = name,
    this.color = color
  }

  greeting() {
    console.log(`hello ${this.name} your color is ${this.color}`)
  }
}

module.exports = Person