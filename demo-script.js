// Demo Page Interactive Script

// Scenario data
const scenarios = {
    appointment: {
        messages: [
            { type: 'user', text: 'Hi, I want to book an appointment with Dr. Ahmed', time: '10:30 AM' },
            { type: 'bot', text: 'Hello! I\'d be happy to help you book an appointment with Dr. Ahmed.', time: '10:30 AM' },
            { type: 'bot', text: 'Dr. Ahmed (Cardiologist) has the following slots available this week:', time: '10:30 AM' },
            { type: 'bot', text: '• Monday 3:00 PM\n• Tuesday 5:30 PM\n• Thursday 11:00 AM\n• Friday 4:00 PM\n\nWhich time works best for you?', time: '10:30 AM' },
            { type: 'user', text: 'Tuesday 5:30 PM please', time: '10:31 AM' },
            { type: 'info', text: '🔄 AI checking availability and updating database...' },
            { type: 'bot', text: '✅ Perfect! Your appointment is confirmed:\n\n📅 Date: Tuesday, March 5th\n⏰ Time: 5:30 PM\n👨‍⚕️ Doctor: Dr. Ahmed (Cardiology)\n📍 Location: City Hospital, 3rd Floor\n\nYou\'ll receive a reminder 24 hours before your appointment.', time: '10:31 AM' },
            { type: 'bot', text: 'Is there anything else I can help you with?', time: '10:31 AM' }
        ],
        stats: { responseTime: '0.8s', accuracy: '98%', automated: '100%' }
    },
    
    reschedule: {
        messages: [
            { type: 'user', text: 'I need to reschedule my appointment tomorrow', time: '2:15 PM' },
            { type: 'bot', text: 'I can help you reschedule. Let me check your upcoming appointments...', time: '2:15 PM' },
            { type: 'info', text: '🔍 AI searching patient records...' },
            { type: 'bot', text: 'I found your appointment:\n\n📅 Tomorrow (March 2nd) at 3:00 PM\n👨‍⚕️ Dr. Sarah Khan - Dermatology\n\nWould you like to reschedule this?', time: '2:15 PM' },
            { type: 'user', text: 'Yes please, something next week would be better', time: '2:16 PM' },
            { type: 'info', text: '🔄 AI checking available slots...' },
            { type: 'bot', text: 'Dr. Sarah Khan has these slots available next week:\n\n• Monday, March 6th - 10:00 AM\n• Wednesday, March 8th - 2:30 PM\n• Thursday, March 9th - 4:00 PM\n\nWhich works for you?', time: '2:16 PM' },
            { type: 'user', text: 'Wednesday 2:30 PM', time: '2:17 PM' },
            { type: 'bot', text: '✅ Done! Your appointment has been rescheduled to:\n\n📅 Wednesday, March 8th\n⏰ 2:30 PM\n👨‍⚕️ Dr. Sarah Khan - Dermatology\n\nYour old appointment (March 2nd) has been cancelled. You\'ll receive a new confirmation via SMS.', time: '2:17 PM' }
        ],
        stats: { responseTime: '1.2s', accuracy: '96%', automated: '100%' }
    },
    
    report: {
        messages: [
            { type: 'user', text: 'Can I get my blood test results?', time: '4:45 PM' },
            { type: 'bot', text: 'I\'ll check the status of your lab reports. One moment please...', time: '4:45 PM' },
            { type: 'info', text: '🔍 AI accessing lab system...' },
            { type: 'bot', text: 'I found your recent lab work:\n\n📋 Blood Test (Complete Blood Count)\n📅 Test Date: February 28, 2024\n✅ Status: Results Ready\n\nYour results are available. However, for medical reports, I need to connect you with our medical team for proper interpretation.', time: '4:45 PM' },
            { type: 'bot', text: 'Would you like me to:\n1️⃣ Send the report to your email\n2️⃣ Schedule a consultation with your doctor\n3️⃣ Connect you with a nurse now', time: '4:45 PM' },
            { type: 'user', text: 'Send to email please', time: '4:46 PM' },
            { type: 'info', text: '📧 AI sending secure report...' },
            { type: 'bot', text: '✅ Your blood test report has been sent to:\npatient@email.com\n\n🔒 The report is password-protected. Check your SMS for the password.\n\nNote: Please consult with your doctor for proper interpretation of results.', time: '4:46 PM' }
        ],
        stats: { responseTime: '0.9s', accuracy: '97%', automated: '85%' }
    },
    
    doctor: {
        messages: [
            { type: 'user', text: 'Tell me about Dr. Ahmed please', time: '11:20 AM' },
            { type: 'bot', text: 'I\'ll get you information about Dr. Ahmed...', time: '11:20 AM' },
            { type: 'info', text: '🔍 AI retrieving doctor profile...' },
            { type: 'bot', text: '👨‍⚕️ Dr. Ahmed Hassan\n🏥 Senior Cardiologist\n\n📚 Qualifications:\n• MBBS - Karachi Medical College\n• MD Cardiology - Aga Khan University\n• Fellow of American College of Cardiology\n\n⭐ Experience: 15+ years\n\n🕐 Available:\n• Monday-Friday: 9 AM - 5 PM\n• Saturday: 9 AM - 1 PM\n\n💼 Specializations:\n• Heart Disease\n• ECG & Echo\n• Cardiac Stress Testing\n• Preventive Cardiology\n\n📍 City Hospital - 3rd Floor, Room 302', time: '11:20 AM' },
            { type: 'bot', text: 'Would you like to book an appointment with Dr. Ahmed?', time: '11:20 AM' },
            { type: 'user', text: 'Not right now, thanks', time: '11:21 AM' },
            { type: 'bot', text: 'No problem! Feel free to reach out anytime you need assistance. Have a great day! 😊', time: '11:21 AM' }
        ],
        stats: { responseTime: '0.7s', accuracy: '99%', automated: '100%' }
    },
    
    emergency: {
        messages: [
            { type: 'user', text: 'I have severe chest pain and difficulty breathing', time: '1:30 PM' },
            { type: 'info', text: '🚨 AI detecting emergency keywords...' },
            { type: 'bot', text: '🚨 THIS SOUNDS LIKE AN EMERGENCY 🚨\n\nI\'m immediately connecting you with our emergency team.', time: '1:30 PM' },
            { type: 'bot', text: 'While connecting:\n\n1️⃣ Call emergency services (1122) if symptoms worsen\n2️⃣ Do not drive yourself - call an ambulance\n3️⃣ Sit down and try to stay calm\n\nConnecting you to a doctor NOW...', time: '1:30 PM' },
            { type: 'info', text: '🔄 Escalating to human doctor (Dr. Ahmed)...' },
            { type: 'bot', text: '✅ Dr. Ahmed has been notified and will respond in 30 seconds.\n\nYour location has been shared with the emergency team.\n\n🏥 Nearest Hospital: City Hospital (2 km away)\n🚑 Ambulance dispatched if needed', time: '1:30 PM' },
            { type: 'bot', text: '👨‍⚕️ Dr. Ahmed is now online and will take over this conversation.', time: '1:31 PM' },
            { type: 'info', text: '✅ Successfully escalated to human doctor in 45 seconds' }
        ],
        stats: { responseTime: '0.5s', accuracy: '100%', automated: '20%' }
    }
};

// Initialize demo
let currentScenario = 'appointment';

function initDemo() {
    // Set up scenario buttons
    const scenarioButtons = document.querySelectorAll('.scenario-btn');
    scenarioButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            // Remove active class from all buttons
            scenarioButtons.forEach(b => b.classList.remove('active'));
            // Add active class to clicked button
            btn.classList.add('active');
            
            // Load new scenario
            const scenario = btn.dataset.scenario;
            loadScenario(scenario);
        });
    });
    
    // Load initial scenario
    loadScenario(currentScenario);
}

function loadScenario(scenarioName) {
    currentScenario = scenarioName;
    const scenario = scenarios[scenarioName];
    const messagesContainer = document.getElementById('demoMessages');
    
    // Clear existing messages
    messagesContainer.innerHTML = '';
    
    // Show typing indicator
    const typingIndicator = document.getElementById('typingIndicator');
    typingIndicator.classList.add('active');
    
    // Add messages with delay
    let delay = 500;
    scenario.messages.forEach((msg, index) => {
        setTimeout(() => {
            addMessage(msg);
            
            // Hide typing indicator after first message
            if (index === 0) {
                typingIndicator.classList.remove('active');
            }
            
            // Show typing indicator before bot messages (except info messages)
            if (index < scenario.messages.length - 1 && msg.type === 'user') {
                typingIndicator.classList.add('active');
            } else {
                typingIndicator.classList.remove('active');
            }
            
            // Scroll to bottom
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }, delay);
        
        // Adjust delay based on message type
        if (msg.type === 'user') {
            delay += 1000;
        } else if (msg.type === 'info') {
            delay += 1500;
        } else {
            delay += 2000;
        }
    });
    
    // Update stats
    setTimeout(() => {
        updateStats(scenario.stats);
    }, delay + 500);
}

function addMessage(msg) {
    const messagesContainer = document.getElementById('demoMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = 'chat-message';
    
    if (msg.type === 'info') {
        messageDiv.innerHTML = `
            <div class="message-info">
                ${msg.text}
            </div>
        `;
    } else {
        messageDiv.className = `chat-message message-${msg.type}`;
        messageDiv.innerHTML = `
            <div class="message-bubble">
                ${msg.text.replace(/\n/g, '<br>')}
            </div>
            <div class="message-time">${msg.time}</div>
        `;
    }
    
    messagesContainer.appendChild(messageDiv);
}

function updateStats(stats) {
    document.getElementById('responseTime').textContent = stats.responseTime;
    document.getElementById('accuracy').textContent = stats.accuracy;
    document.getElementById('automated').textContent = stats.automated;
    
    // Animate stats
    const statValues = document.querySelectorAll('.stat-value');
    statValues.forEach(stat => {
        stat.style.transform = 'scale(1.1)';
        setTimeout(() => {
            stat.style.transform = 'scale(1)';
        }, 300);
    });
}

// Initialize when DOM is loaded
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initDemo);
} else {
    initDemo();
}
