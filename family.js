var childOf = function() {
    return this.parents.map(parent => parent.name).join(" & ")
}

const person1 = { name: "Louis", childOf }
const person2 = { name: "Amber", childOf }
const person3 = { name: "Selina", childOf }
const person4 = { name: "Andy", childOf }
const person5 = { name: "Muddy", childOf }
const person6 = { name: "Nanny", childOf }
const person7 = { name: "Mick", childOf }
const person8 = { name: "Maggy", childOf }

const people = { person1, person2, person3, person4, person5, person6, person7, person8 }

person1.parents = [person3, person4]
person2.parents = [person3, person4]
person3.parents = [person5, person6]
person4.parents = [person7, person8]

module.exports = people, childOf
