import { faGithub, faInstagram, faLinkedin } from "@fortawesome/free-brands-svg-icons"

import developer from "../assets/icons/deeveloper.svg"
import project1 from "../assets/projects/Screenshot 2024-05-31 133134.png"
import project2 from "../assets/projects/Screenshot 2024-06-12 105429.png"
import project3 from "../assets/projects/3Screenshot 2024-06-15 151849.png"
import myimg from "../assets/self/self no bg.png"

export const navbar = [
    {
        label : "home",
        link : "/"
    },
    {
        label : "services",
        link : "#services"
    },
    {
        label : "experience",
        link : "#experience"
    },
    {
        label : "portfolio",
        link : "#portfolio"
    },
    {
        lable : "testimonial",
        link : "#testimonial"
    }
]

export const yourName  = "CodeversePro"

export const socialLinks = [
    {
        lable : "github",
        img : faGithub,
        link : "#"
    },
    {
        lable : "linkedin",
        img : faLinkedin,
        link : "#"
    },
    {
        lable : "instagram",
        img : faInstagram,
        link : "#"
    }
]

export const introDetail = 
    {
        intorName : "CodeversePro",
        introDescription : "Frontend developer with high level of experience in web designing and development, Producting the quality work"
    }

 export const introShowoffSkill = [
        {
            img : developer,
            skill : "Frontend Developer",
            
        },
        {
            img : developer,
            skill : "Best Designer",
          
        }
    ]

export const services = [
    {
        img : developer,
        heading : "Developer",
        discription : "Html,Css,Javascript,React,Tailwind,Framer Motion",
        link : "#"
    },
    {
        img : developer,
        heading : "Developer-2",
        discription : "Html,Css,Javascript,React,Tailwind,Framer Motion",
        link : "#"
    },
    {
        img : developer,
        heading : "Developer-3",
        discription : "Html,Css,Javascript,React,Tailwind,Framer Motion",
        link : "#"
    }
]

export const experience = [
    {
        number : 5,
        heading : "years of experience",
        subheading : "in web development"
    },
    {
        number : 100,
        heading : "projects completed",
        subheading : "with satisfied clients"
    },
    {
        number : 5,
        heading : "companies worked",
        subheading : "with different roles"
    }
]

export const projects = [
    {
        projectImg : project1,
        link : "#"
    },
    {
        projectImg : project2,
        link : "#"
    },
    {
        projectImg : project3,
        link : "#"
    },
    {
        projectImg : project3,
        link : "#"
    }
]

export const testimonial = [
    {
        clientImg : myimg,
        review : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nisl nec nisl ultricies ultricies. Nullam nec nisl nec nisl ultricies ultricies.",
    },
    {
        clientImg : myimg,
        review : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nisl nec nisl ultricies ultricies. Nullam nec nisl nec nisl ultricies ultricies.",
    },
    {
        clientImg : myimg,
        review : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nisl nec nisl ultricies ultricies. Nullam nec nisl nec nisl ultricies ultricies.",
    },
    {
        clientImg : myimg,
        review : "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed ut purus eget sapien egestas tincidunt. Nullam nec nisl nec nisl ultricies ultricies. Nullam nec nisl nec nisl ultricies ultricies.",
    },
   
]