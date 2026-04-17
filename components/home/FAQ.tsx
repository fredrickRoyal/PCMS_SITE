"use client"
import { ChevronDown, ChevronRight, ArrowRight } from "lucide-react";
import { useState } from "react";

const faqTopics = [
  {
    id: "general",
    title: "Different from other agencies?",
    description: "We take the time to understand your unique challenges and provide strategies",
    gradient: "from-yellow-400 to-red-500",
    questions: [
      {
        id: "measure-success",
        question: "How do you measure the success of your services?",
        answer: "We measure success through key performance indicators (KPIs) such as revenue growth, customer engagement, lead generation, brand visibility."
      },
      {
        id: "process",
        question: "What is the process for starting a project?",
        answer: "Our process begins with an initial consultation to understand your needs, followed by a detailed proposal and project plan tailored to your objectives."
      }
    ]
  },
  {
    id: "access",
    title: "How can I schedule a consultation?",
    description: "You can schedule a consultation by filling out the contact form on our website",
    gradient: "from-blue-400 to-purple-500",
    questions: [
      {
        id: "industries",
        question: "Do you work with businesses in all industries?",
        answer: "Yes, we work with businesses across various industries, adapting our strategies to meet each sector's unique needs and challenges."
      },
      {
        id: "results",
        question: "How long does it take to see results?",
        answer: "The timeline for results varies depending on the scope of the project. For digital marketing efforts, you may start seeing improvements within a few months. Larger projects like business consulting or brand development may take longer."
      }
    ]
  }
];

export function FAQ() {
  const [selectedTopic, setSelectedTopic] = useState("general");
  const [openQuestion, setOpenQuestion] = useState<string | null>(null);

  const selectedTopicData = faqTopics.find(topic => topic.id === selectedTopic);

  return (
    <section className="py-8 md:py-16 text-secondary bg-gray-50 min-h-screen">
      <div className="container mx-auto px-4">
        <h2 className="text-xl md:text-2xl font-bold text-gray-900 mb-6 md:mb-8">
          Frequently Asked Questions
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 max-w-6xl mx-auto">
          {/* Topics on the left */}
          <div className="md:col-span-4 space-y-3 md:space-y-4">
            {faqTopics.map((topic) => (
              <div
                key={topic.id}
                role="button"
                tabIndex={0}
                onClick={() => {
                  setSelectedTopic(topic.id);
                  setOpenQuestion(null);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setSelectedTopic(topic.id);
                    setOpenQuestion(null);
                  }
                }}
                className={`w-full text-left p-4 rounded-lg cursor-pointer transition-all duration-300 ${topic.id === selectedTopic ? 'bg-gradient-to-r ' + topic.gradient + ' text-white' : 'bg-white hover:bg-gray-50'}`}
              >
                <div className="flex items-center justify-between mb-2">
                  <ArrowRight size={18} className={`transition-colors duration-300 ${topic.id === selectedTopic ? 'text-white' : 'text-gray-400'}`} />
                  <ChevronRight size={18} className={`transition-colors duration-300 ${topic.id === selectedTopic ? 'text-white' : 'text-gray-400'}`} />
                </div>
                <h3 className="font-medium mb-1">{topic.title}</h3>
                <p className={`text-sm transition-colors duration-300 ${topic.id === selectedTopic ? 'text-white/90' : 'text-gray-500'}`}>
                  {topic.description}
                </p>
              </div>
            ))}
          </div>

          {/* Questions on the right */}
          <div className="md:col-span-8 space-y-3 md:space-y-4">
            {selectedTopicData?.questions.map((item) => (
              <div
                key={item.id}
                className="border border-gray-200 rounded-lg bg-white overflow-hidden transition-all duration-300"
              >
                <button
                  onClick={() => setOpenQuestion(openQuestion === item.id ? null : item.id)}
                  className="flex items-center justify-between w-full p-4 text-left"
                >
                  <span className="font-medium text-gray-900">{item.question}</span>
                  <ChevronDown
                    size={18}
                    className={`transform transition-transform duration-300 ${openQuestion === item.id ? "rotate-180" : ""}`}
                  />
                </button>
                {openQuestion === item.id && (
                  <div className="px-4 pb-4 animate-fadeIn">
                    <p className="text-gray-600">{item.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}