

function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      { pageLanguage: "en" },
      "google_translate_element"
    );
  }
function googleTranslateElementInit() {
    new google.translate.TranslateElement(
      {
        pageLanguage: "en",
        includedLanguages: "vi,en", // Chỉ chọn tiếng Anh (en) và tiếng Việt (vi)
        layout: google.translate.TranslateElement.InlineLayout.SIMPLE,
        autoDisplay: false,
      },
      "google_translate_element"
    );
  }
  window.addEventListener("scroll", function () {
    const headerElement = document.getElementById("myHeader");
    let scrollPosition =
      window.pageYOffset || document.documentElement.scrollTop;
      
    if (scrollPosition >149   ) {
      headerElement.classList.add("header-scrolled");
    } else {
      headerElement.classList.remove("header-scrolled");
    }
  });

  