import { CREATE_POOL_GENERATION } from "./types";

const serializeData = async (teams, divisiondata) => {
  let initialData = {
    tasks: {},
    columns: {},
    columnOrder: []
  };

  teams.forEach(team => {
    initialData.tasks[team] = { id: team, content: team };
  });

  divisiondata.forEach(div => {
    initialData.columns[div.poolName.trim()] = {
      id: div.poolName.trim(),
      title: div.poolName,
      taskIds: div.Teams
    };
    initialData.columnOrder.push(div.poolName.trim());
  });

  console.log(initialData);
  return initialData;
};

export const getPoolGeneration = (
  teamslist,
  divisionData,
  history
) => async dispatch => {
  try {
    console.log(teamslist, divisionData);
    const data = await serializeData(teamslist, divisionData);
    if (data) {
      dispatch({ type: CREATE_POOL_GENERATION, payload: data });
      history.push("/PoolManagement");
    }
  } catch (err) {
    console.log(err);
  }
};
