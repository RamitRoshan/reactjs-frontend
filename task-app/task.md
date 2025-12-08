# React Task Manager App – Component-Based Assignment

## Problem Statement

You are required to build a Task Management application using React. The app should allow users to create, view, update, and delete tasks.

You must break the application into multiple components and manage all task-related data using React’s useState hook (no external state management libraries).

⸻

## Version 1 – Basic Task Manager (In-Memory)

1. App Structure
Create the following components:
	1.	App component
	•	Acts as the root component.
	•	Holds the main state for the list of tasks using the useState hook.
	•	Passes data and handler functions as props to child components.
	2.	TaskForm component
	•	Contains a form to add a new task.
	•	At minimum, each task should have:
	•	id (number or string, unique)
	•	title (string)
	•	status (e.g., "pending" / "completed" or a simple boolean)
	•	On form submission, calls a function received via props to create/add a task in the parent (App) state.
	3.	TaskList component
	•	Receives the array of tasks from App via props.
	•	Displays the list of tasks.
	•	For each task, provides options/buttons to:
	•	Update (e.g., toggle status or edit title)
	•	Delete the task
	•	Calls handler functions passed from App via props to perform update and delete operations.

    Hold to update the parent component from the child component 

⸻

2. Required Operations (CRUD)
Your app must support the following operations:
	1.	Create / Add Task
	•	User fills the form in TaskForm and submits.
	•	A new task is added to the task list stored in App’s state.
	2.	Read / View Tasks
	•	TaskList displays all tasks from the state.
	3.	Update Task
	•	User can update a task (for example, change title or toggle completed/pending).
	•	The updated task should be reflected immediately in the UI.
	4.	Delete Task
	•	User can delete a task from the list.
	•	The deleted task should be removed from the state and no longer displayed.

Important: All task data for Version 1 should be stored only in React state using the useState hook. When you refresh the page, the data can be lost in this version.