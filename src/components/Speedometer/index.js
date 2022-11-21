// Write your code here
import {Component} from 'react'
import './index.css'

class Speedometer extends Component {
    state = {
        speed:0,
    }
    onClickBreak = () => {
        const {speed} = this.state
        
        if (speed >0) {
            this.setState(prevState => ({speed:prevState.speed - 10}))
        }
    }
    onClickAccelerate = () => {
        const {speed} = this.state

        if (speed<200) {
            this.setState(prevState => ({speed.prevState.speed + 10}))
        }
    }
    render(){
        const {speed} = this.state

    return (

      <div className="container">
        <div className="speed-container">
         <h1 className="heading">SPEEDOMETER</h1>
            
            <img src="https://assets.ccbp.in/frontend/react-js/speedometer-img.png"
                alt="speedometer" className="image" />
            
            <h1 className="head">Speed is {speed}mph</h1>
            <p className="para">Min limit is 0mph, Max limit is 200mph</p>

            <div className="btn-container">

                <button type="button" className="accelerate-button" 
                  onClick={this.onClickAccelerate}> Accelerate </button>

                <button type="button" className="break-button" 
                  onClick={this.onClickBreak}> Apply Brake </button>


            </div>
        </div>
    </div>
        )
    }
}

export default Speedometer

