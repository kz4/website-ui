/*
 * FeaturePage
 *
 * List all the features
 */
import React from 'react';
import Helmet from 'react-helmet';
import { FormattedMessage } from 'react-intl';

import H1 from 'components/H1';
import messages from './messages';
import List from './List';
import ListItem from './ListItem';
import ListItemTitle from './ListItemTitle';
import Practice from '../../components/Practice/Practice'

export default class FeaturePage extends React.Component { // eslint-disable-line react/prefer-stateless-function

  // Since state and props are static,
  // there's no need to re-render this component
  shouldComponentUpdate() {
    return false;
  }

  constructor(props){
    super(props);
    this.state = {
      title:  "hello world",
  };


  }

  changeTitle(title)
  {
    console.log(title);
    this.setState({title: title});
  }

  render() {
    return (<div>
      
    </div>);
  ;
  }
}
