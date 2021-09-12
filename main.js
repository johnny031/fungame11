let count = 0;

function shuffle(a) {
    for (let i = a.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [a[i], a[j]] = [a[j], a[i]]
    }
    return a
}

shuffle(words)

$("#next_button").on("click", function () {
    $("#answer_h1").html(words[count][0]);
    $("#trap_h1").html(words[count][1]);
    count++;
});