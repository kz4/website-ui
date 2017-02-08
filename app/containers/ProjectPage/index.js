

/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
// import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
//import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';
import Practice from '../../components/Practice/Practice.js'
import BootstrapTable1 from '../../components/BootstrapTable/BootstrapTable1.js'

// import H1 from 'components/H1';
// import messages from './messages';
// import List from './List';
// import ListItem from './ListItem';
// import ListItemTitle from './ListItemTitle


const options = {
  onRowClick: function (row) {
    alert(`You click row id: ${row.id}`);
  },
  onRowDoubleClick: function (row) {
    alert(`You double click row id: ${row.id}`);
  },
}
// var products = [{
//   id: 1,
//  name: 'Product1',
//   price: 120,
// }, {
//   id: 2,
//   name: 'Product2',
//   price: 80,
// }];

// var project = [
//   {
//   "project_id": 1,
//   "description": "Project 1",
//   "project_name": "Project 1",
//   "img": "",
//   "essentials" : [{
//     "year":2010,
//     "budget": 10000,
//     "source": "abc",
//     "location": "abc"
//   }],
//   "related_docs" : [{
//     "id": 1 ,
//     "link":"www.googledocs.com/abc.pdf"
//   },
//     {
//       "id":2,
//       "link":"www.abc.com/123.png"
//     }
//   ],
//   "datasets" : [
//     {
//       "id" : "data 1",
//       "updated":2052017,
//       "start":1052008,
//       "end":12082016,
//       "count":500,
//       "size":2000
//     },
//     {
//       "id" :"data 2",
//       "updated":2052012,
//       "start":1052007,
//       "end":12082011,
//       "count":800,
//       "size":3000
//     }
//   ]
// }];

/*var datasets = [
>>>>>>> 234baf6ea075d64bc9ccf467e8d64d38a42623a1
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
];*/
export default class ProjectPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }



  render() {



    const title = "Welcome to the web dev team's project page";


    const datasets = [
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




    return (

      <div>



        <Practice title={"this is the first instance of the Practice component"}/>


        <Practice title = {"this is the second instance of practice component"}/>



        <BootstrapTable1 datasets = {datasets}/>

        </div>

    );
  }
}
