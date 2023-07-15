const hufflepuffCross = [
  {
  id: 1,
  question: "I bet you’re not dangerous at all, are you? Are you, you great ugly brute?",
  answer: "Hippogriff"
},
{
  id: 2,
  question: "'Professor,' Harry gasped. 'Your bird- I couldn't do anything- he just caught fire'",
  answer: "Phoenix"
},
{
  id: 3,
  question: "Hagrid has never sent men into our hollow before",
  answer: "Acromantula"
},
{
  id: 4,
  question: "She didn't die for Harry. She was killed in the crossfire",
  answer: "Owl"
},
{
  id: 5,
  question: "The only people who can see them are people who have seen death.",
  answer: "Thestral"
}];
const ravenclawCross = [
  {
  id: 1,
  question: "The Killing Curse, the most evil spell in the Wizarding World",
  answer: "Avada kedavra"
},
{
  id: 2,
  question: "It causes confusion of the target",
  answer: "Confundo"
},
{
  id: 3,
  question: "Summons an object towards the caster.",
  answer: "Accio"
},
{
  id: 4,
  question: "A general counter-spell that's used to reverse or counter already cast charms",
  answer: "Finite incantatem"
},
{
  id: 5,
  question: "Temporarily freezes or petrifies the body of the target",
  answer: "Petrificus totalus"
}];
const slytherinCross = [
  {
  id: 1,
  question: "a Truth Potion so powerful that three drops would have you spilling your innermost secrets for this entire class to hear.",
  answer: "Veritaserum"
},
{
  id: 2,
  question: "A potion that calms the user of shock, trauma, etc.",
  answer: "Calming draught"
},
{
  id: 3,
  question: "A potion that extends taker's life",
  answer: "Elixir of life"
},
{
  id: 4,
  question: "A magical potion that makes the taker successful in all their endeavo",
  answer: "Felix felicis"
},
{
  id: 5,
  question: "Temporarily transforms the drinker into another person",
  answer: "Polyjuice potion"
}];
const gryffindorrCross = [
  {
  id: 1,
  question: "Hello, My name is Harry Potter",
  answer: "Tom riddle's diary"
},
{
  id: 2,
  question: "Drink it, it will contain the curse on your hand for time being",
  answer: "Marvolo gaunt's ring"
},
{
  id: 3,
  question: "When I speak to it, it will open and when it does !Don't Hesitate!",
  answer: "Salazar slytherin's locket"
},
{
  id: 4,
  question: "Ron:'Do it,destroy it',Hermoine:'No!',Ron:'Yes you can!'",
  answer: "Helga hufflepuff's cup"
},
{
  id: 5,
  question: "It's here, in the castle. In the place where everything is hidden. If you have to ask you never know, If know you never have to ask",
  answer: "Rowena ravenclaw's diadem"
}];
var cross = [];
var enteredAnswer=[];
var count=0;
var score=0;
function chooseSet(str){
    if(str==='Gryffindor'){
      $(".noteThat").html("Guess The Horcrux")
      cross.push(gryffindorrCross);
    }
    else if(str==='Hufflepuff'){
      $(".noteThat").html("Guess The Animal")
      cross.push(hufflepuffCross);}
    else if(str==='Ravenclaw'){
      $(".noteThat").html("Guess The Spell")
      cross.push(ravenclawCross);
    }
    else {
      $(".noteThat").html("Guess The Potion")
      cross.push(slytherinCross);
    }
    setQuestion();
}
function setQuestion(){
  if(cross[0][count].id <=5){
    $(".ans").val("")
    $(".question-1").html(cross[0][count].question);
  }
  if(cross[0][count].id===5){
    $(".done").html("done");
    $(".done").attr("onclick","showpopup2()");
  }
  count+=1;
  showpopup()
}
function showpopup(){
  $(".pop-up").css("display","flex");
  $("html").addClass("center");
  $(".back").css("display","none");
}
function check(){
  var answer = ($(".ans").val()).toLowerCase();
  enteredAnswer.push($(".ans").val())
  var ans = (cross[0][count-1].answer).toLowerCase();
  if(ans === answer){
    score+=1;
  }
  setQuestion();
}
function showpopup2(){
  if(count===5){
    var answer = ($(".ans").val()).toLowerCase();
    var ans = (cross[0][count-1].answer).toLowerCase();
    enteredAnswer.push($(".ans").val())
    if(ans === answer){
      score+=1;
    }
  }
  $(".pop-up-2-content h1").text("Score: "+score + "/5")
  $(".pop-up").css("display","none");
  $(".pop-up-2").css("display","flex");
}
function setans(){
  for(i=0;i<5;i++){
    if(enteredAnswer[i] !== cross[0][i].answer){
      $(".ans-"+(i+1)).addClass("wrong");
      $(".answer-"+(i+1)).addClass("wrong");
    }else{
      $(".ans-"+(i+1)).addClass("right");
      $(".answer-"+(i+1)).addClass("right");
    }
    $(".ans-"+(i+1)).html(enteredAnswer[i]);
    $(".answer-"+(i+1)).html(cross[0][i].answer);
  }
}
function showpop2(){
  var set = setans();
  $(".pop-up-2").css("display","none");
  $(".pop-up-3").css("display","flex");
}
