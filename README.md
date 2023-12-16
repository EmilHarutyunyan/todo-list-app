# Todo List Application

A frontend-only Todo List application developed using React, Redux Toolkit, and TypeScript. This application allows users to efficiently manage their tasks, providing features such as task addition, editing, deletion, and status management.

## Table of Contents

- [Features](#features)
- [User Interactions](#user-interactions)
- [User Interface](#user-interface)
- [Technical Specifications](#technical-specifications)
  - [Frameworks and Libraries](#frameworks-and-libraries)
  - [Form Handling](#form-handling)
  - [Language](#language)
  - [Responsive Design](#responsive-design)
- [Getting Started](#getting-started)
  - [Installation](#installation)
  - [Usage](#usage)
- [Contributing](#contributing)
- [License](#license)

## Features

### Task Addition

- Users can add new tasks (todos).
- Each task requires a title (mandatory text input), a description (optional text input), and a deadline (optional date input).

### Task Editing

- Users can edit the details of existing tasks (title, description, deadline).

### Task Deletion

- Users can remove tasks.
- Removed tasks move to a 'Trash' section where they can be viewed.

### Task Status Management

- Each task can be in one of three states:
  - Pending: Default state when a task is created.
  - Completed: Set by the user using a "Mark as Complete" action.
  - Overdue: Automatically set when the task's deadline has passed. Overdue tasks cannot be marked as completed.
  - Removed: Set when the user commits deletion.

## User Interface

- The application has an intuitive and responsive user interface.
- Material Design is implemented for UI components.

## Technical Specifications

### Frameworks and Libraries

- React is used for building the user interface.
- State management is handled using Redux with Redux Toolkit (RTK).

### Form Handling

- Forms are implemented using react-hook-form for efficient form state management.
- Form validation is done using Yup.

### Language

- The application is written in TypeScript.

### Responsive Design

- The application is responsive and works well on both desktop and mobile devices.

## Getting Started

### Installation

```bash
# Clone the repository
git clone https://github.com/EmilHarutyunyan/todo-list-app.git

# Change directory
cd todo-list-app

# Install dependencies
npm install
