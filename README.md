# Resume Chatbot 

<img width="1512" alt="home page" src="https://github.com/user-attachments/assets/0e65280c-bb80-4980-a21c-2c80afe23535">

## Overview

Pranam's ResumeBuddy is an intelligent chatbot designed to assist users in navigating and querying Pranam's resume. Built with modern web technologies and natural language processing capabilities, this chatbot aims to streamline the job application process by providing instant, context-aware responses to resume-related queries.

## Features

- **Natural Language Understanding**: Leverages OpenAI's GPT for understanding and responding to user queries.
- **Document Embeddings**: Utilizes vector embeddings for efficient document retrieval.
- **Dynamic Conversation Handling**: Maintains and uses conversation history for context-aware responses.
- **Scalable Architecture**: Built with Express.js and Supabase, ensuring scalability and performance.
- **User-Friendly Interface**: Simple and intuitive UI for seamless interaction.

## Technologies Used

- **Frontend**: HTML, CSS, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: Supabase
- **AI/ML**: OpenAI GPT, LangChain
- **PDF Parsing**: pdf-parse
- **Environment Management**: dotenv
- **Build Tools**: Vite

## Installation

1. Clone the repository:
    ```bash
    git clone https://github.com/yourusername/resumebuddy.git
    ```
2. Navigate to the project directory:
    ```bash
    cd resumebuddy
    ```
3. Install the dependencies:
    ```bash
    npm install
    ```
4. Set up environment variables:
    Create a `.env` file in the root directory and add your API keys and other environment variables:
    ```plaintext
    OPENAI_API_KEY=your_openai_api_key
    SUPABASE_API_KEY=your_supabase_api_key
    SUPABASE_URL_LC_CHATBOT=your_supabase_url
    PORT=3000
    ```

## Usage

1. Start the server:
    ```bash
    npm start
    ```
2. Open your browser and navigate to `http://localhost:3000` to interact with ResumeBuddy.

## Project Structure

- `index.html`: The main HTML file that serves the chatbot UI.
- `server.js`: The main server file that handles API requests and interactions with the AI model.
- `package.json`: Contains project metadata and dependencies.
- `txt_embed.js`: Script for embedding text documents into the vector store.
- `combineDocuments.js`: Utility to combine multiple documents into a single text.
- `formatConvHistory.js`: Utility to format conversation history.
- `retriever.js`: Script to set up the document retriever using Supabase and OpenAI embeddings.

## How It Works

1. **PDF Loading and Splitting**: The resume PDF is loaded and split into manageable chunks using `RecursiveCharacterTextSplitter`.
2. **Embedding and Storing**: The chunks are embedded into vector representations and stored in a Supabase vector store.
3. **Question Handling**: User queries are processed, and standalone questions are generated if necessary.
4. **Context Retrieval**: Relevant document chunks are retrieved based on the query context.
5. **Answer Generation**: The AI model generates context-aware answers using the retrieved information.

## Demonstration

### Home Page
<img width="1512" alt="home page" src="https://github.com/user-attachments/assets/9e4ee174-30b6-4e5a-b7cd-ef7968c2c4e6">

### Personal Projects Query
<img width="1512" alt="asked about personal projects" src="https://github.com/user-attachments/assets/c83a2e85-0733-4901-a565-22cd02920f32">

### Memory Retention - Initial Query
<img width="1512" alt="said a name  Derek  to check for memory retention" src="https://github.com/user-attachments/assets/3be9834c-56a6-4aa6-b7e0-d8c08f8cda33">

### Memory Retention - Follow-up Query
<img width="1512" alt="said a name  Derek  to check for memory retention2" src="https://github.com/user-attachments/assets/024645ce-b79a-4654-adce-045bf87208e3">

### Terminal Output Demonstrating Memory Retention
<img width="1278" alt="Terminal output for derek" src="https://github.com/user-attachments/assets/53d3488f-56dd-4708-9674-d58ecc3c9ed3">

<img width="1511" alt="full terminal output screenshots" src="https://github.com/user-attachments/assets/9d595d45-f041-48bd-857f-26d50f2055c9">


## Contribution

Feel free to open issues or submit pull requests for improvements and bug fixes.

