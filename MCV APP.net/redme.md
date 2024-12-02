# MVC Counter App

This is a simple implementation of the **Model-View-Controller (MVC)** design pattern for a counter application using **HTML**, **CSS**, and **JavaScript**.

## Table of Contents
1. [Introduction](#introduction)
2. [Features](#features)
3. [How it Works](#how-it-works)
4. [MVC Structure](#mvc-structure)
5. [Setup and Usage](#setup-and-usage)
6. [License](#license)

## Introduction

The **MVC Counter App** demonstrates the **MVC design pattern** by creating a simple counter application where users can increment and reset the counter value. This app is designed to show the separation of concerns between the **Model**, **View**, and **Controller**.

- **Model**: Manages the data (counter value).
- **View**: Displays the data (counter value) and interacts with the user.
- **Controller**: Coordinates user interaction and updates both the **Model** and **View**.

## Features

- **Increment**: Increases the counter value by 1 when the **Increment** button is clicked.
- **Reset**: Resets the counter to 0 when the **Reset** button is clicked.
- **Responsive UI**: The app has a clean, centered design that works well on various screen sizes.

## How it Works

1. **User Interaction**:
   - When the user clicks the **Increment** button, the controller updates the **Model** by incrementing the counter.
   - When the user clicks the **Reset** button, the controller resets the **Model** counter to zero.
   - The **View** is updated each time the **Model** changes, ensuring that the displayed count is always current.

2. **MVC Flow**:
   - **Model**: Holds the application data (in this case, the `count`) and updates it based on user input.
   - **View**: Displays the data and allows users to interact with it (via buttons).
   - **Controller**: Handles user input, updates the **Model**, and refreshes the **View** to reflect changes.

## MVC Structure

The app follows the **MVC (Model-View-Controller)** pattern. Below is a description of each part:

### Model (Data Layer)
The **Model** class manages the data, in this case, the `count` value. It has methods to increment, reset, and get the current count.

### View (UI Layer)
The **View** class is responsible for rendering the UI and displaying the data. It creates HTML elements for the counter and buttons and updates the displayed count dynamically. It also provides methods to bind actions (like increment and reset) to buttons, so when clicked, the corresponding controller method is triggered.

### Controller (Logic Layer)
The **Controller** connects the **Model** and **View**. It listens for events (like button clicks), updates the **Model** accordingly, and updates the **View** to reflect the changes in the **Model**.

## Setup and Usage

To run this app locally:

1. **Clone the repository**:
   ```bash
   git clone https://github.com/yourusername/mvc-counter-app.git
