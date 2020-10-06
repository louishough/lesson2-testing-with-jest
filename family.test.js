const { TestScheduler } = require("jest")
const people = require('./family')
const childOf = require('./family')

describe('person objects', () => {
    test('I am in the family', () => {
        expect(people.person1.name).toEqual("Louis")
    })
    test('My sister is in the family', () => {
        expect(people.person2.name).toEqual("Amber")
    })
    test('My parents are in the family', () => {
        expect(people.person3.name).toEqual("Selina")
        expect(people.person4.name).toEqual("Andy")
    })
    test('My grandparents are in the family', () => {
        expect(people.person5.name).toEqual("Muddy")
        expect(people.person6.name).toEqual("Nanny")
        expect(people.person7.name).toEqual("Mick")
        expect(people.person8.name).toEqual("Maggy")
    })
})

describe('correct parents', () => {
    test('My parents are Selina and Andy', () => {
        expect(people.person1.parents[0]).toEqual(people.person3) 
        expect(people.person1.parents[1]).toEqual(people.person4) 
    })
    test('My sisters parents are Selina and Andy', () => {
        expect(people.person2.parents[0]).toEqual(people.person3) 
        expect(people.person2.parents[1]).toEqual(people.person4)
    })
    test('My mums parents are Muddy and Nanny', () => {
        expect(people.person3.parents[0]).toEqual(people.person5)
        expect(people.person3.parents[1]).toEqual(people.person6)
    })
    test('My dads parents are Mick and Maggy', () => {
        expect(people.person4.parents[0]).toEqual(people.person7)
        expect(people.person4.parents[1]).toEqual(people.person8)
    })
})

describe('function returns correct parents', () => {
    test('my generations parents are Selina and Andy', () => {
        expect(people.person1.childOf()).toEqual("Selina & Andy")
        expect(people.person2.childOf()).toEqual("Selina & Andy")
    })
    test('my mums parents are Muddy and Nanny', () => {
        expect(people.person3.childOf()).toEqual("Muddy & Nanny")
    })
    test('my dads parents are Mick and Maggy', () => {
        expect(people.person4.childOf()).toEqual("Mick & Maggy")
    })
    
})
