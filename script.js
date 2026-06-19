function loadUser() {

    const user = QuestoriaStorage.getUser();

    const level = document.getElementById("level");
    const xp = document.getElementById("xp");
    const coins = document.getElementById("coins");

    if(level) level.textContent = user.level;
    if(xp) xp.textContent = user.xp;
    if(coins) coins.textContent = user.coins;

}



function startQuest() {

    const quest = AIEngine.generateDailyQuest();

    document.getElementById("questBox").innerHTML =
    
    <h3>Today's AI Quest</h3>
    <p>${quest}</p>
    <button onclick="completeQuest()">
    Complete Quest
    </button>
    ;

}



function completeQuest(){

    const quests = QuestEngine.getQuests();

    const quest = quests[0];

    QuestEngine.completeQuest(quest.id);

    loadUser();

    alert("Quest Completed!");

}



window.onload = function(){

    loadUser();

};