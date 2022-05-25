
function listFolders() {
  
  // List here the name of each folder manually
  let folders = ["Physics", "Mathematics", "Information Theory", "Information Security", "Economics", "Child Abuse Studies & Statistics"];
  //--------------------------------------------------------------------------------------------------------------------------------------------
  folders.forEach(listElements);
  
  function listElements(item) {  
    document.getElementById("buttons").innerHTML += '<li><a href="./'+item+'">'+item+'</a></li>';	
  }
}

