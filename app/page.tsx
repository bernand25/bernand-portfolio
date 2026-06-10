import Image from "next/image";

export default function Home() {
  return (
    <main className="max-w-6xl mx-auto px-6">
      <nav className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-gray-800 py-5">
  <div className="flex justify-between items-center">

    <a href="#" className="text-xl font-bold">
  Bernand
    </a>

    <div className="flex gap-6">
      <a href="#about" className="hover:text-gray-400">
        About
      </a>

      <a href="#experience" className="hover:text-gray-400">
        Experience
      </a>

      <a href="#certifications" className="hover:text-gray-400">
        Certifications
      </a>

      <a href="#projects" className="hover:text-gray-400">
        Projects
      </a>

      <a href="#contact" className="hover:text-gray-400">
        Contact
      </a>
    </div>

  </div>
</nav>
      {/* HERO */}
      <section className="min-h-[85vh] flex items-center">

  <div className="grid md:grid-cols-2 gap-12 items-center">

    <div>
      <p className="text-gray-500 mb-4">
          Welcome to my portfolio
      </p>
      <h1 className="text-6xl font-bold">
        Bernand Trianda Firmansyah
      </h1>

      <h2 className="text-2xl text-gray-600 mt-4">
        Computer Science Graduate | Data Analyst | Business Operations
      </h2>

      <p className="mt-6 max-w-3xl text-lg text-gray-400 leading-8">
  Computer Science graduate from BINUS University with experience in
  data analytics, workforce reporting, business operations, and
  stakeholder collaboration. Passionate about leveraging data-driven
  insights and technology solutions to improve operational efficiency
  and support strategic decision-making.
</p>

      <div className="flex gap-4 mt-8">

  <a
    href="#projects"
    className="bg-white text-black px-6 py-3 rounded-lg"
  >
    View Projects
  </a>

  <a
    href="#contact"
    className="border px-6 py-3 rounded-lg"
  >
    Contact Me
  </a>

  <a
    href="/Bernand_CV.pdf"
    download
    className="border px-6 py-3 rounded-lg"
  >
    Download CV
  </a>

</div>
<div className="flex gap-16 mt-16">

  <div>
    <h3 className="text-3xl font-bold">3.62</h3>
    <p className="text-gray-500">GPA</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">2+</h3>
    <p className="text-gray-500">Experiences</p>
  </div>

  <div>
    <h3 className="text-3xl font-bold">5+</h3>
    <p className="text-gray-500">Certifications</p>
  </div>

</div>
<div className="flex gap-4 mt-8">

  <a
    href="https://linkedin.com/in/bernandtf"
    target="_blank"
    className="border px-4 py-2 rounded-lg"
  >
    LinkedIn
  </a>

  <a
    href="https://github.com/bernandtf"
    target="_blank"
    className="border px-4 py-2 rounded-lg"
  >
    GitHub
  </a>

  <a
    href="mailto:bernand.fir@gmail.com"
    className="border px-4 py-2 rounded-lg"
  >
    Email
  </a>
</div>
    </div>

    <div className="flex justify-center">

      <Image
        src="/profile.jpg"
        alt="Bernand"
        width={320}
        height={320}
        className="rounded-3xl object-cover shadow-2xl"
      />

    </div>

  </div>

</section>

      {/* ABOUT */}
      <section id="about" className="py-20">

        <h2 className="text-4xl font-bold mb-6">
          About Me
        </h2>

        <p className="text-lg text-gray-700 leading-8">
          Fresh Computer Science graduate from BINUS University with
          experience in IT Support, Data Analysis, Dashboard Development,
          and Digital Campaign Management. Through internships,
          ambassador programs, and research projects, I have developed
          strong analytical, problem-solving, and communication skills
          while contributing to technology-driven initiatives and
          business improvement projects.
        </p>

      </section>
{/* WHAT I DO */}
<section className="py-20">

  <h2 className="text-4xl font-bold mb-10">
    What I Do
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    {/* Data Analytics */}
    <div className="border border-gray-800 rounded-xl p-6 hover:border-white transition">

      <h3 className="text-xl font-semibold mb-3">
        📊 Data Analytics
      </h3>

      <p className="text-gray-400 leading-7">
        Transforming raw data into meaningful insights through
        data analysis, visualization, dashboard development,
        and business reporting to support decision-making.
      </p>

    </div>

    {/* Business Operations */}
    <div className="border border-gray-800 rounded-xl p-6 hover:border-white transition">

      <h3 className="text-xl font-semibold mb-3">
        ⚙️ Business Operations
      </h3>

      <p className="text-gray-400 leading-7">
        Supporting operational efficiency through workforce
        reporting, process improvement initiatives, data
        management, and stakeholder coordination.
      </p>

    </div>

    {/* Leadership & Collaboration */}
    <div className="border border-gray-800 rounded-xl p-6 hover:border-white transition">

      <h3 className="text-xl font-semibold mb-3">
        🤝 Leadership & Collaboration
      </h3>

      <p className="text-gray-400 leading-7">
        Leading research projects, collaborating across teams,
        and communicating insights effectively to deliver
        impactful business and technology solutions.
      </p>

    </div>

  </div>

</section>

      {/* EDUCATION */}
      <section className="py-20">

        <h2 className="text-4xl font-bold mb-8">
          Education
        </h2>

        <div className="border rounded-xl p-6">

          <h3 className="text-2xl font-semibold">
            BINUS University
          </h3>

          <p className="text-gray-600">
            Bachelor of Computer Science
          </p>

          <p className="mt-2">
            GPA: 3.62 / 4.00
          </p>

          <p className="mt-2">
            Thesis: Mining Social Media for Financial Insights:
            The Impact of Public Sentiment on Cryptocurrency Price Movement
          </p>

        </div>

      </section>
{/* CAMPUS INVOLVEMENT */}
<section className="py-20">

  <h2 className="text-4xl font-bold mb-10">
    Campus Involvement
  </h2>

  <div className="grid md:grid-cols-3 gap-6">

    <div className="border border-gray-800 rounded-xl p-6 hover:border-white transition">

      <h3 className="text-xl font-semibold">
        HIMTI BINUS University
      </h3>

      <p className="text-gray-400 mt-2">
        Student Activist
      </p>

      <p className="mt-4 text-gray-500">
        Participated in organizational activities, event support,
        and student engagement initiatives within the School of Computer Science.
      </p>

    </div>

    <div className="border border-gray-800 rounded-xl p-6 hover:border-white transition">

      <h3 className="text-xl font-semibold">
        BINUS Student Learning Community (BSLC)
      </h3>

      <p className="text-gray-400 mt-2">
        Mentee
      </p>

      <p className="mt-4 text-gray-500">
        Participated in peer-learning programs and collaborative learning activities
        to strengthen technical and academic competencies.
      </p>

    </div>

    <div className="border border-gray-800 rounded-xl p-6 hover:border-white transition">

      <h3 className="text-xl font-semibold">
        Tech For Indonesia
      </h3>

      <p className="text-gray-400 mt-2">
        Volunteer
      </p>

      <p className="mt-4 text-gray-500">
        Contributed to technology-focused community initiatives and events,
        supporting digital literacy and knowledge-sharing activities.
      </p>

    </div>

  </div>

</section>
      {/* EXPERIENCE */}
<section id="experience" className="py-20">

  <h2 className="text-4xl font-bold mb-12">
    Experience
  </h2>

  <div className="border-l-2 border-gray-700 ml-4 pl-8 space-y-12">

    {/* TUV */}
    <div className="relative">

      <div className="absolute -left-11 top-2 w-4 h-4 bg-white rounded-full"></div>

      <p className="text-gray-500 mb-2">
        2024 – 2025
      </p>

      <h3 className="text-2xl font-semibold">
        PT TÜV NORD Indonesia
      </h3>

      <p className="text-gray-400 mb-4">
        IT Support Intern
      </p>

      <ul className="list-disc ml-5 space-y-2 text-gray-300">

        <li>
          Developed HR reporting and monitoring dashboards.
        </li>

        <li>
          Maintained employee data accuracy and system records.
        </li>

        <li>
          Supported HR operational activities and business processes.
        </li>

        <li>
          Provided troubleshooting and technical support.
        </li>

      </ul>

    </div>

    {/* Gopay */}
    <div className="relative">

      <div className="absolute -left-11 top-2 w-4 h-4 bg-white rounded-full"></div>

      <p className="text-gray-500 mb-2">
        2023
      </p>

      <h3 className="text-2xl font-semibold">
        PT Dompet Anak Bangsa
      </h3>

      <p className="text-gray-400 mb-4">
        GoPay Student Ambassador
      </p>

      <ul className="list-disc ml-5 space-y-2 text-gray-300">

        <li>
          Reached 500+ students through campus activations.
        </li>

        <li>
          Executed digital and offline acquisition campaigns.
        </li>

        <li>
          Created social media promotional content.
        </li>

        <li>
          Collaborated with regional teams on marketing initiatives.
        </li>

      </ul>

    </div>

  </div>

</section>
{/* LEADERSHIP */}
<section className="py-20">

  <h2 className="text-4xl font-bold mb-10">
    International & Leadership Experience
  </h2>

  <div className="space-y-6">

    <div className="border border-gray-800 rounded-xl p-6">

      <h3 className="text-xl font-semibold">
        Research Team Leader
      </h3>

      <p className="text-gray-400">
        International Conference on Generative Artificial Intelligence for Business • 2025
      </p>

      <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-300">
        <li>Led a research team from project planning to final presentation.</li>
        <li>Coordinated task allocation and collaboration among team members.</li>
        <li>Presented research findings to an international audience.</li>
      </ul>

    </div>

    <div className="border border-gray-800 rounded-xl p-6">

      <h3 className="text-xl font-semibold">
        Research Project Leader
      </h3>

      <p className="text-gray-400">
        Undergraduate Thesis Research • 2024 – 2025
      </p>

      <ul className="list-disc ml-5 mt-4 space-y-2 text-gray-300">
        <li>Led research on cryptocurrency sentiment and price movement.</li>
        <li>Applied sentiment analysis and data analytics techniques.</li>
        <li>Presented findings through academic reports and presentations.</li>
      </ul>

    </div>

  </div>

</section>
{/* CERTIFICATION GALLERY */}

<section id="certifications" className="py-24">

  <div className="mb-12">

<p className="text-gray-500 uppercase tracking-widest mb-3">
  Credentials
</p>

<h2 className="text-5xl font-bold">
  Certifications
</h2>

<p className="text-gray-400 mt-4 max-w-3xl">
  Continuous learning through industry-recognized certifications
  in Data Analytics, Software Engineering, IT Infrastructure,
  Artificial Intelligence, and English Proficiency.
</p>

  </div>

  <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-8">

{/* GOOGLE */}
<div className="group border border-gray-800 rounded-2xl overflow-hidden hover:border-white hover:-translate-y-2 transition duration-300">

  <Image
    src="/cert-google.jpg"
    alt="Google Data Analytics"
    width={800}
    height={500}
    className="w-full h-48 object-cover"
  />

  <div className="p-6">

    <span className="text-xs px-3 py-1 rounded-full border border-gray-700">
      Data Analytics
    </span>

    <h3 className="text-xl font-semibold mt-4">
      Google Data Analytics Professional Certificate
    </h3>

    <p className="text-gray-400 mt-3 text-sm">
      SQL, Tableau, Data Cleaning, Data Visualization,
      Business Analytics, Data-Driven Decision Making.
    </p>

    <a
      href="/cert-google.jpg"
      target="_blank"
      className="inline-block mt-5 text-sm text-blue-400 hover:underline"
    >
      View Credential →
    </a>

  </div>

</div>

{/* HACKERRANK */}
<div className="group border border-gray-800 rounded-2xl overflow-hidden hover:border-white hover:-translate-y-2 transition duration-300">

  <Image
    src="/cert-hackerrank.jpg"
    alt="HackerRank Software Engineer"
    width={800}
    height={500}
    className="w-full h-48 object-cover"
  />

  <div className="p-6">

    <span className="text-xs px-3 py-1 rounded-full border border-gray-700">
      Software Engineering
    </span>

    <h3 className="text-xl font-semibold mt-4">
      Software Engineer Certificate
    </h3>

    <p className="text-gray-400 mt-3 text-sm">
      Programming Logic, Algorithms,
      Debugging, Software Engineering Fundamentals.
    </p>

    <a
      href="/cert-hackerrank.jpg"
      target="_blank"
      className="inline-block mt-5 text-sm text-blue-400 hover:underline"
    >
      View Credential →
    </a>

  </div>

</div>

{/* COMPTIA */}
<div className="group border border-gray-800 rounded-2xl overflow-hidden hover:border-white hover:-translate-y-2 transition duration-300">

  <Image
    src="/cert-comptia.jpg"
    alt="CompTIA A+"
    width={800}
    height={500}
    className="w-full h-48 object-cover"
  />

  <div className="p-6">

    <span className="text-xs px-3 py-1 rounded-full border border-gray-700">
      IT Infrastructure
    </span>

    <h3 className="text-xl font-semibold mt-4">
      CompTIA A+ 1000 Part 2
    </h3>

    <p className="text-gray-400 mt-3 text-sm">
      Troubleshooting, Operating Systems,
      Cybersecurity, Preventive Maintenance.
    </p>

    <a
      href="/cert-comptia.jpg"
      target="_blank"
      className="inline-block mt-5 text-sm text-blue-400 hover:underline"
    >
      View Credential →
    </a>

  </div>

</div>

{/* DATA SCIENCE */}
<div className="group border border-gray-800 rounded-2xl overflow-hidden hover:border-white hover:-translate-y-2 transition duration-300">

  <Image
    src="/cert-datascience.jpg"
    alt="Data Science and AI"
    width={800}
    height={500}
    className="w-full h-48 object-cover"
  />

  <div className="p-6">

    <span className="text-xs px-3 py-1 rounded-full border border-gray-700">
      AI & Machine Learning
    </span>

    <h3 className="text-xl font-semibold mt-4">
      Data Science & Artificial Intelligence
    </h3>

    <p className="text-gray-400 mt-3 text-sm">
      Machine Learning, Python,
      SQL, Data Analysis & Visualization.
    </p>

    <a
      href="/cert-datascience.jpg"
      target="_blank"
      className="inline-block mt-5 text-sm text-blue-400 hover:underline"
    >
      View Credential →
    </a>

  </div>

</div>

{/* TOEFL */}
<div className="group border border-gray-800 rounded-2xl overflow-hidden hover:border-white hover:-translate-y-2 transition duration-300">

  <Image
    src="/cert-toefl.jpg"
    alt="TOEFL ITP"
    width={800}
    height={500}
    className="w-full h-48 object-cover"
  />

  <div className="p-6">

    <span className="text-xs px-3 py-1 rounded-full border border-gray-700">
      English Proficiency
    </span>

    <h3 className="text-xl font-semibold mt-4">
      TOEFL ITP
    </h3>

    <p className="text-gray-400 mt-3 text-sm">
      Score: 530 • Professional Working Proficiency.
    </p>

    <a
      href="/cert-toefl.jpg"
      target="_blank"
      className="inline-block mt-5 text-sm text-blue-400 hover:underline"
    >
      View Credential →
    </a>

  </div>

</div>

  </div>

</section>


{/* FEATURED PROJECT */}
<section className="py-20">

  <h2 className="text-4xl font-bold mb-8">
    Featured Project
  </h2>

  <div className="border border-gray-800 rounded-2xl p-8">

    <h3 className="text-2xl font-semibold">
  Cryptocurrency Sentiment Analysis Research
</h3>

    <p className="mt-4 text-gray-400 leading-8">
  Analyzed social media sentiment data using Python to evaluate
  its relationship with cryptocurrency price movements.
  Applied data preprocessing, sentiment analysis, and visualization
  techniques to generate actionable insights from large datasets.
</p>

    <div className="flex flex-wrap gap-3 mt-6">

      <span className="border px-3 py-1 rounded-full">
        Python
      </span>

      <span className="border px-3 py-1 rounded-full">
        NLP
      </span>

      <span className="border px-3 py-1 rounded-full">
        Machine Learning
      </span>

      <span className="border px-3 py-1 rounded-full">
        Sentiment Analysis
      </span>

      <span className="border px-3 py-1 rounded-full">
      Data Analytics
    </span>

    </div>

  </div>

</section>
{/* PROJECTS */}
<section id="projects" className="py-20">

  <h2 className="text-4xl font-bold mb-10">
    Projects
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

    <div className="border border-gray-800 rounded-xl p-6 hover:border-white hover:-translate-y-1 transition duration-300">

  <h3 className="text-xl font-semibold">
    Cryptocurrency Sentiment Analysis
  </h3>

  <p className="mt-3 text-gray-400">
    NLP-based research project analyzing public sentiment
    from social media and its relationship with cryptocurrency
    price movement.
  </p>

  <div className="flex gap-2 mt-4 flex-wrap">

    <span className="border px-3 py-1 rounded-full">
      Python
    </span>

    <span className="border px-3 py-1 rounded-full">
      NLP
    </span>

    <span className="border px-3 py-1 rounded-full">
      Machine Learning
    </span>

    <span className="border px-3 py-1 rounded-full">
        Sentiment Analysis
    </span>
  </div>

</div>

    <div className="border border-gray-800 rounded-xl p-6 hover:border-white hover:-translate-y-1 transition duration-300">

  <h3 className="text-xl font-semibold">
    UI/UX Systematic Review (PRISMA Method)
  </h3>

  <p className="text-gray-400 mt-3 leading-7">
    Conducted a structured literature review using the PRISMA methodology
    to identify recurring UI/UX challenges in Tourism Information Services
    and develop evidence-based recommendations for improving user experience.
  </p>

  <div className="flex flex-wrap gap-2 mt-4">

    <span className="border px-3 py-1 rounded-full">
      PRISMA
    </span>

    <span className="border px-3 py-1 rounded-full">
      UI/UX Research
    </span>

    <span className="border px-3 py-1 rounded-full">
      Literature Review
    </span>

    <span className="border px-3 py-1 rounded-full">
      Research Analysis
    </span>

  </div>

</div>

    <div className="border border-gray-800 rounded-xl p-6 hover:border-white hover:-translate-y-1 transition duration-300">

  <h3 className="text-xl font-semibold">
    Piscis Aquarium Interactive Website
  </h3>

  <p className="text-gray-400 mt-3 leading-7">
    Designed and developed a marine life–themed interactive website
    featuring responsive navigation and integrated booking functionality.
    Focused on usability, responsiveness, and engaging user experience.
  </p>

  <div className="flex flex-wrap gap-2 mt-4">

    <span className="border px-3 py-1 rounded-full">
      HTML
    </span>

    <span className="border px-3 py-1 rounded-full">
      CSS
    </span>

    <span className="border px-3 py-1 rounded-full">
      JavaScript
    </span>

    <span className="border px-3 py-1 rounded-full">
      Responsive Design
    </span>

  </div>

</div>

  </div>

</section>

      {/* TECH STACK */}
<section className="py-20">

  <h2 className="text-4xl font-bold mb-10">
    Tech Stack
  </h2>

  <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

    <div className="border border-gray-800 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">
        Frontend
      </h3>

      <ul className="space-y-2 text-gray-400">
        <li>Next.js</li>
        <li>React.js</li>
        <li>JavaScript</li>
        <li>Tailwind CSS</li>
      </ul>
    </div>

    <div className="border border-gray-800 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">
        Data
      </h3>

      <ul className="space-y-2 text-gray-400">
        <li>SQL</li>
        <li>Excel</li>
        <li>Power BI</li>
        <li>Python</li>
        <li>Google Sheet</li>
      </ul>
    </div>

    <div className="border border-gray-800 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">
        AI & ML
      </h3>

      <ul className="space-y-2 text-gray-400">
        <li>Machine Learning</li>
        <li>NLP</li>
        <li>XGBoost</li>
        <li>Artificial Intelligence</li>
      </ul>
    </div>

    <div className="border border-gray-800 rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4">
        Tools
      </h3>

      <ul className="space-y-2 text-gray-400">
        <li>GitHub</li>
        <li>VS Code</li>
        <li>Microsoft Office</li>
      </ul>
    </div>

  </div>

</section>
{/* ACHIEVEMENTS */}
<section className="py-20">

  <h2 className="text-4xl font-bold mb-10">
    Achievements
  </h2>

  <div className="grid md:grid-cols-4 gap-6">

    <div className="border border-gray-800 rounded-xl p-6 text-center">
      <h3 className="text-3xl font-bold">3.62</h3>
      <p className="text-gray-400">GPA</p>
    </div>

    <div className="border border-gray-800 rounded-xl p-6 text-center">
      <h3 className="text-3xl font-bold">500+</h3>
      <p className="text-gray-400">Students Reached</p>
    </div>

    <div className="border border-gray-800 rounded-xl p-6 text-center">
      <h3 className="text-3xl font-bold">2</h3>
      <p className="text-gray-400">Conference Presentations</p>
    </div>

    <div className="border border-gray-800 rounded-xl p-6 text-center">
      <h3 className="text-3xl font-bold">5+</h3>
      <p className="text-gray-400">Projects</p>
    </div>

  </div>

</section>

{/* CURRENT FOCUS */}
<section className="py-20">

  <h2 className="text-4xl font-bold mb-8">
    Current Focus
  </h2>

  <div className="border border-gray-800 rounded-xl p-8">

    <p className="text-lg text-gray-400 leading-8">
      Currently focused on advancing expertise in Data Analytics,
      Business Operations, and Artificial Intelligence while exploring
      opportunities to contribute to Management Trainee, Business
      Analyst, and Technology-driven programs. Passionate about
      transforming data into actionable insights and creating impact
      through cross-functional collaboration.
    </p>

  </div>

</section>
{/* LET'S WORK TOGETHER */}
<section className="py-24">

  <div className="border border-gray-800 rounded-3xl p-12 text-center">

    <h2 className="text-5xl font-bold mb-6">
      Let's Work Together
    </h2>

    <p className="text-gray-400 text-lg max-w-2xl mx-auto">
      Open to Management Trainee, Technology, Data Analytics,
      IT Support, and Digital Innovation opportunities.
      Let's connect and build impactful solutions together.
    </p>

    <div className="flex flex-wrap justify-center gap-4 mt-10">

      <a
        href="mailto:bernand.fir@gmail.com"
        className="bg-white text-black px-6 py-3 rounded-lg font-medium hover:opacity-90 transition"
      >
        Email Me
      </a>

      <a
        href="https://linkedin.com/in/bernandtf"
        target="_blank"
        className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
      >
        LinkedIn
      </a>

      <a
        href="https://github.com/bernandtf"
        target="_blank"
        className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
      >
        GitHub
      </a>

      <a
        href="/Bernand_CV.pdf"
        download
        className="border border-gray-700 px-6 py-3 rounded-lg hover:bg-white hover:text-black transition"
      >
        Download CV
      </a>

    </div>

  </div>

</section>
{/* CONTACT */}

<section id="contact" className="py-20">

  <h2 className="text-4xl font-bold mb-10">
    Contact
  </h2>

  <div className="grid md:grid-cols-2 gap-6">

{/* Email */}
<div className="border border-gray-800 rounded-xl p-6 hover:border-white transition">
  <h3 className="text-xl font-semibold mb-2">
    📧 Email
  </h3>

  <a
    href="mailto:bernand.fir@gmail.com"
    className="text-gray-400 hover:text-white"
  >
    bernand.fir@gmail.com
  </a>
</div>

{/* Phone */}
<div className="border border-gray-800 rounded-xl p-6 hover:border-white transition">
  <h3 className="text-xl font-semibold mb-2">
    📱 Phone
  </h3>

  <p className="text-gray-400">
    +62 813-3076-0966
  </p>
</div>

{/* Location */}
<div className="border border-gray-800 rounded-xl p-6 hover:border-white transition">
  <h3 className="text-xl font-semibold mb-2">
    📍 Location
  </h3>

  <p className="text-gray-400">
    Jakarta, Indonesia
  </p>
</div>

{/* LinkedIn */}
<div className="border border-gray-800 rounded-xl p-6 hover:border-white transition">
  <h3 className="text-xl font-semibold mb-2">
    💼 LinkedIn
  </h3>

  <a
    href="https://linkedin.com/in/bernandtf"
    target="_blank"
    rel="noopener noreferrer"
    className="text-blue-400 hover:underline"
  >
    linkedin.com/in/bernandtf
  </a>
</div>

  </div>

</section>
<footer className="border-t border-gray-800 py-10 mt-20">

  <div className="text-center text-gray-500">

    <p>
      © 2026 Bernand Trianda Firmansyah
    </p>

    <p className="mt-2">
      Computer Science Graduate | Data Analyst | IT Support
    </p>

    <p className="mt-2 text-sm">
      Designed & Developed by Bernand Trianda Firmansyah
    </p>

  </div>

</footer>
    </main>
  );
}