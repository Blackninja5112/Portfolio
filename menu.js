let projectCont = document.getElementById('project-container');

// 8 for pc double
let totProject = 4;



let space = "5%";

window.addEventListener

if (window.innerWidth >= 768) {
    space = "5%"
    projectCont.style.gridTemplateColumns = "5% repeat(4, 1fr) 5%";

    for (let i = 1; i <= totProject; i++) {
        projectNmbr = document.getElementsByClassName("pr-" + i)[0];

        projectNmbr.style.gridRow = Math.ceil(i / 4) * 2;
        projectNmbr.style.gridColumn = ((i - 1) % 4) + 1 + 1;
    }

} else {
    projectCont.style.gridTemplateColumns = "5% 32vw 10% 32vw 5%";

    for (let i = 1; i <= totProject; i++) {
        if (i != totProject) {
            space += " 32vw 5%";
        } else {
            space += " 32vw";
        }
    }

    space += " 5%";

    for (let i = 1; i <= totProject; i++) {
        projectNmbr = document.getElementsByClassName("pr-" + i)[0];

        projectNmbr.style.gridRow = Math.ceil(i / 2) * 2;
        projectNmbr.style.gridColumn = i % 2 === 0 ? 4 : 2;
    }
}

projectCont.style.gridTemplateRows = space;