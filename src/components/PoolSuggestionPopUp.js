import React, { Component } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { generateOptions } from "../services/poolSuggestionService";

class PoolSuggestionPopUp extends Component {
  state = {
    suggestionList: [],
    suggestionSelected: null
  };

  generateSuggestionList = () => {
    for (
      let i = 6;
      i <= Math.floor(this.props.data.TeamsList.length / 2);
      i++
    ) {
      this.setState(prevstate => ({
        suggestionList: [
          ...prevstate.suggestionList,
          {
            Value: i,
            DisplayName: generateOptions(this.props.data.TeamsList.length, i)
          }
        ]
      }));
    }
  };

  onChange = e => {
    if (e.target.value !== "") {
      this.setState({ suggestionSelected: e.target.value });
    }
  };

  poolSuggestionDisplayFormat(data) {
    return `${data.Value} pools(${data.DisplayName[0].poolSize} pools of ${data.DisplayName[0].teamSize} teams,${data.DisplayName[1].poolSize} pools of ${data.DisplayName[1].teamSize}teams)`;
  }

  componentDidMount() {
    if (this.props.data) this.generateSuggestionList();
  }

  generatePool = () => {
    console.log(this.state.suggestionSelected);
    this.props.poolSuggestion(this.state.suggestionSelected);
  };

  render() {
    return (
      <Modal show={this.props.show} onHide={this.props.handleClose}>
        <Modal.Header>
          <Modal.Title>
            Pool Generation for {this.props.data.DivisionName}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group controlId="exampleForm.ControlSelect1">
              <Form.Label>Pool Suggestion</Form.Label>
              <Form.Control as="select" onChange={this.onChange}>
                <option value="">-Please Select Pool Suggestion-</option>
                {this.state.suggestionList.map((items, index) => {
                  return (
                    <option key={index} value={items.Value}>
                      {this.poolSuggestionDisplayFormat(items)}
                    </option>
                  );
                })}
              </Form.Control>
            </Form.Group>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button vairent="Secondary">Close</Button>
          <Button vairent="Primary" onClick={this.generatePool}>
            generate
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

export default PoolSuggestionPopUp;
