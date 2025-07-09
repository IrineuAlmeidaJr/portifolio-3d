import { Contact } from "./contact";
import { Education } from "./education";
import { Experience } from "./experience";
import { Project } from "./project";

export interface PortfolioData {
  name: string;
  title: string;
  stack: string;
  location: string;
  contact: Contact;
  profileImage: string;
  about: string;
  skills: string[];
  experiences: Experience[];
  projects: Project[];
  education: Education[];
}