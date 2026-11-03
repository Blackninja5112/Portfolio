// let crentNav;
  
// function active_nav() {  // yea 🐊 du fattar
  
// }


let projectCont = document.getElementById('project-container')
let totProject = 3

let space = projectCont.style.gridTemplateRows;
space += "5%"

for(let i = 1; i <= totProject; i++) {
    if (i != totProject) {
    space += " 32vw 10%"
} else {
    space += " 32vw"
}
}

space += " 5%"

projectCont.style.gridTemplateRows = space


let projectNmbr;

for (let i = 1; i <= (totProject * 2); i++) {
    projectNmbr = document.getElementsByClassName("pr-" + i)[0]
    projectNmbr.style.gridRow = Math.ceil(i / 2) * 2;
    projectNmbr.style.gridColumn = i % 2 === 0 ? 4 : 2;
    console.log(i)
}



