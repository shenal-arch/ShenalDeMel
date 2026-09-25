import cressidaMockup from "../assets/images/cressida_resort_mockup_1782820021579.png";
import dinerraMockup from "../assets/images/dinerra_app_mockup_1782842800425.png";
import moreShopMockup from "../assets/images/more_shop_ui_kit_1790350524034.png";
import yourMedicalReportsMockup from "../assets/images/your_medical_reports_1790353727525.jpg";
import foodieeMockup from "../assets/images/foodiee_app_mockup_1790354074223.png";
import eleanorMockup from "../assets/images/eleanor_healthcare_1790355088090.jpg";

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
    link: "#"
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
  }
];
