import flynow from "../assets/Projects/flynow.png"
import echofy from "../assets/Projects/echofy.png"
import Edunexus from "../assets/Projects/edunexus.png"
import fixitfast from "../assets/Projects/fixitfast.png"
import shopora from "../assets/Projects/shopora.png"
import grocify from "../assets/Projects/grocify.png"
import ayuFolio from "../assets/Projects/ayufolio.png"

const projects = [
    {
        img: grocify,
        name: "Grocify - Grocery Web App",
        demo: "https://grocify-ebon.vercel.app",
        code: "https://github.com/ayushrusiya9/grocify-website",
        description: "A grocery web app built with React and JSON Server featuring CRUD operations for managing grocery items. Includes login/signup functionality, item management, and a clean responsive UI.",
        style: {
            shadow: "shadow-[#22C55E]",
            cover: "from-[#22C55E]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: shopora,
        name: "Shopora - Django eCommerce",
        demo: "https://ayushrusiya9.pythonanywhere.com/",
        code: "https://github.com/ayushrusiya9/shopora-django-ecommerce",
        description: "Shopora is a modern eCommerce website built with Django. It features user authentication, product management, cart, and checkout system designed to showcase full-stack development skills.",
        style: {
            shadow: "shadow-[#8B5CF6]",
            cover: "from-[#8B5CF6]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: Edunexus,
        name: "EduNexus - A smartCampus",
        demo: "https://ayushrusiya386.pythonanywhere.com/",
        code: "https://github.com/ayushrusiya9/EduNexus-SmartCampus",
        description: "EduNexus is a dynamic Django based e-learning platform that connects Admins, Teachers, and Students. It offers secure role-based dashboards, ebook sharing, profile management, and Cloudinary integration with a responsive, modern UI.",
        style: {
            shadow: "shadow-[#FB923C]",
            cover: "from-[#FB923C]",
            display: " hidden group-hover:flex"
        }
    },
     {
        img: ayuFolio,
        name: "AyuFolio - A modern developer portfolio",
        demo: "https://ayu-folio.vercel.app/",
        code: "https://github.com/ayushrusiya9/AyuFolio",
        description: "AyuFolio - A modern developer portfolio built to showcase my projects, skills, and experience. Designed with a clean UI, responsive layout, and smooth user experience.",
        style: {
            shadow: "shadow-[#3498AB]",
            cover: "from-[#3498AB]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: flynow,
        name: "FlyNow - A Flight Booking Web",
        demo: "https://fly-now-ebon.vercel.app/",
        code: "https://github.com/ayushrusiya9/FlyNow",
        description: "FlyNow is a responsive airline booking website built with HTML, CSS, and JavaScript. It showcases CRUD functionality for creating, reading, updating, and deleting flight bookings.",
        style: {
            shadow: "shadow-[#3498AB]",
            cover: "from-[#3498AB]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: echofy,
        name: "Echofy Django Project",
        demo: "https://ayushrusiya.pythonanywhere.com/",
        code: "https://github.com/ayushrusiya9/Echofy-django-project",
        description: `Echofy is a Django-based web project built to explore core concepts like routing, templates, and static file handling. It demonstrates the basic structure of a Django application and how different components interact.`,
        style: {
            shadow: "shadow-[#5E4746]",
            cover: "from-[#5E4746]",
            display: " hidden group-hover:flex"
        }
    },
    {
        img: fixitfast,
        name: "FixItfast - Service Booking App",
        demo: "https://inquisitive-puppy-d3ea6e.netlify.app/",
        code: "https://github.com/ayushrusiya9/FixiTfast",
        description: "FixItFast – Home Repair Service App A web app that connects users with nearby verified professionals for home repairs like plumbing, electrical, and appliance fixes.",
        style: {
            shadow: "shadow-[#F8FAFC]",
            cover: "from-[#F8FAFC]",
            display: " hidden group-hover:flex"
        }
    },
]

export default projects;
