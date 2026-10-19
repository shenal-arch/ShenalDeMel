import cressidaMockup from "../assets/images/cressida_resort_mockup_1782820021579.png";
import dinerraMockup from "../assets/images/dinerra_app_mockup_1782842800425.png";
import moreShopMockup from "../assets/images/more_shop_ui_kit_1790350524034.png";
import yourMedicalReportsMockup from "../assets/images/your_medical_reports_1790353727525.jpg";
import foodieeMockup from "../assets/images/foodiee_app_mockup_1790354074223.png";
import eleanorMockup from "../assets/images/eleanor_healthcare_1790355088090.jpg";
import koachhubMockup from "../assets/images/koachhub_tablet_2.png";
import esanaMockup from "../assets/images/esana_macbook_dashboard_1792316729495.png";
import nexusFintechMockup from "../assets/images/nexus_fintech_terminal_1792327639216.png";
import nkarItineraryMockup from "../assets/images/nkar_itinerary_app.png";
import voltDriveMockup from "../assets/images/voltdrive_ev_mobility.jpg";

export interface Project {
  id: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  image?: string;
  link?: string;
}

export const projects: Project[] = [
  {
    id: "project-1",
    title: "Cressida Resort",
    description: "A comprehensive mobile resort application designed to simplify luxury apartment bookings and secure payments.",
    category: "Mobile App Design",
    tags: ["Real Estate", "UX Research", "Prototyping"],
    image: cressidaMockup,
    link: "https://www.figma.com/proto/qNP28rsMvf727ltJ0v5BTR/Home-lands?node-id=2027-944&page-id=2001%3A16203&starting-point-node-id=2027%3A944&t=RntmsYRlfXKyUIra-1"
  },
  {
    id: "project-2",
    title: "Dinerra App",
    description: "A modern food ordering application focusing on an intuitive user experience and enticing visual promotions.",
    category: "Mobile App Design",
    tags: ["Food & Beverage", "UI Design", "Mobile App"],
    image: dinerraMockup,
    link: "https://www.figma.com/proto/q4Aicc4Xz0H88W5iRtagzz/Oensys-V3?node-id=153-2233&viewport=-2589%2C660%2C0.21&t=e4t0q1GuXNcsu5sj-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=153%3A2233&page-id=192%3A4078"
  },
  {
    id: "project-3",
    title: "More Shop - UI Kit",
    description: "A comprehensive e-commerce mobile application UI kit featuring intuitive user flows, product tracking, and modern checkout screens.",
    category: "Mobile App Design",
    tags: ["UI Kit", "Mobile App", "E-commerce"],
    image: moreShopMockup,
    link: "https://ui8.net/ceffectz/products/more-shopping-cart-ui-kit"
  },
  {
    id: "project-4",
    title: "YourMedicalReports",
    description: "A patient-centric digital healthcare platform enabling users to securely access, organize, and understand complex medical reports with intuitive inquiry flows.",
    category: "Healthcare & Web App",
    tags: ["Healthcare", "Patient Portal", "Web App"],
    image: yourMedicalReportsMockup,
    link: "https://ymr.shenal.workers.dev/"
  },
  {
    id: "project-5",
    title: "Foodiee",
    description: "A fast, intuitive food ordering and live-delivery tracking mobile app with favorite collections, order milestones, and swift digital payments.",
    category: "Mobile App Design",
    tags: ["Food Delivery", "Mobile App", "UI/UX"],
    image: foodieeMockup,
    link: "https://ui8.net/ceffectz/products/foodiee-mobile-ui-kit"
  },
  {
    id: "project-6",
    title: "Eleanor Healthcare",
    description: "A compassionate, accessible healthcare and elder care digital experience designed with patient-first readability, family resources, and seamless contact touchpoints.",
    category: "Healthcare & Web Design",
    tags: ["Healthcare", "Elder Care", "Web & Mobile"],
    image: eleanorMockup,
    link: "https://www.eleanorhealthcaregroup.co.uk/"
  },
  {
    id: "project-7",
    title: "KoachHub",
    description: "A complete football club management experience unifying matchday tactics, player development metrics, and parent coordination into an all-in-one platform.",
    category: "SportsTech & SaaS",
    tags: ["SportsTech", "UX Strategy", "Web & Tablet"],
    image: koachhubMockup,
    link: "/case-studies#koachhub"
  },
  {
    id: "project-8",
    title: "Esana Restaurant SaaS",
    description: "An end-to-end restaurant commerce and operations platform connecting multi-channel customer ordering (WhatsApp, Uber Eats) with central kitchen management.",
    category: "Restaurant SaaS",
    tags: ["Enterprise SaaS", "E-commerce", "Dashboard"],
    image: esanaMockup,
    link: "/case-studies#esana"
  },
  {
    id: "project-9",
    title: "MAS Website Revamp",
    description: "A comprehensive website redesign for MAS Holdings, elevating apparel innovation, brand identity, and intuitive navigation across global markets.",
    category: "Website Design",
    tags: ["Website Design", "Brand Revamp", "UI/UX"],
    image: nexusFintechMockup,
    link: "https://xd.adobe.com/view/974885d0-8e07-4a87-95bf-bcefb8c8e655-c21b/"
  },
  {
    id: "project-10",
    title: "Nkar",
    description: "A comprehensive travel and tour itinerary management application designed for seamless trip scheduling, route tracking, and booking coordination.",
    category: "Itinerary Management App",
    tags: ["Travel & Tours", "Itinerary Planner", "Mobile App"],
    image: nkarItineraryMockup,
    link: "https://www.figma.com/proto/fQ3OEuQoRQGKDHaIGZtUlr/NKAR-UI?node-id=446-8421&viewport=365%2C237%2C0.04&t=vcTDpxsP6zjsp3ed-1&scaling=min-zoom&content-scaling=fixed&starting-point-node-id=446%3A8421&page-id=446%3A8420"
  },
  {
    id: "project-11",
    title: "Core Being Coach",
    description: "A transformative website design for Core Being Coach, focusing on holistic personal development, mentorship journeys, and client onboarding.",
    category: "Website Design",
    tags: ["Website Design", "Coaching", "UI/UX"],
    image: voltDriveMockup,
    link: "https://www.figma.com/proto/YGdsxkwXYp27K7STxu7RrC/Yohan-Seth?node-id=2-2&page-id=0%3A1&starting-point-node-id=2%3A2&t=w0W8iu96egKsLdkp-1"
  }
];
