## Project Overview

This project demonstrates an advanced AI-powered system for processing, embedding, and storing textual data using state-of-the-art natural language processing techniques and cloud-based vector storage. It showcases proficiency in working with modern AI/ML libraries, API integrations, and database technologies.

## Key Features

- **Text Processing**: Utilizes the RecursiveCharacterTextSplitter from LangChain for intelligent text chunking.
- **Embeddings Generation**: Leverages OpenAI's powerful embedding models to convert text into high-dimensional vector representations.
- **Vector Database Integration**: Implements Supabase as a vector store for efficient similarity search and retrieval.
- **Scalable Architecture**: Designed to handle large volumes of text data with configurable chunk sizes and overlap.

## Technologies Used

- **Node.js**: Runtime environment for executing JavaScript on the server.
- **LangChain**: Advanced framework for developing applications with large language models.
- **OpenAI API**: State-of-the-art natural language processing capabilities.
- **Supabase**: Open-source Firebase alternative with vector storage capabilities.
- **dotenv**: Environment variable management for secure configuration.

## Code Structure

The main script (`index.js`) orchestrates the following process:

1. Reads a text file containing the source data.
2. Splits the text into manageable chunks using advanced NLP techniques.
3. Generates embeddings for each text chunk using OpenAI's models.
4. Stores the embeddings in a Supabase vector database for future retrieval and analysis.

## Setup and Execution

1. Clone the repository
2. Install dependencies: `npm install`
3. Set up environment variables in a `.env` file:
  SUPABASE_API_KEY=your_supabase_api_key
  SUPABASE_URL_LC_CHATBOT=your_supabase_url
  OPENAI_API_KEY=your_openai_api_key
4. 4. Run the script: `node index.js`

## Future Enhancements

- Extend the system to handle multiple file formats (PDF, DOCX, etc.).
- Develop a web interface for easy data upload and visualization.
- Integrate additional embedding models for comparison and optimization.

## Contribution

Contributions, issues, and feature requests are welcome. Feel free to check [issues page](link_to_issues_page) if you want to contribute.
