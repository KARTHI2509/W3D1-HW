import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
import Profile from "./components/Profile";
import Card from "./components/Card";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Skills from "./components/Skills";
import "./App.css";

function App() {
  return (
    <>
      {/* Task 2 */}
      <h1>Welcome to React</h1>
      <p>This is my first React application.</p>
      <button>Click Me</button>

      {/* Task 3 & 4 */}
      <Header />
      <Main /><Navbar />
      <Hero />
      <About />
      <Skills />
      <Footer />

      {/* Task 5 */}
      <Profile />

      {/* Task 6 to Task 18 */}
      <div className="container">

        {/* Student Cards (Task 7) */}
        <Card image="https://picsum.photos/200" title="Student 1" description="Computer Science" button="View" />
        <Card image="https://picsum.photos/201" title="Student 2" description="Mechanical" button="View" />
        <Card image="https://picsum.photos/202" title="Student 3" description="Civil" button="View" />

        {/* Product Cards (Task 8) */}
        <Card image="https://picsum.photos/210" title="Laptop" description="₹70000" button="Buy" />
        <Card image="https://picsum.photos/211" title="Mobile" description="₹25000" button="Buy" />
        <Card image="https://picsum.photos/212" title="Watch" description="₹5000" button="Buy" />
        <Card image="https://picsum.photos/213" title="Headphones" description="₹3000" button="Buy" />
        <Card image="https://picsum.photos/214" title="Keyboard" description="₹1500" button="Buy" />

        {/* Employee Card (Task 9) */}
        <Card image="https://picsum.photos/220" title="Ravi Kumar" description="Software Engineer | ₹8 LPA | IT Department" button="Profile" />

        {/* Course Card (Task 10) */}
        <Card image="https://picsum.photos/221" title="Python Full Stack" description="Duration: 6 Months | Trainer: John | Fee: ₹25000" button="Enroll" />

        {/* Movie Card (Task 11) */}
        <Card image="https://picsum.photos/222" title="Pushpa 2" description="Action | Rating 4.8 | 2025" button="Watch" />

        {/* Book Card (Task 12) */}
        <Card image="https://picsum.photos/223" title="Atomic Habits" description="James Clear | ₹499 | Self Help" button="Buy" />

        {/* Restaurant Card (Task 13) */}
        <Card image="https://picsum.photos/224" title="Paradise Restaurant" description="Biryani | Rating 4.7 | Hyderabad" button="Visit" />

        {/* Travel Card (Task 14) */}
        <Card image="https://picsum.photos/225" title="Paris" description="France | City of Lights" button="Explore" />

        {/* Team Member Card (Task 15) */}
        <Card image="https://picsum.photos/226" title="Karthik" description="Frontend Developer | LinkedIn | GitHub" button="Contact" />

        {/* Service Card (Task 16) */}
        <Card image="https://picsum.photos/227" title="Web Development" description="Responsive Website Development" button="Learn More" />

        {/* Feature Cards (Task 17) */}
        <Card image="https://picsum.photos/228" title="Fast Delivery" description="Quick delivery service." button="Learn More" />
        <Card image="https://picsum.photos/229" title="Secure Payment" description="100% secure online payments." button="Learn More" />
        <Card image="https://picsum.photos/230" title="24/7 Support" description="Support available anytime." button="Learn More" />
        <Card image="https://picsum.photos/231" title="Cloud Storage" description="Safe cloud data storage." button="Learn More" />
        <Card image="https://picsum.photos/232" title="Analytics" description="Business analytics dashboard." button="Learn More" />
        <Card image="https://picsum.photos/233" title="Automation" description="Automate daily business tasks." button="Learn More" />
        <Card image="https://picsum.photos/234" title="Easy Integration" description="Integrates with multiple platforms." button="Learn More" />
        <Card image="https://picsum.photos/235" title="Mobile Friendly" description="Responsive on all devices." button="Learn More" />

      </div>
    </>
  );
}

export default App;