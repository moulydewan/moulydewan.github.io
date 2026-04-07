// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-about",
    title: "About",
    section: "Navigation",
    handler: () => {
      window.location.href = "/";
    },
  },{id: "nav-publications",
          title: "Publications",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/Publications/";
          },
        },{id: "nav-cv",
          title: "CV",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/assets/pdf/Mouly%20Dewan%20Resume%20Nov'25.pdf";
          },
        },{id: "books-the-godfather",
          title: 'The Godfather',
          description: "",
          section: "Books",handler: () => {
              window.location.href = "/books/the_godfather.html";
            },},{id: "news-paper-titled-llm-driven-usefulness-labeling-for-ir-evaluation-accepted-at-sigir-25-padova-italy",
          title: 'Paper titled “LLM-driven usefulness labeling for IR evaluation” accepted at SIGIR’25 - Padova,...',
          description: "",
          section: "News",},{id: "news-workshop-paper-accepted-at-llm4eval-2025-workshop-at-sigir-25-padova-italy",
          title: 'Workshop paper accepted at LLM4Eval 2025 Workshop at SIGIR’25 - Padova, Italy!',
          description: "",
          section: "News",},{id: "news-check-our-work-on-llm-generated-relevance-assessment",
          title: 'Check our work on LLM generated relevance assessment.',
          description: "",
          section: "News",},{id: "news-our-paper-true-a-reproducible-framework-for-llm-driven-relevance-judgment-in-information-retrieval-got-accepted-at-wsdm-26-boise-idaho",
          title: 'Our paper “TRUE: A Reproducible Framework for LLM-Driven Relevance Judgment in Information Retrieval”...',
          description: "",
          section: "News",},{id: "news-passed-my-phd-general-exam-and-am-now-officially-a-phd-candidate",
          title: 'Passed my PhD General Exam and am now officially a PhD Candidate! 🎉...',
          description: "",
          section: "News",},{
      id: 'light-theme',
      title: 'Change theme to light',
      description: 'Change the theme of the site to Light',
      section: 'Theme',
      handler: () => {
        setThemeSetting("light");
      },
    },
    {
      id: 'dark-theme',
      title: 'Change theme to dark',
      description: 'Change the theme of the site to Dark',
      section: 'Theme',
      handler: () => {
        setThemeSetting("dark");
      },
    },
    {
      id: 'system-theme',
      title: 'Use system default theme',
      description: 'Change the theme of the site to System Default',
      section: 'Theme',
      handler: () => {
        setThemeSetting("system");
      },
    },];
