// function age(){
//     var birthyear=prompt("Year friend....?")
//     var days= (2021- birthyear)*365;

//     var h1=document.createElement('h1');
//     var textans= document.createTextNode('U are '+ days +' days old.');
//     h1.setAttribute('id','ageIndays');
//     h1.appendChild(textans);
//     document.getElementById('flex-box-container-result').appendChild(h1);
// }

// function reset(){
//     document.getElementById('ageIndays').remove();
// }

// function generatecat(){
//     var img=document.createElement('img');
//     var div=document.getElementById('cat-generator');
//     img.src="https://cdn2.thecatapi.com/images/e9o.jpg";
//     div.appendChild(img);
// }


// Challange 3

function rps(yourChoice){
    var human,computer;
    human=yourChoice.id;
    console.log(human);
    computer= Mapper(Rand());
    console.log(computer);
    var result= winner(human,computer);
    console.log(result);
    message=finalMessage(result);
    console.log(message);
    display(human,computer,message);

}

function Rand(){
    return Math.floor(Math.random()*3);
}

function Mapper(number){
    return ['rock','paper','scissor'][number];
}

function winner(human,computer){
    var outcome={
    'rock': {'rock':0.5, 'paper':0,'scissor':1},
    'paper': {'rock':1, 'paper':0.5,'scissor':0},
    'scissor': {'rock':0, 'paper':1,'scissor':0.5},
    };
     
    var humanScore=outcome[human][computer];
    var computerScore=outcome[computer][human];

    //console.log("h "+ humanScore);
    //console.log("C "+computerScore);

    return[humanScore, computerScore];
}

function finalMessage([yourScore,computerScore]){
    if(yourScore===0){
        return {'message': 'You Lost', 'color': 'red'};
    }
    else if(yourScore==0.5)
        return {'message': 'Draw', 'color': 'Yellow'};
    else
        return {'message': 'You Won', 'color': 'Green'};
}

function display(yourChoice, computerChoice, message){
    var images={
        'rock':document.getElementById('rock').src,
        'paper':document.getElementById('paper').src,
        'scissor':document.getElementById('scissor').src
    }

    document.getElementById('rock').remove();
    document.getElementById('paper').remove();
    document.getElementById('scissor').remove();

    var huamDiv=document.createElement('div');
    var compDiv=document.createElement('div');
    var messageDiv=document.createElement('div');

    huamDiv.innerHTML= "<img src=" + images[yourChoice] +  " width= 200 height=200 style='box-shadow: 0px 10px 50px rgba(49, 35, 236, 0.75)' >";
    console.log("<img src=" + images[yourChoice] +  " width= 150 height=150 >");
    document.getElementById('rps').appendChild(huamDiv);

    messageDiv.innerHTML="<h1 style='color: " + message['color']+ " ; font-size: 60px; padding: 30px; '>" + message['message'] + "</h1>";
    document.getElementById('rps').appendChild(messageDiv);

    compDiv.innerHTML="<img src=" + images[computerChoice] +  " width= 200 height=200 style='box-shadow: 0px 10px 50px rgba(192, 35, 35, 0.75)' >";
    document.getElementById('rps').appendChild(compDiv);
}