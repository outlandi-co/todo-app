// eslint-disable-next-line no-unused-vars
import React from 'react';
import PropTypes from 'prop-types';
import { Card, Text } from '@mantine/core'; // Import Card and Text from Mantine

function List(props) {
  return (
    <>
      {
        props.list.map(item => (
          <Card
            shadow="lg"
            padding="xl"
            withBorder
            key={item.id}
          >
            <Text fw={500} size="lg" mt="md">
              <p>{item.text}</p>
              <p><small>Assigned to: {item.assignee}</small></p>
              <p><small>Difficulty: {item.difficulty}</small></p>
            </Text>
            <Text mt="xs" c="dimmed" size="sm">
              <div onClick={() => props.toggleComplete(item.id)}>Complete: {item.complete.toString()}</div>
            </Text>
          </Card>
        ))
      }
    </>
  );
}

List.propTypes = {
  list: PropTypes.arrayOf(PropTypes.object).isRequired,
  toggleComplete: PropTypes.func.isRequired,
};

export default List;
