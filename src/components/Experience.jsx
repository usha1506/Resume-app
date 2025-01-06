function Experience() {
  const experiences = [
    {
      title: "Förskola Vikarier",
      company: "Jensen & Tellusbarn Skolar, Stockholm",
      date: "Nov 2023 - Present",
      description: "Assisting teachers in caring for kids.",
    },
    {
      title: "Frontend Web Developer & Content Creator",
      company: "Personal Finance AB, Stockholm",
      date: "Sep 2023 - Jan 2024",
      description: "Developed website using WordPress.",
    },
    {
      title: "Content Creator & SEO Specialist Intern",
      company: "A Good Company, Stockholm",
      date: "Jan 2023 - Jun 2023",
      description: `
          - Researched and generated ideas for blogs and social media posts.
          - Wrote and edited high-quality SEO-optimized content.
          - Managed content calendars and collaborated with teams.
        `,
    },
    // Add more experiences as needed
  ];

  return (
    <section>
      <h2>Experience</h2>
      {experiences.map((exp, index) => (
        <div key={index}>
          <h3>{exp.title}</h3>
          <p>{exp.company}</p>
          <p>{exp.date}</p>
          <p>{exp.description}</p>
        </div>
      ))}
    </section>
  );
}

export default Experience;
