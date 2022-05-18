function asd(input) {
    class Song {
        constructor(type,name,time) {
            this.type = type
            this.name = name
            this.time = time
        }
    }
    let songsQnt = input.shift()
    let typeToSearch = input.pop()
    let songsArr = []
    for (let i = 0;i < songsQnt;i++) {
        let [typeList,songName,songTime] = input[i].split("_") 
        songsArr.push(new Song(typeList,songName,songTime))
    }
    for (let el of songsArr) {
        if (el.type === typeToSearch || typeToSearch === "all") {
            console.log(el.name)

        }

    }
}
asd([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite'])