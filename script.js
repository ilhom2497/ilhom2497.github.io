document.addEventListener("DOMContentLoaded", function () {
    const featuresBtn = document.getElementById("btn-features");
    const capabilitiesBtn = document.getElementById("btn-capabilities");
    const practicesBtn = document.getElementById("btn-practices");
    const frameworskBtn = document.getElementById("btn-frameworks");
    const conceptsBtn = document.getElementById("btn-concepts");
  
    const tabContent = document.getElementById("tab-content");
    const content = document.getElementById("content");
    const picture = document.getElementById("picture");
  
    const removeActive = function () {
      featuresBtn.classList.remove("active");
      capabilitiesBtn.classList.remove("active");
      practicesBtn.classList.remove("active");
      frameworskBtn.classList.remove("active");
      conceptsBtn.classList.remove("active");
  
      updateTabContent(features[selectedTabIndex]);
    };
  
    const features = [
      //features
      [
        "Use Descriptive Variable and Function Names",
        "Keep Functions Small and Focused",
        "Prefer const and let over var",
        "Avoid Global Variables",
        "Write Modular Code",
      ],
      //capabilities
      [
        "Asynchronous Programming",
        "DOM Manipulation",
        "Event Handling",
        "Frameworks and Libraries",
        "APIs and AJAX",
      ],
  
      //practices
      [
        "Use Meaningful and Consistent Naming Conventions",
        "Keep Functions Short and Focused",
        "Avoid Global Variables",
        "Use Promises or Async/Await for Asynchronous Code",
        "Write Unit Tests",
      ],
  
      // Frameworks
      ["React", "Angular", "Vue.js", "Ember", "Svelte"],
  
      // Concepts
      [
        "Javascript Basics",
        "Ternary Operator",
        "Destructing",
        "Spread Operator",
        "Array Methods",
        "Arrow Functions",
      ],
    ];
  
    const picturtes = [
      "https://www.interviewbit.com/blog/wp-content/uploads/2021/11/Banner-31-800x450.png",
      "https://a.ilovecoding.org/img/why-javascript/compare-lang-capability.jpg",
      "https://raygun.com/blog/images/js-best-practices/feature.jpg",
      "https://miro.medium.com/v2/resize:fit:1200/1*dQxJ9u6aXbL7koLLwtIhAg.png",
      "https://miro.medium.com/v2/resize:fit:1200/1*3EQ9It94S6iCkFp0CiJK4g.png",
    ];
  
    let selectedTabIndex = 0;
  
    const updateTabContent = (featuresArg) => {
      const list = document.createElement("ul");
      let listContent = "";
      featuresArg.forEach((feature) => {
        listContent += `<li>${feature}</li>`;
      });
      list.innerHTML = listContent;
      content.innerHTML = "";
      content.appendChild(list);
    };
  
    const updatePicture = (pictureArg) => {
      const image = document.createElement("img");
      image.setAttribute("src", pictureArg);
      picture.innerHTML = "";
      picture.appendChild(image);
    };
  
    function changeBackgroundColor() {
      const colors = [
        "#0202c0",
        "#0404b4",
        "#0303aa",
        "#0505a0",
        "#060696",
        "#07078c",
        "#080882",
        "#0a0a78",
        "#0c0c6e",
        "#0f0f64",
      ];
      const randomColor = colors[Math.floor(Math.random() * colors.length)];
      tabContent.style.backgroundColor = randomColor;
    }
  
    updateTabContent(features[selectedTabIndex]);
    updatePicture(picturtes[selectedTabIndex]);
  
    featuresBtn.addEventListener("click", function () {
      selectedTabIndex = 0;
      removeActive();
      changeBackgroundColor();
      featuresBtn.classList.add("active");
      updatePicture(picturtes[selectedTabIndex]);
    });
  
    capabilitiesBtn.addEventListener("click", function () {
      selectedTabIndex = 1;
      removeActive();
      changeBackgroundColor();
      capabilitiesBtn.classList.add("active");
      updatePicture(picturtes[selectedTabIndex]);
    });
  
    practicesBtn.addEventListener("click", function () {
      selectedTabIndex = 2;
      removeActive();
      changeBackgroundColor();
      practicesBtn.classList.add("active");
      updatePicture(picturtes[selectedTabIndex]);
    });
  
    frameworskBtn.addEventListener("click", function () {
      selectedTabIndex = 3;
      removeActive();
      changeBackgroundColor();
      frameworskBtn.classList.add("active");
      updatePicture(picturtes[selectedTabIndex]);
    });
  
    conceptsBtn.addEventListener("click", function () {
      selectedTabIndex = 4;
      removeActive();
      changeBackgroundColor();
      conceptsBtn.classList.add("active");
      updatePicture(picturtes[selectedTabIndex]);
    });
});
  