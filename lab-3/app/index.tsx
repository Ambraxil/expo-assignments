import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <ToDoList tasks={tasks} />
      <ToDoForm />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
