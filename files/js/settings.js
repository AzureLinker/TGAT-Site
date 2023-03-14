const optionMenu = document.querySelector(".select_settings"),
    selectBtn = optionMenu.querySelector(".select-btn"),
    option = optionMenu.querySelectorAll(".option"),
    sBtn_text = optionMenu.querySelector(".sBtn_text");

    selectBtn.addEventListener("click", () => optionMenu.classList.toggle("active"));

option.forEach(option =>{
    option.addEventListener("click", () => {
        let selectedOption = option.querySelector(".option-text").dataset.language;
        let selectedOptionText = option.querySelector(".option-text").innerText;
        sBtn_text.innerText = selectedOptionText;
        optionMenu.classList.toggle("active");
    });
});