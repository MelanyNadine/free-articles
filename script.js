
function listFolders() {
  let folders = ["Physics", "Mathematics", "Information Theory", "Information Security", "Economics", "Child Abuse Studies & Statistics"];
  folders.forEach(listElements);
  function listElements(folderName) {  
    document.getElementById("buttons").innerHTML += '<li onclick="openFolder('+folderName+')>'+folderName+'</li>';
  }
}

function x(variable_name) {
  return document.getElementById(variable_name);
}

function openFolder(folderName) {
  document.getElementById("folders").style.display="none";
}
