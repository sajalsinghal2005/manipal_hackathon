const stats = [
  { label: "Active Students", value: "12,847", change: "+8.2%" },
  { label: "Hostels Managed", value: "248", change: "+12%" },
  { label: "Complaints Resolved", value: "98.4%", change: "+2.1%" },
  { label: "AI Predictions/day", value: "32k", change: "+24%" }
];
const features = [
  { icon: "Brain", title: "AI-Powered Insights", desc: "Predict occupancy, detect complaint patterns, and forecast resource usage with deep learning models." },
  { icon: "QrCode", title: "Smart Gate Pass", desc: "Contactless QR-based entry/exit with real-time verification and visitor tracking." },
  { icon: "Zap", title: "Live Electricity Monitor", desc: "Per-room consumption analytics with anomaly detection and billing automation." },
  { icon: "ShieldCheck", title: "Face Verification", desc: "AI biometric authentication for hostel entry and emergency response." },
  { icon: "MessageSquare", title: "Smart Complaints", desc: "Auto-categorized and routed to the right department with SLA tracking." },
  { icon: "BarChart3", title: "Predictive Analytics", desc: "Crowd heat-maps, mess attendance forecasts, and warden dashboards." }
];
const testimonials = [
  { name: "Dr. Anjali Verma", role: "Dean of Students, IIT Delhi", quote: "HostelX AI cut our complaint resolution time by 70%. The predictive analytics are a game-changer." },
  { name: "Rakesh Iyer", role: "Chief Warden, BITS Pilani", quote: "Visitor management and QR gate passes have completely modernized our security workflow." },
  { name: "Priya Menon", role: "Hostel Admin, NIT Trichy", quote: "From fees to electricity reports — everything in one beautiful dashboard. Students love it too." }
];
const faqs = [
  { q: "Is HostelX AI suitable for large universities?", a: "Yes. The platform scales from 100 to 100,000+ residents with multi-hostel, multi-campus support." },
  { q: "How secure is the face verification?", a: "We use on-device biometric hashing with AES-256 encryption — no raw images leave the campus network." },
  { q: "Can it integrate with existing ERP?", a: "Yes — we provide REST APIs and SSO connectors for SAP, Oracle, and custom ERPs." },
  { q: "Does it work offline?", a: "Core gate-pass and complaint flows work offline and sync when connectivity is restored." }
];
const universityLogos = [
  "IIT Delhi",
  "BITS Pilani",
  "NIT Trichy",
  "IIIT Hyderabad",
  "ISM Dhanbad",
  "IISc Bangalore"
];
const pricingPlans = [
  {
    name: "Campus Starter",
    price: "₹29,999",
    period: "one-time",
    description: "Launch one hostel with essential automation, gate-pass, and complaint tracking.",
    features: ["Student dashboard", "Visitor QR pass", "Basic analytics", "Email support"],
    highlight: false
  },
  {
    name: "Hostel Pro",
    price: "₹79,999",
    period: "annual",
    description: "Designed for multi-hostel campuses with AI insights, warden tools and smart alerts.",
    features: ["Occupancy forecasting", "AI complaint routing", "Visitor management", "Priority support"],
    highlight: true
  },
  {
    name: "Institutional Elite",
    price: "Custom",
    period: "quote",
    description: "Full enterprise package with SIS integrations, predictive maintenance, and rollout support.",
    features: ["ERP / SSO integration", "Custom dashboards", "Onboarding support", "Data migration"],
    highlight: false
  }
];
const contactCards = [
  { title: "Product demo", value: "sales@hostelx.ai", detail: "Book a walkthrough with our product specialist.", type: "email" },
  { title: "University partnerships", value: "partners@hostelx.ai", detail: "Discuss campus pilot programs and research collaborations.", type: "email" },
  { title: "Headquarters", value: "Bengaluru, India", detail: "Global support for higher education institutions.", type: "location" }
];
const occupancyData = [
  { month: "Jan", occupancy: 78, capacity: 100 },
  { month: "Feb", occupancy: 82, capacity: 100 },
  { month: "Mar", occupancy: 88, capacity: 100 },
  { month: "Apr", occupancy: 76, capacity: 100 },
  { month: "May", occupancy: 65, capacity: 100 },
  { month: "Jun", occupancy: 58, capacity: 100 },
  { month: "Jul", occupancy: 92, capacity: 100 },
  { month: "Aug", occupancy: 95, capacity: 100 },
  { month: "Sep", occupancy: 94, capacity: 100 },
  { month: "Oct", occupancy: 91, capacity: 100 },
  { month: "Nov", occupancy: 89, capacity: 100 },
  { month: "Dec", occupancy: 80, capacity: 100 }
];
const complaintCategories = [
  { name: "Electrical", value: 32, color: "#fbbf24" },
  { name: "Plumbing", value: 24, color: "#60a5fa" },
  { name: "Cleanliness", value: 18, color: "#34d399" },
  { name: "Mess Food", value: 14, color: "#f87171" },
  { name: "Wi-Fi", value: 12, color: "#a78bfa" }
];
const electricityUsage = [
  { day: "Mon", units: 42 },
  { day: "Tue", units: 48 },
  { day: "Wed", units: 51 },
  { day: "Thu", units: 39 },
  { day: "Fri", units: 58 },
  { day: "Sat", units: 67 },
  { day: "Sun", units: 62 }
];
const complaints = [
  { id: "CMP-2418", title: "AC not cooling in Room 302", category: "Electrical", priority: "High", status: "In Progress", student: "Sajal Singhal", room: "B-302", date: "2h ago", aiScore: 92 },
  { id: "CMP-2417", title: "Water leakage near washbasin", category: "Plumbing", priority: "Medium", status: "Assigned", student: "Sneha Reddy", room: "A-204", date: "5h ago", aiScore: 78 },
  { id: "CMP-2416", title: "Wi-Fi slow in west wing", category: "Network", priority: "Low", status: "Open", student: "Mohit Sharma", room: "C-118", date: "1d ago", aiScore: 45 },
  { id: "CMP-2415", title: "Mess food quality complaint", category: "Mess", priority: "High", status: "Resolved", student: "Riya Patel", room: "A-110", date: "1d ago", aiScore: 88 },
  { id: "CMP-2414", title: "Broken study chair", category: "Furniture", priority: "Low", status: "Resolved", student: "Vikram Nair", room: "B-405", date: "2d ago", aiScore: 30 },
  { id: "CMP-2413", title: "No hot water in bathroom", category: "Plumbing", priority: "High", status: "In Progress", student: "Ananya Singh", room: "A-307", date: "2d ago", aiScore: 85 }
];
const visitors = [
  { id: "VIS-9821", name: "Rahul Mehta", visiting: "Sajal Singhal (B-302)", purpose: "Family Visit", checkIn: "10:42 AM", status: "Inside", phone: "+91 98•••32" },
  { id: "VIS-9820", name: "Geeta Devi", visiting: "Sneha Reddy (A-204)", purpose: "Parent Meeting", checkIn: "10:15 AM", status: "Inside", phone: "+91 99•••18" },
  { id: "VIS-9819", name: "Amit Joshi", visiting: "Mohit Sharma (C-118)", purpose: "Document Drop", checkIn: "09:30 AM", status: "Exited", phone: "+91 97•••55" },
  { id: "VIS-9818", name: "Pooja Iyer", visiting: "Riya Patel (A-110)", purpose: "Family Visit", checkIn: "Yesterday", status: "Exited", phone: "+91 98•••91" }
];
const leaveRequests = [
  { id: "LV-552", student: "Sajal Singhal", room: "B-302", from: "Dec 18", to: "Dec 22", reason: "Family function", status: "Pending" },
  { id: "LV-551", student: "Sneha Reddy", room: "A-204", from: "Dec 15", to: "Dec 17", reason: "Medical", status: "Approved" },
  { id: "LV-550", student: "Riya Patel", room: "A-110", from: "Dec 20", to: "Jan 02", reason: "Winter break", status: "Pending" }
];
const notifications = [
  { icon: "Zap", title: "Electricity bill generated", desc: "Your November bill of ₹842 is ready.", time: "2m" },
  { icon: "QrCode", title: "Gate pass approved", desc: "Your pass for Dec 18 has been issued.", time: "1h" },
  { icon: "AlertTriangle", title: "Fire-drill scheduled", desc: "Mandatory drill on Saturday 10:00 AM.", time: "3h" },
  { icon: "MessageSquare", title: "Complaint updated", desc: "Plumber assigned to your request.", time: "1d" }
];
const heatmap = Array.from(
  { length: 7 },
  (_, r) => Array.from({ length: 24 }, (_2, c) => ({
    h: c,
    d: r,
    v: Math.max(0, Math.min(1, 0.25 + 0.6 * Math.sin((c - 12) / 3) + (r > 4 ? 0.2 : 0) + (Math.random() * 0.2 - 0.1)))
  }))
);
const chatMessages = [
  { role: "ai", text: "Hi! I'm HostelX AI assistant. Ask me about fees, leave rules, complaints, or mess timings." },
  { role: "user", text: "When does the mess close for dinner?" },
  { role: "ai", text: "Dinner is served from 7:30 PM to 9:30 PM. Today's menu: Paneer Butter Masala, Jeera Rice, Dal Tadka, Salad, Gulab Jamun." },
  { role: "user", text: "How do I apply for leave?" },
  { role: "ai", text: "Go to Student Dashboard → Leave Requests → New Request. Wardens typically approve within 4 hours." }
];
const userProfile = {
  name: "Sajal Singhal",
  initials: "SS",
  role: "Student Representative",
  email: "sajal.singhal@hostelx.ai",
  phone: "+91 98234 56789",
  room: "B-302",
  hostel: "Bhaskara Hostel, Block B",
  joined: "Aug 2023",
  integrations: [
    { name: "Campus ID", status: "Active", icon: "ID" },
    { name: "Mess Wallet", status: "Auto top-up", icon: "₹" },
    { name: "Guest Pass", status: "Enabled", icon: "QR" }
  ]
};
export {
  faqs as a,
  complaints as b,
  contactCards as c,
  userProfile as d,
  electricityUsage as e,
  features as f,
  complaintCategories as g,
  chatMessages as h,
  heatmap as i,
  leaveRequests as l,
  notifications as n,
  occupancyData as o,
  pricingPlans as p,
  stats as s,
  testimonials as t,
  universityLogos as u,
  visitors as v
};
