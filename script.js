
function folders() {  
  var req = new XMLHttpRequest();
  req.open('GET', 'https://github.com/MelanyNadine/free-articles', false);
  req.send(null);
  if (req.status == 200)
    dump(req.responseText);
  document.getElementById('hiddenXULiframe').contentWindow.document.body.innerHTML = req.responseText;
  let foldersAndFiles = document.getElementsByClassName('js-navigation-open Link--primary');
  console.log(foldersAndFiles);
}

function x(variable_name) {
  return document.getElementById(variable_name);
}

function openBlock() {
  x("open").style.display="block";
}
