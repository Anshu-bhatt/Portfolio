export const resume = {
    profile: {
        name: "Anshu Bhatt",
        title: "AI/ML Enthusiast | Problem-Solver | Aspiring Innovator",
        contact: {
            email: "akabhatt10@gmail.com",
            phone: "+91 9824828633",
            linkedin: "https://www.linkedin.com/in/anshu-bhatt-00aa0a278",
            github: "https://github.com/Anshu-Bhatt",
        },
        summary:
            "Skilled in Python, Scikit-Learn, and algorithm-driven development, with experience in real-time object detection, data visualization, and robotics solutions. Strong problem-solving abilities, demonstrated by 100+ LeetCode problems, a Golden Badge on HackerRank (Java, C++), and competitive coding on CodeChef.",
    },
    skills: {
        languages: ["Python", "C++", "C", "Java", "SQL", "Javascript", "Dart"],
        frameworks: ["FastAPI", "Flask", "RESTful APIs"],
        databases: ["SQLAlchemy", "MySQL", "MongoDB"],
        ai_ml: ["Scikit-learn pipelines", "Roboflow", "Kaggle", "Torch", "SpaCy", "NLTK", "BERT", "YOLO"],
        tools: ["Tableau", "Power BI", "Microsoft Excel", "Git", "Github", "Slack"],
        cloud: ["Google Cloud Platform (Cloud Storage, Secret Manager)"],
    },
    education: [
        {
            university: "Charotar University of Science and Technology",
            degree: "B. Tech in Artificial Intelligence and Machine Learning",
            year: "2023 – 2027",
            grade: "CGPA: 9.03/10",
            coursework:
                "Machine Learning, NLP, Data Structures and Algorithms",
        },
    ],
    experience: [
        {
            company: "Ariadi Technology",
            role: "Software Developer Role",
            period: "Nov 2025 - present",
        },
        {
            company: "Behtar Foundation",
            role: "Backend and ML Intern",
            period: "Sept 2025 - present",
        },
    ],
    projects: [
        {
            title: "GateGPT",
            link: "github.com/Anshu-bhatt/GateGPT",
            description:
                "AI-powered GATE exam prep assistant built with Retrieval-Augmented Generation (RAG). Combines smart document retrieval with open-source language models to answer GATE-syllabus questions accurately. Built using LangChain, FAISS vector store, and Jupyter Notebooks for end-to-end pipeline experimentation.",
            tags: ["RAG", "LLM", "LangChain", "FAISS"],
            image: "/projects/gategpt.png",
        },
        {
            title: "Autonomous Legal Contract Reviewer",
            link: "github.com/Anshu-Bhatt",
            description:
                "Created a custom dataset by extracting and annotating legal clauses as per the Indian rubric of laws. Built a clause classification model using Scikit-learn, Torch, and NLP techniques (SpaCy, NLTK, BERT). Achieved 70% accuracy in predicting clause types, despite limited availability of Indian legal documents.",
            tags: ["NLP", "Torch", "SpaCy", "BERT"],
            image: "/projects/legal_contract.png",
        },
        {
            title: "EyeOnPath: AI-Powered Navigation Cap for the Visually Impaired",
            link: "github.com/Anshu-Bhatt",
            description:
                "Developed an AI-powered, hands-free navigation cap for visually impaired users using Raspberry Pi 4, Arducam, YOLO-based object detection, and ultrasonic sensors for real-time obstacle awareness. Implemented sensor fusion with audio guidance.",
            tags: ["IoT", "Raspberry Pi", "YOLO", "Computer Vision"],
            image: "/projects/eyeonpath.png",
        },
        {
            title: "OptiExtract: AI-Powered Invoice & Document Extraction Platform (Ongoing)",
            description:
                "Deployed OCR + LLM pipeline with schema-driven invoice extraction, FastAPI APIs, and cloud storage integration. Built production ML validation using confidence thresholds, auto-routing to review queues, and annotated PDF outputs.",
            tags: ["OCR", "LLM", "FastAPI", "Cloud Storage"],
            image: "/projects/optiextract.png",
        },
        {
            title: "ComplyOne: NGO Document Processing Platform (Ongoing)",
            description:
                "Developed a FastAPI-based OCR backend for NGO document processing (PAN, DARPAN, 12A, 80G). Integrated Docling OCR with schema-aware extractors to enable automatic document-type detection and structured data extraction.",
            tags: ["FastAPI", "Docling OCR", "Backend"],
            image: "/projects/complyone.png",
        },
    ],
    certifications: [
        "Data structure and algorithm with JAVA by NPTEL",
        "Database Management System by NPTEL",
        "Machine Learning with python by IBM (Coursera)",
        "MERN Stack Front To Back by Packt (Coursera)",
    ],
    extracurricular: [
        {
            role: "Core Team Member, ROBOCON",
            description:
                "Led a 20-member multidisciplinary team to design and develop an AI-driven robotic system for ROBOCON 2025.",
        },
        {
            role: "Marketing Team Member, AIESEC",
            description:
                "Coordinated cross-cultural marketing campaigns, increasing outreach by 30%.",
        },
        {
            role: "Open Source Contributor, GirlScript Summer of Code (GSSoC)",
            description:
                "Contributed to 10+ open-source repositories in the MERN stack domain and ML.",
        },
    ],
};
