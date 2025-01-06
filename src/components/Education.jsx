function Education() {
  const education = [
    {
      degree: "MBA in Finance & IT",
      institution: "Osmania University",
      year: 2007,
    },
    { degree: "B.Com.", institution: "Andhra University", year: 2005 },
    {
      degree: "10+2 Vocational CSE",
      institution: "Vocational Board",
      year: 2002,
    },
    { degree: "10th", institution: "SSC Board", year: 2000 },
  ];

  return (
    <section>
      <h2>Education</h2>
      <ul>
        {education.map((edu, index) => (
          <li key={index}>
            <strong>{edu.degree}</strong>, {edu.institution} ({edu.year})
          </li>
        ))}
      </ul>
    </section>
  );
}

export default Education;
