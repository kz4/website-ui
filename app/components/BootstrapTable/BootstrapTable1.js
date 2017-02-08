/**
 * Created by shraddha on 2/8/17.
 */
import React from 'react';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

export default class BootstrapTable1 extends React.Component{
  constructor()
  {
    super();
    this.datasets = [
      {id: 'data 1',
        updated: 2052017,
        start: 1052008,
        end: 12082016,
        count: 500,
        size: 2000,},
      {id:'data 2',
        updated: 2052012,
        start: 1052007,
        end: 12082011,
        count: 800,
        size: 3000,},
    ];
  }


  render()
  {
    return (<BootstrapTable data={this.datasets} search={ true } striped = {true} hover = {true}>
      <TableHeaderColumn dataField="id" isKey>Dataset ID</TableHeaderColumn>
      <TableHeaderColumn dataField="updated">Updated</TableHeaderColumn>
      <TableHeaderColumn dataField="start">Start</TableHeaderColumn>
      <TableHeaderColumn dataField="end">End</TableHeaderColumn>
      <TableHeaderColumn dataField="count">Count</TableHeaderColumn>
      <TableHeaderColumn dataField="size">Size</TableHeaderColumn>
    </BootstrapTable>);
  }




}
