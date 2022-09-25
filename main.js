let startingLocation = location.href;
let runningSala = false;

setInterval(() => {
    // Thanks to Kinglisi#0544 (discord) for the help!
    if (!runningSala || startingLocation !== location.href) {
        startingLocation = location.href;
        run();
    }
}, 100);

function run() {
    console.log("Znižajmo standarde!");
    let ingredient_div = document.getElementsByClassName("ingredient");
    if (ingredient_div.length <= 0) {
        runningSala = false;
        return;
    }

    runningSala = true;
    for (let i=0; i<ingredient_div.length; i++) {
        let num_div = ingredient_div[i].firstChild.firstChild.firstChild;
        let str_num = num_div.textContent;

        if (isNumeric(str_num)) {
            let new_num = parseFloat(str_num) * 5;
            num_div.textContent = new_num.toString();
        }
    }
}

function isNumeric(str) {
    if (typeof str != "string") return false
    return !isNaN(str) &&
        !isNaN(parseFloat(str))
}