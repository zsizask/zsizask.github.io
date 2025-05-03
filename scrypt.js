window.addEventListener('load', function (){
    // ------------ Переменные --------------
    const chooseFaction = document.getElementById('faction');
    const factions = document.getElementsByClassName('factions');
    const race = document.querySelector('.race');
    const hordeRaces = document.getElementsByClassName('horde_races');
    const hordeRaceList = document.querySelector('#choosing_race #races_list_horde');
    const alianceRaces = document.getElementsByClassName('aliance_races');
    const alianceRaceList = document.getElementById('races_list_aliance');
    const level = document.querySelector('.level');
    const levelList = document.querySelectorAll('.levels');


    let playerObj = {
        faction: null,
        race: null,
        level: null
    }

    // ------------ Choosing faction & race --------------
    for(let fac of factions){
        fac.addEventListener('click', function (event){
            fac.dataset.choose = 'true';
            playerObj.faction = fac.id;
            chooseFaction.classList.add('hidden');
            console.log(playerObj);
            chooseRace();
        });
    };

    // ------------ Choosing level --------------
    for(let lvl of levelList){
        lvl.addEventListener('click', function(){
            level.classList.toggle('hidden');
            playerObj.level = this.id;
            console.log(playerObj);
        });
    };


    // ----------- Functions ------------------
    function chooseRace(){
        if(playerObj.faction === 'horde'){
            race.classList.toggle('hidden');
            alianceRaceList.classList.add('hidden');
            hora(playerObj.faction);
            console.log(playerObj.faction, playerObj.race);
        }else{
            race.classList.toggle('hidden');
            hordeRaceList.classList.add('hidden');
            hora(playerObj.faction);
            console.log(playerObj.faction, playerObj.race);
        }
    }
    function hora(faction){
        tempList = null;
        if(faction === 'horde'){
            tempList = hordeRaces;
        }else{
            tempList = alianceRaces;
        };
        for(let folk of tempList){
            folk.addEventListener('click', function(){
                race.classList.toggle('hidden');
                playerObj.race = this.id;
                console.log(playerObj);
                level.classList.toggle('hidden');
            });
        };
    }
});
