import { StyleSheet, Text, View, Switch, ActivityIndicator } from "react-native";
import React, { useState, useEffect } from "react";
import * as storage from "../lib/storage";

const Settings = () => {
  const [notifications, setNotifications] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const loadSettings = async () => {
      const savedNotifications = await storage.get<boolean>(storage.STORAGE_KEY.NOTIFICATIONS);
      if (savedNotifications !== null) setNotifications(savedNotifications);

      const savedTheme = await storage.get<boolean>(storage.STORAGE_KEY.THEME);
      if (savedTheme !== null) setDarkMode(savedTheme);

      setIsLoading(false);
    };
    loadSettings();
  }, []);

  const handleToggle = async (value: boolean) => {
    setNotifications(value);
    await storage.set(storage.STORAGE_KEY.NOTIFICATIONS, value);
  };

  const handleDarkModeToggle = async (value: boolean) => {
    setDarkMode(value);
    await storage.set(storage.STORAGE_KEY.THEME, value);
  };

  if (isLoading) {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" />
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Text style={styles.h1}>Settings</Text>

      <View style={styles.card}>
        <View>
          <Text style={styles.title}>Notifications</Text>
          <Text style={styles.subtitle}>Enable app notifications</Text>
        </View>
        <Switch value={notifications} onValueChange={handleToggle} />
      </View>

      <View style={styles.card}>
        <View>
          <Text style={styles.title}>Dark Mode</Text>
          <Text style={styles.subtitle}>Use dark theme</Text>
        </View>
        <Switch value={darkMode} onValueChange={handleDarkModeToggle} />
      </View>

      <Text style={styles.stored}>Stored: {darkMode.toString()}</Text>
    </View>
  );
};

export default Settings;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  h1: {
    fontSize: 22,
    fontWeight: "800",
    marginBottom: 12,
  },
  card: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    padding: 16,
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 8,
    marginBottom: 12,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
  },
  subtitle: {
    fontSize: 13,
    color: "#888",
    marginTop: 2,
  },
  stored: {
    textAlign: "center",
    color: "#888",
    marginTop: 4,
  },
});