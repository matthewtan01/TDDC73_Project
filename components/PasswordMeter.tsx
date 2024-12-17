import { useEffect, useState } from "react";
import { View, StyleSheet, Text } from "react-native";
import { LevelType } from "../types/LevelType";

interface PasswordMeterProps {
  password: string;
  levels: LevelType[];
}

const PasswordMeter: React.FC<PasswordMeterProps> = ({ password, levels }) => {
  const [sortedLevelArr, setSortedLevelArr] = useState<LevelType[]>([]);
  const [currentLevel, setCurrentLevel] = useState<LevelType>(
    sortedLevelArr[0]
  );

  useEffect(() => {
    const sortedLevels = [...levels].sort(
      (a, b) => a.percentage - b.percentage
    );
    setSortedLevelArr(sortedLevels);
  }, [levels]);

  useEffect(() => {
    let currentStrength: LevelType | null = sortedLevelArr[0];
    for (const level of sortedLevelArr) {
      const meetsCriteria = level.criteria.some((regex) => {
        const result = regex.test(password);
        return result;
      });
      if (meetsCriteria) {
        currentStrength = level;
      }
    }
    setCurrentLevel(currentStrength);
  }, [password]);

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Strength Level:</Text>
      <View style={styles.boxContainer}>
        <View
          style={[
            styles.meterContainer,
            {
              width: currentLevel && password ? `${currentLevel.percentage * 100}%` : "0%",
              backgroundColor: currentLevel?.color || "rgb(224, 224, 224)",
            },
          ]}
        />
      </View>
      {currentLevel && password && (
        <Text style={[styles.label, { marginTop: 4 }]}>
          {currentLevel.label}
        </Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 12,
    marginBottom: 6,
    alignItems: "center",
  },
  label: {
    marginBottom: 4,
    fontSize: 16,
    fontWeight: "bold",
  },
  boxContainer: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
    width: 150, // Width of the entire meter
    height: 20,
    backgroundColor: "rgb(224, 224, 224)",
    borderRadius: 4,
  },
  meterContainer: {
    height: "100%",
    justifyContent: "flex-start",
    borderRadius: 4,
  },
});

export default PasswordMeter;
