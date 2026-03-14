import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Button,
} from 'react-native';

import ToDoList from './ToDoList';
import ToDoForm from './ToDoForm';

export default function App() {
  const router = useRouter();
  const [tasks, setTasks] = useState([
    'Do laundry',
    'Go to gym',
    'Walk dog'
  ]);

  return (
    <SafeAreaView style={styles.container}>
      <Button title="Settings" onPress={() => router.push('/settings')} />
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