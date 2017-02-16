/**
 * Created by shraddha on 2/8/17.
 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Button from 'react-bootstrap/lib/Button';

export default class BootstrapTable1 extends React.Component{
  onClickViewData(cell, row, rowIndex){
    alert('Hello! View Data');
  }
  onClickEditData(cell, row, rowIndex){
    alert('Hello! Edit Data');
  }

editingButtons(cell, row, enumObject, rowIndex) {
  return(
    <div>
      <Button bsStyle="success" href={'/'}>View</Button>&nbsp;
      <Button bsStyle="info" href={'/'}>Edit/Download</Button>

    </div>
  )
}

  render()
  {
    return (<BootstrapTable data={this.props.datasets} search={ true } striped = {true} hover = {true}>
      <TableHeaderColumn dataField="id" isKey>Dataset ID</TableHeaderColumn>
      <TableHeaderColumn dataField="updated">Updated</TableHeaderColumn>
      <TableHeaderColumn dataField="start">Start</TableHeaderColumn>
      <TableHeaderColumn dataField="end">End</TableHeaderColumn>
      <TableHeaderColumn dataField="count">Count</TableHeaderColumn>
      <TableHeaderColumn dataField="size">Size</TableHeaderColumn>
      <TableHeaderColumn width="200"
        dataField='button'
        dataFormat={this.editingButtons.bind(this)}
      />


    </BootstrapTable>);
  }




}
