class QuestoriaStorage {

    static defaultUser() {
        return {
            id: "USER_" + Date.now(),
            name: "Explorer",
            level: 1,
            xp: 0,
            coins: 0,
            streak: 0,
            completedQuests: [],
            achievements: [],
            createdAt: new Date().toISOString()
        };
    }

    static getUser() {

        let user = localStorage.getItem("questoria_user");

        if (!user) {

            user = this.defaultUser();

            localStorage.setItem(
                "questoria_user",
                JSON.stringify(user)
            );

            return user;
        }

        return JSON.parse(user);
    }

    static saveUser(user) {

        localStorage.setItem(
            "questoria_user",
            JSON.stringify(user)
        );

    }

    static resetUser() {

        localStorage.removeItem(
            "questoria_user"
        );

    }

}