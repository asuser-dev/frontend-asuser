import "./SectionStack.css";

const techs = [
  {
    name: "JavaScript",
    logo: "https://img.icons8.com/?size=100&id=PXTY4q2Sq2lG&format=png&color=000000",
  },
  {
    name: "Python",
    logo: "https://cdn.worldvectorlogo.com/logos/python-5.svg",
  },
  {
    name: "Golang",
    logo: "https://cdn.worldvectorlogo.com/logos/golang-gopher.svg",
  },
  { name: "React", logo: "https://cdn.worldvectorlogo.com/logos/react-2.svg" },
  {
    name: "Node.js",
    logo: "https://cdn.worldvectorlogo.com/logos/nodejs-icon.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.worldvectorlogo.com/logos/postgresql.svg",
  },
  { name: "Docker", logo: "https://cdn.worldvectorlogo.com/logos/docker.svg" },
  {
    name: "Kubernetes",
    logo: "https://cdn.worldvectorlogo.com/logos/kubernets.svg",
  },
  {
    name: "GitHub",
    logo: "https://cdn.worldvectorlogo.com/logos/github-icon.svg",
  },
  {
    name: "FastAPI",
    logo: "https://cdn.worldvectorlogo.com/logos/fastapi.svg",
  },
  {
    name: "Django",
    logo: "https://cdn.worldvectorlogo.com/logos/django-community.svg",
  },
  {
    name: "AWS",
    logo: "https://cdn.worldvectorlogo.com/logos/aws-2.svg",
  },
];

const SectionStack = () => {
  return (
    <section className="tech-section">
      <h2>Stacks Tecnológicos</h2>
      <div className="stack-grid">
        {techs.map((tech, index) => (
          <div className="stack-card" key={index}>
            <img src={tech.logo} alt={tech.name} className="stack-logo" />
            <p>{tech.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SectionStack;
