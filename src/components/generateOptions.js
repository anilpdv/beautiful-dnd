import teams from './teams';

const generateOptions = (td, nd) => {
  let division = Math.floor(td / nd);
  let remaining = division * nd;

  let tdRemaining = td - remaining;
  return [
    {
      poolSize: tdRemaining,
      teamSize: division + 1,
    },
    {
      poolSize: nd - tdRemaining,
      teamSize: division,
    },
  ];
};

const TeamsDivison = (teamsList, poolCriteria) => {
  let TeamsDivisonList = [];
  poolCriteria.forEach(pools => {
    for (let i = 0; i < pools.poolSize; i++) {
      TeamsDivisonList.push({
        poolName: `pool-${TeamsDivisonList.length + 1}`,
        Teams: teamsList.splice(0, pools.teamSize),
      });
    }
  });
  return TeamsDivisonList;
};

const serializeData = async (teams, divisiondata) => {
  let initialData = {
    tasks: {},
    columns: {},
    columnOrder: [],
  };

  teams.forEach(team => {
    console.log('co');
    initialData.tasks[team] = {id: team, content: team};
  });

  divisiondata.forEach(div => {
    initialData.columns[div.poolName.trim()] = {
      id: div.poolName.trim(),
      title: div.poolName,
      taskIds: div.Teams,
    };
    initialData.columnOrder.push(div.poolName.trim());
  });

  console.log(initialData);
};
const teamsList = Array.from(teams);
const poolCriteria = generateOptions(43, 11);
const teamsdivision = TeamsDivison(teams, poolCriteria);
export const fetchinitalData = () => serializeData(teamsList, teamsdivision);
