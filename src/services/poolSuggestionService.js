export const generateOptions = (td, nd) => {
  let division = Math.floor(td / nd);
  let remaining = division * nd;

  let tdRemaining = td - remaining;
  return [
    {
      poolSize: tdRemaining,
      teamSize: division + 1
    },
    {
      poolSize: nd - tdRemaining,
      teamSize: division
    }
  ];
};

export const TeamsDivison = (teamsList, poolCriteria) => {
  let TeamsDivisonList = [];
  poolCriteria.forEach(pools => {
    for (let i = 0; i < pools.poolSize; i++) {
      TeamsDivisonList.push({
        poolName: `pool-${TeamsDivisonList.length + 1}`,
        Teams: teamsList.splice(0, pools.teamSize)
      });
    }
  });

  return TeamsDivisonList;
};
