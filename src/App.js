import React from 'react';
import './App.css';
import Row from './row';
import Axios from 'axios';

class App extends React.Component {
constructor(props){
  super(props);
  this.state={
    val1:null,
    val2: null,
    options:[],
    rata:[],
    suma:0,
    rez:null

  }
}
  

componentDidMount(){
  const res= Axios.get("https://api.exchangeratesapi.io/latest")
  .then(res=>{
    const data= res.data;
    console.log(data);
    this.setState({
      val1:data.base,
      val2:data.base,
      options:[ data.base, ...Object.keys(data.rates)],
      rata: [1,...Object.values(data.rates)],
      
      })
    console.log(this.state);
  })

}
changing =(e)=>{
  this.setState({[e.target.name]:e.target.value});
  
}
change=(e)=>{ 
  this.setState({suma:e.target.value})
  this.rezultat(e);
  
 
  
}

rezultat=(e)=>{
  const suma= this.state.suma;
  var rez;
  
  rez= suma*this.state.rata[this.state.options.indexOf(this.state.val2)];
  
console.log(rez);
 this.setState({rez:rez})
}
  

render(){
  return (
    <div className="App">
      <h1>Currency change</h1>
      <Row val={this.state.val1}
       name="val1"
        suma={this.state.suma}
         currency={this.state.currency}  
         options={this.state.options} 
         onChange={this.changing}
         onChangeCurrency={this.change}
         />
      

      <div className="equal">=</div>
      <Row val={this.state.val2} name="val2" suma={this.state.rez} options={this.state.options} onChange={this.changing}/>
      
 
    </div>
  );
}
}

export default App;
