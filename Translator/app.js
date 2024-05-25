const fromText = document.querySelector(".from-text"),
toText = document.querySelector(".to-text"),
selectTag= document.querySelectorAll("select"),
exchangeIcon= document.querySelector(".exchange"),
translateBtn= document.querySelector("button"),
icons = document.querySelectorAll(".row i")

selectTag.forEach((tag, id)=>{
    for(const country_code in countries) {
        let selected;
        if(id == 0 && country_code == "en-GB"){
            selected = "selected";
        } else if(id == 1 && country_code == "hi-IN"){
            selected = "selected";            
        }
        // console.log(country_code);
        let option = `<option value="${country_code}" ${selected}>${countries[country_code]}</optons>`;
        tag.insertAdjacentHTML("beforeend", option); // Adding option tag inside select tag 

    }
});

exchangeIcon.addEventListener("click", () => {
    // Exchanging text and lang using exchnageIcon
    let tempText = fromText.value;
    tempLang = selectTag[0].value;
    fromText.value = toText.value;
    selectTag[0].value = selectTag[1].value;
    toText.value = tempText;
    selectTag[1].value = tempLang;
});

translateBtn.addEventListener("click", ()=>{
    let text = fromText.value,
    translateFrom = selectTag[0].value,  // Getting from Select tag value
    translateTo = selectTag[1].value;  // Getting toSelect tag value
    // console.log(text, translateFrom, translateTo);
    if(!text) return;
    toText.setAttribute("placeholder", "Translating...");
    let apiUrl = `https://api.mymemory.translated.net/get?q=${text}&langpair=${translateFrom}|${translateTo}`;
    // Fetching api resone and returning it with parsing into js obj
    // and in another then method reciving that obj
    fetch(apiUrl).then(res => res.json()).then(data => {
        // console.log(data);
        toText.value = data.responseData.translatedText;
        toText.setAttribute("placeholder", "Translation");
    });
});

icons.forEach(icon => {
    icon.addEventListener("click", ({target}) => {
        // console.log(target);
        if(target.classList.contains("fa-copy")) {
            if(target.id=="from"){
                // console.log("From copy icon");
                navigator.clipboard.writeText(fromText.value);
            }else {
                // console.log("To copy icon");
                navigator.clipboard.writeText(toText.value)
            }   
        } 
        else {
            // console.log("Speech icon");
            let utterance;
            if(target.id == "from"){
                utterance = new SpeechSynthesisUtterance(fromText.value);
                utterance.lang= selectTag[0].value;
            }else {
                utterance = new SpeechSynthesisUtterance(toText.value);
                utterance.lang= selectTag[1].value;
            }
            speechSynthesis.speak(utterance);
        }
    });
});