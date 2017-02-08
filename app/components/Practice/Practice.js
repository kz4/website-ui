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
  render()
  {
    console.log(this.props);
    return(
      <div>
      <h4>Hello World</h4>
    {this.props.title}
    </div>
    );
  }

}
