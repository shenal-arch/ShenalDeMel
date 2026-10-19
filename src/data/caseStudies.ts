import koachhubTabletImage from "../assets/images/koachhub_tablet_2.png";
import koachhubMatchdayImage from "../assets/images/koachhub_iphone_12_mockup.png";
import koachhubGravityImage from "../assets/images/koachhub_gravity_scene_iphone_12.png";
import esanaDashboardImage from "../assets/images/esana_macbook_dashboard_1792316729495.png";
import esanaMenuImage from "../assets/images/esana_macbook_menu_1792316730435.png";
import esanaReportsImage from "../assets/images/esana_macbook_reports_1792316731608.png";

export interface UserRole {
  role: string;
  description: string;
}

export interface ProductArea {
  area: string;
  capabilities: string;
}

export interface ConnectedJourney {
  step: string;
  title: string;
  description: string;
  focus: string;
}

export interface StatusDimension {
  dimension: string;
  question: string;
  examples: string;
}

export interface DesignPriority {
  priority: string;
  response: string;
}

export interface DesignConsideration {
  title: string;
  description: string;
}

export interface ProjectReference {
  note: string;
  link?: string;
  linkText?: string;
}

export interface SampleImageSlot {
  id: string;
  title: string;
  caption: string;
  screenType: string;
  accentColor: string;
  image?: string;
}

export interface CaseStudy {
  id: string;
  slug: string;
  badge: string;
  pageNumber: string;
  title: string;
  tagline: string;
  role: string;
  scope: string;
  domain: string;
  productModel?: string;
  overview: string;
  overviewAdditional?: string;
  contribution: string[];
  challenge?: string;
  challengeDetails?: string;
  problem?: string;
  problemChallenge?: string;
  usersServed: UserRole[];
  productAreas?: ProductArea[];
  designConsiderations?: DesignConsideration[];
  connectedJourneys?: ConnectedJourney[];
  statusMatrix?: StatusDimension[];
  statusMatrixNote?: string;
  designPriorities?: DesignPriority[];
  aiWorkflow?: {
    title: string;
    paragraphs: string[];
  };
  validation?: {
    scenarios: string;
    measures: string;
  };
  outcome: string;
  references: ProjectReference[];
  sampleImages: SampleImageSlot[];
}

export const caseStudies: CaseStudy[] = [
  {
    id: "koachhub",
    slug: "koachhub",
    badge: "PRODUCT DESIGN CASE STUDY / SHENAL DE MEL",
    pageNumber: "01",
    title: "KoachHub",
    tagline: "Designing a complete football club management experience",
    role: "UI/UX Designer",
    scope: "Entire application",
    domain: "SportsTech",
    overview:
      "KoachHub brings football club operations and player development into one application. Coaches, players, and parents can use the platform to coordinate activities and follow progress. Its published feature set spans scheduling, player records, evaluations, messaging, match-day tools, and payments. [1]",
    contribution: [
      "I designed the entire KoachHub application, with UI/UX responsibility across its features and user flows. My scope covered the overall application experience rather than a single feature or screen.",
      "Within my Koach Hub role, I worked on UX strategy, interface design, mobile prototypes, and high-fidelity designs for stakeholder reviews. I collaborated with engineering and QA teams to support delivery and resolve design implementation issues."
    ],
    challenge:
      "A club management application needs to accommodate operational tasks and player development within the same product. The design challenge can be framed as making this breadth manageable: helping people understand where they are, which information matters to them, and what they can do next.",
    challengeDetails:
      "Designing the full application meant considering how individual features connect, as well as the clarity of each screen. A schedule, player profile, and match update should form a coherent experience for the person using them.",
    usersServed: [
      {
        role: "Coaches",
        description: "Organise training and matches; review player information and development."
      },
      {
        role: "Players",
        description: "Follow schedules and view their progress and performance information."
      },
      {
        role: "Parents",
        description: "Stay informed about their children's activities and progress."
      }
    ],
    productAreas: [
      {
        area: "People and development",
        capabilities: "Player profiles, attendance records, evaluations, and individual action plans."
      },
      {
        area: "Planning and training",
        capabilities: "Game and training schedules, availability responses, and shared session plans."
      },
      {
        area: "Match day",
        capabilities: "Formations, lineups, substitutes, live scores, and player statistics."
      },
      {
        area: "Communication",
        capabilities: "Messaging and sharing documents, images, and videos."
      },
      {
        area: "Family and administration",
        capabilities: "Linked parent accounts, fee collection, and payment reconciliation."
      }
    ],
    designConsiderations: [
      {
        title: "Clarity across roles",
        description:
          "Coaches, players, and parents interact with related information for different reasons. The experience needs clear context so each person can recognise relevant content and available actions."
      },
      {
        title: "Consistency across features",
        description:
          "A broad application benefits from familiar patterns for navigation, forms, lists, and feedback. Consistency helps the product feel connected as people move between tasks."
      },
      {
        title: "Readable information and clear states",
        description:
          "Scheduling and player information can become dense. Useful hierarchy, meaningful labels, and visible status help users distinguish information they need to read from actions they need to take."
      }
    ],
    outcome:
      "My contribution was the UI/UX design of the complete KoachHub application. The public product website demonstrates the breadth of the platform, while my role covered design across its features and user flows.",
    references: [
      {
        note: "[1] KoachHub — Features",
        link: "https://koachhub.com/features/",
        linkText: "https://koachhub.com/features/"
      },
      {
        note: "Reviewed 18 October 2026. Product capabilities are described by KoachHub; role and contribution are based on Shenal De Mel's account and CV."
      }
    ],
    sampleImages: [
      {
        id: "kh-screen-1",
        title: "Player Profile & Document Center",
        caption: "Comprehensive youth player dossier displaying ID, physical metrics, medical clearance, and emergency contacts.",
        screenType: "Tablet 2 • Coach & Admin App",
        accentColor: "from-emerald-500/20 to-lime-500/10",
        image: koachhubTabletImage
      },
      {
        id: "kh-screen-2",
        title: "Matchday Formation & Live Tactics",
        caption: "Tactical pitch board, live event logging (goals, assists, cards), and substitution management.",
        screenType: "iPhone 12 & Tablet Mockup",
        accentColor: "from-teal-500/20 to-emerald-500/10",
        image: koachhubMatchdayImage
      },
      {
        id: "kh-screen-3",
        title: "Welcome Hub & Team Squad Roster",
        caption: "Central navigation platform for coaches with direct access to teams, planners, training drills, and squad rosters.",
        screenType: "Gravity Scene • Dual iPhone 12",
        accentColor: "from-blue-500/20 to-teal-500/10",
        image: koachhubGravityImage
      }
    ]
  },
  {
    id: "esana",
    slug: "esana",
    badge: "PRODUCT UX CASE STUDY / SHENAL DE MEL",
    pageNumber: "02",
    title: "Esana",
    tagline: "Connecting customer ordering with restaurant operations",
    role: "UI/UX Designer",
    scope: "Entire application",
    domain: "Restaurant SaaS",
    productModel: "Restaurant SaaS",
    overview:
      "Esana is a restaurant commerce and operations platform that connects customer ordering channels with a shared restaurant management environment. Its scope includes restaurant onboarding, menus, orders, payments, staff access, and reporting.",
    overviewAdditional:
      "The supplied onboarding guide describes an initial operational focus on WhatsApp ordering and Uber Eats integration, supported by restaurant administration. Broader POS, kitchen, dine-in, and AI Concierge capabilities appear in wider requirements or later plans; their release status is not consistently confirmed. [1]",
    problem:
      "The project brief describes fragmented menu maintenance, disconnected order channels, and inconsistent visibility into payments and fulfilment. For customers, unclear items, portions, prices, and availability can make ordering difficult. For staff, the challenge is understanding what has been ordered, what has been paid, and what needs action.",
    problemChallenge:
      "The central UX challenge is to make a complex operational system understandable without losing the distinctions that keep orders accurate.",
    usersServed: [
      {
        role: "Platform team",
        description: "Register restaurants, manage plans, oversee provisioning, and support tenants."
      },
      {
        role: "Owners and managers",
        description: "Configure menus and business settings, delegate access, and review operations."
      },
      {
        role: "Order-processing staff",
        description: "Review incoming orders and progress permitted operational actions."
      },
      {
        role: "Customers",
        description: "Choose food, confirm their order, pay where available, and receive updates."
      }
    ],
    contribution: [
      "I designed the entire Esana application, with UI/UX responsibility across its features, screens, and user flows. My scope covered the complete application experience, connecting restaurant administration with ordering and operational workflows."
    ],
    connectedJourneys: [
      {
        step: "01",
        title: "Restaurant onboarding",
        description:
          "A restaurant selects a plan, registers, completes the initial payment, and receives access after its tenant is provisioned. Setup then covers the administrator account, restaurant information, integrations, taxes, roles, users, and operating settings.",
        focus:
          "Show setup progress and readiness clearly. Separate required steps from optional configuration, and explain what remains unavailable when an integration is incomplete. The guide records conflicting step numbering and completion destinations, so one final journey needs confirmation."
      },
      {
        step: "02",
        title: "WhatsApp ordering",
        description:
          "The customer explores the menu, specifies items and portions, reviews the cart, confirms the order, and follows the available payment process. Fulfilment updates then communicate progress. The guide describes the current WhatsApp scope as pickup-focused, with future scheduling and delivery outside that scope.",
        focus:
          "Use clarification when requests are ambiguous. Make quantities, prices, and the final total visible before confirmation. Treat a payment link as a request to pay, not proof that payment succeeded."
      },
      {
        step: "03",
        title: "Uber Eats order handling",
        description:
          "An incoming aggregator order enters Esana for review. Restaurant staff accept or reject it, and the decision is returned to the channel. Accepted orders proceed through restaurant fulfilment.",
        focus:
          "Make the incoming channel, acceptance state, and next action easy to scan. Keep time-sensitive acceptance distinct from payment and preparation progress."
      }
    ],
    statusMatrix: [
      {
        dimension: "Acceptance",
        question: "Has the restaurant accepted it?",
        examples: "Pending, accepted, rejected"
      },
      {
        dimension: "Payment",
        question: "Has payment succeeded?",
        examples: "Pending, paid, failed"
      },
      {
        dimension: "Fulfilment",
        question: "Where is it operationally?",
        examples: "Placed, preparing, ready, completed"
      }
    ],
    statusMatrixNote:
      "These dimensions can change independently. A single generic status label can hide the information staff need to act correctly.",
    designPriorities: [
      {
        priority: "Reliable menu information",
        response:
          "Show valid portions, add-ons, prices, and availability. Ask the customer to choose when more than one item matches."
      },
      {
        priority: "Payment recovery",
        response:
          "Distinguish pending, failed, and expired payments. Explain the next valid action and recheck the order before issuing a replacement link."
      },
      {
        priority: "Safe staff access",
        response:
          "Align navigation and actions with permissions. Explain unavailable actions clearly and handle access changes without misleading users."
      },
      {
        priority: "Restaurant context",
        response:
          "Keep the active restaurant and branch visible where context matters. Avoid ambiguity when managing settings or reviewing orders."
      },
      {
        priority: "Integration readiness",
        response:
          "Use clear connection states and actionable recovery guidance. Explain when ordering or online payment is unavailable."
      }
    ],
    aiWorkflow: {
      title: "AI ordering as a controlled workflow",
      paragraphs: [
        "The AI ordering experience should retrieve menu and transaction information from authorised restaurant data. It can interpret customer language and ask clarifying questions, but it should not invent prices, available items, or payment outcomes.",
        "Confirmation is a critical checkpoint. Customers need an opportunity to review and correct their order before it is created. Repeated messages or payment callbacks must not result in duplicate orders. When the service cannot complete a request, the experience should explain the limitation and provide a supported next step."
      ]
    },
    validation: {
      scenarios:
        "Useful scenarios include ambiguous item requests, unavailable portions, changed prices, repeated confirmation, expired payment links, incoming orders awaiting acceptance, and permission changes during an active session.",
      measures:
        "Potential measures include setup completion, order-task completion, correction rates, and successful recovery from payment errors. No measured outcomes are supplied for this case study."
    },
    outcome:
      "Full-application UI/UX design responsibility is confirmed by Shenal De Mel. Product scope and journeys are drawn from the shared project guide. Design recommendations and proposed validation are distinguished from confirmed implementation and measured outcomes.",
    references: [
      {
        note: "[1] ESANA Product Onboarding Guide for Business Analysts — shared conversation supplied by Shenal De Mel.",
        linkText: "Open the shared project guide"
      },
      {
        note: "Reviewed 18 October 2026. The linked guide summarises other project records; those underlying records were not independently reviewed."
      }
    ],
    sampleImages: [
      {
        id: "esana-screen-1",
        title: "Restaurant Operations Dashboard",
        caption: "Live analytics for revenue throughout the day, order source distribution, top 10 best sellers, and sales by category.",
        screenType: "MacBook Pro • Restaurant Dashboard",
        accentColor: "from-amber-500/20 to-orange-500/10",
        image: esanaDashboardImage
      },
      {
        id: "esana-screen-2",
        title: "Food Menu & Order Customization",
        caption: "Interactive menu browsing with portion sizing (Small, Medium, Large, Pack), dish add-ons, and real-time order summary.",
        screenType: "MacBook Pro • Food Menu Mockup",
        accentColor: "from-emerald-500/20 to-teal-500/10",
        image: esanaMenuImage
      },
      {
        id: "esana-screen-3",
        title: "Subscription Earnings & Tenant Reports",
        caption: "Platform administration table tracking active restaurant tenant subscriptions, billing due dates, and payment statuses.",
        screenType: "MacBook Pro • Subscription Report",
        accentColor: "from-rose-500/20 to-amber-500/10",
        image: esanaReportsImage
      }
    ]
  }
];
