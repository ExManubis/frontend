const bc = [
  { name: "Hvidevarer", link: "/hvidevarer" },
  { name: "Vaskemaskiner", link: "/hvidevarer/vaskemaskiner" },
  { name: "Bosch", link: "/hvidevarer/vaskemaskiner/bosch/" },
];

const breadcrumbContainer = document.getElementById("breadcrumbs");
function generateBreadcrumbs() { 
  breadcrumbContainer.innerHTML = `<ul>
  <li><a href="${bc[0].link}">${bc[0].name}</a> / </li>
  <li><a href="${bc[1].link}">${bc[1].name}</a> / </li>
  <li>${bc[2].name}</li>
</ul>`
}

document.getElementById("generate-breadcrumbs").addEventListener("click", generateBreadcrumbs)
