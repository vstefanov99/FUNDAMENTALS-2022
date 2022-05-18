function asd(input) {
    let letter = input[0].split(' ')
    let wordsArr = input[1]

    for (let index in letter) {
        let word = letter[index]
        if (word.includes('_')) {
            for (let replacement of wordsArr) {
                if (replacement.length == word.length) {
                    letter[index] = replacement
                } else if (replacement.length == word.length - 1  && word.endsWith(',')) {
                    letter[index] = replacement + ','
                } else if (replacement.length == word.length - 1  && word.endsWith('.')) {
                    letter[index] = replacement + '.'
                }
            } 
        }
    }
    console.log(letter.join(' '))
}
asd(['Hi, grandma! I\'m so ____ to write to you. ______ the winter vacation, so _______ things happened. My dad bought me a sled. Mom started a new job as a __________. My brother\'s ankle is ________, and now it bothers me even more. Every night Mom cooks ___ on your recipe because it is the most delicious. I hope this year Santa will _____ me a robot.',
['pie', 'bring', 'glad', 'During', 'amazing', 'pharmacist', 'sprained']]
)