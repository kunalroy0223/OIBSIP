
---

# Flask Login & Registration System

A simple web application built with **Flask** and **SQLite** that allows users to register, log in, and access a secure dashboard. The application includes password handling, show/hide password functionality, and a logout feature.

---

## Features

* **User Registration**: Create an account with a unique username and password.
* **User Login**: Access a secure dashboard after authentication.
* **Secure Dashboard**: Only accessible after login.
* **Logout**: Safely log out from the dashboard.
* **Show/Hide Password**: Toggle password visibility using an eye icon.
* **Responsive & Professional UI**: Dark theme with modern design, icons, and smooth animations.
* **SQLite Database**: Stores user credentials.

---

## Technologies Used

* **Backend**: Python 3, Flask
* **Database**: SQLite
* **Frontend**: HTML (base.html + templates), CSS (style.css), Bootstrap Icons, Font Awesome
* **JavaScript**: For interactivity and password toggle

---

## Project Structure

```
Level3/Task1/
│
├─ app.py                  # Main Flask application
├─ README.md               # Project documentation
├─ instance/               # Flask instance folder
│   └─ users.db            # SQLite database
├─ templates/              # HTML templates
│   ├─ base.html           # Base layout template
│   ├─ login.html
│   ├─ register.html
│   └─ dashboard.html
└─ static/                 # Static files
    └─ style.css           # Styles for forms and dashboard
```

---

## Setup Instructions

1. **Clone the repository**

```bash
git clone <repository-url>
cd Level3/Task1
```

2. **Install dependencies**
   Ensure Python 3 and Flask are installed:

```bash
pip3 install flask
```

3. **Initialize the database**
   Open SQLite shell and create the `users` table if it doesn’t exist:

```bash
sqlite3 instance/users.db

-- Inside SQLite shell:
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    username TEXT UNIQUE NOT NULL,
    password TEXT NOT NULL
);
.exit
```

4. **Run the Flask application**

```bash
python3 app.py
```

5. **Open in browser**
   Navigate to: [http://127.0.0.1:5000](http://127.0.0.1:5000)

---

## Usage

1. **Register** a new user via `register.html`.
2. After registration, you are **automatically redirected** to the dashboard.
3. **Login** with registered credentials via `login.html`.
4. Access the **dashboard** with a welcome message and logout button.
5. Click **Logout** to safely end the session.

---

## Notes

* Passwords are stored in **plain text** for simplicity. For production, use hashing (`werkzeug.security` or `bcrypt`).
* The UI uses **dark theme** with **icons** and subtle animations.
* This project is **for learning purposes** and is not production-ready without additional security measures.

---

## License

Open-source, free to use.

---

