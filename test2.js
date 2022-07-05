let s = "nigzhtkqxr"

var lengthOfLongestSubstring = function (s) {
    let result = []
    function returnCallback(g) {
        if (!g) {
            result.push(0)
            return
        }
        let newS = g !== '' ? g.split("") : 0
        if (newS.length > 0) {
            let i = 0
            let text = ''
            do {
                text += newS[i]
                i++
            } while (!text.split("").includes(newS[i]) && i < newS.length)
            result.push(text.length)
            newS.shift()
            returnCallback(newS.join(''))
        }
    }
    returnCallback(s)
    let newResult = Math.max(...result)
    return newResult
};

console.log(lengthOfLongestSubstring(s))