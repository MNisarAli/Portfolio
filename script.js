const hamburger = document.querySelector('.hamburger');
const menu = document.querySelector('.menu');
const links = document.querySelectorAll('.menu-link');

hamburger.addEventListener('click', () => {
  hamburger.classList.toggle('active');
  menu.classList.toggle('active');
});

links.forEach((link) => link.addEventListener('click', () => {
  hamburger.classList.remove('active');
  menu.classList.remove('active');
}));

const projectSection = document.querySelector('#proj');
projectSection.innerHTML =
  `
  <div class="animation">
    <h2 class="heading">Projects</h2>
  </div>
  <img class="proj-dots desk" src="./Images/image_dots_1_dt.svg" alt="Dosts image">

  <article id="proj-1" class="proj-container">
    <img class="proj-img" src="./Images/Rectangle 21 (1).svg" alt="">
    <div class="proj-description">
      <h3 class="proj-name">Project name goes here</h3>
      <ul class="languages">
        <li class="lang-used">HTML/CSS</li>
        <li class="lang-used">Ruby on Rails</li>
        <li class="lang-used">JavaScript</li>
      </ul>
      <button class="proj-link" type="button" onclick="popup(1)"> See this project
        <img src="./Images/ic_arrow_right.svg" alt="Click and proced to check the project">
      </button>
    </div>
  </article>

  <article id="proj-2" class="proj-container">
    <img class="proj-img" src="./Images/Rectangle 21.svg" alt="">
    <div class="proj-description mob">
      <h3 class="proj-name">Project name goes here</h3>
      <ul class="languages">
        <li class="lang-used">HTML/CSS</li>
        <li class="lang-used">Ruby on Rails</li>
        <li class="lang-used">JavaScript</li>
      </ul>
      <button class="proj-link" type="button" onclick="popup(2)"> See this project
        <img src="./Images/ic_arrow_right.svg" alt="Click and proced to check the project">
      </button>
    </div>
    <img class="geometry desk" src="./Images/image_geometry_2_dt.svg" alt="Geometry image with some shapes">
  </article>

  <article id="proj-3" class="proj-container">
    <img class="proj-img" src="./Images/Rectangle 21 (2).svg" alt="">
    <div class="proj-description mob">
      <h3 class="proj-name">Project name goes here</h3>
      <ul class="languages">
        <li class="lang-used">HTML/CSS</li>
        <li class="lang-used">Ruby on Rails</li>
        <li class="lang-used">JavaScript</li>
      </ul>
      <button class="proj-link" type="button" onclick="popup(3)"> See this project
        <img src="./Images/ic_arrow_right.svg" alt="Click and proced to check the project">
      </button>
    </div>
    <img class="geometry desk" src="./Images/image_geometry_3_dt.svg" alt="Geometry image">
  </article>
  
  <article id="proj-4" class="proj-container">
    <img class="proj-img" src="./Images/Rectangle 21 (3).svg" alt="">
    <div class="proj-description mob">
      <h3 class="proj-name">Project name goes here</h3>
      <ul class="languages">
        <li class="lang-used">HTML/CSS</li>
        <li class="lang-used">Ruby on Rails</li>
        <li class="lang-used">JavaScript</li>
      </ul>
      <button class="proj-link" type="button" onclick="popup(4)"> See this project
        <img src="./Images/ic_arrow_right.svg" alt="Click and proced to check the project">
      </button>
    </div>
  </article>
  
  <article id="proj-5" class="proj-container">
    <img class="proj-img" src="./Images/Rectangle 21 (4).svg" alt="">
    <div class="proj-description mob">
      <h3 class="proj-name">Project name goes here</h3>
      <ul class="languages">
        <li class="lang-used">HTML/CSS</li>
        <li class="lang-used">Ruby on Rails</li>
        <li class="lang-used">JavaScript</li>
      </ul>
      <button class="proj-link" type="button" onclick="popup(5)"> See this project
        <img src="./Images/ic_arrow_right.svg" alt="Click and proced to check the project">
      </button>
    </div>
    <img class="geometry desk" src="./Images/Group_83_dt.svg" alt="Geometry image">
  </article>
  
  <article id="proj-6" class="proj-container">
    <img class="proj-img" src="./Images/Rectangle 21 (5).svg" alt="">
    <div class="proj-description">
      <h3 class="proj-name mob">Project name goes here</h3>
      <h3 class="proj-name desk">Project name goes...</h3>
      <ul class="languages">
        <li class="lang-used">HTML/CSS</li>
        <li class="lang-used">Ruby on Rails</li>
        <li class="lang-used mob">JavaScript</li>
        <li class="lang-used desk">+1</li>
      </ul>
      <button class="proj-link" type="button" onclick="popup(6)"> See this project
        <img src="./Images/ic_arrow_right.svg" alt="Click and proced to check the project">
      </button>
    </div>
  </article>
  
  <article class="geometry-group desk">
    <img class="geometry-5" src="./Images/image_geometry_5_dt.svg" alt="Geometry image">
    <img class="geometry-4" src="./Images/image_geometry_4_dt.svg" alt="Geometry image">
  </article>

  <article id="proj-card" class="card hidden">
    <i id="close" class="fas fa-times card-cross" onclick="toggle()"></i>
    <h3 id="proj-title">Project</h3>
    <ul id="tech-used">
    </ul>
    <img src="./Images/Rectangle 21 (5).svg" id="proj-image" alt="Project Image">
    <p id="project-description">
    </p>
    <div id="link-buttons">
      <button type="button" id="proj-live" class="card-btn">
        See live
        <i class="fas fa-external-link-alt"></i>
      </button>
      <button type="button" id="proj-source" class="card-btn">
        See source
        <i class="fab fa-github"></i>
      </button>
    </div>
  </article>
`;

// Project Cards

const project1 = {
  title: 'Project name goes here',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://mnisarali.github.io/Portfolio-project/',
    'https://github.com/MNisarAli/Portfolio-project',
  ],
  image: './Images/Rectangle 21 (1).svg',
};

const project2 = {
  title: 'Project name goes here',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://mnisarali.github.io/Portfolio-project/',
    'https://github.com/MNisarAli/Portfolio-project',
  ],
  image: './Images/Rectangle 21.svg',
};

const project3 = {
  title: 'Project name goes here',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://mnisarali.github.io/Portfolio-project/',
    'https://github.com/MNisarAli/Portfolio-project',
  ],
  image: './Images/Rectangle 21 (2).svg',
};

const project4 = {
  title: 'Project name goes here',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://mnisarali.github.io/Portfolio-project/',
    'https://github.com/MNisarAli/Portfolio-project',
  ],
  image: './Images/Rectangle 21 (3).svg',
};

const project5 = {
  title: 'Project name goes here',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://mnisarali.github.io/Portfolio-project/',
    'https://github.com/MNisarAli/Portfolio-project',
  ],
  image: './Images/Rectangle 21 (4).svg',
};

const project6 = {
  title: 'Project name goes here',
  technologies: [
    'HTML/CSS',
    'Ruby on Rails',
    'JavaScript'
  ],
  description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi <br><br> Ut aliquip ex ea commodo consequat.  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi.',
  link: [
    'https://mnisarali.github.io/Portfolio-project/',
    'https://github.com/MNisarAli/Portfolio-project',
  ],
  image: './Images/Rectangle 21 (5).svg',
};

const projects = [project1, project2, project3, project4, project5, project6];

function popup(num) {
  const projCard = document.querySelector('#proj-card');
  projCard.classList.toggle('hidden');

  const title = document.querySelector('#proj-title');
  title.innerHTML = projects[num].title;

  const list = document.querySelector('#tech-used');
  list.innerHTML = '';
  for (let i = 0; i < projects[num].technologies.length; i ++) {
    const li = document.createElement('li');
    li.textContent = projects[num].technologies[i];
    list.appendChild(li);
  }

  const img = document.querySelector('#proj-image');
  img.setAttribute('src', projects[num].image);

  const description = document.querySelector('#project-description');
  description.innerHTML = projects[num].description;

  const liveBtn = document.querySelector('#proj-live');
  liveBtn.setAttribute('onclick', `window.open("${projects[num].link[0]}", "_blank");`);

  const srcBtn = document.querySelector('#proj-source');
  srcBtn.setAttribute('onclick', `window.open("${projects[num].link[1]}", "_blank");`);
}

function toggle() {
  const projCard = document.querySelector('#proj-card');
  projCard.classList.toggle('hidden');
}
