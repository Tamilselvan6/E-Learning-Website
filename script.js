document.addEventListener('DOMContentLoaded', () => {
    const loginBtn = document.getElementById('loginBtn');
    const loginPopup = document.getElementById('loginPopup');
    const overlay = document.getElementById('overlay');
    const loginSubmit = document.getElementById('loginSubmit');
    const userNameDisplay = document.getElementById('userNameDisplay');
    const logoutBtn = document.getElementById('logoutBtn');

    loginBtn.addEventListener('click', () => {
        loginPopup.classList.add('active');
        overlay.classList.add('active');
    });

    overlay.addEventListener('click', () => {
        loginPopup.classList.remove('active');
        overlay.classList.remove('active');
    });

    loginSubmit.addEventListener('click', () => {
        const email = document.getElementById('loginEmail').value;
        const password = document.getElementById('loginPassword').value;

        // Simulate fetching user's name based on email
        const userName = email.split('@')[0]; // Simple logic to get user name from email

        if (email && password) {
            userNameDisplay.textContent = `Welcome, ${userName.charAt(0).toUpperCase() + userName.slice(1)}`;
            userNameDisplay.style.display = 'block';
            logoutBtn.style.display = 'block';
            loginBtn.style.display = 'none';
            loginPopup.classList.remove('active');
            overlay.classList.remove('active');
        } else {
            alert('Please enter a valid email and password');
        }
    });

    // Function to handle logout
    function logout() {
        userNameDisplay.style.display = 'none';
        logoutBtn.style.display = 'none';
        loginBtn.style.display = 'block';
    }

    window.logout = logout;
});

document.addEventListener("DOMContentLoaded", function() {
    const chatbotToggler = document.getElementById('chatbotToggler');
    const chatbotContainer = document.querySelector('.chatbot-container');
    const chatbot = document.getElementById('chatbot');
    const closeChatbot = document.getElementById('closeChatbot');
    const chatboxMessages = document.getElementById('chatboxMessages');
    const userInput = document.getElementById('userInput');
    const sendButton = document.getElementById('sendButton');

    const questions = [
        { question: "What topics are covered in your web development courses?", answer: "Our web development courses cover HTML, CSS, JavaScript, responsive design, front-end frameworks, back-end development, and more." },
        { question: "How can I join your organization as a student?", answer: "To enroll in our web development courses and become a student, simply visit our website, browse the available courses, and follow the enrollment process for the course of your choice." },
        { question: "Do you offer any certifications upon course completion?", answer: "Yes, we provide certificates of completion to students who successfully finish our web development courses. These certificates can be a valuable addition to your resume and demonstrate your skills to potential employers." }
    ];
    

    chatbotToggler.addEventListener('click', () => {
        chatbotContainer.classList.toggle('show-chatbot');
    });

    closeChatbot.addEventListener('click', () => {
        chatbotContainer.classList.remove('show-chatbot');
    });

    // Function to add a new chat message to the chatbox
    function addChatMessage(message, type) {
        const chatMessage = document.createElement('li');
        chatMessage.classList.add('chat', type);
        chatMessage.innerHTML = `<i class="fa-solid fa-${type === 'incoming' ? 'robot' : 'user'}"></i><p>${message}</p>`;
        chatboxMessages.appendChild(chatMessage);
        // Scroll to bottom of chatbox
        chatboxMessages.scrollTop = chatboxMessages.scrollHeight;
    }

    // Function to handle user interaction with predefined questions
    function handleQuestionClick(question, answer) {
        addChatMessage(question, 'outgoing');
        setTimeout(function() {
            addChatMessage(answer, 'incoming');
        }, 1000);
    }

    // Display predefined questions and answers as buttons
    questions.forEach(qa => {
        const question = qa.question;
        const answer = qa.answer;
        const questionButton = document.createElement('button');
        questionButton.textContent = question;
        questionButton.classList.add('question-button');
        questionButton.addEventListener('click', function() {
            handleQuestionClick(question, answer);
        });
        chatboxMessages.appendChild(questionButton);
    });

    // Simulate initial incoming message
    setTimeout(function() {
        addChatMessage("Hi there! How can I help you today?", 'incoming');
    }, 1000);

    // Send user input message
    sendButton.addEventListener('click', () => {
        const message = userInput.value.trim();
        if (message) {
            addChatMessage(message, 'outgoing');
            userInput.value = '';
            // Add response logic here
            setTimeout(() => {
                addChatMessage("Sorry, I can't answer that question right now.", 'incoming');
            }, 1000);
        }
    });

    // Allow sending message with Enter key
    userInput.addEventListener('keypress', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
            e.preventDefault();
            sendButton.click();
        }
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const faqQuestions = document.querySelectorAll('.faq-question');
    faqQuestions.forEach(function (question) {
        question.addEventListener('click', function () {
            this.classList.toggle('active');
            const answer = this.nextElementSibling;
            if (answer.style.display === 'block') {
                answer.style.display = 'none';
            } else {
                answer.style.display = 'block';
            }
        });
    });

    var modal = document.getElementById("enrollConfirmationModal");

    var enrollBtns = document.querySelectorAll(".enroll-btn");

    var span = document.getElementsByClassName("close")[0];

    enrollBtns.forEach(function (button) {
        button.addEventListener("click", function () {
            var courseCard = button.closest(".course-card");
            var courseName = courseCard.querySelector("h3").textContent;
            var courseDescription = courseCard.querySelector("p").textContent;
            var courseDuration = courseCard.querySelector(".duration").textContent;

            var courseDetailsDiv = document.getElementById("courseDetails");
            courseDetailsDiv.innerHTML = "<h3>" + courseName + "</h3>" +
                "<p>" + courseDescription + "</p>" +
                "<p>" + courseDuration + "</p>";

           modal.classList.add("show");
            document.querySelector(".overlay").classList.add("show");
        });
    });

    function closeModal() {
        modal.classList.remove("show");
        document.querySelector(".overlay").classList.remove("show");
    }

    span.onclick = closeModal;
    window.onclick = function (event) {
        if (event.target == modal) {
            closeModal();
        }
    };
    document.getElementById("confirmEnrollBtn").onclick = function () {
        alert("Enrollment confirmed!"); 
        window.location.href = "WebDevelopmentBasic.html"; 
        closeModal(); 
    }
});
