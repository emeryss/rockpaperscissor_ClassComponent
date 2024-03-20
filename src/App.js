import { useState } from 'react';
import './App.css';
import Box from "./component/Box"

// 1. 박스 2개(타이틀, 사진, 결과)
// 2. 가위 바위 보 버튼이 있다
// 3. 버튼을 클릭하면 클릭한 값이 박스에 보임
// 4. 컴퓨터는 램덤하게 아이템 선택이 된다
// 5. 3 4 의 결과를 가지고 누가 이겼는지 승패를 따진다
// 6. 승패 결과에 따라 테두리 색이 바뀐다 (이기면-초록, 지면-빨강, 비기면-검은색)

const choice = {
  rock:{
    name: "Rock",
    img: "https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg"
  },
  scissors:{
    name: "Scissors",
    img: "https://assets.katogroup.eu/i/katogroup/VT8-0919-24_02_victorinox"
  },
  paper:{
    name: "Paper",
    img: "https://cdn11.bigcommerce.com/s-2i5mq6440u/images/stencil/2048x2048/products/3762/9095/PlasticPaper-CutSheet__18809.1597757191.png?c=2"
  }
}
function App() {
  const [userSelect, setUserSelect] = useState(null)
  const [computerSelect, setComputerSelect] = useState(null)
  const [result, setResult] = useState("")
  const [compResult, setCompResult] = useState("")


  const play=(userChoice)=>{
    setUserSelect(choice[userChoice])
    let computerChoice = randomChoice()
    setComputerSelect(computerChoice)
    setResult(judgement(choice[userChoice], computerChoice))
    setCompResult(compJudgement(choice[userChoice], computerChoice))
  }

  const judgement = (user, computer) => {
    console.log("user", user, "computer", computer)

    // user == computer tie
    // user == rock, computer == scissors" : user가 이김
    // user == rock, computer == paper : user가 짐
    // user == scissors, computer == paper : user가 이김
    // user == scissors, computer == rock : user가 짐
    // user == paper, computer == rock : user가 이김
    // user == paper, computer == scissors : user 짐

    if(user.name === computer.name){
      return "tie"
    } else if(user.name==="Rock") return computer.name==="Scissors"?"win":"lose"
    else if (user.name==="Scissors") return computer.name==="Paper"?"win":"lose"
    else if (user.name==="Paper") return computer.name==="Rock"?"win":"lose"
  }

  const compJudgement = (user, computer) => {
    if(user.name === computer.name){
      return "tie"
    } else if(user.name==="Rock") return computer.name==="Scissors"?"lose":"win"
    else if (user.name==="Scissors") return computer.name==="Paper"?"lose":"win"
    else if (user.name==="Paper") return computer.name==="Rock"?"lose":"win"
  }

  const randomChoice=()=>{
    let itemArray = Object.keys(choice) //객체에 키값만 뽑아서 array로 만들어주는 함수다
    console.log("item array", itemArray)
    let randomItem = Math.floor(Math.random() * itemArray.length)
    let final = itemArray[randomItem]
    return choice[final]
  }

  return (
    <div>
      <div className='main'>
        <Box title="You" item={userSelect} result={result}/>
        <Box title="Computer" item={computerSelect} result={compResult}/>
      </div>
      <div className='main'>
        <button onClick={()=>play("scissors")}>가위</button>
        <button onClick={()=>play("rock")}>바위</button>
        <button onClick={()=>play("paper")}>보</button>
      </div>
    </div>
  );
}

export default App;
