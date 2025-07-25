# Square Creator

My attempt to solve [Wizardworks programming task](https://github.com/Wizardworks-AB/programmeringsuppgift/blob/master/Wizardworks%20-%20programmeringsuppgift.pdf)

---

## Table of Contents

- [Task](#task)
  - [Summary](#summary)
  - [Requirements](#requirements)
- [My Approach](#my-approach)
  - [Tech Stack](#tech-stack)
  - [Workflow](#workflow)
  - [Challenges](#challenges)
- [How to run the project](#how-to-run-the-project)
- [API Documentation](#api-documentation)
  - [Base URLs](#base-urls)
  - [Endpoints](#endpoints)
    - [/api/square](#apisquare)
      - [GET](#method-get)
      - [POST](#method-post)

---

## Task

### Summary

The task was to create a webpage (using [React.js](https://react.dev/)) where users can create potentially endless number of squares which are stored on a JSON disk via the API (using [C#](https://dotnet.microsoft.com/en-us/languages/csharp)/[.NET](https://learn.microsoft.com/en-us/dotnet/).

Each square must:

- Have a random color, with the **constraint** that it cannot be the same color as the previous square.
- Be positioned correctly to contribute to building a square-like pattern e.g. 1x1, 2x2. The required pattern is shown in the image below.

![square pattern example](https://github.com/user-attachments/assets/5412125b-8e5d-4513-b10f-9cba7c75de8a)

### Requirements

- Front-end must be developed with [React.js](https://react.dev/).
- Back-end must be developed with [C#](https://dotnet.microsoft.com/en-us/languages/csharp)/[.NET](https://learn.microsoft.com/en-us/dotnet/).
- Each square's properties (position and color) must be saved via the [.NET](https://learn.microsoft.com/en-us/dotnet/) API to the server's JSON disk.

---

## My Approach

### Tech Stack

[![TypeScript](https://img.shields.io/badge/TypeScript-3178C6?style=for-the-badge&logo=typescript&logoColor=white)](https://www.typescriptlang.org/)
[![React](https://img.shields.io/badge/React-20232A?style=for-the-badge&logo=react&logoColor=61DAFB)](https://react.dev)
[![CSS3](https://img.shields.io/badge/CSS3-1572B6?style=for-the-badge&logo=css3&logoColor=white)](https://developer.mozilla.org/en-US/docs/Web/CSS)
[![CSS Modules](https://img.shields.io/badge/CSS%20Modules-2D2D2D?style=for-the-badge&logo=css3&logoColor=white)](https://github.com/css-modules/css-modules)
[![C#](https://img.shields.io/badge/C%23-239120?style=for-the-badge&logo=c-sharp&logoColor=white)](https://learn.microsoft.com/en-us/dotnet/csharp/)
[![.NET](https://img.shields.io/badge/.NET-512BD4?style=for-the-badge&logo=dotnet&logoColor=white)](https://dotnet.microsoft.com/)
[![SignalR](https://img.shields.io/badge/SignalR-5C2D91?style=for-the-badge&logo=signalr&logoColor=white)](https://learn.microsoft.com/en-us/aspnet/core/signalr/)
[![Azure](https://img.shields.io/badge/Azure-0078D4?style=for-the-badge&logo=microsoft-azure&logoColor=white)](https://azure.microsoft.com/)

### Workflow

I broke down the task requirements into smaller tasks/features and documented possible solutions. Once I had a solid plan and understanding of what was needed, I estimated the time for each separated task.

Through development I prioritized core functionality and more complex task in a structured workflow using multiple branches separated by specific tasks.

### Challenges

- **CI/CD pipeline to Azure:** Even though it was not a requirement, I chose to deploy my project using the opportunity to learn how to create a basic pipeline to Azure. Both the Front-end and Back-end are deployed via Github actions configured to automatically deploy changes on the `main` branch.

- **Multiple client connections:** Since the data (squares) are stored in a JSON disk on the server, I had to handle scenarios where multiple clients are trying to access the file simultaneously. To solve this, I created a queueing system using SignalR (for both the front-end and back-end) to ensure that only one client has access to the file at a time.

## How to run the project 
* **Note: You need to have .NET installed on your machine to run the API.** 
* Microsofts official installation tutorial: https://learn.microsoft.com/en-us/dotnet/core/install/.

1. Clone repository:

```bash
git clone https://github.com/MReichenauer/square-creator.git
```

2. Enter the `api` folder:

```bash
cd square-creator/server/api
```

3. Start the API:

```bash
dotnet run
```

4. You should now see `Now listening on: http://localhost:5000`, this confirms that the API is running locally.
5. Open a new terminal and navigate to `client` folder:

```bash
cd square-creator/client
```

6. Install the necessary dependencies:

```bash
npm i
```

7. In the `client` folder, copy the `.env.example` file into a new `.env` file.
8. Make sure you are in the `client` folder and start the client locally:

```bash
npm run dev
```

9. You should now see `Local: http://localhost:5173/`, this confirms that the client is running locally.

## API Documentation

### Base URLs

- **Default URL:** `http://localhost:5000`
- **API base URL:** `http://localhost:5000/api`
- **Scalar API documentation:** `http://localhost:5000/scalar`

### Endpoints

- #### `/api/square`

  **Available methods** : `GET`, `POST`

  - #### Method: `GET`

    - **Request header:** None
    - **Request body:** None
    - **Response status:** `200 OK`
    - **Response body:**

      ```json
      [
      	{
      		"id": 1,
      		"x": 0,
      		"y": 0,
      		"color": "#e60f59"
      	},
      	{
      		"id": 2,
      		"x": 1,
      		"y": 0,
      		"color": "#e2d9f7"
      	}
      ]
      ```

  - #### Method: `POST`

    - **Request header:** None
    - **Request body:**
      ```json
      {
      	"x": 1,
      	"y": 0,
      	"color": "#e2d9f7"
      }
      ```
    - **Response status:** `201 CREATED`
    - **Response body:**

          ```json
              {
                "id": 2,
                "x": 1,
                "y": 0,
                "color": "#e2d9f7"
              }

      ```
      **Example of a invalid request with response**
      ```

  - **Request body:**
    ```json
    {
    	"x": null,
    	"y": null,
    	"color": "F1F1F1"
    }
    ```
  - **Response status:** `400 Bad Request`
  - **Response body:**
    ```json
    {
    	"type": "https://tools.ietf.org/html/rfc9110#section-15.5.1",
    	"title": "One or more validation errors occurred.",
    	"status": 400,
    	"errors": {
    		"x": ["X is required and must be an integer."],
    		"y": ["Y is required and must be an integer."],
    		"color": ["Color must be a valid hex code."]
    	},
    	"traceId": "00-c75853cd590f0c6c75bdeda12430d676-c9cda864833bb172-00"
    }
    ```
