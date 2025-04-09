import React, { useState, useEffect } from 'react';
import { db, auth } from './firebase';
import { collection, getDocs, updateDoc, doc } from 'firebase/firestore';

function Dashboard() {
  const [applications, setApplications] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      const appsSnapshot = await getDocs(collection(db, "applications"));
      const usersSnapshot = await getDocs(collection(db, "users"));
      
      setApplications(appsSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      setUsers(usersSnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
      
      setLoading(false);
    };

    fetchData();
  }, []);

  const handleApplicationAction = async (id, action) => {
    const appRef = doc(db, "applications", id);
    await updateDoc(appRef, { status: action });
    setApplications(prevApps => prevApps.filter(app => app.id !== id));
  };

  const handleUserAction = async (id, action) => {
    const userRef = doc(db, "users", id);
    if (action === "ban") {
      await updateDoc(userRef, { banned: true });
    } else if (action === "unban") {
      await updateDoc(userRef, { banned: false });
    }
    setUsers(prevUsers => prevUsers.filter(user => user.id !== id));
  };

  return (
    <div className="dashboard-container">
      <h2>Админ панель</h2>

      {loading ? (
        <p>Загрузка...</p>
      ) : (
        <>
          <h3>Заявки</h3>
          <ul>
            {applications.map(app => (
              <li key={app.id}>
                {app.nickname} - {app.status}
                <button onClick={() => handleApplicationAction(app.id, 'accepted')}>Принять</button>
                <button onClick={() => handleApplicationAction(app.id, 'rejected')}>Отклонить</button>
              </li>
            ))}
          </ul>

          <h3>Пользователи</h3>
          <ul>
            {users.map(user => (
              <li key={user.id}>
                {user.nickname} - {user.banned ? 'Забанен' : 'Активен'}
                <button onClick={() => handleUserAction(user.id, user.banned ? 'unban' : 'ban')}>
                  {user.banned ? 'Разбанить' : 'Забанить'}
                </button>
              </li>
            ))}
          </ul>
        </>
      )}
    </div>
  );
}

export default Dashboard;
