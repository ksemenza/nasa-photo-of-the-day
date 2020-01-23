//Componet used to pass input data

import React, {Component} from "react"
import ReactDOM from "react-dom";
import axios from "axios"
import "./date.css"


class ChosenDate extends Component {
    constructor(){
        super();
        this.state = {
            date: {}
        }
    }
    onChange = (d) =>  {
        this.setState({[d.target.date]: d.target.value})
    }

    render(){
     const {date} = this.state;
        return(
            <div className="date-full-wrap">
            <form onSubmit={this.onSubmit}>
               <h4>Choose Date: </h4>
                <input type="date" name="date" id="chosenDate" value={date} onChange={this.onChange}></input>

                <button type="submit">Change</button>
                </form>
                </div>
         
        )
    }

    onSubmit = (e) => {
        e.preventDefault();
        const {date} = this.state;
        axios.post('/', {date})

        .then((res) => {
            console.log(res)
        })
    }
}



const Date = props => {


    return (
        <form onSubmit={Date}>
        <div className="date-full-wrap">
            <h4>Choose Date: </h4>
            <input type="date" id="chosenDate" value={props.date}></input>
            <button type="submit">Change</button>
            </div>
            </form>

    )


}

ReactDOM.render(<ChosenDate />, document.getElementById('root'))
export default Date
