import React from 'react';
import {render} from 'react-dom';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';
import _ from 'lodash';
import Form from './components/Form';
import Note from './components/Note';
import './index.scss';

class Main extends React.Component {
  state = { notes:[] }
  renderItems = () => {
    return this.state.notes.map((item) => {
      return <Note key={item.id} id={item.id} remove={this.remove} {...item} />
    });
  }
  add = (title, text) => {
    const id = Math.random().toString(36).substr(2, 9);
    this.setState({
      notes: [...this.state.notes, {id, title, text}]
    });
  }
  remove = (id) => {
    const notes = _.filter(this.state.notes, function(n){
      return n.id != id;
    });
    this.setState({
      notes
    });
  }
  render(){
    return(
      <div>
        <h1 className="animated zoomIn">Notes</h1>
        <Form add={this.add} />
        <ReactCSSTransitionGroup
          transitionName={{
            appear: 'animated',
            appearActive: 'flipInY',
            enter: 'animated',
            enterActive: 'flipInY',
            leave: 'animated',
            leaveActive: 'flipOutY'
          }}
          transitionAppear={true}
          transitionAppearTimeout={1000}
          transitionEnterTimeout={1000}
          transitionLeaveTimeout={1000}
          component="div"
          className="container"
        >
          {this.renderItems()}
        </ReactCSSTransitionGroup>
      </div>
    )
  }
}

render(<Main />, document.getElementById('app'));
