<script lang="ts">
  interface Social {
    name: string;
    link: string;
    icon: string;
  }

  interface Skill {
    name: string;
    image: string;
  }

  interface Project {
    name: string;
    details: string;
    image: string;
    bgColor: string;
    link: string;
  }

  interface Data {
    social: Social[];
    skills: Skill[];
    projects: Project[];
  }

  export let data: Data;
</script>

<nav>
  <div class="logo">Ali Ahmed</div>
  <div class="nav">
    <a href="#main">Links</a>
    <a href="#skills">Skills</a>
    <a href="#projects">Projects</a>
  </div>
</nav>
<div class="main" id="main">
  <h1 class="fade-in">
    I'm Ali!<br />
    I Build Web Applications!
  </h1>
  <div class="fade-in social">
    {#each data.social as social}
      <div class="social-item">
        <a href={social.link} target="_blank">
          <img src={social.icon} alt={social.name} />
        </a>
      </div>
    {/each}
  </div>
</div>
<div class="skills-section" id="skills">
  <h1>My Skills</h1>
  <div class="skills">
    {#each data.skills as skill}
      <div class="skill">
        <img src={skill.image} alt={skill.name} />
        <h1>{skill.name}</h1>
      </div>
    {/each}
  </div>
</div>
<div class="projects-section" id="projects">
  <h1>My Projects!</h1>
  <div class="flex-container">
    {#each data.projects as project}
      <a href={project.link} target="_blank" class="project-link">
        <div class="project" style="background-color: {project.bgColor};">
          <img src={project.image} alt={project.name} />
          <h1>{project.name}</h1>
          <div class="details">
            {@html project.details}
          </div>
          <div class="visit">Visit</div>
        </div>
      </a>
    {/each}
  </div>
</div>

<style>
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    background-color: rgba(0, 0, 0, 0.5);
    position: fixed;
    width: 100vw;
    color: white;
    font-size: 2rem;
    z-index: 2;
    padding: 0 10px 0 10px;
  }
  nav .nav {
    display: flex;
    gap: 30px;
  }
  nav a {
    color: white;
    text-decoration: none;
    display: inline-block;
    position: relative;
  }
  nav a,
  .logo {
    padding: 20px;
  }
  @media (max-width: 460px) {
    nav .nav {
      gap: 10px;
    }
    nav a,
    .logo {
      padding: 10px;
    }
    nav {
      padding: 10px;
    }
  }
  nav a::before {
    content: "";
    position: absolute;
    display: block;
    width: 100%;
    height: 4px;
    bottom: 0;
    left: 0;
    background-color: #fff;
    transform: scaleX(0);
    transition: transform 0.3s ease;
  }

  nav a:hover::before {
    transform: scaleX(1);
  }
  .projects-section {
    width: 100vw;
    padding: 20px;
    display: flex;
    flex-direction: column;
    align-items: center;
    background-color: #fbfbfb;
  }
  .projects-section h1 {
    font-size: 4rem;
    font-weight: 100;
    margin-bottom: 20px;
  }
  .project-link {
    color: unset;
  }
  .project-link:hover {
    text-decoration: unset;
  }
  .visit {
    padding: 20px;
    border-top: 1px solid #e6e6e7;
    width: 100%;
    font-size: 2.5rem;
  }
  .flex-container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
  }
  .project {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
    max-width: 600px;
    background-color: white;
    padding: 20px;
    box-shadow: 0 2px 15px #00000025;
    border-radius: 10px;
    transition: transform 1s;
  }
  .project:hover {
    transform: scale(1.02);
  }
  .project:hover .visit {
    color: blue;
  }
  .project h1 {
    font-size: 4rem;
    font-weight: 100;
  }
  .project .details {
    font-size: 1.3rem;
    max-width: 1000px;
  }
  .project img {
    width: 100%;
  }
  @media only screen and (max-width: 656px) {
    .project .details {
      font-size: 2rem;
    }
    .project h1 {
      font-size: 5rem;
    }
  }
  .main {
    width: 100vw;
    height: 100vh;
    background-color: black;
    background: url(/assets/programming.jpg) no-repeat;
    background-size: cover;
    display: flex;
    padding: 30px;
    justify-content: center;
    align-items: center;
    gap: 30px;
    flex-direction: column;
  }
  .main h1 {
    color: white;
    font-size: 5.625rem;
    font-weight: 300;
  }
  .social {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    max-width: 450px;
    justify-content: center;
    align-items: center;
  }
  .social a {
    color: white;
    text-decoration: none;
  }
  .social img {
    width: 100%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  .social-item {
    position: relative;
    width: 100px;
    height: 120px;
    transition: transform 0.3s;
  }
  .social-item:hover {
    transform: scale(1.1);
  }

  .fade-in {
    animation: fadeIn 3s;
    opacity: 1;
  }

  @keyframes fadeIn {
    from {
      opacity: 0;
      transform: translate(0px, 300px);
    }
    to {
      opacity: 1;
    }
  }

  .skills-section {
    width: 100vw;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 50px;
    padding: 20px;
  }

  .skills-section > h1 {
    font-size: 4.2rem;
    font-weight: 300;
  }

  .skills {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
  }

  .skill {
    width: 205px;
    height: 245px;
    padding: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2);
    border-radius: 15px;
    gap: 15px;
  }

  .skill img {
    height: 80%;
  }

  @media only screen and (max-width: 945px) {
    .main h1 {
      text-align: center;
    }
    .skill {
      width: 245px;
      height: 220px;
    }
  }

  :root {
    font-size: 14px;
  }

  @media only screen and (max-width: 656px) {
    :root {
      font-size: 8px;
    }
    .skill {
      width: 150px;
      height: 170px;
    }
    .social-item {
      width: 80px;
    }
  }
</style>
