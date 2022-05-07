let levelData: LevelData;

export function InitializeLevelData()
{
	var request = new XMLHttpRequest();
    request.overrideMimeType("application/json");
    request.open("GET", "/data/levels.json", true);
    request.onreadystatechange = function() {
        if (request.readyState === 4 && request.status == 200) {
            levelData = JSON.parse(request.responseText);
        }
    }
    request.send(null);
}

export function initializeLevelScreen()
{
	console.log(levelData)
}