class AIEngine {


static generateDailyQuest(){


const quests = [

"Learn 5 AI concepts",

"Create a business idea",

"Practice English",

"Write a marketing idea",

"Solve a logic challenge"

];


return quests[
Math.floor(
Math.random()*quests.length
)
];


}



static answer(question){


question =
question.toLowerCase();



if(question.includes("money") ||
question.includes("earn")){


return "Focus on learning AI skills, digital marketing and completing earning quests.";


}



if(question.includes("learn")){


return "Start with AI basics, communication skills and problem solving.";


}



if(question.includes("business")){


return "Create ideas, test markets and build useful solutions.";


}



return "Your next step is to complete daily quests and improve your skills.";


}


}