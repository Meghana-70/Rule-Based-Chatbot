function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.toLowerCase().trim();

    if (message === "") {
        return;
    }

    let response = "";

    // Greetings
    if (
        message.includes("hi") ||
        message.includes("hello") ||
        message.includes("hey")
    ) {
        response = "Hello! How can I help you today?";
    }

    // How are you
    else if (message.includes("how are you")) {
        response = "I'm doing great! Thanks for asking.";
    }

    // Who are you
    else if (
        message.includes("who are you") ||
        message.includes("your name")
    ) {
        response = "I am a Rule-Based AI Chatbot designed to answer basic user queries.";
    }

    // AI
    else if (
        message.includes("ai") ||
        message.includes("artificial intelligence")
    ) {
        response = "Artificial Intelligence (AI) is a branch of computer science that focuses on creating systems capable of learning, reasoning, problem-solving, and decision-making. AI is used in chatbots, recommendation systems, healthcare, robotics, and autonomous vehicles.";
    }

    // Python
    else if (message.includes("python")) {
        response = "Python is a high-level programming language known for its simplicity and readability. It is widely used in AI, Machine Learning, Data Science, Web Development, and Automation.";
    }

    // Machine Learning
    else if (message.includes("machine learning")) {
        response = "Machine Learning is a subset of AI that enables computers to learn patterns from data and improve performance without being explicitly programmed.";
    }

    // Deep Learning
    else if (message.includes("deep learning")) {
        response = "Deep Learning is a subset of Machine Learning that uses neural networks with multiple layers to solve complex tasks such as image recognition, speech processing, and natural language understanding.";
    }

    // Data Science
    else if (message.includes("data science")) {
        response = "Data Science combines statistics, programming, and domain expertise to analyze data and extract meaningful insights for decision-making.";
    }

    // Cyber Security
    else if (
        message.includes("cyber security") ||
        message.includes("cybersecurity")
    ) {
        response = "Cyber Security involves protecting systems, networks, and data from cyber threats, attacks, and unauthorized access.";
    }

    // Cloud Computing
    else if (
        message.includes("cloud") ||
        message.includes("cloud computing")
    ) {
        response = "Cloud Computing allows users to access computing resources such as servers, storage, and databases over the internet.";
    }

    // Java
    else if (message.includes("java")) {
        response = "Java is an object-oriented programming language widely used for enterprise software, Android applications, and backend development.";
    }

    // Web Development
    else if (
        message.includes("web development") ||
        message.includes("website")
    ) {
        response = "Web Development involves building websites and web applications using technologies such as HTML, CSS, JavaScript, and backend frameworks.";
    }

    // Time
    else if (message.includes("time")) {
        response = "Current time is: " + new Date().toLocaleTimeString();
    }

    // Date
    else if (message.includes("date")) {
        response = "Today's date is: " + new Date().toLocaleDateString();
    }

    // Joke
    else if (message.includes("joke")) {
        response = "Why do programmers prefer dark mode? Because light attracts bugs!";
    }

    // Help
    else if (message.includes("help")) {
        response = "You can ask me about AI, Python, Machine Learning, Deep Learning, Data Science, Cyber Security, Cloud Computing, Java, Web Development, Date, Time, and Jokes.";
    }

    // Goodbye
    else if (
        message.includes("bye") ||
        message.includes("goodbye")
    ) {
        response = "Goodbye! Have a wonderful day.";
    }

    // Default
    else {
        response = "Sorry, I don't understand that query. Try typing 'help' to see what I can answer.";
    }

    let chatbox = document.getElementById("chatbox");

    chatbox.innerHTML +=
        `<div class="user"><b>You:</b> ${message}</div>`;

    chatbox.innerHTML +=
        `<div class="bot"><b>Bot:</b> ${response}</div>`;

    chatbox.scrollTop = chatbox.scrollHeight;

    input.value = "";
}