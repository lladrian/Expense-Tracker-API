# CLI Expense Tracker

An API for an expense tracker application. This API should allow users to create, read, update, and delete expenses. 
Users should be able to sign up and log in to the application. Each user should have their own set of expenses.


## Features

Here are the features that you should implement in your Expense Tracker API:

- Sign up as a new user.
- Generate and validate JWTs for handling authentication and user session.
- List and filter your past expenses. You can add the following filters:
  - Past week
  - Past month
  - Last 3 months
- Custom (to specify a start and end date of your choosing).
- Add a new expense
- Remove existing expenses
- Update existing expenses

## Tech Stack
  - Node.js with Express.js

## What I installed to this app

1. npm install express mongoose redis express-rate-limit dotenv nodemon
2. npm install moment-timezone bcrypt express-async-handler jsonwebtoken dayjs


## Installation

1. Make sure you have [Node.js](https://nodejs.org) installed.

2. Clone or download this project.

3. First you need to install using **`npm i`** in terminal.

4. To run use this command : **`npm start`**
    - Usage:  `http://localhost:4000/posts/add_post`
      - Search via Web: 

          ## USER
          - **POST** - **`http://localhost:4000/users/add_user`** to add new user.
          - **POST** - **`http://localhost:4000/users/login_user`** to login the user.
          - **PUT** - **`http://localhost:4000/users/update_user/:id`** to update the user.
          - **PUT** - **`http://localhost:4000/users/update_user_password/:id`**  to update the user password.
          - **GET** - **`http://localhost:4000/users/get_all_user`** to get all users.
          - **GET** - **`http://localhost:4000/users/get_specific_user/:id`** to get the specific user.
          - **DELETE** - **`http://localhost:4000/users/delete_user/:id`** to delete the user.
          - **POST** - **`http://localhost:4000/users/token/`** to get the untokenized data from the user.

          ## EXPENSE TRACKER
          - **GET** - **`http://localhost:4000/posts/get_specific_post/:id`** to get specific post.
          - **GET** - **`http://localhost:4000/posts/get_all_post`** to get all posts.
          - **GET** - **`http://localhost:4000/todos/get_all_todo_list?page=1`** to get todo lists via filter with query page.
          - **GET** - **`http://localhost:4000/todos/get_all_todo_list?limit=1`** to get todo lists via filter with query limit.
          - **GET** - **`http://localhost:4000/todos/get_all_todo_list?sortBy=created_at`** to get todo lists via filter with query sortBy.
          - **GET** - **`http://localhost:4000/todos/get_all_todo_list?order=desc`** to get todo lists via filter with query order.
          - **GET** - **`http://localhost:4000/todos/get_all_todo_list?order=asc`** to get todo lists via filter with query order.
          - **GET** - **`http://localhost:4000/todos/get_all_todo_list?date_range=week`** to get todo lists via filter with query date_range(past week).
          - **GET** - **`http://localhost:4000/todos/get_all_todo_list?date_range=month`** to get todo lists via filter with query date_range(past month).
          - **GET** - **`http://localhost:4000/todos/get_all_todo_list?date_range=3months`** to get todo lists via filter with query date_range(past 3months).
          - **GET** - **`http://localhost:4000/todos/get_all_todo_list?date_range=custom&start_date=2025-05-01&end_date=2025-05-11`** to get todo lists via filter with query date_rate custom date.
          - **POST** - **`http://localhost:4000/posts/add_post`** to add new post.
          - **PUT** - **`http://localhost:4000/posts/update_post/:id/`** to update the post.
          - **DELETE** - **`http://localhost:4000/posts/delete_post/:id`** to delete the post.

5. https://roadmap.sh/projects/expense-tracker-api

