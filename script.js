const folders = ["Physics", "Mathematics", "Information Theory", "Information Security", "Economics", "Child Abuse Studies & Statistics"];

function listElements(folderName) {  
  document.getElementById("buttons").innerHTML += '<li onclick="openFolder('+folderName+')>'+folderName+'</li>';
}

function listFolders() {
  folders.forEach(listElements);
}

function x(variable_name) {
  return document.getElementById(variable_name);
}

function openFolder(folderName) {
  document.getElementById("folders").style.display="none";
}
