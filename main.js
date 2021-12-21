import { show, hide, expandSection, collapseSection } from "./utils/funcs.js";
const modalContainer = document.querySelector(".modal-container");
const modalContent = document.querySelector(".modal-content");
const xButton = document.querySelector(".X-btn");
const mainNav = document.querySelector(".main-nav");
const hamburgerMenu = document.querySelector(".hamburger-menu");
const careersDropdown = document.querySelector(".careers-dropdown");
const careersDropdownText = document.querySelector(".careers-and-arrow-container");
const dropdownArrow = document.querySelector(".arrow-left");
const banner = document.querySelector(".banner");
const textSection2 = document.querySelector(".text-section2");
const textSection3 = document.querySelector(".text-section3");
const slides = document.querySelectorAll(".slide");
const slidesContent = document.querySelectorAll(".slide-content");
const pluses = document.querySelectorAll(".plus");
const questions = document.querySelectorAll(".question");
const questionArrows = document.querySelectorAll(".question--arrow");
const questionsContent = document.querySelectorAll(".question-content");
const publicQuestions = document.querySelectorAll(".public-question");
const publicQuestionsContent = document.querySelectorAll(".public-question-content");
const publicQuestionArrows = document.querySelectorAll(".public-question--arrow");

hamburgerMenu.addEventListener("click", (e) => {
    if (!mainNav.classList.contains("open")) {
        show(mainNav);
        hamburgerMenu.children[0].style.display = "none";
        hamburgerMenu.children[1].style.animation = "turn-to-X-part1 0.1s cubic-bezier(0,1.1,.53,-0.34) forwards";
        hamburgerMenu.children[2].style.animation = "turn-to-X-part2 0.2s cubic-bezier(.25,.45,.65,.85) forwards";
    } else {
        hide(mainNav);
        hamburgerMenu.children[0].style.display = "flex";
        hamburgerMenu.children[1].style.animation = "turn-back-to-hamburger-part1 0.1s ease-out forwards";
        hamburgerMenu.children[2].style.animation = "turn-back-to-hamburger-part2 0.2s ease-out forwards";
    }
});

careersDropdownText.addEventListener("click", (e) => {
    if (!dropdownArrow.classList.contains("flip-arrow-downwards-animation")) {
        dropdownArrow.className = "arrow-left";
        dropdownArrow.classList.add("flip-arrow-downwards-animation");
        careersDropdown.style.display = "flex";
        setTimeout(() => {
            careersDropdown.style.opacity = "1";
        }, 10);
    } else {
        dropdownArrow.classList.add("flip-arrow-to-left-animation");
        dropdownArrow.classList.remove("flip-arrow-downwards-animation");
        setTimeout(() => {
            careersDropdown.style.display = "none";
        }, 200);
        careersDropdown.style.opacity = "0";
    }
});

textSection2.addEventListener("mouseenter", (e) => {
    if (window.matchMedia("(min-width: 47rem)").matches) {
        e.target.style.boxShadow = "0px 10px 13px -7px black, 0px 0px 18px 6px black";
        textSection3.style.zIndex = "0";
        e.target.style.zIndex = "1";
    }
});

textSection2.addEventListener("mouseleave", (e) => {
    e.target.style.boxShadow = "none";
});

textSection3.addEventListener("mouseenter", (e) => {
    if (window.matchMedia("(min-width: 47rem)").matches) {
        e.target.style.boxShadow = "0px 10px 13px -7px black, 0px 0px 18px 6px #eff6df";
        textSection2.style.zIndex = "0";
        e.target.style.zIndex = "1";
    }
});

textSection3.addEventListener("mouseleave", (e) => {
    e.target.style.boxShadow = "none";
});

for (let i = 0; i < slides.length; i++) {
    slides[i].addEventListener("click", (e) => {
        let isCollapsed = slidesContent[i].getAttribute("data-collapsed") === "true";
        if (!window.matchMedia("(min-width: 47rem)").matches) {
            if (isCollapsed) {
                expandSection(slidesContent[i]);
                slidesContent[i].setAttribute("data-collapsed", "false");
                pluses[i].style.animation = "flip-plus-to-X 0.2s ease-in-out alternate forwards";
            } else {
                collapseSection(slidesContent[i]);
                pluses[i].style.animation = "flip-X-to-plus 0.2s ease-in-out alternate forwards";
            }
        }
    });
}

for (let i = 0; i < questions.length; i++) {
    questions[i].addEventListener("click", (e) => {
        let isCollapsed = questionsContent[i].getAttribute("data-collapsed") === "true";

        if (isCollapsed) {
            questionArrows[i].style.animation = "flip-arrowhead-upwards 0.3s cubic-bezier(.79,.55,.64,1.2) forwards";
            expandSection(questionsContent[i]);
            questionsContent[i].setAttribute("data-collapsed", "false");
        } else {
            collapseSection(questionsContent[i]);
            questionArrows[i].style.animation = "flip-arrowhead-downwards 0.3s cubic-bezier(.79,.55,.64,1.2) forwards";
        }
    });
}

for (let i = 0; i < publicQuestions.length; i++) {
    publicQuestions[i].addEventListener("click", (e) => {
        let isCollapsed = publicQuestionsContent[i].getAttribute("data-collapsed") === "true";
        if (isCollapsed) {
            publicQuestionArrows[i].style.animation =
                "flip-arrowhead-upwards 0.3s cubic-bezier(.79,.55,.64,1.2) forwards";
            expandSection(publicQuestionsContent[i]);
            publicQuestionsContent[i].setAttribute("data-collapsed", "false");
        } else {
            collapseSection(publicQuestionsContent[i]);
            publicQuestionArrows[i].style.animation =
                "flip-arrowhead-downwards 0.3s cubic-bezier(.79,.55,.64,1.2) forwards";
        }
    });
}

xButton.addEventListener("click", (e) => {
    modalContainer.style.display = "none";
});

setTimeout(() => {
    if (window.matchMedia("(min-width: 47rem)").matches) {
        modalContainer.style.display = "flex";
        setTimeout(() => {            
            modalContent.style.transform = "translateY(0)";
        }, 10);
    }
}, 3000);
