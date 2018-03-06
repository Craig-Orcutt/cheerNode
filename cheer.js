
let words = process.argv.slice(2);

function cheers (phrase){
words.forEach((word) => {
    word.split("").forEach((letter)=> {
        process.stdout.write("Give me a " + letter + "!\n");
    })
})
    process.stdout.write("What does that spell? " + words + "!\n");
};

cheers(words);




