const folders = {
 	"Physics": "https://u.pcloud.link/publink/show?code=kZpwpzVZW7GjLH2RTnXTxf5oOrsqUJ70416V",
	"Mathematics": "https://u.pcloud.link/publink/show?code=kZ3lpzVZWuRbUhACQkQkqrRrgqA2dyab5Gg7",
	"Information Theory": "https://u.pcloud.link/publink/show?code=kZ3lpzVZWuRbUhACQkQkqrRrgqA2dyab5Gg7",
	"Information Security": "https://u.pcloud.link/publink/show?code=kZ3lpzVZWuRbUhACQkQkqrRrgqA2dyab5Gg7",
	"Economics": "https://u.pcloud.link/publink/show?code=kZNlpzVZ9jQeCGcuSTLDEUrHrHT4jzzUOuik",
	"Child Abuse Studies & Statistics": "https://u.pcloud.link/publink/show?code=kZrxpzVZQoCkap7vnlJ4yLOld1pJ051rQ2Xy"
};


function listFolders() {

	function sortObject(folders) {
  		return Object.keys(folders).sort().reduce(function (result, key) {
    		result[key] = folders[key];
    		return result;
  		}, {});
	}	
	
	let sortedFolders =  sortObject(folders);

  	Object.entries(sortedFolders).forEach(listElements);
	
	function listElements([key, value]) {
	document.getElementById("buttons").innerHTML += '<a href="'+value+'"><li>'+key+'</li></a>';
  	}
}

