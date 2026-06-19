class XPSystem {

    static addXP(amount) {

        let user =
            QuestoriaStorage.getUser();

        user.xp += amount;

        user.level =
            this.calculateLevel(
                user.xp
            );

        QuestoriaStorage.saveUser(
            user
        );

        return user;
    }

    static calculateLevel(xp) {

        return Math.floor(
            xp / 100
        ) + 1;

    }

}