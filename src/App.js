// src/App.js
import React from "react";

function App() {
  const sectionStyle = {
    padding: "30px",
    borderRadius: "12px",
    marginBottom: "30px",
    color: "white",
    boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
  };

  return (
    <div
      style={{
        fontFamily: "'Segoe UI', Tahoma, Geneva, Verdana, sans-serif",
        padding: "20px",
        maxWidth: "1000px",
        margin: "auto",
        background: "linear-gradient(135deg, #ece9e6, #ffffff)",
        minHeight: "100vh",
      }}
    >
      {/* Header */}
      <header style={{ textAlign: "center", marginBottom: "50px" }}>
        <h1 style={{ marginBottom: "10px", fontSize: "2.8rem", color: "#333" }}>
          Sejal Patro
        </h1>
        <p style={{ fontSize: "1.2rem", color: "#666" }}>
          Aspiring Software Quality Engineer | Full-Stack Developer Intern | AI &
          Prompt Engineering
        </p>
      </header>

      {/* About */}
      <section
        style={{ ...sectionStyle, backgroundColor: "#4A90E2" }}
        className="card"
      >
        <h2>About Me</h2>
        <p>
          I am Sejal, an early-career software engineer preparing for placements
          and focusing on Software Quality Engineering (SQE). I have hands-on
          experience with full-stack development, prompt engineering, and solving
          coding challenges on HackerRank.
        </p>
      </section>

      {/* Skills */}
      <section
        style={{ ...sectionStyle, backgroundColor: "#50C878" }}
        className="card"
      >
        <h2>Skills</h2>
        <ul>
          <li>Languages: Python, Java, JavaScript (React)</li>
          <li>Frontend: React, HTML, CSS</li>
          <li>Data & Big Data: SQL, ETL, Apache Spark, Data Modeling</li>
          <li>Tools: Linux, Git</li>
          <li>Other: Prompt Engineering, Problem Solving</li>
        </ul>
      </section>

      {/* Projects */}
      <section
        style={{ ...sectionStyle, backgroundColor: "#F5A623" }}
        className="card"
      >
        <h2>Projects</h2>
        <ul>
          <li>
            <strong>Personal Portfolio Website:</strong> A React-based portfolio
            (this project), deployed live.
          </li>
          <li>
            <strong>HackerRank Solutions:</strong> Collection of Java and Python
            problem-solving solutions.
          </li>
          <li>
            <strong>AI Prompt Demos:</strong> Small demo apps showcasing prompt
            engineering patterns.
          </li>
        </ul>
      </section>

      {/* Experience */}
      <section
        style={{ ...sectionStyle, backgroundColor: "#D64550" }}
        className="card"
      >
        <h2>Experience</h2>
        <h3>Vault of Codes — AI & Prompt Engineering Intern</h3>
        <ul>
          <li>Designed and optimized prompts for better LLM responses.</li>
          <li>Built small applications integrating AI components.</li>
        </ul>

        <h3>Native Soft Tech — Full Stack Developer Intern</h3>
        <ul>
          <li>Developed UI features with React and backend integrations.</li>
          <li>Collaborated in an agile team and participated in code reviews.</li>
        </ul>
      </section>

      {/* Contact */}
      <section
        style={{ ...sectionStyle, backgroundColor: "#7B61FF" }}
        className="card"
      >
        <h2>Contact</h2>
        <p>
          📧 Email:{" "}
          <a
            href="mailto:sejal.patro@example.com"
            style={{ color: "white", textDecoration: "underline" }}
          >
            sejal.patro@example.com
          </a>
        </p>
        <p>
          💻 GitHub:{" "}
          <a
            href="https://github.com/Sejal-patro"
            style={{ color: "white", textDecoration: "underline" }}
          >
            github.com/your-username
          </a>
        </p>
        <p>
          🔗 LinkedIn:{" "}
          <a
            href="https://linkedin.com/in/sejal-patro"
            style={{ color: "white", textDecoration: "underline" }}
          >
            linkedin.com/in/your-profile
          </a>
        </p>
      </section>

      {/* Footer */}
      <footer
        style={{
          textAlign: "center",
          marginTop: "40px",
          fontSize: "14px",
          color: "#555",
        }}
      >
        © 2025 Sejal Patro | Built with React
      </footer>
    </div>
  );
}

export default App;
