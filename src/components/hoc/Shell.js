import React from 'react';
import {TransitionGroup} from 'react-transition-group';
import './Shell.scss'

const Shell = Page => {
  return props =>
    <div className="pageshell">
      <TransitionGroup
        transitionAppear={true}
        transitionAppearTimeout={600}
        transitionEnterTimeout={600}
        transitionLeaveTimeout={200}
        transitionName='SlideIn'
      >
        <Page {...props} />
      </TransitionGroup>
    </div>;
};

export default Shell;
