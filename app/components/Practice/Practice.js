/**
 * Created by shraddha on 2/8/17.
 */

import React from 'react';

export default class Practice extends React.Component{
  handleChange(e)
  {
    const title = e.target.value;
    console.log(title);
    this.props.changeTitle(title);
  }
  render()
  {

    console.log(this.props);


    return(
      <div>





    <br></br>



        {this.props.title}

        <br></br>
    <input onChange={this.handleChange.bind(this)}/>
    </div>
    );
  }

}
