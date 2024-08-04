import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Task from './Task';

const ListTask = () => {
  const [filter, setFilter] = useState('all');
  const tasks = useSelector(state => state.tasks.tasks);

  const filteredTasks = tasks.filter(task => {
    if (filter === 'all') return true;
    return filter === 'done' ? task.isDone : !task.isDone;
  });

  return (
    <div>
      <button onClick={() => setFilter('all')}>All</button>
      <button onClick={() => setFilter('done')}>Done</button>
      <button onClick={() => setFilter('notDone')}>Not Done</button>
      {filteredTasks.map(task => (
        <Task key={task.id} task={task} />
      ))}
    </div>
  );
};

export default ListTask;