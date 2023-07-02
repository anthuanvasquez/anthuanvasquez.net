import { component$, $, useOnWindow, useSignal } from "@builder.io/qwik";
import styles from "./next-steps.module.css";

export default component$(() => {
  const gettingStartedStep = useSignal(0);

  useOnWindow(
    "keydown",
    $((e) => {
      if ((e as KeyboardEvent).key === "Alt") {
        gettingStartedStep.value = 1;
      }
    })
  );

  return (
    <div class="container container-purple container-center">
      <h2>
        Hey <span class="highlight">folks</span>!
      </h2>

      <p>Hi, I'm Anthuan Vásquez, a 36 years old Developer.</p>

      <p>Enthusiastic about technology. Independent thinker who enjoys taking on new challenges. As well on try new skills, and showing initiative.</p>

      <p>Over a decade of experience working in the web industry. Competent in analyzing business needs and development approaches for long and short-term success. A commitment to high availability, robustness, and scalability. Solid skills with front-end technologies like VueJs, ES6, HTML5, CSS3+, and Web Accessibility. Strong command of UI/UX, advanced CSS (CSS Modules, SASS), and responsive design ideas. Solid working knowledge of Node.js, PHP, and SQL or No SQL databases. extensive knowledge of e-commerce software. BigCommerce certification, and good skills for DevOps tools including microservices architecture and Docker.</p>

      <p>Positive attitude, excellent work ethic, organization, and team management. Together with a focus on superior code quality and a drive for achievements.
        </p>
    </div>
  );
});
