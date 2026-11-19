# Simple LLM Chatbot

An AI-powered conversational chatbot built using Python and Flask, integrated with a locally running Large Language Model (LLM) to generate natural-language responses.

## 🚀 Features

- Interactive chatbot interface.
- Real-time conversational responses.
- Integration with a locally hosted LLM using Ollama.
- Flask-based backend for handling chat requests.
- Simple and user-friendly web interface.
- Runs locally without requiring a cloud-based LLM API.

## 🛠️ Technologies Used

- **Programming Language:** Python
- **Backend:** Flask
- **Frontend:** HTML, CSS, JavaScript
- **LLM Runtime:** Ollama
- **Language Model:** Llama 3.2 (1B)

## 📁 Project Structure

```text
Simple-LLM-Chatbot/
│
├── static/
│   ├── style.css
│   └── script.js
│
├── templates/
│   └── index.html
│
├── app.py
├── chatbot.py
├── requirements.txt
├── start.bat
└── README.md
```

## ⚙️ Installation and Setup

### 1. Clone the repository

```bash
git clone https://github.com/akshayakairi/Simple-LLM-Chatbot.git
```

### 2. Navigate to the project directory

```bash
cd Simple-LLM-Chatbot
```

### 3. Create a virtual environment

```bash
python -m venv venv
```

### 4. Activate the virtual environment

```bash
venv\Scripts\activate
```

### 5. Install dependencies

```bash
pip install -r requirements.txt
```

### 6. Install and run Ollama

Download Ollama from https://ollama.com/ and install it.

Pull the required model:

```bash
ollama pull llama3.2:1b
```

### 7. Run the application

```bash
python app.py
```

Open your browser and visit:

```text
http://127.0.0.1:5000
```

## 🎯 Project Objective

The objective of this project is to build a simple conversational AI application by integrating a locally hosted Large Language Model with a Python-based web application.

## 🔮 Future Enhancements

- Conversation history management.
- Improved chatbot interface.
- Context-aware conversations.
- Additional LLM integration options.

## 👩‍💻 Author

**Akshaya Kairi**

GitHub: https://github.com/akshayakairi
