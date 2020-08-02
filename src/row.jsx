import React from 'react';

class Row extends React.Component{

    render(){
        return(

        <div>
            <input type="text"  onChange={this.props.onChangeCurrency}value={this.props.suma} />
            <select value={this.props.val}name={this.props.name} onChange={this.props.onChange}>
        {this.props.options.map((index)=> (<option key={index} value={index}>{index}</option>))}
            </select>

        </div>

        )
    }
}
export default Row;