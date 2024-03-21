import React, { Component } from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Box from './component/box'
import { Col, Container, Row } from 'react-bootstrap';
import Score from './component/score'

const choice = {
    rock: {
        name: "rock",
        img: "/img/rock.png"
    },
    scissors: {
        name: "scissors",
        img: "/img/scissors.png"
    },
    paper: {
        name: "paper",
        img: "/img/paper.png"
    },
};

export default class AppClass extends Component {

    constructor() {
        super();
        this.state = {
            userSelect: null,
            computerSelect: null,
            result: '',
            computerResult: '',
            userScore: 0,
            computerScore: 0,
        };
    }

    play = (userChoice) => {
        let computerChoice = this.randomChoice();
        this.setState({
            userSelect: choice[userChoice],
            computerSelect: computerChoice,
            result: this.judge(choice[userChoice], computerChoice),
            computerResult: this.comJudge(this.judge(choice[userChoice], computerChoice))
        });
    };

    randomChoice = () => {
        let itemArray = Object.keys(choice);
        let randomItem = Math.floor(Math.random() * itemArray.length);
        let randomResult = itemArray[randomItem];
        return choice[randomResult];
    }

    judge = (user, computer) => {
        if (user.name === computer.name) {
            return "비김"
        } else if (user.name === "rock") return computer.name === "scissors" ? "승리" : "패배"
        else if (user.name === "scissors") return computer.name === "paper" ? "승리" : "패배"
        else if (user.name === "paper") return computer.name = "rock" ? "승리" : "패배"
    }

    comJudge = (result) => {
        if (result === "비김") {
            return "비김"
        } else if (result === "승리") {
            this.setState((prevState) => ({
                userScore: prevState.userScore + 1
            }))
            return "패배"
        } else if (result === "패배") {
            this.setState((prevState) => ({
                computerScore: prevState.computerScore + 1
            }))
            return "승리"
        }
    }


    render() {
        return (
            <div className='vh-100 text-white'>
                <Container className='pt-5'>
                    <Row>
                        <Col className='d-flex justify-content-center'>
                            <Box title="user" item={this.state.userSelect} result={this.state.result} />
                        </Col>
                        <Col lg={1} className='d-flex flex-column'>
                            <Score name="user Score" score={this.state.userScore} />
                            <Score name="computer Score" score={this.state.computerScore} />
                        </Col>
                        <Col className='d-flex justify-content-center'>
                            <Box title="computer" item={this.state.computerSelect} result={this.state.computerResult} />
                        </Col>
                    </Row>
                    <div className='d-flex justify-content-around'>
                        <img onClick={()=>this.play("scissors")} className='rounded card-size shadow' src='/img/scissors.png' alt='card-img' />
                        <img onClick={()=>this.play("rock")} className='rounded card-size shadow' src='/img/rock.png' alt='card-img' />
                        <img onClick={()=>this.play("paper")} className='rounded card-size shadow' src='/img/paper.png' alt='card-img' />
                    </div>
                </Container>
            </div>
        )
    }
}
