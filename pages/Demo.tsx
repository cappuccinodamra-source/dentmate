import React, { useState, useRef, useEffect } from 'react';
import { GoogleGenAI } from "@google/genai";
import { 
  LayoutDashboard, 
  Users, 
  Calendar, 
  Settings, 
  Search, 
  Bell, 
  Plus, 
  MoreVertical,
  Bot,
  Send,
  Loader2,
  Activity
} from 'lucide-react';

const Demo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAiChat, setShowAiChat] = useState(false);
  const [chatInput, setChatInput] = useState('');
  const [chatHistory, setChatHistory] = useState<{role: 'user' | 'model', text: string}[]>([
    { role: 'model', text: 'Hello! I am the DentMate AI Assistant. I can help you summarize patient notes or check the schedule. How can I help you today?' }
  ]);
  const [isTyping, setIsTyping] = useState(false);
  const chatEndRef = useRef<HTMLDivElement>(null);

  // Gemini Integration
  const handleSendMessage = async () => {
    if (!chatInput.trim()) return;

    const userMessage = chatInput;
    setChatHistory(prev => [...prev, { role: 'user', text: userMessage }]);
    setChatInput('');
    setIsTyping(true);

    try {
      if (process.env.API_KEY) {
        const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });
        
        // System instruction for the assistant
        const systemInstruction = `You are a helpful assistant for the DentMate dental clinic management system. 
        You help receptionists and dentists. 
        Current simulated context:
        - Clinic: DentMate Demo Clinic
        - Today: ${new Date().toLocaleDateString()}
        - 3 Appointments scheduled for today (Sarah Johnson at 9:00 AM, Mike Brown at 10:30 AM, Emily Davis at 2:00 PM).
        - User is viewing the Dashboard.
        Keep answers short, professional, and helpful.`;

        const response = await ai.models.generateContent({
          model: 'gemini-2.5-flash',
          contents: userMessage,
          config: {
            systemInstruction: systemInstruction,
          }
        });
        
        setChatHistory(prev => [...prev, { role: 'model', text: response.text || "I couldn't generate a response." }]);
      } else {
        // Fallback if no API key is provided
        setTimeout(() => {
          setChatHistory(prev => [...prev, { role: 'model', text: "I'm in demo mode (no API key detected). If connected to Gemini, I could tell you about appointments, summarize charts, or draft SMS reminders! Try asking about 'Sarah Johnson'." }]);
        }, 1000);
      }
    } catch (error) {
      console.error("Error calling Gemini:", error);
      setChatHistory(prev => [...prev, { role: 'model', text: "Sorry, I encountered an error connecting to the AI service." }]);
    } finally {
      setIsTyping(false);
    }
  };

  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [chatHistory, isTyping]);


  // Mock Data
  const appointments = [
    { time: '09:00 AM', patient: 'Sarah Johnson', treatment: 'Root Canal', status: 'In Progress', color: 'text-orange-600 bg-orange-50' },
    { time: '10:30 AM', patient: 'Mike Brown', treatment: 'Cleaning', status: 'Scheduled', color: 'text-blue-600 bg-blue-50' },
    { time: '02:00 PM', patient: 'Emily Davis', treatment: 'Consultation', status: 'Confirmed', color: 'text-green-600 bg-green-50' },
  ];

  return (
    <div className="bg-slate-100 min-h-screen pt-4 pb-12 px-4 sm:px-6">
      
      {/* Demo Banner */}
      <div className="bg-slate-800 text-white text-center py-2 rounded-t-lg text-sm font-medium mb-0 max-w-7xl mx-auto">
        Live Interactive Demo View
      </div>

      <div className="max-w-7xl mx-auto bg-white rounded-b-xl shadow-xl overflow-hidden flex min-h-[800px] border border-slate-200">
        
        {/* Sidebar */}
        <div className="w-20 md:w-64 bg-slate-900 text-slate-300 flex-shrink-0 flex flex-col">
          <div className="p-6 flex items-center space-x-3 text-white font-bold text-xl border-b border-slate-800">
            <div className="w-8 h-8 bg-primary-500 rounded-lg flex items-center justify-center">D</div>
            <span className="hidden md:inline">DentMate</span>
          </div>
          
          <nav className="flex-1 p-4 space-y-2">
            <button 
              onClick={() => setActiveTab('dashboard')}
              className={`w-full flex items-center space-x-3 px-4 py-3 rounded-lg transition-colors ${activeTab === 'dashboard' ? 'bg-primary-600 text-white' : 'hover:bg-slate-800'}`}
            >
              <LayoutDashboard size={20} />
              <span className="hidden md:inline">Dashboard</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              <Users size={20} />
              <span className="hidden md:inline">Patients</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              <Calendar size={20} />
              <span className="hidden md:inline">Schedule</span>
            </button>
            <button className="w-full flex items-center space-x-3 px-4 py-3 rounded-lg hover:bg-slate-800 transition-colors">
              <Settings size={20} />
              <span className="hidden md:inline">Settings</span>
            </button>
          </nav>

          <div className="p-4 border-t border-slate-800">
            <div className="flex items-center space-x-3">
              <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center text-white font-bold">JD</div>
              <div className="hidden md:block">
                <p className="text-sm text-white font-medium">Dr. John Doe</p>
                <p className="text-xs text-slate-500">Admin</p>
              </div>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col bg-slate-50 relative">
          
          {/* Top Bar */}
          <header className="h-16 bg-white border-b border-slate-200 flex items-center justify-between px-8">
            <h2 className="text-xl font-bold text-slate-800 capitalize">{activeTab}</h2>
            
            <div className="flex items-center space-x-6">
              <div className="relative hidden md:block">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-slate-400" size={18} />
                <input 
                  type="text" 
                  placeholder="Search patients..." 
                  className="pl-10 pr-4 py-2 border border-slate-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary-500"
                />
              </div>
              <button className="relative text-slate-500 hover:text-slate-700">
                <Bell size={20} />
                <span className="absolute -top-1 -right-1 w-2.5 h-2.5 bg-red-500 rounded-full"></span>
              </button>
              <button 
                onClick={() => setShowAiChat(!showAiChat)}
                className={`flex items-center space-x-2 px-3 py-1.5 rounded-lg border transition-all ${showAiChat ? 'bg-primary-50 border-primary-200 text-primary-700' : 'bg-white border-slate-200 text-slate-600 hover:bg-slate-50'}`}
              >
                <Bot size={18} />
                <span className="text-sm font-medium">AI Assistant</span>
              </button>
            </div>
          </header>

          {/* Dashboard Content */}
          <main className="flex-1 p-8 overflow-y-auto">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Today's Appointments</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">12</h3>
                  </div>
                  <div className="p-2 bg-blue-50 text-blue-600 rounded-lg">
                    <Calendar size={20} />
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium">+2 from yesterday</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Pending Tasks</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">5</h3>
                  </div>
                  <div className="p-2 bg-orange-50 text-orange-600 rounded-lg">
                    <Activity size={20} />
                  </div>
                </div>
                <div className="text-sm text-slate-400">Updates every hour</div>
              </div>

              <div className="bg-white p-6 rounded-xl shadow-sm border border-slate-100">
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <p className="text-sm text-slate-500 font-medium">Active Patients</p>
                    <h3 className="text-3xl font-bold text-slate-900 mt-1">843</h3>
                  </div>
                  <div className="p-2 bg-purple-50 text-purple-600 rounded-lg">
                    <Users size={20} />
                  </div>
                </div>
                <div className="text-sm text-green-600 font-medium">+15 this month</div>
              </div>
            </div>

            {/* Schedule Section */}
            <div className="bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden">
              <div className="p-6 border-b border-slate-100 flex justify-between items-center">
                <h3 className="text-lg font-bold text-slate-900">Today's Schedule</h3>
                <button className="flex items-center space-x-1 text-sm text-primary-600 font-medium hover:text-primary-700">
                  <Plus size={16} />
                  <span>New Appointment</span>
                </button>
              </div>
              <div className="divide-y divide-slate-100">
                {appointments.map((apt, index) => (
                  <div key={index} className="p-4 hover:bg-slate-50 transition-colors flex items-center justify-between group">
                    <div className="flex items-center space-x-4">
                      <div className="w-20 text-sm font-medium text-slate-500">{apt.time}</div>
                      <div>
                        <p className="font-semibold text-slate-900">{apt.patient}</p>
                        <p className="text-sm text-slate-500">{apt.treatment}</p>
                      </div>
                    </div>
                    <div className="flex items-center space-x-4">
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${apt.color}`}>
                        {apt.status}
                      </span>
                      <button className="text-slate-400 hover:text-slate-600">
                        <MoreVertical size={18} />
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </main>

          {/* AI Chat Overlay */}
          {showAiChat && (
            <div className="absolute right-6 bottom-6 w-96 bg-white rounded-2xl shadow-2xl border border-slate-200 flex flex-col overflow-hidden z-20 h-[500px] animate-in slide-in-from-bottom-5 fade-in duration-300">
              <div className="bg-primary-600 p-4 text-white flex justify-between items-center">
                <div className="flex items-center space-x-2">
                  <Bot size={20} />
                  <span className="font-semibold">Smart Assistant</span>
                </div>
                <button onClick={() => setShowAiChat(false)} className="hover:bg-primary-700 p-1 rounded">
                  <span className="text-xs">Close</span>
                </button>
              </div>
              
              <div className="flex-1 overflow-y-auto p-4 space-y-4 bg-slate-50">
                {chatHistory.map((msg, i) => (
                  <div key={i} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                    <div className={`max-w-[80%] rounded-2xl px-4 py-3 text-sm ${
                      msg.role === 'user' 
                        ? 'bg-primary-600 text-white rounded-br-none' 
                        : 'bg-white border border-slate-200 text-slate-700 rounded-bl-none shadow-sm'
                    }`}>
                      {msg.text}
                    </div>
                  </div>
                ))}
                {isTyping && (
                  <div className="flex justify-start">
                    <div className="bg-white border border-slate-200 rounded-2xl rounded-bl-none px-4 py-3 shadow-sm">
                      <Loader2 className="w-5 h-5 animate-spin text-slate-400" />
                    </div>
                  </div>
                )}
                <div ref={chatEndRef} />
              </div>

              <div className="p-3 bg-white border-t border-slate-100">
                <div className="flex items-center space-x-2 bg-slate-100 rounded-full px-4 py-2">
                  <input
                    type="text"
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    onKeyDown={(e) => e.key === 'Enter' && handleSendMessage()}
                    placeholder="Ask about appointments..."
                    className="flex-1 bg-transparent border-none focus:outline-none text-sm text-slate-800 placeholder-slate-400"
                  />
                  <button 
                    onClick={handleSendMessage}
                    disabled={!chatInput.trim() || isTyping}
                    className="text-primary-600 hover:text-primary-700 disabled:opacity-50"
                  >
                    <Send size={18} />
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Demo;
