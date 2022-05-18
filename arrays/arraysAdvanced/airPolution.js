function asd(matrix,commands) {
    while (commands.length > 0) {
        let currentCommand = commands.shift()
        let [force,index] = currentCommand.split(' ')


        if (force === "breeze") {
           let newRow = matrix[index].split(' ').map(x => {
               if ((x - 15) < 0) {
                   return 0 
               } else {
                return x - 15

               }
           })
           matrix[index] = newRow.join(' ')
        } else if (force === "gale") {
            for (let row in matrix) {
                let currentRow = matrix[row].split(' ').map(Number)
                if ((currentRow[index] - 20) < 0) {
                    currentRow[index] = 0
                } else {
                    currentRow[index] -= 20
                }
                matrix[row] = currentRow.join(' ')

            }
        } else if (force === "smog") {
            for (let row in matrix) {
                let currentRow = matrix[row].split(' ').map(Number)
                currentRow = currentRow.map(x => x + Number(index))
                matrix[row] = currentRow.join(' ')

            }
        }
    }
    function findPollutedIndex(arr) {
        let rowCount = 0
        let pollutedArr = []
        for (let row of arr) {

            let currentRow = row.split(' ').map(Number)
            for (let x in currentRow) {
                if (currentRow[x] >= 50) {
                    let pollutedRow = rowCount
                    let pollutedCol = x 
                    let polluted = `[${pollutedRow}-${pollutedCol}]`
                    pollutedArr.push(polluted)
                }
            }
            rowCount++
        }
        if (pollutedArr.length > 0) {
            return`Polluted areas: ${pollutedArr.join(', ')}`

        } else {
            return 'No polluted areas'
        }
    }
    console.log(findPollutedIndex(matrix))
}
asd(["5 7 3 28 32",
"41 12 49 30 33",
"3 16 20 42 12",
"2 20 10 39 14",
"7 34 4 27 24"],
[ "smog 11", "gale 3", "breeze 1", "smog 2"])