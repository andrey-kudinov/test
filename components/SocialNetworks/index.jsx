import React from "react";
import styles from "./index.module.scss";
import cl from "classnames";
import { id } from "date-fns/locale";
import { FaYoutube, FaGithub, FaTelegram } from "react-icons/fa";

import ScreenEgg from "../ScreenEgg";

const socialNetworks = [
  {
    id: 1,
    href: "https://github.com/Zakroev/",
    icon: FaGithub,
  },
  {
    id: 2,
    href: "https://t.me/zakroev_andrey",
    icon: FaTelegram,
  },
  {
    id: 3,
    href: "https://www.youtube.com/",
    icon: FaYoutube,
  },
];

const SocialNetworks = ({ className }) => {
  return (
    <ScreenEgg>
      <ul className={cl(className, styles.list)}>
        {socialNetworks.map((socialNetworks) => (
          <li key={socialNetworks.id} className={styles.listItem}>
            <a
              href={socialNetworks.href}
              target="_blank"
              className={styles.listLink}
              rel="noreferrer"
            >
              {React.createElement(socialNetworks.icon, {
                color: "black",
                size: 50,
              })}
            </a>
          </li>
        ))}
      </ul>
    </ScreenEgg>
  );
};

export default SocialNetworks;
