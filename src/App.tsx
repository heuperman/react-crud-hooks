import React from 'react';

const App: React.FC = (): JSX.Element => {
  return (
    <div className="container">
      <h1>React CRUD app with Hooks and TypeScript</h1>
      <div className="flex-row">
        <div className="flex-large">
          <h2>Add user</h2>
        </div>
        <div className="flex-large">
          <h2>View users</h2>
        </div>
      </div>
    </div>
  );
};

export default App;
