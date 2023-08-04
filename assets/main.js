document.querySelectorAll(".text-input").forEach((Element) => {
    Element.addEventListener("blur", (event) => {
        if (event.target.value != "") {
            event.target.nextElementSibling.classList.add("filled")
        } else {
            event.target.nextElementSibling.classList.remove("filled")
        }
    })
})

function copyToClipBoard(input) {
    /* Get the text field */
    var copyText = document.getElementById(input);

    /* Select the text field */
    copyText.select();
    copyText.setSelectionRange(0, 99999); /* For mobile devices */

    /* Copy the text inside the text field */
    navigator.clipboard.writeText(copyText.value);

    /* Alert the copied text */
    if (input == 'nur') {
        nama = "0329-01-087974-507"
    } else if (input == 'lidya') {
        nama = "Lidya Rahma"
    }
    alert("Berhasil salin " + nama);
}

// function copyToClipboard(element) {
//     var $temp = $("<input>");
//     $("body").append($temp);
//     $temp.val($(element).text()).select();
//     document.execCommand("copy");
//     $temp.remove();
// }