import { nanoid } from "nanoid";

const projectData = [
    {
        title: "CookTopia",
        description: "A dynamic recipe app made with React",
        img: require("../src/images/cooktopia.png"),
        url: "https://cooktopias.netlify.app/",
        id: nanoid(),
    },
    {
        title: "Bean Block v2",
        description: "Coffee website with Ordering system. (front-end only)",
        img: require("../src/images/beanblock.png"),
        url: "https://beanblockv2.netlify.app/",
        id: nanoid(),
    },
    {
        title: "Weather App",
        description:
            "A real-time weather app. You can look up your country, city, province, etc.",
        img: require("../src/images/weatherapp.png"),
        url: "https://klimangayon.netlify.app/",
        id: nanoid(),
    },
    {
        title: "IceFlix",
        description: "A movie app where you cant even watch a movie",
        img: require("../src/images/iceflix.png"),
        url: "https://iceflix.netlify.app/",
        id: nanoid(),
    },
    {
        title: "Fermented Rice",
        description:
            "Food website I created for my Client (my first client project)",
        img: require("../src/images/fermentedrice.png"),
        url: "#",
        id: nanoid(),
    },
    {
        title: "Message Generator",
        description:
            "A message generator that generates random sweet messages.",
        img: require("../src/images/msggenerator.png"),
        url: "https://sweetmsg-generator.netlify.app/",
        id: nanoid(),
    },
    {
        title: "Bean Block",
        description: "A coffee website. Also the first website I created.",
        img: require("../src/images/beanblock.png"),
        url: "https://beanblock.netlify.app/",
        id: nanoid(),
    },
];

export default projectData;
