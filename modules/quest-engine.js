class QuestEngine {

    static getQuests() {

        return [

            {
                id: 1,
                title: "Learn 10 English Words",
                xp: 25,
                coins: 10
            },

            {
                id: 2,
                title: "Write an AI Prompt",
                xp: 40,
                coins: 20
            },

            {
                id: 3,
                title: "Solve a Logic Challenge",
                xp: 35,
                coins: 15
            },

            {
                id: 4,
                title: "Complete AI Quiz",
                xp: 50,
                coins: 25
            }

        ];

    }

    static completeQuest(id) {

        let quests =
            this.getQuests();

        let quest =
            quests.find(
                q => q.id === id
            );

        if(!quest) {

            return null;

        }

        XPSystem.addXP(
            quest.xp
        );

        CoinSystem.addCoins(
            quest.coins
        );

        return quest;

    }

}