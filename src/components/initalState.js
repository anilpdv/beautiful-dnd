const initialData = {
  tasks: {
    'task-1': {id: 'task-1', content: 'Take out the garbage'},
    'task-2': {id: 'task-2', content: 'watch my favorite show'},
    'task-3': {id: 'task-3', content: 'charge my phone'},
    'task-4': {id: 'task-4', content: 'co'},
    'task-5': {id: 'task-5', content: 'so'},
  },
  columns: {
    'column-1': {
      id: 'column-1',
      title: 'to do',
      taskIds: ['task-1', 'task-2', 'task-3'],
    },
    'column-2': {
      id: 'column-2',
      title: 'In Progress',
      taskIds: ['task-4', 'task-5'],
    },
    'column-3': {
      id: 'column-3',
      title: 'Done',
      taskIds: [],
    },
  },
  columnOrder: ['column-1', 'column-2', 'column-3'],
};

const initialState = {
  tasks: {
    'Dalhausser/Lucena': {
      id: 'Dalhausser/Lucena',
      content: 'Dalhausser/Lucena',
    },
    ' Paulis/Satterfield': {
      id: ' Paulis/Satterfield',
      content: ' Paulis/Satterfield',
    },
    ' Rosener/Cervantes': {
      id: ' Rosener/Cervantes',
      content: ' Rosener/Cervantes',
    },
    ' Hiehle/Semo': {
      id: ' Hiehle/Semo',
      content: ' Hiehle/Semo',
    },
    ' Deuchar/Haine': {
      id: ' Deuchar/Haine',
      content: ' Deuchar/Haine',
    },
    'Crabb/Gibb': {
      id: 'Crabb/Gibb',
      content: 'Crabb/Gibb',
    },
    ' Mewhirter/Burik': {
      id: ' Mewhirter/Burik',
      content: ' Mewhirter/Burik',
    },
    ' Caldwell/Meer': {
      id: ' Caldwell/Meer',
      content: ' Caldwell/Meer',
    },
    ' Smallwood/Semo': {
      id: ' Smallwood/Semo',
      content: ' Smallwood/Semo',
    },
    ' Guerreiro/Ashment': {
      id: ' Guerreiro/Ashment',
      content: ' Guerreiro/Ashment',
    },
    'Patterson/Budinger': {
      id: 'Patterson/Budinger',
      content: 'Patterson/Budinger',
    },
    ' Vaught/Webber': {
      id: ' Vaught/Webber',
      content: ' Vaught/Webber',
    },
    ' Ferrari/Mewhirter': {
      id: ' Ferrari/Mewhirter',
      content: ' Ferrari/Mewhirter',
    },
    ' Tralka/McDonald': {
      id: ' Tralka/McDonald',
      content: ' Tralka/McDonald',
    },
    ' Salfetnikov/Terekhin': {
      id: ' Salfetnikov/Terekhin',
      content: ' Salfetnikov/Terekhin',
    },
    'Casebeer/Schalk': {
      id: 'Casebeer/Schalk',
      content: 'Casebeer/Schalk',
    },
    ' Roberts/Benesh': {
      id: ' Roberts/Benesh',
      content: ' Roberts/Benesh',
    },
    ' Austin/Schultz': {
      id: ' Austin/Schultz',
      content: ' Austin/Schultz',
    },
    ' Cronick/Semo': {
      id: ' Cronick/Semo',
      content: ' Cronick/Semo',
    },
    'Bomgren/Field': {
      id: 'Bomgren/Field',
      content: 'Bomgren/Field',
    },
    ' Rosenthal/Cook': {
      id: ' Rosenthal/Cook',
      content: ' Rosenthal/Cook',
    },
    ' Motter/Ospina': {
      id: ' Motter/Ospina',
      content: ' Motter/Ospina',
    },
    ' Sutton/Keller': {
      id: ' Sutton/Keller',
      content: ' Sutton/Keller',
    },
    'Priddy/Santos': {
      id: 'Priddy/Santos',
      content: 'Priddy/Santos',
    },
    ' Partain/Priima': {
      id: ' Partain/Priima',
      content: ' Partain/Priima',
    },
    ' Muagututia/Jacobs': {
      id: ' Muagututia/Jacobs',
      content: ' Muagututia/Jacobs',
    },
    ' lubliner/McBride': {
      id: ' lubliner/McBride',
      content: ' lubliner/McBride',
    },
    'Doherty/Evans': {
      id: 'Doherty/Evans',
      content: 'Doherty/Evans',
    },
    ' Friend/Lotman': {
      id: ' Friend/Lotman',
      content: ' Friend/Lotman',
    },
    ' Schwengel/Irvin': {
      id: ' Schwengel/Irvin',
      content: ' Schwengel/Irvin',
    },
    ' Cox/Ellis': {
      id: ' Cox/Ellis',
      content: ' Cox/Ellis',
    },
    'Bourne/Crabb': {
      id: 'Bourne/Crabb',
      content: 'Bourne/Crabb',
    },
    ' Kolinske/Beranek': {
      id: ' Kolinske/Beranek',
      content: ' Kolinske/Beranek',
    },
    ' Lorenz/DiVenere': {
      id: ' Lorenz/DiVenere',
      content: ' Lorenz/DiVenere',
    },
    ' Shipps/Jones': {
      id: ' Shipps/Jones',
      content: ' Shipps/Jones',
    },
    'Allen/Slick': {
      id: 'Allen/Slick',
      content: 'Allen/Slick',
    },
    ' Hyden/Brunner': {
      id: ' Hyden/Brunner',
      content: ' Hyden/Brunner',
    },
    ' Porter/Porter': {
      id: ' Porter/Porter',
      content: ' Porter/Porter',
    },
    ' Fleming/Komar': {
      id: ' Fleming/Komar',
      content: ' Fleming/Komar',
    },
    'Drost/Frishman': {
      id: 'Drost/Frishman',
      content: 'Drost/Frishman',
    },
    ' McKibbin/McKibbin': {
      id: ' McKibbin/McKibbin',
      content: ' McKibbin/McKibbin',
    },
    ' Mayer/Shavit': {
      id: ' Mayer/Shavit',
      content: ' Mayer/Shavit',
    },
    ' Shaffer/Fiers': {
      id: ' Shaffer/Fiers',
      content: ' Shaffer/Fiers',
    },
  },
  columns: {
    'pool-1': {
      id: 'pool-1',
      title: 'pool-1',
      taskIds: [
        'Dalhausser/Lucena',
        ' Paulis/Satterfield',
        ' Rosener/Cervantes',
        ' Hiehle/Semo',
      ],
    },
    'pool-2': {
      id: 'pool-2',
      title: 'pool-2',
      taskIds: [
        ' Deuchar/Haine',
        'Crabb/Gibb',
        ' Mewhirter/Burik',
        ' Caldwell/Meer',
      ],
    },
    'pool-3': {
      id: 'pool-3',
      title: 'pool-3',
      taskIds: [
        ' Smallwood/Semo',
        ' Guerreiro/Ashment',
        'Patterson/Budinger',
        ' Vaught/Webber',
      ],
    },
    'pool-4': {
      id: 'pool-4',
      title: 'pool-4',
      taskIds: [
        ' Ferrari/Mewhirter',
        ' Tralka/McDonald',
        ' Salfetnikov/Terekhin',
        'Casebeer/Schalk',
      ],
    },
    'pool-5': {
      id: 'pool-5',
      title: 'pool-5',
      taskIds: [
        ' Roberts/Benesh',
        ' Austin/Schultz',
        ' Cronick/Semo',
        'Bomgren/Field',
      ],
    },
    'pool-6': {
      id: 'pool-6',
      title: 'pool-6',
      taskIds: [
        ' Rosenthal/Cook',
        ' Motter/Ospina',
        ' Sutton/Keller',
        'Priddy/Santos',
      ],
    },
    'pool-7': {
      id: 'pool-7',
      title: 'pool-7',
      taskIds: [
        ' Partain/Priima',
        ' Muagututia/Jacobs',
        ' lubliner/McBride',
        'Doherty/Evans',
      ],
    },
    'pool-8': {
      id: 'pool-8',
      title: 'pool-8',
      taskIds: [
        ' Friend/Lotman',
        ' Schwengel/Irvin',
        ' Cox/Ellis',
        'Bourne/Crabb',
      ],
    },
    'pool-9': {
      id: 'pool-9',
      title: 'pool-9',
      taskIds: [
        ' Kolinske/Beranek',
        ' Lorenz/DiVenere',
        ' Shipps/Jones',
        'Allen/Slick',
      ],
    },
    'pool-10': {
      id: 'pool-10',
      title: 'pool-10',
      taskIds: [
        ' Hyden/Brunner',
        ' Porter/Porter',
        ' Fleming/Komar',
        'Drost/Frishman',
      ],
    },
    'pool-11': {
      id: 'pool-11',
      title: 'pool-11',
      taskIds: [' McKibbin/McKibbin', ' Mayer/Shavit', ' Shaffer/Fiers'],
    },
  },
  columnOrder: [
    'pool-1',
    'pool-2',
    'pool-3',
    'pool-4',
    'pool-5',
    'pool-6',
    'pool-7',
    'pool-8',
    'pool-9',
    'pool-10',
    'pool-11',
  ],
};
export default initialState;
