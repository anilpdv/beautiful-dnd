import React, { Component } from "react";
import { BoysTeamList, GirlsTeamList } from "../util/TeamList";
import { Accordion, Card, ListGroup, Button } from "react-bootstrap";
import PoolSuggestionPopUp from "./PoolSuggestionPopUp";
import { getPoolGeneration } from "../actions/poolteamsActions";
import { connect } from "react-redux";
import {
  TeamsDivison,
  generateOptions
} from "../services/poolSuggestionService";

class TournamentInfo extends Component {
  tournamentDivision = [
    {
      DivisionName: "Boys Division",
      TeamsList: BoysTeamList
    },
    {
      DivisionName: "Girls Division",
      TeamsList: GirlsTeamList
    }
  ];

  constructor() {
    super();
    this.state = {
      Divisons: [],
      show: false,
      selectedDivision: null,
      poolSuggestion: null
    };
  }

  openPoolGenerator = data => {
    this.setState({ selectedDivision: data });
    this.handleClose();

    // this.props.history.push('/PoolManagement')
  };

  handleClose = () => {
    this.setState({ show: !this.state.show });
  };

  componentDidMount() {
    this.setState({ Divisons: this.tournamentDivision });
  }

  poolSuggestion = data => {
    this.setState({ poolSuggestion: data }, () => {
      let data = TeamsDivison(
        [...this.state.selectedDivision.TeamsList],
        generateOptions(
          this.state.selectedDivision.TeamsList.length,
          parseInt(this.state.poolSuggestion)
        )
      );
      this.props.getPoolGeneration(
        this.state.selectedDivision.TeamsList,
        data,
        this.props.history
      );
    });
    this.handleClose();
  };

  render() {
    return (
      <>
        <Accordion defaultActiveKey="0">
          {this.state.Divisons.map((value, index) => {
            return (
              <Card>
                <Card.Header>
                  <Accordion.Toggle
                    as={Card.Header}
                    variant="link"
                    eventKey={`${index}`}
                  >
                    {value.DivisionName} - {value.TeamsList.length}
                  </Accordion.Toggle>
                </Card.Header>
                <Accordion.Collapse eventKey={`${index}`}>
                  <Card.Body>
                    <ListGroup variant="flush">
                      {value.TeamsList.map((teamValues, teamIndex) => {
                        return <ListGroup.Item>{teamValues}</ListGroup.Item>;
                      })}
                    </ListGroup>
                    <div className="float-right">
                      <Button
                        variant="primary"
                        size="sm"
                        onClick={() => this.openPoolGenerator(value)}
                      >
                        Pool Generator
                      </Button>
                    </div>
                  </Card.Body>
                </Accordion.Collapse>
              </Card>
            );
          })}
        </Accordion>
        {this.state.show ? (
          <PoolSuggestionPopUp
            show={this.state.show}
            data={this.state.selectedDivision}
            handleClose={this.handleClose}
            poolSuggestion={this.poolSuggestion}
          ></PoolSuggestionPopUp>
        ) : (
          ""
        )}
      </>
    );
  }
}

const mapStateToProps = state => ({
  pools: state.poolsData
});

export default connect(mapStateToProps, { getPoolGeneration })(TournamentInfo);
