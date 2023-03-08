const searchIcon = document.querySelector('.search-icon');


searchIcon.addEventListener('mouseover', function onClick() {
  searchIcon.innerHTML = `<img src="./images/icons8-search.gif" alt="Search">`
});

searchIcon.addEventListener('mouseout', function onClick() {
    searchIcon.innerHTML = `<img src="./images/icons8-search-30.png" alt="Search">`
  });


const projectContainer = document.querySelector(`.your-projects`)
const newBtn = document.querySelector(`.new-button`)
const deleteBtn = document.querySelector(`.delete-button`)

const project = `<div class="project">
<div class="orange-side"></div>
<div class="project-wrapper">
    <div class="project-text">
        
        <p><span>Project Title</span><br>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus at elementum velit, sit amet hendrerit nisl. Morbi dictum varius tellus vitae vehicula. Sed feugiat ante eget nisl iaculis dapibus.</p>
    </div>
    <div class="project-buttons">
        <div class="favourite">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title></title><path d="M5.8 21L7.4 14L2 9.2L9.2 8.6L12 2L14.8 8.6L22 9.2L18.8 12H18C17.3 12 16.6 12.1 15.9 12.4L18.1 10.5L13.7 10.1L12 6.1L10.3 10.1L5.9 10.5L9.2 13.4L8.2 17.7L12 15.4L12.5 15.7C12.3 16.2 12.1 16.8 12.1 17.3L5.8 21M17 14V17H14V19H17V22H19V19H22V17H19V14H17Z" /></svg>
        </div>
        <div class="watchlist">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title></title><path d="M12,4.5C7,4.5 2.73,7.61 1,12C2.73,16.39 7,19.5 12,19.5C12.36,19.5 12.72,19.5 13.08,19.45C13.03,19.13 13,18.82 13,18.5C13,18.14 13.04,17.78 13.1,17.42C12.74,17.46 12.37,17.5 12,17.5C8.24,17.5 4.83,15.36 3.18,12C4.83,8.64 8.24,6.5 12,6.5C15.76,6.5 19.17,8.64 20.82,12C20.7,12.24 20.56,12.45 20.43,12.68C21.09,12.84 21.72,13.11 22.29,13.5C22.56,13 22.8,12.5 23,12C21.27,7.61 17,4.5 12,4.5M12,9A3,3 0 0,0 9,12A3,3 0 0,0 12,15A3,3 0 0,0 15,12A3,3 0 0,0 12,9M18,14.5V17.5H15V19.5H18V22.5H20V19.5H23V17.5H20V14.5H18Z" /></svg>
        </div>
        <div class="share">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title></title><path d="M18 16.08C17.24 16.08 16.56 16.38 16.04 16.85L8.91 12.7C8.96 12.47 9 12.24 9 12S8.96 11.53 8.91 11.3L15.96 7.19C16.5 7.69 17.21 8 18 8C19.66 8 21 6.66 21 5S19.66 2 18 2 15 3.34 15 5C15 5.24 15.04 5.47 15.09 5.7L8.04 9.81C7.5 9.31 6.79 9 6 9C4.34 9 3 10.34 3 12S4.34 15 6 15C6.79 15 7.5 14.69 8.04 14.19L15.16 18.34C15.11 18.55 15.08 18.77 15.08 19C15.08 20.61 16.39 21.91 18 21.91S20.92 20.61 20.92 19C20.92 17.39 19.61 16.08 18 16.08M18 4C18.55 4 19 4.45 19 5S18.55 6 18 6 17 5.55 17 5 17.45 4 18 4M6 13C5.45 13 5 12.55 5 12S5.45 11 6 11 7 11.45 7 12 6.55 13 6 13M18 20C17.45 20 17 19.55 17 19S17.45 18 18 18 19 18.45 19 19 18.55 20 18 20Z" /></svg>
        </div>
    </div>
</div>
</div>`





newBtn.addEventListener('click', () => {
  projectContainer.innerHTML = projectContainer.innerHTML + project
  
})

deleteBtn.addEventListener('click', () => {
  let divProject = document.querySelectorAll(`.project`)
  let lastProject = divProject[divProject.length - 1]
  lastProject.parentNode.removeChild(lastProject)
})

