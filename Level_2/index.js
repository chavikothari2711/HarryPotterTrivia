const quiz = [
  {
    id: 0,
    question: "There is a three-headed dog between you and your bestfriend, what do you do next?",
    option_1: "Try to take on the dog myself, distracting it's view from my friend.",
    option_2: "I use my exceptional broom flying skills to zoom past the dog, leaving my friend in despair.",
    answer: "Try to take on the dog myself, distracting it's view from my friend."
  },
  {
    id: 1,
    question: "You find yourself standing at a mysterious locked door, what do you do?",
    option_1: "Leave the door alone and act like it doesn't exist.",
    option_2: "Come back later when no one is around and try to find your way through it.",
    answer: "Come back later when no one is around and try to find your way through it."
  },
  {
    id: 2,
    question: "Where do you see yourself working?",
    option_1: "In a warm, dry library.",
    option_2: "Alone in a cold, dark dungeon",
    answer: "both"
  },
  {
    id: 3,
    question: "If you had to choose one potion to use for the rest of your life, which would it be?",
    option_1: "Elixir to Induce Euphoria - A potion that induces a sense of inexplicable, irrational happiness upon the drinker.",
    option_2: "Forgetfulness Potion - A potion that makes the taker overly forgetful.",
    answer: "Elixir to Induce Euphoria - A potion that induces a sense of inexplicable, irrational happiness upon the drinker."
  },
  {
    id: 4,
    question: "You have a big exam tomorrow, how do you prepare?",
    option_1: "Study profusely and don't sleep at all.",
    option_2: "Do nothing.",
    answer: "Study profusely and don't sleep at all."
  },
  {
    id: 5,
    question: "While shopping in Diagon Alley you realize you were undercharged when purchasing a wand from Ollivanders. What do you do?",
    option_1: "Return to Ollivanders and give Mr. Garrick the difference.",
    option_2: "Keep the money - use it for Bertie Bott's Beans.",
    answer: "Return to Ollivanders and give Mr. Garrick the difference."
  },
  {
    id: 6,
    question: "Choose one of the following pets for a companion:",
    option_1: "An owl - bird of prey.",
    option_2: " A Cat - a domesticated creature for both Wizards and Muggles.",
    answer: "both"
  },
  {
    id: 7,
    question: "If you could bring back memories with one smell, what would it be?",
    option_1: "The smell of a delicious, large pepperoni pizza.",
    option_2: "The putrid smell of sweaty feet.",
    answer: "The putrid smell of sweaty feet."
  },
  {
    id: 8,
    question: "Your close friend is being held by Death Eaters in the basement dungeon of the Malfoy mansion. You:",
    option_1: "Gather together Dumbledore's Army and prepare to fight your way through the dungeon.",
    option_2: "Leave your friend to be devoured by the Death Eaters.",
    answer: "Gather together Dumbledore's Army and prepare to fight your way through the dungeon."
  },
  {
    id: 9,
    question: "Severus Snape: Friend or Foe?",
    option_1: "Foe: Snape has always disliked Harry.",
    option_2: "Friend: Dumbledore had no doubt that Snape was trustworthy",
    answer: "Friend: Dumbledore had no doubt that Snape was trustworthy"
  }
];

var count=1;
var score=0;
function getHouse(){
  if(score<=55){return "Slytherin"}
  else if(score<=65){return "Ravenclaw"}
  else if(score<=75){return "Hufflepuff"}
  else{return "Gryffindoor"}
}

function showpopup(){
  const house = getHouse();
  $(".result").html(house)
  $(".pop-up-2").css("display","flex");
  $("html").addClass("center");
  $(".back").css("display","none");
}

function setQuestion(){
  const que = $(".question");
  const opt = $("input[name='option']:checked");
  const o1 = $(".option_1");
  const o2 = $(".option_2");
  const op1 = $("label[for='option_1']");
  const op2 = $("label[for='option_2']")

  if(opt.val() === quiz[count-1].answer){
    score+=10;
    opt.prop('checked', false);
  }
  else if(quiz[count-1].answer){score+=5;}
  if(quiz[count].id < 10){
    console.log(score);
    que.html("Q:"+(quiz[count].id+1)+" "+quiz[count].question);
    o1.val(quiz[count].option_1);
    o2.val(quiz[count].option_2);
    op1.text(quiz[count].option_1);
    op2.text(quiz[count].option_2)
  }
  if(quiz[count].id === 9){
    $(".quiz").attr("onclick","showpopup()")
    $(".quiz").html("Done");

  }
  count+=1;
}
