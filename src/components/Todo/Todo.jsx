// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState, useContext } from 'react';
import { Pagination } from '@mantine/core';
import useForm from '../../hooks/form';

import { v4 as uuid } from 'uuid';

import { SettingsContext } from '../../context/Settings';

import Header from '../Header';
import Form from '../Form';

const Todo = () => {

  const context = useContext(SettingsContext);
  const defaultValues = context.settings;

  const [list, setList] = useState([]);
  const [incomplete, setIncomplete] = useState([]);
  const [currentPage, setCurrentPage] = useState(1);
  const { handleChange, handleSubmit } = useForm(addItem, defaultValues);

  function addItem(item) {
    item.id = uuid();
    item.complete = false;
    console.log(item);
    setList([...list, item]);
  }

  useEffect(() => {

    let filteredList = list.filter(item => {
      return defaultValues.showCompleted ? true : item.complete === false;
    });


    // let's assume this was intentional, displaying the list
    setIncomplete(filteredList.length);

    document.title = `To Do List: ${filteredList.length}`;

  }, [list, currentPage, defaultValues]);

  let numPages = Math.ceil(incomplete / defaultValues.perPage);

  return (
    <>

      <Header openItems={incomplete} />

      <Form handleChange={handleChange} handleSubmit={handleSubmit} difficulty={defaultValues.difficulty} />

      {/* Removed List component */}

      <Pagination total={numPages} onChange={setCurrentPage} size="lg" radius="lg" withEdges />

    </>
  );
};

export default Todo;
