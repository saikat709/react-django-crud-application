# Django & React CRUD Application

This is a full-stack web application using Django for the backend and React with Vite for the frontend, structured in separate folders.

## Project Structure
```
.
├── backend/  # Django backend
│   ├── manage.py
│   ├── janata_wifi_test/  # Django app
│   ├── env/  # Virtual environment
|   └── requiremets.txt
│
├── frontend/  # React frontend with Vite
│   ├── public/
│   ├── src/
│   └── package.json
│
└── README.md
```

---

## Prerequisites
Ensure you have the following installed:
- Python (3.x)
- Node.js (16+)
- pip
- Virtualenv

---

## Backend Setup (Django)

### Step 1: Navigate to the `backend` folder
```bash
cd backend
```

### Step 2: Create a virtual environment
```bash
python -m venv venv
```

### Step 3: Activate the virtual environment
- **Linux/Mac:**
```bash
source venv/bin/activate
```
- **Windows:**
```bash
venv\Scripts\activate
```

### Step 4: Install dependencies
```bash
pip install -r requiremnets.txt
```

### Step 5: Run database migrations
```bash
python manage.py migrate
```

### Step 6: Run the development server
```bash
python manage.py runserver
```
The backend server will start at: `http://127.0.0.1:8000/`

---

## Frontend Setup (React + Vite)

### Step 1: Navigate to the `frontend` folder
```bash
cd ../frontend
```

### Step 2: Install Node.js dependencies
```bash
npm install
```

### Step 3: Run the frontend development server
```bash
npm run dev
```
The frontend server will start at: `http://localhost:5173/`

---

## Running the Full Project

1. **Start the Django server:**
    ```bash
    cd backend
    source venv/bin/activate
    python manage.py runserver
    ```
2. **Start the React server:**
    ```bash
    cd ../frontend
    npm run dev
    ```

- The backend will be available at `http://127.0.0.1:8000/`
- The frontend will be available at `http://localhost:5173/`
- In final commit: frontend will be available with backend `http://localhost:5173/`

---

## API Integration
- Ensure you haved created the .env file in frontend folder.
- It must contain `VITE_API_URL` 
---

## Environment Variables
- Create a `.env` file in the `frontend` folders.
- **Frontend (`frontend/.env`):**
    ```plaintext
    VITE_API_URL=http://127.0.0.1:8000
    ```

---

## Technologies Used
- **Backend:** Django, Django REST Framework
- **Frontend:** React, Vite
- **Deployment:** PythonAnywhere


## JsonModel
![jsonModel](https://github.com/saikat709/react-django-crud-application/blob/main/images_for_github/jsonModel.png?raw=true)
In this step i fetched the data from the json File from. 

## SqlModel
![sqlModelTable](https://github.com/saikat709/react-django-crud-application/blob/main/images_for_github/sqlModelTable.png?raw=true)
![sqlModelEdit](https://github.com/saikat709/react-django-crud-application/blob/main/images_for_github/sqlModelEdit.png?raw=true)
![sqlModelGraph](https://github.com/saikat709/react-django-crud-application/blob/main/images_for_github/sqlModel.Graph?raw=true)

## Migrating from JSONModel to SQLModel
- I have created a custom command that read the json file and saved the content in sql model.
- The command is `python manage.py json_to_sql`
