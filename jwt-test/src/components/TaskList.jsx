import { useEffect, useState } from 'react';
import axios from 'axios';
import Cookies from 'js-cookie';
import { useAuth } from '../context/AuthProvider';

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const { user } = useAuth();

  useEffect(() => {
    const fetchTasks = async () => {
      const token = Cookies.get('token');
      // eslint-disable-next-line no-undef
      const response = await axios.get(`${process.env.REACT_APP_API_URL}/api/tasks`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setTasks(response.data);
    };

    if (user) {
      fetchTasks();
    }
  }, [user]);

  if (!user) {
    return <div>Please sign in to view tasks.</div>;
  }

  return (
    <div>
      <h1>Tasks</h1>
      <ul>
        {tasks.map(task => (
          <li key={task._id}>{task.title}</li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
