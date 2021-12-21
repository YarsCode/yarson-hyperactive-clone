function show(element) {
    element.classList.remove("closed");
    element.classList.add("open");
}

function hide(element) {
    element.classList.remove("open");
    element.classList.add("closed");
}

function expandSection(element) {
    var sectionHeight = element.scrollHeight;

    element.style.height = sectionHeight + "px";
    element.setAttribute("data-collapsed", "false");
}

function collapseSection(element) {
    element.style.height = 0 + "px";
    element.setAttribute("data-collapsed", "true");
}

export { show, hide, expandSection, collapseSection };