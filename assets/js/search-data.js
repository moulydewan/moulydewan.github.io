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
            window.location.href = "/assets/pdf/Mouly%20Dewan%20Resume%20Oct'25.pdf";
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
