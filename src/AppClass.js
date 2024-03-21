import React, { Component } from 'react'
import './App.css';
import BoxClass from "./component/BoxClass"

const choice = {
    rock: {
        name: "Rock",
        img: "https://t3.ftcdn.net/jpg/02/93/71/22/360_F_293712283_EGPqlm1bxpH0ZnrngyjRBol9GnJm2ST7.jpg"
    },
    scissors: {
        name: "Scissors",
        img: "https://assets.katogroup.eu/i/katogroup/VT8-0919-24_02_victorinox"
    },
    paper: {
        name: "Paper",
        img: "https://cdn11.bigcommerce.com/s-2i5mq6440u/images/stencil/2048x2048/products/3762/9095/PlasticPaper-CutSheet__18809.1597757191.png?c=2"
    }
}

export default class AppClass extends Component {

    constructor() {
        super();
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: ""
        }
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judgement(choice[userChoice], computerChoice)
        })
    }

    judgement = (user, computer) => {
        // user == computer tie
        // user == rock, computer == scissors" : user가 이김
        // user == rock, computer == paper : user가 짐
        // user == scissors, computer == paper : user가 이김
        // user == scissors, computer == rock : user가 짐
        // user == paper, computer == rock : user가 이김
        // user == paper, computer == scissors : user 짐

        if (user.name === computer.name) {
            return "tie"
        } else if (user.name === "Rock") return computer.name === "Scissors" ? "win" : "lose"
        else if (user.name === "Scissors") return computer.name === "Paper" ? "win" : "lose"
        else if (user.name === "Paper") return computer.name === "Rock" ? "win" : "lose"
    }

    randomChoice = () => {
        let itemArray = Object.keys(choice) //객체에 키값만 뽑아서 array로 만들어주는 함수다
        let randomItem = Math.floor(Math.random() * itemArray.length)
        let final = itemArray[randomItem]
        return choice[final]
    }

    render() {
        return (
            <div>
                <div className='main'>
                    <BoxClass 
                        title="You" 
                        item={this.state.userSelect} 
                        result={this.state.result} 
                    />
                    <BoxClass 
                        title="Computer" 
                        item={this.state.computerSelect} 
                        result={this.state.result} 
                    />
                </div>
                <div className='main'>
                    <button onClick={() => this.play("scissors")}>가위</button>
                    <button onClick={() => this.play("rock")}>바위</button>
                    <button onClick={() => this.play("paper")}>보</button>
                </div>
            </div>
        )
    }
}
