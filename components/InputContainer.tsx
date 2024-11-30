import { TextInput, View, Text, StyleSheet, Button } from "react-native";
import { useState } from "react";
import PasswordMeter from "./PasswordMeter";
import { LevelType } from "../types/LevelType";

const InputContainer = () => {
  const [password, setPassword] = useState("");

  /**
   * Configuration for the password meter component.
   * - `levels`: Array of objects representing different strength levels.
   *    - `label`: The name of the strength level (e.g., "Weak", "Strong").
   *    - `color`: The color associated with the strength level.
   *    - `criteria`: Array of regular expressions that determine if a password meets the level's criteria.
   *    - `percentage`: The percentage of the strength meter to fill for this level.
   */

  const levels: LevelType[] = [
    {
      label: "Very Weak", // Weakest strength level
      color: "rgb(255, 102, 102)", // Red
      criteria: [/^\d+$/, /^[a-z]+$/], // Only numbers or only lowercase letters
      percentage: 0.2, // 20% filled
    },
    {
      label: "Weak", // Second level of strength
      color: "rgb(255, 178, 102)", // Orange
      criteria: [/^(?=.*[a-z])(?=.*[A-Z]).{4,}$/], // Requires mixed case and minimum length of 4
      percentage: 0.4, // 40% filled
    },
    {
      label: "Fair", // Moderate strength
      color: "rgb(255, 255, 102)", // Yellow
      criteria: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}$/], // Requires numbers, mixed case, and minimum length of 6
      percentage: 0.6, // 60% filled
    },
    {
      label: "Strong", // High strength
      color: "rgb(102, 255, 102)", // Light green
      criteria: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{8,}$/], // Requires numbers, mixed case, special character, and minimum length of 8
      percentage: 0.8, // 80% filled
    },
    {
      label: "Very Strong", // Strongest level
      color: "rgb(51, 204, 51)", // Dark green
      criteria: [/^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[@$!%*?&]).{12,}$/], // Requires numbers, mixed case, special character, and minimum length of 12
      percentage: 1.0, // 100% filled
    },
  ];

  return (
    <View style={styles.container}>
      <Text style={styles.text}>Account Registration</Text>

      {/* Email Input */}
      <TextInput style={styles.input} placeholder="Enter email" />

      {/* Password Input */}
      <TextInput
        style={styles.input}
        placeholder="Enter password"
        onChangeText={setPassword} // Updates the password state when the user types
      />

      {/* Password Strength Meter */}
      <PasswordMeter
        password={password} // Pass the entered password
        levels={levels} // Pass the defined strength levels
      />

      {/* Submit Button */}
      <View style={styles.button}>
        <Button title="submit" color="#007AFF" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: "center", // Vertically center the content
    alignItems: "center", // Horizontally center the content
  },
  text: {
    fontWeight: "bold", // Make the text bold
    textAlign: "center", // Center-align the text
    fontSize: 20, // Larger font size for emphasis
  },
  input: {
    height: 40, // Height of the input field
    borderColor: "gray", // Gray border color
    borderWidth: 1, // Border thickness
    borderRadius: 5, // Rounded corners
    paddingHorizontal: 10, // Padding inside the input field
    marginTop: 10, // Space between input fields
    width: 300, // Width of the input field
  },
  button: {
    marginTop: 0, // No margin above the button
  },
});

export default InputContainer;
