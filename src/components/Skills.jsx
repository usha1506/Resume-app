function Skills() {
  const skills = [
    "HTML5: Proficient in using HTML5 to structure web content.",
    "CSS3: Skilled in CSS3 for styling and responsive design.",
    "JavaScript: Familiarity with basic front-end development.",
    "Adobe Creative Suite: Photoshop & Illustrator expertise.",
    "Shopify: Experience in managing e-commerce platforms.",
    "SEO: Basic knowledge with optimization skills.",
    "MS Office: Word, Excel, PowerPoint.",
    "Language Proficiency: English & Swedish.",
    "Team Collaboration & Typing Speed.",
  ];

  return (
    <section>
      <h2>Skills</h2>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </section>
  );
}

export default Skills;
