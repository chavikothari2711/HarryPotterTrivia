var ansarr=[];
function ChangeText(){
  name =  $(".fname").val();
  $(".welcomeMsg").html("Hello, "+name)
}
function showpopup(){
  $(".pop-up").css("display","flex");
  $("html").addClass("center");
  $(".back").css("display","none");
  console.log(ansarr);
}
function popup(que,option){
  $('.question-1').html(que[0]);
  $('.options-1').text(option[0][0]);
  $(".option_1-1").val(option[0][0])
  $('.options-2').text(option[0][1]);
  $(".option_1-2").val(option[0][1])
  $('.options-3').text(option[1][0]);
  $(".option_2-1").val(option[1][0])
  $('.options-4').text(option[1][1]);
  $(".option_2-2").val(option[1][1])
  $('.question-2').html(que[1]);
  showpopup();
}

function getQuestion(str){
  var que =[];
  var option =[];
  var ans =[];
    if(str==='book1'){
      que.push('Who is Fluffy?','To whom does the Sorcerer’s Stone belong?')
      option.push(["Hagrid's three-headed-dog","Hagrid's dragon"],["Sir Headless Nick","Nicolas Flamel"])
      ans.push("Hagrid's three-headed-dog","Nicolas Flamel")
    }else if(str==='book2'){
      que.push("What is the name of the Weasley's home",'Which first year loves to photograph Harry?')
      option.push(["The Burrow","The Lair"],["Colin Creevey","Penelope Clearwater"])
      ans.push("The Burrow","Colin Creevey")
    }
    else if(str==='book3'){
      que.push("What must Harry do in secret while at four Privet Drive?",'What false name does Harry give the staff of the Knight Bus?')
      option.push(["His Quidditch exercises","His homework"],["Neville Longbottom","Seamus Finnegin"])
      ans.push("His homework","Neville Longbottom")
    }
    else if(str==='book4'){
      que.push("Into what does Mad-Eye Moody turn Malfoy?",'Which curse upsets Neville Longbottom the most?')
      option.push(["A writhing, furry cat","A bouncing white ferret"],["Avada Kedavra","Crucio"])
      ans.push("A bouncing white ferret","Crucio")
    }
    else if(str==='book5'){
      que.push("what attacks Harry in the alleyway in Little Whinging?",'Where is the headquarters of the Order of the Phoenix?')
      option.push(["Death Eater","Dementors"],["Twelve Grimmauld Place","Dumbledore’s office"])
      ans.push("Dementors","Twelve Grimmauld Place")
    }
    else if(str==='book6'){
      que.push("What does Horace Slughorn teach?",'Who is the captain of the Gryffindor Quidditch team?')
      option.push(["Potions","Transfiguration"],["Harry Potter","Oliver Wood"])
      ans.push("Potions","Harry Potter")
    }
    else{
      que.push("Who is R.A.B.?",'Where did Dumbledore’s family live?')
      option.push(["Regulas Arthus Black","Sirius Black’s brother"],["Godric’s Hollow","Hogsmeade Village"])
      ans.push("Sirius Black’s brother","Godric’s Hollow")
    }
    popup(que,option);
    ansarr.push(ans);
}

function showpopup2(score){
  $(".pop-up-2-content h1").text("Score: "+score + "/2")
  $(".pop-up").css("display","none");
  $(".pop-up-2").css("display","flex");
}

function calculate(){
  var score=0;
  var opt1 = $("input[name='option_1']:checked").val();
  var opt2 = $("input[name='option_2']:checked").val();
  if(opt1===ansarr[0][0]){score+=1;}
  if(opt2===ansarr[0][1]){score+=1;}
  console.log(opt1)
  console.log(ansarr[0][1])
  console.log(opt2)
  console.log(ansarr[0][2])

  showpopup2(score);
}
