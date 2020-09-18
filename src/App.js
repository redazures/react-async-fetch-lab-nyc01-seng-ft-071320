// create your App component here
import React from 'react'

class App extends React.Component{

    state={
        data:[]
    }

    renderPeople = ()=>{
        console.log("this is render people", this.state)
        return this.state.data.people.map(person=><p key={person.name}>{person.name}</p>)
    }

    renderPeople2=()=>{
        console.log("this is render people 2", this.state)
        return this.state.data.map((person, id) => <h1 key={id}>{person.name}</h1>)
    }
    
    componentDidMount(){
        fetch('http://api.open-notify.org/astros.json')
        .then(res=>res.json())
        // .then(string=>(this.setState({data:string})))
        .then(string=>(this.setState({data:string.people})))
    }
    
    render(){
        return(
            <div>
                {/* {this.state.data.length===0 ? <h1>Loading</h1> : <h1>{this.renderPeople()}</h1> } */}
                {this.renderPeople2()}
            </div>
        )
        
    }
}

export default App