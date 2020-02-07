import React, { Fragment } from 'react';
import Card from './Card';

const CardList = ({ robots }) => {
  if (true) {
    throw new Error('NOOOOO');
  }
  return (
    <Fragment>
      {robots.map(robot => {
        return (
          <Card
            key={robot.id}
            id={robot.id}
            name={robot.name}
            username={robot.username}
            email={robot.email}
          />
        );
      })}
    </Fragment>
  );
};

export default CardList;
