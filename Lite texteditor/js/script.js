const boldButton = document.getElementById("bold-text");
const italicButton = document.getElementById("italic-text");
const underlineButton = document.getElementById("underline-text");
const alignLeftButton = document.getElementById("align-left-text");
const alignCenterButton = document.getElementById("align-center-text");
const alignRightButton = document.getElementById("align-right-text");
const alignJustifyButton = document.getElementById("align-justify-text");
const cutButton = document.getElementById("cut-text");
const copyButton = document.getElementById("copy-text");
const subscriptButton = document.getElementById("subscript-text");
const superscriptButton = document.getElementById("superscript-text");
const listOlButton = document.getElementById("list-ol");
const listUlButton = document.getElementById("list-ul");
const imageAdd = document.getElementById("image-add");
window.onload = function () {
    editor.focus();
};

function editionTextOn() {
    editor.document.designMode = "On";
}
editionTextOn()

boldButton.addEventListener("click", function () {
    editor.document.execCommand("bold", false, null)
})

italicButton.addEventListener("click", function () {
    editor.document.execCommand("italic", false, null)
})

underlineButton.addEventListener("click", function () {
    editor.document.execCommand("underline", false, null)
})

alignLeftButton.addEventListener("click", function () {
    editor.document.execCommand("justifyLEft", false, null)
})

alignCenterButton.addEventListener("click", function () {
    editor.document.execCommand("justifyCenter", false, null)
})

alignRightButton.addEventListener("click", function () {
    editor.document.execCommand("justifyRight", false, null)
})

alignJustifyButton.addEventListener("click", function () {
    editor.document.execCommand("justifyFull", false, null)
})

cutButton.addEventListener("click", function () {
    editor.document.execCommand("cut", false, null)
})

subscriptButton.addEventListener("click", function () {
    editor.document.execCommand("subscript", false, null)
})

superscriptButton.addEventListener("click", function () {
    editor.document.execCommand("superscript", false, null)
})

listOlButton.addEventListener("click", function () {
    editor.document.execCommand("insertOrderedList", false, null)
})

listUlButton.addEventListener("click", function () {
    editor.document.execCommand("insertUnorderedList", false, null)
})

imageAdd.addEventListener("click", function () {
    editor.document.execCommand("insertImage", false, prompt("Enter the image URL:"));
})