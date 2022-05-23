const folders = ["Physics", "Mathematics", "Information Theory", "Information Security", "Economics", "Child Abuse Studies & Statistics"];
folders.forEach(folders);

function folders(folderName) {  
  const listItem = document.createElement("li");
  listItem.innerHTML = folderName;
  document.getElementById("buttons").appendChild(listItem);
}

function x(variable_name) {
  return document.getElementById(variable_name);
}

function openBlock() {
  x("open").style.display="block";
}
