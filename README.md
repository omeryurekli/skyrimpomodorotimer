# Skyrim Pomodoro Timer

Welcome to the Skyrim Pomodoro Timer! This project is a customizable Pomodoro timer inspired by the aesthetic of Skyrim, designed to help you manage your study and break periods effectively. 

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Customization](#customization)

## Features

- **Timer Functionality**: Start, pause, and reset the timer.
- **Customizable Durations**: Set custom work and break durations.
- **Medieval Aesthetic**: The design is inspired by Skyrim with a medieval theme.
- **Spotify Integration**: Embedded Spotify playlist for background music.

## Installation

1. Clone the repository to your local machine using:
    ```bash
    git clone https://github.com/your-username/skyrim-pomodoro-timer.git
    ```
2. Navigate to the project directory:
    ```bash
    cd skyrim-pomodoro-timer
    ```
3. Open `index.html` in your favorite web browser.

## Usage

1. Open `index.html` in a web browser.
2. Use the `Start` button to begin the timer.
3. Use the `Pause` button to pause the timer.
4. Use the `Reset` button to reset the timer to the default or custom durations.
5. Click the settings icon to open the settings modal and customize the work and break durations.

## Customization

You can customize the timer settings and the design by editing the following files:

- **HTML**: `index.html`
- **JavaScript**: `script.js`
- **CSS**: `style.css`

### Editing Timer Durations

You can set custom work and break durations directly in the settings modal by entering the desired values and clicking save.

### Changing the Design

To change the design elements, you can modify the `style.css` file. The color scheme and fonts are defined using CSS variables for easy customization.

```css
:root {
    --color-primary: #4A5E5D; /* Background color */
    --color-secondary: #D4C19C; /* Secondary elements color */
    --color-font: #E6E2D6; /* Font color */
    --color-highlight: #9AA7A6; /* Highlight color */
    --color-shadow: #3A4B4A; /* Shadow color */
}
