export interface LevelType {
  label: string; // Very Strong, Strong, Weak, etc.
  color: string; // The color associated with this level.
  criteria: RegExp[]; // Array of regex criteria for this level.
  percentage: number; // Percentage of the box filled for this level.
}
