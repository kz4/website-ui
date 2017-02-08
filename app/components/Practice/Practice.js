/**
 * Created by shraddha on 2/8/17.
 */

import React from 'react';

export default class Practice extends React.Component{
  constructor()
  {
    super();
    this.message = "testing if constructor is written correctly";
  }
  render()
  {
    return(
      <h4>Practising making external components and rendering it on one page, by importing. {this.message}</h4>
    );
  }

}
