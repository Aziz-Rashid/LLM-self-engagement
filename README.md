# README - LLM Self-Engagement

## Project Overview
This project is a Next.js-based chatbot conversation app where two AI chatbots interact based on an initial user prompt. The conversation continues for 10 messages before resetting.

## Setup
### 1. Create a Public GitHub Repository
- Go to GitHub and create a new public repository.
- Clone the repository:
  ```sh
  git clone <repository_url>
  cd <repository_name>
  ```

### 2. Install Dependencies
```sh
npm install
```

### 3. Environment Variables
Create a `.env` file and add at root directory:
```sh
OPENAI_API_KEY=your_api_key_here
```
Replace `your_api_key_here` with your actual API key.

### 4. Run the Application
```sh
npm run dev
```

## Features
- **Text Input Field**: Users enter an initial prompt.
- **START Button**: Enabled only when a prompt is entered.
- **Chatbot Conversation**: Two AI chatbots interact based on the initial prompt.
- **Message Limit**: The conversation stops after 10 messages.
- **Reset Functionality**: After completion, the prompt field resets and the button is re-enabled.

