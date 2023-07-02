import { component$ } from "@builder.io/qwik";
import styles from "./hero.module.css";
import ImgThunder from "~/media/me.jpg?jsx";

export default component$(() => {
  return (
    <div class={["container", styles.hero]}>
      <ImgThunder class={styles["hero-image"]} />

      <h1>
        Hi, <br />I'm <span class="highlight">Anthuan Vasquez</span>
        <br />
        a Senior <span class="highlight">Web</span> Engineer
      </h1>

      <p>
        Currently working as Tech Lead at <a href="https://minnekdigital.com/" target="_blank">Minnek</a>
      </p>
    </div>
  );
});
