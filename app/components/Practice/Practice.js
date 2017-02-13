/**
 * Created by shraddha on 2/8/17.
 */

import React from 'react';

export default class Practice extends React.Component{
  /*constructor()
  {
    super();
    this.message = "testing if constructor is written correctly";
  }*/

  handleChange(e)
  {
    const title = e.target.value;
    console.log(title);
    this.title = title;
    this.props.changeTitle(title);
  }
  render()
  {
    console.log(this.props);
    this.props.changeTitle("new world");
    return(
      <div>
      <h4>Hello World</h4>



    <br></br>

        {this.title}

    <input  onChange={this.handleChange.bind(this)}></input>
    </div>
    );
  }

}
