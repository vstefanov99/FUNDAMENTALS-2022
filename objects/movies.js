function asd(input) {
    let moviesArr = []

    for (let line of input) {
        line = line.split(' ')
        let addIndex = line.indexOf("addMovie")
        let directedByIndex = line.indexOf("directedBy")
        let onDateIndex = line.indexOf("onDate")
        
        if (addIndex > -1) {
            let currentMovie = line.splice(1)
            moviesArr.push({name:currentMovie.join(' ')})

        } else if (directedByIndex > -1) {
            let currMovie = (line.slice(0,directedByIndex)).join(' ')
            let currDirector = (line.splice(directedByIndex + 1,line.length)).join(' ')

            moviesArr.forEach(movie => {
                if(movie.name === currMovie) {
                    movie.director = currDirector
                }
            })
        } else if (onDateIndex > -1) {
            let currMovie = (line.slice(0,onDateIndex)).join(' ')
            let currDate = (line.splice(onDateIndex + 1,line.length)).join(' ')

            moviesArr.forEach(movie => {
                if(movie.name === currMovie) {
                    movie.date = currDate
                }
            })

        } 
        
    }
    moviesArr.forEach(movie => {
        if (movie.name !== undefined && movie.director !== undefined && movie.date !== undefined) {
            console.log(JSON.stringify(movie))
        }
    })
}

asd([
    'addMovie Fast and Furious',
    'addMovie Godfather',
    'Inception directedBy Christopher Nolan',
    'Godfather directedBy Francis Ford Coppola',
    'Godfather onDate 29.07.2018',
    'Fast and Furious onDate 30.07.2018',
    'Batman onDate 01.08.2018',
    'Fast and Furious directedBy Rob Cohen'
    ])