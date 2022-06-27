const folders = {
 	"Physics": "https://u.pcloud.link/publink/show?code=kZdu2RVZvqP33Smkp9zkKzDaBFu0TQwg22wk",
	"Mathematics": "https://u.pcloud.link/publink/show?code=kZ3lpzVZWuRbUhACQkQkqrRrgqA2dyab5Gg7",
	"Information Theory": "https://u.pcloud.link/publink/show?code=kZ3lpzVZWuRbUhACQkQkqrRrgqA2dyab5Gg7",
	"Information Security": "https://u.pcloud.link/publink/show?code=kZ3lpzVZWuRbUhACQkQkqrRrgqA2dyab5Gg7",
	"Economics": "https://u.pcloud.link/publink/show?code=kZNlpzVZ9jQeCGcuSTLDEUrHrHT4jzzUOuik",
	"Child Abuse Studies & Statistics": "https://u.pcloud.link/publink/show?code=kZUu2RVZE19ixBPvSwzvhaWE16xIfyXN3ReX",
	"Neuroscience": "https://u.pcloud.link/publink/show?code=kZGu2RVZ1QhfBaU0leS2Pw0oqhis8SbGHg97",
	"Psychiatry & Psychology": "https://u.pcloud.link/publink/show?code=kZru2RVZIm7aJ5jwVjBQflJgny0WEVnBsv3X",
	"Quantum Computation and Information": "https://u.pcloud.link/publink/show?code=kZlagLVZqRWliIxWX30SbT6BjV3J9kXTo4VX"
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

