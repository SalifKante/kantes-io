import type { IconType } from "react-icons";
import { FaDiscord, FaGithub, FaLinkedin } from "react-icons/fa";

import type { socials } from "@/content/site";

type SocialId = (typeof socials)[number]["id"];

export const SOCIAL_ICONS: Record<SocialId, IconType> = {
  github: FaGithub,
  linkedin: FaLinkedin,
  discord: FaDiscord,
};
