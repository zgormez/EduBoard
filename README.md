### 🛠️ Tech Stack

![Java](https://img.shields.io/badge/Java-ED8B00?style=for-the-badge&logo=java&logoColor=white)
![Spring Boot](https://img.shields.io/badge/Spring_Boot-6DB33F?style=for-the-badge&logo=spring&logoColor=white)
![React](https://img.shields.io/badge/React-61DAFB?style=for-the-badge&logo=react&logoColor=black)
![PostgreSQL](https://img.shields.io/badge/PostgreSQL-336791?style=for-the-badge&logo=postgresql&logoColor=white)
![JWT](https://img.shields.io/badge/JWT-000000?style=for-the-badge&logo=JSON-web-tokens&logoColor=white)
![Docker](https://img.shields.io/badge/Docker-2496ED?style=for-the-badge&logo=docker&logoColor=white)

# EduBoard – Trello-Style Project Management App

## 📖 Overview
EduBoard is a **Trello-like project management application** developed as an **educational project with students**.  
It allows users to create projects, boards, and tasks, and manage them with a **Kanban workflow**.

---

### 🎯 Features
- User authentication (sign up, login, logout)
- Project creation and management
- Boards with customizable columns (default: To Do / In Progress / Done)
- Task management (create, update, delete)
- Drag & Drop tasks between columns
- Assign users to tasks
- Deadlines and labels

---

### 🛠️ Tech Stack
- **Frontend:** React (with drag & drop library, e.g. react-beautiful-dnd)
- **Backend:** Spring Boot (Java)
- **Database:** PostgreSQL (via JPA/Hibernate)
- **Auth:** JWT (JSON Web Tokens)
- **Deployment (optional):** Docker + Heroku/Render/Railway

---
## Project Management (Scrum)

### Scrum methodology:
- **Product Backlog** → GitHub Issues
- **Sprint Planning** → GitHub Milestones
- **Task Board** → GitHub Projects (Kanban)
- **Daily Stand-up** → Check In Progress column 
- **Sprint Review & Retrospective** → GitHub Discussions

### 📂 Project Structure
- `backend/` : Spring Boot backend
- `frontend/` : React frontend
- `docs/` : Documentation
    - `Business_Backlog.md` : High-level user stories and priorities
    - `Technical_Notes.md` : Technical specifications, API design, DB schema
- `.gitignore` : Ignore build files and node_modules
- `README.md` : This file
- `LICENSE` : Project license


## 🚀 Getting Started

### 1. Clone the Repository
```bash
git clone https://github.com/<your-username>/EduBoard.git
cd EduBoard
