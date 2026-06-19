class CoinSystem {

    static addCoins(amount) {

        let user =
            QuestoriaStorage.getUser();

        user.coins += amount;

        QuestoriaStorage.saveUser(
            user
        );

        return user;

    }

    static removeCoins(amount) {

        let user =
            QuestoriaStorage.getUser();

        if(user.coins < amount) {

            return false;

        }

        user.coins -= amount;

        QuestoriaStorage.saveUser(
            user
        );

        return true;

    }

}