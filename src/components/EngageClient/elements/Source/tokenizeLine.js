
module.exports = function(string) {
    const tokens = [];
    let buffer="";
    let intoken = false;



    string.forEach(char => {
        if (intoken && char === " ") {
            tokens.push(`<span>${buffer}${char}</span>`);
            buffer="";
            intoken=false;
        }
        if (!intoken && char==="#")



    })
    
}