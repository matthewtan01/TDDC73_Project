# Password Meter Component

## Overview
The Password Meter Component is a reusable React Native component designed to visually indicate the strength of a password based on predefined levels and criteria. The meter dynamically adjusts its display based on the password entered, showcasing the strength level through a colored progress bar and a label.

## Features

### Dynamic Strength Levels
- Configurable levels with custom criteria.
- Each level has:
  - A label
  - A colour
  - A percentage to represent strength visually.

### Customizable
- Developers can define their own password strength levels with:
  - Label
  - Criteria
  - Visuals

## Code Structure
### 1. App Component
The `App` component initializes the main layout and integrates the `InputContainer` component.

### 2. InputContainer Component
Handles user input for the password and integrates the `PasswordMeter` component to display the strength visually.

### 3. PasswordMeter Component
The reusable component that evaluates the password strength level based on the criteria set by the user.