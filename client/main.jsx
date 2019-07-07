import React from 'react';
import { Meteor } from 'meteor/meteor';
import { render } from 'react-dom';
import App from '/imports/ui/App';
import Link from '../imports/ui/Link'

Meteor.startup(() => {
  render(<Link />, document.getElementById('react-target'));
});
