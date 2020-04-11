var gameData = {
    gold: 0,
    goldPerClick: 1,
    goldPerTick: 1,
    tickSpeed: 1,
    clickUpgradeCost: 10,
    tickUpgradeCost: 10,
    tickSpeedUpgradeCost: 10
  }

function mine(){
    gameData.gold += gameData.goldPerClick

    //console.log("Mine Function")
}

setInterval(mineQuarry, gameData.tickSpeed * 1000);
function mineQuarry(){
    gameData.gold += gameData.goldPerTick
    gameData.tickSpeedOld = gameData.tickSpeed

    //console.log("Mine Quarry Function ", gameData.tickSpeed * 1000)
}

function upgradeGoldPerClick(){
    if(gameData.gold >= gameData.clickUpgradeCost){
        gameData.gold -= gameData.clickUpgradeCost

        gameData.goldPerClick += 1
        gameData.clickUpgradeCost *= 2

    }
}

function upgradeGoldPerTick(){
    if(gameData.gold >= gameData.tickUpgradeCost){
        gameData.gold -= gameData.tickUpgradeCost
    
        gameData.goldPerTick += 1
        gameData.tickUpgradeCost *= 2
    
    }
}

var mainGameLoop = window.setInterval(function() {

    document.getElementById("goldMined").innerHTML = "Gold Mined: " + gameData.gold
    document.getElementById("goldPerClick").innerHTML = "Pickaxe Strength: " + gameData.goldPerClick
    document.getElementById("goldPerTick").innerHTML = "Quarry Strength: " + gameData.goldPerTick
    //document.getElementById("tickSpeed").innerHTML = "Quarry Speed: " + gameData.tickSpeed + " seconds"
    document.getElementById("clickUpgradeCost").innerHTML = "Pickaxe Upgrade Cost: " + gameData.clickUpgradeCost
    document.getElementById("tickUpgradeCost").innerHTML = "Quarry Upgrade Cost: " + gameData.tickUpgradeCost

  }, 33)

