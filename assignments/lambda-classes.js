// CODE here for your Lambda Classes

class Person{
    constructor(attributes){
        this.name = attributes.name,
        this.age = attributes.age,
        this.location = attributes.location
    }
    speak(){
        return `Hello my name is ${this.name}, I am from ${this.location}`
    }
}

class Instructor extends Person{
    constructor(attributes){
        super(attributes);
        this.specialty = attributes.specialty,
        this.favLanguage = attributes.favLanguage,
        this.catchPhrase = attributes.catchPhrase
    }
    demo(subject){
        return `Today we are learning about ${subject}`
    }
    grade(student, subject){
        return `${student} receives a perfert score on ${subject}`
    }
}

class Student extends Person{
    constructor(attributes){
        super(attributes);
        this.previousBackground = attributes.previousBackground,
        this.className = attributes.className,
        this.favSubjects = attributes.favSubjects
    }
    listsSubjects(){
        return `${this.favSubjects}`
    }
    PRAssignment(subject){
        return `${this.name} has submitted a PR for ${subject}`
    }
    sprintChallenge(subject){
        return `${this.name} has begun sprint challenge on ${subject}`
    }
}

class ProjectManager extends Instructor{
    constructor(attributes){
        super(attributes);
        this.gradClassName = attributes.gradClassName,
        this.favInstructor = attributes.favInstructor
    }
    standUp(channel){
        return `${this.name} announces to ${channel}, @channel standy times!`
    }
    debugsCode(student, subject){
        return `${this.name} debugs ${student}'s code on ${subject}`
    }
}

const sierra = new Person({
    name: 'Sierra',
    age: '28',
    location: 'USA'
})

const james = new Person({
    name: 'James',
    age: '38',
    location: 'Canada'
})

const fred = new Instructor({
    name: 'Fred',
    age: 37,
    location: 'Bedrock',
    favLanguage: 'English',
    specialty: 'Grammer',
    catchPhrase: `Don't forget the homies`
})

const sarah = new Instructor({
    name: 'Sarah',
    age: 47,
    location: 'Chicago',
    favLanguage: 'Spanish',
    specialty: 'Sports',
    catchPhrase: `I'm free`
})

const john = new Student({
    name: 'John',
    age: 31,
    location: 'Detroit',
    previousBackground: 'pizza maker',
    className: 'Law 101',
    favSubjects: [`English, Culinary Arts`] 
})

const yvonne = new Student({
    name: 'Yvonne',
    age: 33,
    location: 'New York City',
    previousBackground: 'teacher',
    className: 'Literature',
    favSubjects: [`Art, Math, Science`] 
})

const daisy = new ProjectManager({
    name: 'Daisy',
    age: 23,
    location: 'Boston',
    previousBackground: 'delivery',
    className: 'Management',
    favSubjects: `Economics`,
    gradClassName: '401',
    favInstructor: 'Lisa'
})

const david = new ProjectManager({
    name: 'David',
    age: 34,
    location: 'California',
    previousBackground: 'Arts & Design',
    className: 'Graphic Design',
    favSubjects: [`Art`],
    gradClassName: 'B23',
    favInstructor: 'Curtis'
})

console.log(fred.speak());
console.log(james.speak());
console.log(sarah.demo('JavaScript'));
console.log(fred.demo('paragraphs'));
console.log(sarah.grade('Lisa', 'CSS'));
console.log(fred.grade('Sarah', 'formatted'))
console.log(john.listsSubjects());
console.log(yvonne.listsSubjects());
console.log(john.PRAssignment('Science'));
console.log(yvonne.PRAssignment('English'))
console.log(yvonne.sprintChallenge('HTML'));
console.log(john.sprintChallenge('CSS'));
console.log(daisy.standUp('#101'));
console.log(david.standUp('#401'));
console.log(david.debugsCode(yvonne.name, 'English'));
console.log(daisy.debugsCode(john.name, 'Math'));

