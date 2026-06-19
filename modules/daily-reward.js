class DailyReward {


static claim(){

    let user =
    QuestoriaStorage.getUser();


    let today =
    new Date().toDateString();


    if(user.lastReward === today){

        return false;

    }


    user.coins += 10;

    user.xp += 20;


    if(!user.streak){

        user.streak = 0;

    }


    user.streak += 1;


    user.lastReward = today;


    QuestoriaStorage.saveUser(user);


    return true;

}



}