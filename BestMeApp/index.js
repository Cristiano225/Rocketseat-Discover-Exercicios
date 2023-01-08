const questions = [
    "O que eu aprendi hoje?",
    "O que me deixou com raiva? E que eu poderia fazer para melhorar?",
    "O que me deixou feliz?",
    "Quantas pessoas eu ajudei hoje?",
];

const ask = ( index = 0) => {
    process.stdout.write("\n\n" + questions[index] + " > ")
}

ask()

const answers = []
process.stdin.on("data", data => {
    answers.push(data.toString().trim())
    if (answers.length < questions.length) {
        ask(answers.length)
    }
    else {
        console.log(answers)
        process.exit()
    }
})

process.on('exit', () => {
    console.log(`
    Bacana Cris!

    O que aprendeu hoje foi:
    ${answers[0]}

    O que me deixou com raiva e que eu poderia fazer para melhorar?:
    ${answers[1]}
    O que te deixou feliz foi:
    ${answers[2]}
    Você ajudou ${answers[3]} pessoas hoje!!


    `)
})