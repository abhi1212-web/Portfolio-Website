import { useState } from "react";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";

interface Message {
  id: string;
  text: string;
  sender: 'user' | 'osky';
  timestamp: Date;
}

const OskyChatbot = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      text: "Hi! I'm Osky, Abhijeet's AI assistant. I can help you learn more about his projects, skills, and experience. What would you like to know?",
      sender: 'osky',
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState("");

  const predefinedResponses: Record<string, string> = {
    "skills": "Abhijeet is proficient in Python, JavaScript, AI/ML technologies like TensorFlow and PyTorch, web development with React and Node.js, and has experience with cloud platforms like AWS. He's particularly passionate about AI and machine learning!",
    "projects": "Some of Abhijeet's notable projects include an AI-powered code assistant, smart campus navigation system, blockchain voting platform, and ML-based stock predictor. Each project showcases his expertise in different areas of technology.",
    "experience": "Abhijeet is currently a B.Tech CSE student with extensive experience in hackathons, competitive coding, and AI research. He's actively building projects that solve real-world problems using cutting-edge technology.",
    "contact": "You can reach Abhijeet through email at abhijeet.bhati@example.com, connect on LinkedIn, or check out his projects on GitHub. He's always open to discussing new opportunities and collaborations!",
    "education": "Abhijeet is pursuing B.Tech in Computer Science Engineering, with a focus on AI and machine learning. He's actively involved in coding competitions and hackathons.",
    "ai": "Abhijeet is passionate about artificial intelligence, particularly in areas like machine learning, deep learning, computer vision, and natural language processing. He's working on several AI projects that showcase his expertise in this field."
  };

  const generateResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! Great to meet you! I'm here to help you learn more about Abhijeet. Feel free to ask about his skills, projects, experience, or how to get in touch with him.";
    }
    
    if (lowerMessage.includes("help")) {
      return "I can help you learn about Abhijeet's skills, projects, experience, education, AI expertise, or how to contact him. Just ask me anything you'd like to know!";
    }
    
    return "That's an interesting question! While I might not have specific information about that, I'd recommend reaching out to Abhijeet directly via email or LinkedIn for more detailed discussions. Is there anything else about his skills, projects, or experience you'd like to know?";
  };

  const handleSendMessage = () => {
    if (!inputMessage.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      text: inputMessage,
      sender: 'user',
      timestamp: new Date()
    };

    const oskyResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: generateResponse(inputMessage),
      sender: 'osky',
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage, oskyResponse]);
    setInputMessage("");
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Button */}
      <Button
        onClick={() => setIsOpen(!isOpen)}
        size="lg"
        className={`fixed bottom-6 right-6 rounded-full w-16 h-16 shadow-lg hover:shadow-xl transition-all duration-300 z-50 ${
          isOpen ? 'bg-destructive hover:bg-destructive/90' : 'button-gradient hover-lift'
        }`}
      >
        {isOpen ? <X className="h-6 w-6" /> : <MessageCircle className="h-6 w-6" />}
      </Button>

      {/* Chat Window */}
      {isOpen && (
        <Card className="fixed bottom-24 right-6 w-96 max-w-[calc(100vw-3rem)] h-96 flex flex-col shadow-xl z-40 border-border">
          <CardHeader className="pb-3 bg-hero-gradient text-primary-foreground rounded-t-lg">
            <div className="flex items-center space-x-3">
              <div className="w-8 h-8 rounded-full bg-primary-foreground/20 flex items-center justify-center">
                <Bot className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-semibold">Osky</h3>
                <p className="text-xs opacity-90">AI Assistant</p>
              </div>
            </div>
          </CardHeader>
          
          <CardContent className="flex-1 p-4 overflow-hidden flex flex-col">
            {/* Messages */}
            <div className="flex-1 overflow-y-auto space-y-3 mb-4">
              {messages.map((message) => (
                <div
                  key={message.id}
                  className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[85%] ${message.sender === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-7 h-7 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.sender === 'user' 
                        ? 'bg-primary text-primary-foreground' 
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      {message.sender === 'user' ? <User className="h-4 w-4" /> : <Bot className="h-4 w-4" />}
                    </div>
                    <div className={`rounded-lg p-3 ${
                      message.sender === 'user'
                        ? 'bg-primary text-primary-foreground'
                        : 'bg-secondary text-secondary-foreground'
                    }`}>
                      <p className="text-sm">{message.text}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Input */}
            <div className="flex space-x-2">
              <Input
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyPress={handleKeyPress}
                placeholder="Ask me about Abhijeet..."
                className="flex-1 text-sm"
              />
              <Button 
                onClick={handleSendMessage}
                size="sm"
                className="px-3"
                disabled={!inputMessage.trim()}
              >
                <Send className="h-4 w-4" />
              </Button>
            </div>
          </CardContent>
        </Card>
      )}
    </>
  );
};

export default OskyChatbot;