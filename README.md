# AI-Powered Learning Recommendation Engine

## Project Overview
This project aims to develop an *AI-powered recommendation system* that analyzes a student's *progress, learning style, and academic goals* to provide personalized study roadmap which recommends videos, generates quizzes and provides short-notes. The system adapts dynamically to *preferred content types, and subject requirements*. 

## Features
- *GPT-2 Fine-Tuned Model* for *short note generation* and *quiz creation*
- *Real-time Feedback & Performance Tracking*
- *Interactive and Responsive UI*

## Tech Stack

###  Machine Learning & AI
- *GPT-2* – Fine-tuned for generating short notes and quizzes
- *Hugging Face Transformers* – Pre-trained model fine-tuning
- *Scikit-learn* – Recommendation algorithms (collaborative & content-based filtering)
- *TensorFlow/Keras* – Training and deploying adaptive learning models
- *PyTorch* – Model experimentation and optimization
- *Reinforcement Learning (RL)* – To refine recommendations based on student feedback
- *Natural Language Processing (NLP)* – Tokenization, summarization, and keyword extraction
- *TF-IDF & Word2Vec* – Content similarity analysis for better recommendations

### Frontend
- *React.js* – Dynamic and interactive user interface
- *Tailwind CSS* – Clean and modern UI design

### Backend
- *Node.js & Express.js* – API development and backend integration
- *FastAPI* – Serving ML models efficiently

### Deployment & Infrastructure
- *AWS Lambda/GCP Functions* – Serverless execution of AI models
- *Docker & Kubernetes* – Containerization and orchestration
- *NGINX* – Load balancing and performance optimization
- *MLflow* – Model tracking and versioning

### Other Integrations
- *WebSockets* – Real-time feedback and progress updates
- *REST APIs & GraphQL* – Efficient data retrieval
- *Caching & Asynchronous Processing* – To speed up AI-based recommendations

## Challenges & Solutions

### Fine-Tuning GPT-2 on Custom Dataset
*Challenges:*
- Collecting and cleaning high-quality data
- Ensuring relevant and diverse output

*Solutions:*
- Structured dataset curation and preprocessing
- Iterative fine-tuning and evaluation
- Adjusting hyperparameters for better accuracy

### Developing Adaptive Recommendation Algorithm
*Challenges:*
- Ensuring accurate and personalized recommendations
- Handling cases where users have little prior data

*Solutions:*
- Implemented cold-start solutions (preference-based inputs)
- Used collaborative + content-based filtering
- Continuous learning from user interactions

### Frontend-Backend Integration
*Challenges:*
- Managing real-time interactions without lag
- Efficient data processing for accurate recommendations

*Solutions:*
- Optimized API calls for faster response times
- Implemented WebSockets for real-time updates
- Used caching techniques for performance boost

### Scalability & Performance Optimization
*Challenges:*
- Handling multiple users without delays
- Ensuring fast AI-generated results

*Solutions:*
- Used cloud-based deployment with AWS/GCP
- Batch processing and asynchronous execution
- Load balancing with NGINX

### Content Diversity & Engagement
*Challenges:*
- Avoiding repetitive recommendations
- Keeping students motivated

*Solutions:*
- Implemented difficulty progression system
- Categorized content for balanced recommendations
- Collected user feedback for continuous improvement

## How to Run the Project
1. Clone the repository:
   git clone https://github.com/ananya-dhiman/Student
   cd Student
   
2. Install dependencies and Start the backend:
   ```cd .\Machine_Leanring
   pip install -r requirements.txt
   python main.py
   cd .\Backend
   npm install
   node .\src\server.js
   
3. Install dependencies and Start the frontend:
   cd .\Frontend
   npm install
   npm run dev
   
5. Access the app at http://localhost:5173

## Future Enhancements
- *Multilingual Support* – To cater to a wider range of students
- *Gamification Elements* – Badges, leaderboards, and streaks to boost engagement

*With this AI-powered learning engine, we are making education smarter, more personalized, and highly effective!*
