import React from 'react';
import { connect } from 'react-redux';
import { Col, Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { addActivity } from '../actions/activityActions';

class ActivityInput extends React.Component {

  state = {
    title: ''
  };

  handleChange = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    this.props.addActivity(this.state, this.props.destination.id);
    this.setState({
      title: ''
    });
  };

  render() {
    return (
      <div className='ActivityForm'>
        <Form onSubmit={this.handleSubmit}>
          <FormGroup row>
            <h5>Add a New Activity</h5>
          </FormGroup>

          <FormGroup row>
            <Label for='title' sm={2}>Title</Label>
            <Col md={10}>
              <Input type='text' name='title' value={this.state.title} onChange={this.handleChange}/>
            </Col>
          </FormGroup>

          <Button>Add Activity</Button>
        </Form>
      </div>
    );
  }
};

export default connect(null, { addActivity })(ActivityInput);