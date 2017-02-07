/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
// import Helmet from 'react-helmet';
// import { FormattedMessage } from 'react-intl';
import { BootstrapTable, TableHeaderColumn } from 'react-bootstrap-table';

// import H1 from 'components/H1';
// import messages from './messages';
// import List from './List';
// import ListItem from './ListItem';
// import ListItemTitle from './ListItemTitle';


const options = {
  onRowClick: function (row) {
    alert(`You click row id: ${row.id}`);
  },
  onRowDoubleClick: function (row) {
    alert(`You double click row id: ${row.id}`);
  },
};
// var products = [{
//   id: 1,
//   name: 'Product1',
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

var datasets = [
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
export default class ProjectPage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }
  render() {
    return (

      // <div>
      //   <Helmet
      //     title="Project Page"
      //     meta={[
      //       { name: 'description', content: 'Project page of React.js Boilerplate application' },
      //     ]}
      //   />
      //   <H1>
      //     <FormattedMessage {...messages.header} />
      //   </H1>
      //   <List>
      //     <ListItem>
      //       <ListItemTitle>
      //         <FormattedMessage {...messages.scaffoldingHeader} />
      //       </ListItemTitle>
      //       <p>
      //         <FormattedMessage {...messages.scaffoldingMessage} />
      //       </p>
      //     </ListItem>
      //
      //     <ListItem>
      //       <ListItemTitle>
      //         <FormattedMessage {...messages.feedbackHeader} />
      //       </ListItemTitle>
      //       <p>
      //         <FormattedMessage {...messages.feedbackMessage} />
      //       </p>
      //     </ListItem>
      //
      //     <ListItem>
      //       <ListItemTitle>
      //         <FormattedMessage {...messages.routingHeader} />
      //       </ListItemTitle>
      //       <p>
      //         <FormattedMessage {...messages.routingMessage} />
      //       </p>
      //     </ListItem>
      //
      //     <ListItem>
      //       <ListItemTitle>
      //         <FormattedMessage {...messages.networkHeader} />
      //       </ListItemTitle>
      //       <p>
      //         <FormattedMessage {...messages.networkMessage} />
      //       </p>
      //     </ListItem>
      //
      //     <ListItem>
      //       <ListItemTitle>
      //         <FormattedMessage {...messages.intlHeader} />
      //       </ListItemTitle>
      //       <p>
      //         <FormattedMessage {...messages.intlMessage} />
      //       </p>
      //     </ListItem>
      //   </List>
      // </div>
      <BootstrapTable data={datasets} options={options} search={ true }>
        <TableHeaderColumn dataField="id" isKey>Dataset ID</TableHeaderColumn>
        <TableHeaderColumn dataField="updated">Updated</TableHeaderColumn>
        <TableHeaderColumn dataField="start">Start</TableHeaderColumn>
        <TableHeaderColumn dataField="end">End</TableHeaderColumn>
        <TableHeaderColumn dataField="count">Count</TableHeaderColumn>
        <TableHeaderColumn dataField="size">Size</TableHeaderColumn>
      </BootstrapTable>
    );
  }
}
