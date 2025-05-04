# Anime GIF Generator

This is a simple web app that fetches and displays a random SFW (Safe For Work) anime-style GIF using the [waifu.pics](https://waifu.pics) API.

## Features

- Click a button to get a surprise GIF.
- Randomly selects from genres like:
  - `kick`
  - `happy`
  - `wink`
  - `poke`
  - `dance`
  - `cringe`

## Usage

1. Open the HTML file in a web browser.
2. Click the **"Surprise Me"** button.
3. A random waifu-themed GIF will appear.

## Code Overview

- `document.querySelector("#suprise-me")`: Button that triggers the action.
- `genres`: Array of GIF categories.
- `fetch(url)`: Gets a GIF from the waifu.pics API.
- The resulting image is displayed in the element with ID `imgResult`.

## Dependencies

- No external libraries needed. Only a modern web browser is required.

## Example API Call

