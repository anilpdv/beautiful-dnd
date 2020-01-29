import React from "react";
import initialData from "./initalState";
import { fetchinitalData } from "./generateOptions";
import { Link } from "react-router-dom";
import Column from "./Column";
import { connect } from "react-redux";
import styled from "styled-components";
import { DragDropContext, Droppable } from "react-beautiful-dnd";
import "@atlaskit/css-reset";

const Container = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const Button = styled.button`
  padding: 4px;
`;

class PoolManagement extends React.Component {
  state = {};

  componentDidMount() {
    console.log(this.props.poolsData.pools);
    this.setState(this.props.poolsData.pools);
  }

  addPoolColumn = () => {
    // 'column-3': {
    //   id: 'column-3',
    //   title: 'Done',
    //   taskIds: [],
    // }
    console.log("add new column");
    const newColumnOrder = Array.from(this.state.columnOrder);
    const newColumns = Object.assign(this.state.columns);

    const columnId = `pool-${parseInt(
      newColumnOrder[newColumnOrder.length - 1].split("-")[1]
    ) + 1}`;
    console.log({ columnId });
    newColumns[columnId] = { id: columnId, title: columnId, taskIds: [] };
    newColumnOrder.push(columnId);

    const newState = {
      ...this.state,
      columns: newColumns,
      columnOrder: newColumnOrder
    };

    this.setState(newState);
  };

  onDragEnd = result => {
    const { destination, source, draggableId, type } = result;
    console.log({ result });
    if (!destination) {
      return;
    }
    if (type === "column") {
      const newColumnOrder = Array.from(this.state.columnOrder);
      newColumnOrder.splice(source.index, 1);
      newColumnOrder.splice(destination.index, 0, draggableId);

      const newState = {
        ...this.state,
        columnOrder: newColumnOrder
      };
      this.setState(newState);
      return;
    }

    if (
      destination.droppableId === source.droppableId &&
      destination.index === source.index
    ) {
      return;
    }

    const start = this.state.columns[source.droppableId];
    const finish = this.state.columns[destination.droppableId];

    if (start === finish) {
      console.log(start, finish);
      const newTaskIds = Array.from(start.taskIds);
      newTaskIds.splice(source.index, 1);
      newTaskIds.splice(destination.index, 0, draggableId);

      const newColumn = {
        ...start,
        taskIds: newTaskIds
      };

      const newState = {
        ...this.state,
        columns: {
          ...this.state.columns,
          [newColumn.id]: newColumn
        }
      };

      this.setState(newState);
      return;
    }

    // moving from one list to another
    const startTaskIds = Array.from(start.taskIds);
    const newColumnOrder = Array.from(this.state.columnOrder);

    if (start.taskIds.length <= 1) {
      console.log("empty", newColumnOrder.indexOf(source.droppableId));
      newColumnOrder.splice(newColumnOrder.indexOf(source.droppableId), 1);
    }
    startTaskIds.splice(source.index, 1);
    const newStart = {
      ...start,
      taskIds: startTaskIds
    };

    const finishTaskIds = Array.from(finish.taskIds);
    finishTaskIds.splice(destination.index, 0, draggableId);
    const newFinish = {
      ...finish,
      taskIds: finishTaskIds
    };

    const newState = {
      ...this.state,
      columns: {
        ...this.state.columns,
        [newStart.id]: newStart,
        [newFinish.id]: newFinish
      },
      columnOrder: newColumnOrder
    };

    this.setState(newState);
  };

  render() {
    console.log(this.state);
    return (
      <DragDropContext onDragEnd={this.onDragEnd}>
        <Button className="btn btn-light mr-3">
          <Link to="/">Teams</Link>
        </Button>
        <Button className="btn btn-dark" onClick={this.addPoolColumn}>
          add pool
        </Button>
        {this.state.tasks && (
          <Droppable
            type="column"
            droppableId="all-columns"
            direction="horizontal"
          >
            {provided => (
              <Container {...provided.droppableProps} ref={provided.innerRef}>
                {this.state.columnOrder.map((columnId, index) => {
                  const column = this.state.columns[columnId];
                  const tasks = column.taskIds.map(
                    taskId => this.state.tasks[taskId]
                  );
                  return (
                    <Column
                      key={column.id}
                      column={column}
                      index={index}
                      tasks={tasks}
                    />
                  );
                })}
                {provided.placeholder}
              </Container>
            )}
          </Droppable>
        )}
      </DragDropContext>
    );
  }
}

const mapStateToProps = state => ({
  poolsData: state.poolsData
});

export default connect(mapStateToProps, null)(PoolManagement);
