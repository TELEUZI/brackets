module.exports = function check(str, bracketsConfig) {
        let bracketsArray = [];
        for (let strIndex = 0; strIndex < str.length; strIndex++) {
            for (let i = 0; i < bracketsConfig.length; i++) {
                if (str[strIndex] == bracketsConfig[i][0]) {
                    if (bracketsConfig[i][1] == bracketsConfig[i][0] && bracketsArray[bracketsArray.length - 1] == bracketsConfig[i][0]) {
                        bracketsArray.pop()
                    } else {
                        bracketsArray.push(bracketsConfig[i][0])
                    }
                    break;
                }
                if (str[strIndex] == bracketsConfig[i][1]) {
                    if (bracketsArray[bracketsArray.length - 1] == bracketsConfig[i][0]) {
                        bracketsArray.pop();
                        break;
                    } else {
                        return false;
                    }
                }

            }
        }
        return bracketsArray.length == 0;
    }
    // while (str.search(bracketsConfig[i][0] + bracketsConfig[i][1]) !== -1) {
    //     str = str.replace(iterator[0] + iterator[1], '');
    //     if (str.search(iterator[0] + iterator[1]) !== -1) {
    //         i++
    //     }
    // }
    // bracketsConfig.forEach((iterator) => {
    //     var re1 = new RegExp('\\' + iterator[0], 'g');
    //     var re2 = new RegExp('\\' + iterator[1], 'g');
    //     for (let index = 0; index < str.length; index++) {
    //         if (str[index] === iterator[0]) {
    //             z.push(iterator[0]);
    //         } else if (str[index] === iterator[1] && z[z.length - 1] == iterator[0]) {
    //             z.pop()

//         }
// while (str.search(re1) !== -1) {
//     str = str.replace(re1, '');
//     z.push(iterator[0])
// }
// while (str.search(re2) !== -1) {
//     str = str.replace(re2, '');
//     z.pop()
// }
//     }
// })

//z.push(str.split().reduce((acc, el) => el == iterator[0] ? acc++ : acc, 0) === str.split().reduce((acc, el) => el == iterator[1] ? acc++ : acc, 0)))