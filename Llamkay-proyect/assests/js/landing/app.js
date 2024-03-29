function changeTheme(param){
    let color = document.getElementById('theme-body');
    if (param == "dark"){
        color.removeAttribute("data-bs-theme","light");
        color.setAttribute("data-bs-theme", "dark")
    }else{
        color.removeAttribute("data-bs-theme", "dark");
        color.setAttribute("data-bs-theme", "light")
    }

    if(param == "dark"){
        document.getElementById('footer').classList.remove('light');
        document.getElementById('footer').classList.add('dark')
    }else{
        document.getElementById('footer').classList.remove('dark');
        document.getElementById('footer').classList.add('light')
    }
}

function googleTranslateElementInit() {
    new google.translate.TranslateElement({pageLanguage: 'es', includedLanguages: ',en,es', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, gaTrack: true}, 'google_translate_element');
}