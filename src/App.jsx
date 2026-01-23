import React, { useState, useEffect, useRef } from 'react';
import { 
  Linkedin, 
  Github, 
  Mail, 
  Phone, 
  MapPin, 
  Download, 
  ExternalLink, 
  Menu, 
  X, 
  BarChart3, 
  PieChart, 
  Database, 
  Briefcase, 
  GraduationCap, 
  Award, 
  User,
  Facebook,
  Twitter,
  Globe,
  TrendingUp,
  Activity,
  Layers,
  Code,
  FileSpreadsheet,
  Zap,
  Search,
  Target,
  BookOpen,
  ArrowRight
} from 'lucide-react';

// --- Data Configuration ---
const profileData = {
  name: "Soham Patil",
  role: "Business Analyst | Data Analyst | MBA – Business Analytics",
  location: "Indore, Madhya Pradesh, India",
  phone: "+91-9302552960",
  email: "patilsoham0303@gmail.com",
  summary: "Translating complex datasets into actionable business strategies. As an MBA scholar in Business Analytics, I bridge the gap between raw data and executive decision-making using SQL, Python, and Advanced Visualization.",
  profileImage: "https://i.ibb.co/4wdKdT5n/Gemini-Generated-Image-1uyih21uyih21uyi.jpg",
  links: {
    linkedin: "https://www.linkedin.com/in/sohampatil333/",
    github: "https://github.com/sohampatil333",
    portfolio: "https://sohampatil333.github.io/portfolio/",
    twitter: "https://x.com/sohampatil333",
    facebook: "https://www.facebook.com/sohampatil0303"
  }
};

const skills = [
  { category: "Technical Mastery", icon: Database, items: [
    { name: "SQL & Database", level: 80 },
    { name: "Power BI & Tableau", level: 75 },
    { name: "Advanced Excel", level: 85 },
    { name: "Python for Data", level: 75 },
    { name: "R Language", level: 70 },
  ]},
  { category: "Business Acumen", icon: TrendingUp, items: [
    { name: "Data Analysis", level: 95 },
    { name: "Financial Reporting", level: 80 },
    { name: "Business Strategy", level: 85 },
    { name: "Market Research", level: 90 }
  ]},
  { category: "Professional Skills", icon: User, items: [
    { name: "Strategic Communication", level: 75 },
    { name: "Critical Thinking", level: 90 },
    { name: "Problem Solving", level: 90 },
    { name: "Agile Management", level: 85 }
  ]}
];

const education = [
  {
    degree: "MBA – Business Analytics",
    institution: "Medi-Caps University",
    year: "2024–Present",
    score: "CGPA: 7.48/10",
    desc: "Specializing in predictive analytics, business strategy, and data mining.",
    logo: "https://portal.medicaps.ac.in/accsoft2/images/medi_logo.jpeg"
  },
  {
    degree: "BBA – Management",
    institution: "BIMTS College of Nursing",
    year: "2021–2024",
    score: "CGPA: 7.95/10",
    desc: "Core focus on management principles, organizational behavior, and finance.",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQP7Z6WtsWrufX-01EyPdGIgNB_7F6uOf2ToA&s"
  },
  {
    degree: "12th – CBSE",
    institution: "Jawahar Navodaya Vidyalaya, Burhanpur",
    year: "2021",
    score: "70.40%",
    desc: "Higher Secondary School Education.",
    logo: "https://static.toiimg.com/thumb/msid-66823683,width-400,resizemode-4/66823683.jpg"
  },
  {
    degree: "10th – CBSE",
    institution: "Jawahar Navodaya Vidyalaya, Burhanpur",
    year: "2019",
    score: "60.80%",
    desc: "Secondary School Education covering core academic subjects.",
    logo: "https://static.toiimg.com/thumb/msid-66823683,width-400,resizemode-4/66823683.jpg"
  }
];

const internships = [
  {
    role: "Data Analyst Intern",
    company: "upGrad",
    duration: "Jun 2025 – Aug 2025",
    logo: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTykcV8-hVIkwpxgPUDzC1aF8ei_bt7tA6zvA&s",
    color: "from-red-500 to-orange-500",
    description: [
      "Completed a structured internship and training program focused on Python, R, SQL, Excel, and data analytics fundamentals.",
      "Performed data cleaning, transformation, and exploratory analysis on structured datasets.",
      "Created basic visualizations and reports to support data-driven insights.",
      "Worked on practice-based business problem statements under mentor guidance.",
      "Strengthened understanding of analytical thinking and business use cases."
    ]
  },
  {
    role: "Business Analyst Intern",
    company: "MentorMind",
    duration: "Jun 2025 – Jul 2025",
    logo: "https://mentormind-static-assets.s3.ap-south-1.amazonaws.com/mentormind_logo.png",
    color: "from-blue-500 to-cyan-500",
    description: [
      "Worked on a Customer Churn Analysis project using a banking dataset of over 10,000 customer records.",
      "Used SQL to analyze customer behavior and identify key churn drivers.",
      "Interpreted results to suggest basic retention strategies based on data patterns.",
      "Gained hands-on exposure to real-world business analytics workflow."
    ]
  },
  {
    role: "Finance Intern",
    company: "NEPA Limited",
    duration: "Feb 2024",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHS9e7ByAQoSA/company-logo_200_200/company-logo_200_200/0/1648623717629?e=2147483647&v=beta&t=f7MBd7AKP3g-LKTB9VyLj8vRDLuCI4mBYshj91D8lvA",
    color: "from-green-500 to-emerald-500",
    description: [
      "Observed and supported finance department operations, including basic financial reporting and documentation.",
      "Gained exposure to accounting procedures and commercial workflows in a large-scale organization.",
      "Assisted in report preparation and internal documentation for commercial processes.",
      "Developed understanding of how finance and commercial teams support business operations."
    ]
  },
  {
    role: "Commercial Dept. Intern",
    company: "NEPA Limited",
    duration: "Jan 2023",
    logo: "https://media.licdn.com/dms/image/v2/C4E0BAQHS9e7ByAQoSA/company-logo_200_200/company-logo_200_200/0/1648623717629?e=2147483647&v=beta&t=f7MBd7AKP3g-LKTB9VyLj8vRDLuCI4mBYshj91D8lvA",
    color: "from-teal-500 to-cyan-600",
    description: [
      "Learned about commercial department processes and inter-department coordination.",
      "Assisted with basic reporting and internal process documentation.",
      "Observed how large organizations manage procurement and operational workflows."
    ]
  },
  {
    role: "Sales & Marketing Intern",
    company: "Yashraj Motors",
    duration: "Mar 2022",
    logo: "Y",
    color: "from-purple-500 to-pink-500",
    description: [
      "Supported sales and marketing activities during a local promotional campaign.",
      "Performed data entry and record management using Microsoft Excel.",
      "Assisted in customer interaction and gained exposure to basic sales operations."
    ]
  }
];

const projects = [
  {
    title: "Banking Churn Analytics",
    tech: "SQL • PostgreSQL • Power BI",
    link: "https://github.com/sohampatil333/Customer-churn-analytics-for-the-banking-industry-SQL",
    stat: "10k+ Records Analyzed",
    details: [
      "Identified churn patterns based on demographics & financial behavior.",
      "Used complex SQL queries for customer segmentation.",
      "Visualized actionable insights for retention strategies."
    ]
  },
  {
    title: "Coffee Sales Dashboard",
    tech: "Excel • Power Query • Pivot",
    link: "https://github.com/sohampatil333/Coffee-Shop-Sales-Dashboard",
    stat: "$698K Sales Tracked",
    image: "https://github.com/sohampatil333/Coffee-Shop-Sales-Dashboard/blob/main/Coffie%20Shop%20Sales%20Dashboard.png?raw=true",
    details: [
      "Interactive dashboard analyzing sales across multiple locations.",
      "Integrated slicers for time-based performance tracking.",
      "Revealed peak sales hours to optimize staffing."
    ]
  },
  {
    title: "FNP Sales Analysis",
    tech: "Excel • Dynamic Charts",
    link: "https://github.com/sohampatil333/Excel-Sales-Analysis-Dashboard-FNP-Case-Study",
    stat: "35 Lakhs+ Revenue",
    image: "https://github.com/sohampatil333/Excel-Sales-Analysis-Dashboard-FNP-Case-Study/blob/main/FNP%20Dashboard.png?raw=true",
    details: [
      "Comprehensive analysis of 1000+ orders.",
      "Categorized top-performing products and regional trends.",
      "Automated reporting workflows using Power Query."
    ]
  }
];

// Sample Blog Data
const blogs = [
  {
    title: "Industrial Exposure at Dabur India Ltd",
    excerpt: "As part of my MBA (Business Analytics) curriculum, I visited Dabur India Ltd on 23 Jan 2026 to understand FMCG operations, manufacturing standards, and corporate culture.",
    content: `As part of my MBA (Business Analytics) curriculum, I had the opportunity to visit Dabur India Ltd on 23 January 2026. This industrial visit was organized to help us understand how large FMCG organizations function in real-world settings and how classroom concepts are applied on the shop floor.

The journey began from our college campus, from where we departed by bus to the Dabur manufacturing unit. Upon arrival, we were guided to the meeting room, where the visit formally started. The company team welcomed us warmly and arranged refreshments, including snacks and Dabur products such as fruit juice and Hajmola, which created a comfortable and engaging environment for the session ahead.

The introductory session was conducted by Mr. Kumar Niraj, Unit HR Head, who shared insights into Dabur’s organizational values, employee culture, manufacturing standards, and the company’s strong commitment to quality, safety, and Ayurveda-based products. His explanation helped us understand how a legacy FMCG brand maintains consistency and trust at a large scale.

After the introduction, we were taken to the Hajmola production unit, where a company representative explained the complete production workflow. We observed automated packaging machines, quality control processes, hygiene standards, and safety practices followed on the shop floor. Seeing these processes in action helped us understand how efficiency and precision are maintained in large-scale manufacturing operations.

One of the most valuable aspects of the visit was interacting with senior professionals, including Mr. Ashish Dixit (Unit Head), Mr. Kumar Niraj (Unit HR Head), and Mr. Naresh Kumar Chadar (Senior Executive – CSR). They shared practical insights into operational management, human resource practices, corporate social responsibility initiatives, and what the industry expects from management graduates entering the corporate world.

After completing the plant visit and discussions, photographs were taken as permitted, and we returned to the college campus. Overall, the visit was a meaningful learning experience that bridged the gap between theory and practice. It strengthened my understanding of FMCG operations, corporate culture, and the importance of quality and safety in manufacturing, making it a valuable part of my academic and professional journey.`,
    date: "Jan 2026",
    readTime: "5 min read",
    tags: ["Industrial Visit", "FMCG", "Corporate Exposure"],
    image: "https://i.ibb.co/jvNSTDWH/IMG-20260123-WA0078.jpg",
    imgPosition: "object-center"
  },
  {
    title: "Preparing for Placements: Building Interview and Professional Readiness",
    excerpt: "As part of my MBA in Business Analytics at Medi-Caps University, I participated in a structured placement training program focused on interview preparation, resume building, and professional communication.",
    content: `As part of my MBA in Business Analytics at Medi-Caps University, I participated in a structured placement training program focused on interview preparation, resume building, and professional communication.

This training helped me understand what recruiters actually look for beyond academic knowledge. We worked on refining resumes, structuring self-introductions, and answering interview questions with clarity and confidence. The sessions also emphasized the importance of body language, communication skills, and logical thinking during interviews.

One of the key learnings from this training was how to present my analytics skills in a business-oriented manner. Instead of only talking about tools, I learned how to explain my projects, learning outcomes, and problem-solving approach in a way that aligns with industry expectations.

Interacting with peers during mock discussions and practice sessions also helped me identify areas of improvement and gain confidence. This experience made me more aware of how preparation, clarity, and continuous improvement play a crucial role in placement success.

Overall, this placement training strengthened my readiness for interviews and helped me approach the recruitment process with a more structured and professional mindset.`,
    date: "Nov 2025",
    readTime: "4 min read",
    tags: ["Placement Prep", "Soft Skills", "Career"],
    image: "https://i.ibb.co/VchyYZ05/1767976809867.jpg",
    imgPosition: "object-center"
  },
  {
    title: "Improving My Data Presentation and Storytelling Skills",
    excerpt: "As part of my MBA in Business Analytics at Medi-Caps University, I have been consciously working on improving my data presentation and communication skills alongside technical learning.",
    content: `As part of my MBA in Business Analytics at Medi-Caps University, I have been consciously working on improving my data presentation and communication skills alongside technical learning.

While building dashboards and analyzing data is important, I realized that insights create value only when they are communicated clearly. This presentation was part of my effort to explain Excel-based analysis using charts, comparisons, and structured insights in a simple and understandable manner.

During this session, I focused on explaining what the data shows, why certain patterns matter, and how these insights can support business decisions. Presenting in front of peers helped me improve my confidence, clarity, and ability to answer questions logically.

This experience taught me that a business analyst’s role is not limited to working behind the screen. Effective storytelling, clear explanations, and structured thinking are equally important to ensure that data-driven insights are understood by stakeholders.

Working on such presentations has helped me become more confident in combining analytics with communication, which I consider a key skill for real-world business analytics roles.`,
    date: "Oct 2025",
    readTime: "3 min read",
    tags: ["Soft Skills", "Presentation", "Data Storytelling"],
    image: "https://i.ibb.co/sJgdfHwd/Gemini-Generated-Image-o1jnbdo1jnbdo1jn.jpg",
    imgPosition: "object-center"
  },
  {
    title: "Completing My First Structured Training in Data Analytics",
    excerpt: "As part of my MBA in Business Analytics, I successfully completed a structured training program in Data Analytics conducted by upGrad in collaboration with Medi-Caps University.",
    content: `As part of my MBA in Business Analytics, I successfully completed a structured training program in Data Analytics conducted by upGrad in collaboration with Medi-Caps University.

This program marked an important step in my analytics journey. It helped me move from basic theoretical understanding to practical exposure in tools and concepts such as Python, R, SQL, Excel, and data analysis fundamentals. Each module focused not only on learning tools but also on understanding how data is used to solve real business problems.

During the training, I worked on practice-based exercises that strengthened my ability to clean data, analyze patterns, and interpret results with a business perspective. I also learned the importance of structured thinking, accuracy, and consistency while working with data.

Receiving this certificate was more than just completing a course—it reflected my growing commitment to building a strong foundation in analytics. This experience increased my confidence and motivated me to further explore real-world projects, dashboards, and business use cases.

This milestone remains a key part of my transition into a data-driven and analytical mindset.`,
    date: "Aug 2025",
    readTime: "3 min read",
    tags: ["Certification", "upGrad", "Data Analytics"],
    image: "https://i.ibb.co/BVZzpvRq/IMG-6366.jpg",
    imgPosition: "object-center" 
  },
  {
    title: "An Academic Exposure Visit to IIT Indore",
    excerpt: "During my MBA in Business Analytics, I got the opportunity to visit Indian Institute of Technology Indore along with my batch as part of an academic exposure program.",
    content: `During my MBA in Business Analytics, I got the opportunity to visit Indian Institute of Technology Indore along with my batch as part of an academic exposure program.

This visit allowed me to experience an environment where research, innovation, and analytical thinking play a central role in education. Being on campus and observing the academic culture helped me understand how advanced institutions integrate technology, data, and structured research into real-world problem solving.

The visit highlighted the importance of data-driven approaches, interdisciplinary learning, and continuous skill development. It made me realize that analytics is not limited to tools or dashboards, but also involves discipline, curiosity, and the ability to think critically about problems.

This experience strengthened my motivation to pursue analytics with a more focused and structured mindset. It encouraged me to work on building strong foundations in data analysis, business understanding, and decision-making, which are essential for a career in Business Analytics.

Looking back, this visit remains an important learning milestone that reinforced my interest in analytics and professional growth.`,
    date: "Mar 2025",
    readTime: "4 min read",
    tags: ["Academic Visit", "IIT Indore", "Analytics"],
    image: "https://i.ibb.co/kjS0gvZ/IMG-20250321-WA0053.jpg",
    imgPosition: "object-center"
  },
  {
    title: "The First Step into My Analytics Journey",
    excerpt: "This photograph was taken on the day I officially joined Medi-Caps University to pursue my MBA in Business Analytics. At that moment, I had a clear intention...",
    content: `This photograph was taken on the day I officially joined Medi-Caps University to pursue my MBA in Business Analytics.

At that moment, I had a clear intention—to move beyond theoretical management concepts and develop a strong analytical mindset.
Coming from a management background, I was curious about how data could influence real business decisions. Joining this program marked the beginning of my structured exposure to analytics, where I started learning how numbers, patterns, and insights work together to support strategy.

During the initial phase, I was introduced to tools and concepts such as data analysis fundamentals, business problem framing, and analytical thinking. This transition helped me realize that analytics is not just about tools, but about asking the right questions and interpreting data meaningfully.

This step laid the foundation for my journey into SQL, Excel, Power BI, and real-world analytics projects. Looking back, this moment represents the shift from being a student of management to becoming a learner of data-driven decision-making.`,
    date: "Aug 2024",
    readTime: "3 min read",
    tags: ["MBA Journey", "Reflection", "Career"],
    image: "https://i.ibb.co/ksjj1YWY/1724954985944-01.jpg",
    imgPosition: "object-center"
  }
];

const certifications = [
  "Introduction to MS Excel",
  "Business Analysis Basics",
  "TCS iON Career Edge – Young Professional",
  "Introduction to Generative AI",
  "Essential Tools for Data Analytics",
  "ChatGPT for Data Analytics",
  "Study on Customer Churn Analytics (SQL)"
];

// --- Helper Components ---

const BackgroundGrid = () => (
  <div className="absolute inset-0 pointer-events-none z-0">
    <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
    <div className="absolute top-0 left-0 right-0 h-64 bg-gradient-to-b from-[#0a0f1c] to-transparent"></div>
    <div className="absolute bottom-0 left-0 right-0 h-64 bg-gradient-to-t from-[#0a0f1c] to-transparent"></div>
  </div>
);

const SectionHeader = ({ title, icon: Icon, subtitle }) => (
  <div className="mb-12 relative z-10">
    <div className="flex items-center gap-3 mb-2">
      <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-lg text-cyan-400 border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.1)]">
        <Icon size={24} />
      </div>
      <span className="text-cyan-500 font-bold tracking-widest text-sm uppercase">
        {subtitle}
      </span>
    </div>
    <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight">
      {title}
    </h2>
    <div className="w-24 h-1.5 bg-gradient-to-r from-cyan-500 to-transparent mt-4 rounded-full"></div>
  </div>
);

const FadeInSection = ({ children, className }) => {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });

    if (ref.current) observer.observe(ref.current);
    return () => ref.current && observer.unobserve(ref.current);
  }, []);

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-1000 transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'} ${className}`}
    >
      {children}
    </div>
  );
};

const AnimatedBar = ({ name, level }) => {
  const [isVisible, setIsVisible] = useState(false); 
  const divRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if(entry.isIntersecting) setIsVisible(true);
    }, { threshold: 0.1 });
    if(divRef.current) observer.observe(divRef.current);
    return () => divRef.current && observer.unobserve(divRef.current);
  }, []);

  return (
    <div ref={divRef} className="mb-5 group">
      <div className="flex justify-between mb-2">
        <span className="text-sm font-semibold text-slate-300 group-hover:text-cyan-300 transition-colors">{name}</span>
        <span className="text-sm font-bold text-cyan-500">{level}%</span>
      </div>
      <div className="w-full bg-slate-800/80 rounded-full h-2.5 overflow-hidden border border-white/5">
        <div 
          className="h-full rounded-full bg-gradient-to-r from-cyan-600 via-teal-500 to-blue-500 shadow-[0_0_10px_rgba(6,182,212,0.4)] relative"
          style={{ 
            width: isVisible ? `${level}%` : '0%',
            transition: 'width 1.5s cubic-bezier(0.22, 1, 0.36, 1)'
          }}
        >
          <div className="absolute inset-0 bg-white/20 w-full animate-[shimmer_2s_infinite] translate-x-[-100%]" />
        </div>
      </div>
    </div>
  );
};

const Typewriter = ({ words, delay = 100, pause = 2000 }) => {
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [currentText, setCurrentText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const handleTyping = () => {
      const fullText = words[currentWordIndex];
      if (isDeleting) {
        setCurrentText(fullText.substring(0, currentText.length - 1));
      } else {
        setCurrentText(fullText.substring(0, currentText.length + 1));
      }

      if (!isDeleting && currentText === fullText) {
        setTimeout(() => setIsDeleting(true), pause);
      } else if (isDeleting && currentText === '') {
        setIsDeleting(false);
        setCurrentWordIndex((prev) => (prev + 1) % words.length);
      }
    };
    const timer = setTimeout(handleTyping, isDeleting ? delay / 2 : delay);
    return () => clearTimeout(timer);
  }, [currentText, isDeleting, words, delay, pause, currentWordIndex]);

  return (
    <span className="text-cyan-400 border-r-2 border-cyan-400 pr-1 animate-pulse">
      {currentText}
    </span>
  );
};

// --- Main Application ---

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [selectedBlog, setSelectedBlog] = useState(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#0a0f1c] text-slate-200 font-sans selection:bg-cyan-500/30 overflow-x-hidden">
      {/* Blog Modal Overlay */}
      {selectedBlog && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-8 bg-black/80 backdrop-blur-sm animate-in fade-in duration-200" onClick={() => setSelectedBlog(null)}>
          <div className="bg-[#131b2e] w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl border border-white/10 shadow-2xl relative animate-in zoom-in-95 duration-200 custom-scrollbar" onClick={e => e.stopPropagation()}>
            <button onClick={() => setSelectedBlog(null)} className="absolute top-4 right-4 p-2 bg-black/50 hover:bg-red-500/80 rounded-full text-white transition-colors z-20 backdrop-blur-md"><X size={24} /></button>
            {selectedBlog.image && (
               <div className="h-64 md:h-80 w-full relative">
                  <img src={selectedBlog.image} alt={selectedBlog.title} className="w-full h-full object-cover" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] via-[#131b2e]/50 to-transparent"></div>
               </div>
            )}
            <div className={`p-8 md:p-12 ${!selectedBlog.image ? 'pt-16' : ''}`}>
               <div className="flex flex-wrap gap-4 mb-6 text-sm">
                  <span className="text-cyan-400 font-mono bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20">{selectedBlog.tags[0]}</span>
                  <span className="text-slate-400 flex items-center">{selectedBlog.date}</span>
                  <span className="text-slate-400 flex items-center">• {selectedBlog.readTime}</span>
               </div>
               <h2 className="text-3xl md:text-4xl font-bold text-white mb-8 leading-tight">{selectedBlog.title}</h2>
               <div className="prose prose-invert prose-lg max-w-none text-slate-300">
                  {selectedBlog.content.split('\n').map((paragraph, idx) => paragraph.trim() !== "" && <p key={idx} className="mb-6 leading-relaxed">{paragraph}</p>)}
               </div>
            </div>
          </div>
        </div>
      )}

      <BackgroundGrid />
      <div className="fixed top-0 left-1/2 -translate-x-1/2 w-[800px] h-[600px] bg-cyan-500/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="fixed bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Navigation */}
      <nav className={`fixed w-full z-50 transition-all duration-300 ${scrolled ? 'bg-[#0a0f1c]/90 backdrop-blur-xl border-b border-white/5 py-2' : 'bg-transparent py-4'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            <a href="#hero" className="flex items-center gap-3 group">
              <div className="w-10 h-10 bg-gradient-to-tr from-cyan-600 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/20 group-hover:shadow-cyan-500/40 transition-all">
                <BarChart3 className="text-white" size={24} />
              </div>
              <div className="text-left">
                <span className="font-bold text-xl text-white tracking-wider block leading-none">SOHAM PATIL</span>
                <span className="text-[10px] text-cyan-400 uppercase tracking-[0.2em]">Analyst</span>
              </div>
            </a>
            
            <div className="hidden md:block">
              <div className="flex items-center space-x-8">
                {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Blog'].map((item) => (
                  <a
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="text-sm font-medium text-slate-400 hover:text-white hover:scale-105 transition-all relative group"
                  >
                    {item}
                    <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-cyan-500 transition-all group-hover:w-full"></span>
                  </a>
                ))}
                <a 
                  href="#contact" 
                  className="bg-white/5 hover:bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 px-5 py-2.5 rounded-full text-sm font-bold transition-all hover:shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:-translate-y-0.5"
                >
                  Hire Me
                </a>
              </div>
            </div>

            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden text-white p-2">
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        {isMenuOpen && (
          <div className="md:hidden bg-[#0a0f1c] border-b border-white/10 absolute w-full top-16 left-0">
            <div className="px-4 py-4 space-y-2 bg-[#0a0f1c]">
              {['About', 'Experience', 'Projects', 'Skills', 'Education', 'Blog'].map((item) => (
                <a
                  key={item}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setIsMenuOpen(false)}
                  className="block px-3 py-3 rounded-lg hover:bg-white/5 text-slate-300 hover:text-white text-base font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>
        )}
      </nav>

      {/* 1. Hero Section */}
      <section id="hero" className="relative pt-24 pb-12 lg:pt-0 lg:pb-0 overflow-hidden min-h-screen flex items-center">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-16 items-center">
            
            {/* Dynamic Text Content */}
            <FadeInSection className="space-y-6 order-2 lg:order-1">
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full bg-cyan-500/5 border border-cyan-500/20 text-cyan-400 text-sm font-semibold tracking-wide">
                <Zap size={16} className="text-yellow-400 fill-yellow-400 animate-pulse" />
                <span>Available for Immediate Joining</span>
              </div>

              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold text-white leading-tight">
                  Turning Raw Data <br />
                  Into <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 via-teal-400 to-blue-500">Business Growth</span>
                </h1>
                
                <div className="text-xl md:text-2xl text-slate-300 font-light flex items-center gap-2">
                  <span>I am a</span>
                  <Typewriter 
                    words={["Business Analyst.", "Data Storyteller.", "Strategy Enthusiast.", "SQL Expert."]} 
                  />
                </div>

                <p className="text-base md:text-lg text-slate-400 max-w-xl leading-relaxed">
                  {profileData.summary}
                </p>
              </div>
              
              <div className="flex flex-col sm:flex-row gap-4 pt-2">
                <a 
                  href="https://drive.google.com/file/d/18TwErOYfmH1G7TW24IgdiFX4WxvM12P2/view?usp=sharing"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-center gap-3 bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-500 hover:to-blue-500 text-white px-8 py-3 rounded-xl font-bold shadow-lg shadow-cyan-500/25 transition-all transform hover:-translate-y-1 hover:shadow-cyan-500/40"
                >
                  <Download size={20} />
                  Download Resume
                </a>
                <div className="flex gap-3 justify-center sm:justify-start">
                  {Object.keys(profileData.links).map((key) => {
                     if(key === 'linkedin') return <a key={key} href={profileData.links[key]} target="_blank" rel="noreferrer" className="p-3 bg-[#131b2e] hover:bg-[#1c263d] rounded-xl border border-white/10 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all"><Linkedin size={22} /></a>;
                     if(key === 'github') return <a key={key} href={profileData.links[key]} target="_blank" rel="noreferrer" className="p-3 bg-[#131b2e] hover:bg-[#1c263d] rounded-xl border border-white/10 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all"><Github size={22} /></a>;
                     if(key === 'portfolio') return <a key={key} href={profileData.links[key]} target="_blank" rel="noreferrer" className="p-3 bg-[#131b2e] hover:bg-[#1c263d] rounded-xl border border-white/10 hover:border-cyan-500/50 text-slate-300 hover:text-white transition-all"><Globe size={22} /></a>;
                     return null;
                  })}
                </div>
              </div>
            </FadeInSection>

            {/* Holographic Visual Center */}
            <FadeInSection className="relative order-1 lg:order-2 flex justify-center items-center h-[350px] md:h-[450px]">
              
              {/* Central Hexagon Profile */}
              <div className="relative z-20 w-64 h-64 md:w-80 md:h-80">
                <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500 to-blue-600 rounded-full opacity-20 blur-3xl animate-pulse"></div>
                
                {/* Rotating Rings */}
                <div className="absolute inset-0 border border-cyan-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
                <div className="absolute -inset-4 border border-dashed border-blue-500/20 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
                
                <div className="relative w-full h-full rounded-full border-4 border-[#0a0f1c] overflow-hidden shadow-2xl shadow-cyan-500/20 group">
                  <img 
                    src={profileData.profileImage} 
                    alt="Soham" 
                    className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-110"
                    onError={(e) => { e.target.src = "https://ui-avatars.com/api/?name=Soham+Patil&background=0D8ABC&color=fff"; }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a0f1c]/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end justify-center pb-6">
                    <span className="text-cyan-400 font-bold tracking-widest text-sm"></span>
                  </div>
                </div>

                {/* Floating Tech Icons (Orbiting) */}
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-12 animate-bounce delay-700">
                   <div className="bg-[#131b2e] p-3 rounded-xl border border-cyan-500/30 shadow-lg shadow-cyan-500/20">
                      <Database className="text-cyan-400" size={24} />
                   </div>
                </div>
                <div className="absolute bottom-10 -right-8 animate-bounce delay-100">
                   <div className="bg-[#131b2e] p-3 rounded-xl border border-orange-500/30 shadow-lg shadow-orange-500/20">
                      <PieChart className="text-orange-400" size={24} />
                   </div>
                </div>
                <div className="absolute bottom-10 -left-8 animate-bounce delay-300">
                   <div className="bg-[#131b2e] p-3 rounded-xl border border-green-500/30 shadow-lg shadow-green-500/20">
                      <FileSpreadsheet className="text-green-400" size={24} />
                   </div>
                </div>

                {/* Floating Glass Card 1 */}
                <div className="absolute -top-10 -right-10 md:-right-20 bg-[#131b2e]/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl animate-[float_6s_ease-in-out_infinite]">
                   <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                      <div>
                         <p className="text-xs text-slate-400 font-mono">Status</p>
                         <p className="text-sm font-bold text-white">Open to Work</p>
                      </div>
                   </div>
                </div>

                {/* Floating Glass Card 2 */}
                <div className="absolute bottom--0 -left-6 md:-left-16 bg-[#131b2e]/80 backdrop-blur-md p-4 rounded-xl border border-white/10 shadow-xl animate-[float_7s_ease-in-out_infinite_reverse]">
                   <div className="flex items-center gap-3">
                      <TrendingUp className="text-cyan-400" size={16} />
                      <div>
                         <p className="text-xs text-slate-400 font-mono">Expertise</p>
                         <p className="text-sm font-bold text-white">Data Strategy</p>
                      </div>
                   </div>
                </div>
              </div>

            </FadeInSection>
          </div>
        </div>
      </section>

      {/* 2. About Section */}
      <section id="about" className="py-24 bg-[#0d1221]/30">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Professional Profile" subtitle="About Me" icon={User} />
          
          <FadeInSection className="grid md:grid-cols-12 gap-12 items-start">
             {/* Left Column: Text */}
             <div className="md:col-span-7 space-y-6 text-slate-300 leading-relaxed">
                <p className="text-lg text-white font-medium border-l-4 border-cyan-500 pl-4 bg-gradient-to-r from-cyan-500/10 to-transparent py-2">
                   I am currently pursuing an MBA in Business Analytics and building a strong foundation in data analysis, visualization, and business problem-solving.
                </p>
                
                <p>
                   I am particularly interested in how data-driven insights can support better decision-making and improve business performance. Through academic learning and internships, I have gained hands-on exposure to tools such as <span className="text-cyan-400">Excel, SQL, Power BI, Python, and R</span>.
                </p>

                <p>
                   I have worked on practical use cases including customer churn analysis, data cleaning, visualization, and reporting. These experiences have helped me understand how raw data can be transformed into meaningful insights for stakeholders. I also have exposure to finance, marketing, and commercial operations, giving me a broader understanding of business functions.
                </p>

                <div className="bg-[#131b2e] p-6 rounded-xl border border-white/5 mt-6">
                   <h3 className="text-white font-bold mb-4 flex items-center gap-2">
                      <Target className="text-cyan-500" size={20}/>
                      My Analytical Approach
                   </h3>
                   <ul className="space-y-3">
                      {[
                        "Understanding business and stakeholder requirements",
                        "Analyzing data to identify patterns and opportunities",
                        "Communicating insights clearly through dashboards and reports"
                      ].map((item, i) => (
                        <li key={i} className="flex items-start gap-3 text-sm">
                           <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-2 shrink-0"></span>
                           {item}
                        </li>
                      ))}
                   </ul>
                </div>
                
                <p className="font-medium text-white pt-4">
                   I am actively seeking entry-level opportunities or internships in Business Analysis / Data Analytics, where I can apply my analytical skills, learn from real-world challenges, and contribute to data-driven business decisions.
                </p>
             </div>

             {/* Right Column: Visual/Card */}
             <div className="md:col-span-5">
                <div className="relative bg-gradient-to-br from-[#131b2e] to-[#0a0f1c] p-1 rounded-2xl rotate-3 hover:rotate-0 transition-transform duration-500">
                   <div className="bg-[#0a0f1c] rounded-xl p-8 border border-white/5 relative overflow-hidden">
                      <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 rounded-full blur-2xl -mr-16 -mt-16"></div>
                      
                      <h3 className="text-2xl font-bold text-white mb-2">Soham Patil</h3>
                      <p className="text-cyan-400 text-sm mb-6">MBA Scholar • Business Analytics</p>
                      
                      <div className="space-y-4 mb-8">
                         <div className="flex items-center gap-3 text-sm text-slate-400">
                            <MapPin size={16} className="text-slate-500" />
                            Indore, Madhya Pradesh
                         </div>
                         <div className="flex items-center gap-3 text-sm text-slate-400">
                            <Mail size={16} className="text-slate-500" />
                            patilsoham0303@gmail.com
                         </div>
                         <div className="flex items-center gap-3 text-sm text-slate-400">
                            <Globe size={16} className="text-slate-500" />
                            Open to Relocate
                         </div>
                      </div>

                      <a href="#contact" className="block w-full py-3 text-center bg-cyan-600 hover:bg-cyan-500 text-white rounded-lg font-semibold transition-colors">
                         Contact Me
                      </a>
                   </div>
                </div>
             </div>
          </FadeInSection>
        </div>
      </section>

      {/* 3. Experience Section (Internships) */}
      <section id="experience" className="py-24 bg-[#0a0f1c] relative overflow-hidden">
        <div className="hidden lg:block absolute left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-cyan-500/30 to-transparent"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <SectionHeader title="Professional Trajectory" subtitle="Internships & Work" icon={Briefcase} />

          <div className="space-y-12 lg:space-y-24">
            {internships.map((job, index) => (
              <div key={index} className={`relative flex flex-col lg:flex-row gap-8 lg:gap-16 items-center ${index % 2 === 0 ? '' : 'lg:flex-row-reverse'}`}>
                
                <div className="absolute left-4 lg:left-1/2 -translate-x-1/2 w-4 h-4 bg-[#0a0f1c] border-2 border-cyan-500 rounded-full z-20 shadow-[0_0_15px_rgba(6,182,212,0.8)]"></div>
                
                <div className={`w-full lg:w-1/2 flex ${index % 2 === 0 ? 'lg:justify-end' : 'lg:justify-start'} pl-12 lg:pl-0`}>
                   <div className="bg-white/5 border border-white/10 px-4 py-2 rounded-lg text-cyan-400 font-mono text-sm">
                      {job.duration}
                   </div>
                </div>

                <FadeInSection className="w-full lg:w-1/2 pl-12 lg:pl-0">
                  <div className="bg-gradient-to-br from-[#131b2e] to-[#0f1524] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group relative overflow-hidden hover:shadow-2xl hover:shadow-cyan-900/10">
                    <div className={`absolute top-0 right-0 p-32 bg-gradient-to-br ${job.color} opacity-5 blur-[60px] rounded-full`}></div>
                    
                    <div className="relative z-10">
                      <div className="flex items-center gap-4 mb-4">
                        <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${job.color} flex items-center justify-center text-white font-bold text-xl shadow-lg overflow-hidden`}>
                          {job.logo.length > 1 ? (
                             <img src={job.logo} alt={job.company} className="w-full h-full object-cover bg-white" />
                          ) : (
                             job.logo
                          )}
                        </div>
                        <div>
                           <h3 className="text-xl font-bold text-white">{job.role}</h3>
                           <p className="text-slate-400">{job.company}</p>
                        </div>
                      </div>
                      
                      <ul className="space-y-3 mt-6">
                        {job.description.map((point, i) => (
                          <li key={i} className="flex items-start gap-3 text-slate-300 text-sm leading-relaxed">
                            <Activity size={16} className="mt-1 text-cyan-500 shrink-0" />
                            {point}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </FadeInSection>

              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Projects Section */}
      <section id="projects" className="py-24 bg-[#0d1221]/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Featured Analytics" subtitle="Case Studies & Dashboards" icon={TrendingUp} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <FadeInSection key={index} className="group h-full bg-[#131b2e] rounded-2xl overflow-hidden border border-white/5 hover:border-cyan-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_10px_40px_-10px_rgba(6,182,212,0.15)] flex flex-col">
                
                <div className="h-48 bg-[#0f1524] relative overflow-hidden flex items-center justify-center border-b border-white/5 group-hover:scale-105 transition-transform duration-700">
                   {project.image ? (
                     <>
                       <div className="absolute inset-0 bg-cyan-900/20 mix-blend-overlay z-10 group-hover:bg-transparent transition-colors"></div>
                       <img 
                         src={project.image} 
                         alt={project.title} 
                         className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-500"
                       />
                     </>
                   ) : (
                     <>
                       <div className="absolute inset-0 bg-cyan-500/5 group-hover:bg-cyan-500/10 transition-colors"></div>
                       <div className="absolute bottom-0 left-0 right-0 h-24 flex items-end justify-center gap-2 opacity-30 group-hover:opacity-60 transition-opacity">
                          {[40, 70, 50, 90, 60].map((h, i) => (
                             <div key={i} className="w-8 bg-cyan-500" style={{height: `${h}%`}}></div>
                          ))}
                       </div>
                     </>
                   )}
                   <div className="absolute bottom-4 right-4 z-20 bg-[#0a0f1c]/90 backdrop-blur px-3 py-1 rounded-lg border border-cyan-500/30 text-cyan-400 font-mono text-xs shadow-lg">
                      {project.stat}
                   </div>
                </div>

                <div className="p-8 flex flex-col flex-1 relative z-20 bg-[#131b2e]">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-bold text-white group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="p-2 bg-white/5 rounded-full text-slate-400 hover:text-white hover:bg-cyan-500 transition-colors">
                      <ExternalLink size={18} />
                    </a>
                  </div>
                  
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.split('•').map((tech, i) => (
                      <span key={i} className="px-2 py-1 text-[10px] uppercase font-bold text-slate-400 bg-white/5 rounded border border-white/5">
                        {tech.trim()}
                      </span>
                    ))}
                  </div>
                  
                  <ul className="space-y-3 mb-8 flex-1">
                    {project.details.map((detail, i) => (
                      <li key={i} className="text-sm text-slate-400 flex items-start gap-3">
                         <span className="w-1.5 h-1.5 rounded-full bg-cyan-500 mt-1.5 shrink-0"></span> 
                         {detail}
                      </li>
                    ))}
                  </ul>

                  <a 
                    href={project.link} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="w-full py-3 rounded-xl bg-gradient-to-r from-slate-800 to-slate-900 hover:from-cyan-600 hover:to-blue-600 text-slate-300 hover:text-white font-semibold transition-all text-center text-sm border border-white/5"
                  >
                    View Analysis
                  </a>
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Skills Section */}
      <section id="skills" className="py-24 bg-[#0a0f1c] relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <SectionHeader title="Analytical Toolkit" subtitle="Technical Proficiency" icon={Layers} />
          
          <div className="grid lg:grid-cols-3 gap-8">
            {skills.map((skillGroup, idx) => (
              <FadeInSection key={idx} className="bg-[#131b2e]/60 backdrop-blur-md p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-cyan-900/20 group">
                <div className="flex items-center gap-4 mb-8">
                  <div className="p-3 bg-cyan-500/10 rounded-xl text-cyan-400 group-hover:scale-110 transition-transform duration-300">
                    <skillGroup.icon size={28} />
                  </div>
                  <h3 className="text-xl font-bold text-white">{skillGroup.category}</h3>
                </div>
                
                <div className="space-y-2">
                  {skillGroup.items.map((skill) => (
                    <AnimatedBar key={skill.name} name={skill.name} level={skill.level} />
                  ))}
                </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Education Section */}
      <section id="education" className="py-24 bg-[#0d1221]/50 relative">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Academic Foundation" subtitle="Education" icon={GraduationCap} />
          
          <div className="space-y-8">
            {education.map((edu, idx) => (
              <FadeInSection key={idx} className="flex flex-col md:flex-row gap-6 md:items-center bg-[#131b2e] p-8 rounded-2xl border border-white/5 hover:border-cyan-500/30 transition-all group">
                 <div className="flex-shrink-0">
                    <div className="w-16 h-16 rounded-2xl bg-white/5 border border-cyan-500/20 flex items-center justify-center overflow-hidden group-hover:scale-110 transition-transform shadow-[0_0_15px_rgba(6,182,212,0.1)]">
                       {edu.logo ? (
                         <img src={edu.logo} alt={edu.institution} className="w-full h-full object-cover" />
                       ) : (
                         <GraduationCap size={32} className="text-cyan-400" />
                       )}
                    </div>
                 </div>
                 <div className="flex-grow">
                    <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-2">
                       <div>
                          <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-cyan-400 transition-colors">{edu.degree}</h3>
                          <p className="text-lg text-slate-400">{edu.institution}</p>
                       </div>
                       <div className="mt-2 md:mt-0 px-4 py-1 bg-cyan-500/10 border border-cyan-500/20 rounded-full text-cyan-400 text-sm font-mono whitespace-nowrap w-fit">
                          {edu.year}
                       </div>
                    </div>
                    
                    <div className="flex items-center gap-4 text-sm font-mono text-cyan-500 mb-3">
                       <span className="bg-white/5 px-2 py-0.5 rounded border border-white/5">{edu.score}</span>
                    </div>
                    <p className="text-slate-500 leading-relaxed">{edu.desc}</p>
                 </div>
              </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Certifications Section */}
      <section id="certifications" className="py-24 bg-[#0a0f1c] relative">
         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <SectionHeader title="Certifications" subtitle="Continuous Learning" icon={Award} />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
               {certifications.map((cert, idx) => (
                  <FadeInSection key={idx} className="flex items-start gap-4 bg-[#131b2e] p-6 rounded-xl border border-white/5 hover:border-cyan-500/50 hover:bg-[#1a233b] transition-all group cursor-default hover:shadow-lg hover:shadow-cyan-900/10 h-full">
                  <div className="p-2 bg-gradient-to-br from-cyan-500/20 to-blue-500/10 rounded-lg text-cyan-400 group-hover:text-white transition-colors shrink-0">
                     <Award size={20} />
                  </div>
                  <span className="text-slate-300 font-medium group-hover:text-white transition-colors leading-relaxed">{cert}</span>
                  </FadeInSection>
               ))}
            </div>
         </div>
      </section>

      {/* 8. Blog Section */}
      <section id="blog" className="py-24 bg-[#0d1221]/50 relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader title="Insights & Thoughts" subtitle="Blog" icon={BookOpen} />
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogs.map((blog, idx) => (
               <FadeInSection key={idx} className="bg-[#131b2e] rounded-xl overflow-hidden border border-white/5 hover:border-cyan-500/30 transition-all group hover:-translate-y-2 hover:shadow-2xl hover:shadow-cyan-900/10 flex flex-col h-full">
                  {blog.image && (
                    <div className="h-48 overflow-hidden relative">
                       <img 
                         src={blog.image} 
                         alt={blog.title} 
                         className={`w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 ${blog.imgPosition || 'object-center'}`}
                       />
                       <div className="absolute inset-0 bg-gradient-to-t from-[#131b2e] to-transparent opacity-60"></div>
                    </div>
                  )}
                  <div className="p-8 flex flex-col flex-grow">
                     <div className="flex justify-between items-start mb-4">
                        <span className="text-xs font-mono text-cyan-500 bg-cyan-500/10 px-2 py-1 rounded border border-cyan-500/20">
                           {blog.tags[0]}
                        </span>
                        <span className="text-xs text-slate-500 font-medium">{blog.date}</span>
                     </div>
                     
                     <h3 className="text-xl font-bold text-white mb-3 group-hover:text-cyan-400 transition-colors line-clamp-2">
                        {blog.title}
                     </h3>
                     
                     <p className="text-slate-400 text-sm mb-6 leading-relaxed flex-grow line-clamp-3">
                        {blog.excerpt}
                     </p>
                     
                     <div className="border-t border-white/5 pt-4 flex items-center justify-between mt-auto">
                        <span className="text-xs text-slate-500">{blog.readTime}</span>
                        <button 
                          onClick={() => setSelectedBlog(blog)}
                          className="flex items-center gap-2 text-sm text-cyan-400 font-medium hover:text-white transition-colors group/link bg-transparent border-none cursor-pointer"
                        >
                           Read More <ArrowRight size={16} className="group-hover/link:translate-x-1 transition-transform"/>
                        </button>
                     </div>
                  </div>
               </FadeInSection>
            ))}
          </div>
        </div>
      </section>

      {/* 9. Contact Section */}
      <section id="contact" className="py-24 relative overflow-hidden bg-[#0a0f1c]">
        <div className="absolute inset-0 bg-gradient-to-b from-[#0a0f1c] to-[#060911]"></div>
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
          <SectionHeader title="Let's Collaborate" subtitle="Contact" icon={Mail} />
          
          <FadeInSection className="bg-[#131b2e]/50 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-white/10 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-1 bg-gradient-to-r from-transparent via-cyan-500 to-transparent"></div>
            
            <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
              Ready to transform your business data into actionable strategies? I'm available for full-time roles and projects.
            </p>

            <div className="grid md:grid-cols-3 gap-6 mb-12">
              {[
                 { icon: Phone, label: "Call Me", val: profileData.phone, href: `tel:${profileData.phone}` },
                 { icon: Mail, label: "Email Me", val: profileData.email, href: `mailto:${profileData.email}` },
                 { icon: MapPin, label: "Locate Me", val: "Indore, India", href: "#" }
              ].map((item, i) => (
                 <a key={i} href={item.href} className="flex flex-col items-center p-6 bg-[#0a0f1c] rounded-2xl border border-white/5 hover:border-cyan-500/50 transition-all group">
                    <item.icon className="text-cyan-500 mb-4 group-hover:scale-110 transition-transform" size={28} />
                    <p className="text-xs text-slate-500 uppercase tracking-widest mb-1">{item.label}</p>
                    <p className="text-white font-medium text-sm break-all">{item.val}</p>
                 </a>
              ))}
            </div>

            <div className="flex justify-center gap-6">
              {[
                { icon: Linkedin, link: profileData.links.linkedin, color: "hover:text-blue-400" },
                { icon: Github, link: profileData.links.github, color: "hover:text-white" },
                { icon: Twitter, link: profileData.links.twitter, color: "hover:text-sky-400" },
                { icon: Facebook, link: profileData.links.facebook, color: "hover:text-blue-600" }
              ].map((social, i) => (
                <a 
                  key={i} 
                  href={social.link} 
                  target="_blank" 
                  rel="noreferrer" 
                  className={`p-3 rounded-full bg-white/5 hover:bg-white/10 text-slate-400 ${social.color} transition-all transform hover:-translate-y-1 hover:shadow-lg hover:shadow-cyan-500/20`}
                >
                  <social.icon size={24} />
                </a>
              ))}
            </div>
          </FadeInSection>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-white/5 bg-[#05080f]">
        <div className="max-w-7xl mx-auto px-4 text-center">
          <p className="text-slate-500 text-sm flex items-center justify-center gap-2">
            Built by <span className="text-cyan-500 font-bold">Soham Patil</span> 
            <span className="w-1 h-1 rounded-full bg-slate-700"></span> 
            Business Analyst Portfolio © 2025
          </p>
        </div>
      </footer>
    </div>
  );
}