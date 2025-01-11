
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Quiz App</title>
    <link rel="stylesheet" href="style.css" />
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
  </head>
  <body>
    <div class="parent">
      <h1>Welcome To This Quiz</h1>
      <div id="question">
        <h1>Question # 01</h1>
        <div id="quesAns"></div>
        <button type="button" onclick="next()" class="btn btn-dark">Next</button>
    </div>
    </div>
    <div class="score">Score: <span id="score">0</span></div>

    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <script src="app.js"></script>
  </body>
</html>
*{
  margin: 0;
  padding: 0;
  font-family: sans-serif;
}
body{
  background-color: rgb(9, 12, 23);
  height: 100vh;
  /* margin-left:36rem;
  margin-top: 8rem; */
display: flex;  /* will only work when we gave height */
  justify-content: center;
  align-items: center;
}
.parent
{
  align-items:center ;

  width: 600px;
  /* height: 500px; dont give height cause when heigt increase it will move out of the box so use padding */
  background-color: rgb(224, 189, 189);
  border-radius: 30px;
  padding: 20px 30px;
}
.parent h1{
  /* margin-left:80px; */
  font-weight: 600;
}
.question h1{
  font-size: 25px;
  /* margin-left: 20px; */
  font-weight: 500;

}
.question h1{
  margin-left:1rem;
  margin-top: 4rem;
  font-size: 25px;

}
.btn{
  margin-top: 16rem;
  margin-left: 12rem;
  width: 170px;
}
.btn:hover{
  background-color: rgb(201, 135, 135);
  color: black;
}
.quesAns p{
  font-weight: 700;

}
label{
  font-size: 23px;
}
const data = [
    {
        question: "What does HTML stand for?",
        options: ["Hyper Text Markup Language", "High TI Mar Lan", "Hyper Text Markup Learn"],
        correct: "Hyper Text Markup Language"
    },
    {
        question: "What does CSS stand for?",
        options: ["Com Sci", "Cascading Style Sheet", "Cas Cad Count"],
        correct: "Cascading Style Sheet"
    },
    {
        question: "What the best language?",
        options: ["javascript", "c++ ", "python","java"],
        correct: "javascript"
    },
   
];

const index = 0
const LoadQuestions = ()=>{
    const parentDiv = document.getElementById("quesAns")
    const question = document.getElementById("question")
        question.innerText = data[index].question;
        parentDiv.innerHTML = " "

        data[index].options.forEach((item,i) => {
           const options = ` <input type="radio" id=option${i} name="options" value=${item}>
           <label for=option${i}>${item}</label> <br>`
           parentDiv.innerHTML+=options
        });
    
}
const next = ()=>{
    const selectedValue = document.querySelector('input[type:"options"]:checked').value
    if(index<data.length-1){
        index++;
        LoadQuestions()
    }
}

LoadQuestions()

    <!-- to select only one we use name prop and that should be same  and also give id-->
            <!-- <p>What HTML stands for?</p>
            <label for="html">html</label>
            <input type="radio" id="html" name="options">

            <label for="css">CSS</label>
            <input type="radio" id="css" name="options">

            <label for="Javascript">Javascript</label>
            <input type="radio" id="Javascript" name="options"> -->
