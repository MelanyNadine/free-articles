
function folders() {
  document.location = "https://github.com/MelanyNadine/free-articles";
  let foldersAndFiles = document.getElementsByClassName('js-navigation-open Link--primary');
  console.log(foldersAndFiles);
}

function x(variable_name) {
  return document.getElementById(variable_name);
}

function openBlock() {
  x("open").style.display="block";
}
