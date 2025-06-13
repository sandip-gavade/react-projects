import React from 'react';
import Greeting from './Greeting';

function ParentComponent() {
  const greetUser = () => {
    alert('Hi there! 👋');
  };

  return (
    <div>
      <h2>Props Demo</h2>
      <Greeting
        name="Sandip"
        age={38}
        isMember={true}
        hobbies={['Coding', 'Reading', 'Music']}
        user={{ name: 'Sandip Gavade', email: 'sandip@example.com' }}
        greet={greetUser}
      >
        <p>This is a child prop (like inner content).</p>
      </Greeting>
    </div>
  );
}

export default ParentComponent;
