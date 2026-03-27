import React, { useState, useEffect } from "react";
import { Link as RouterLink } from "react-router-dom";
import {
  Menu,
  X,
  ChevronRight,
  Play,
  Factory,
  Store,
  Users,
  ShieldCheck,
  Link as LinkIcon,
  UserCheck,
  ChevronDown,
  ChevronUp,
  ArrowRight,
  Shield,
  Globe,
  Lock,
} from "lucide-react";
import styles from "./Home.module.css";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.nav_navbar} ${scrolled ? styles.nav_scrolled : ""}`}
    >
      <div className={styles.nav_container}>
        <div className={styles.nav_logo}>
          <span className={styles.nav_logoText}>WPOMS</span>
        </div>

        <div className={styles.nav_desktopLinks}>
          {["Features", "Services", "About", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              className={styles.nav_link}
            >
              {item}
            </a>
          ))}
        </div>

        <div className={styles.nav_desktopActions}>
          <RouterLink to="/login">
            <button className={styles.nav_signInBtn}>Sign In</button>
          </RouterLink>
          <RouterLink to="/register">
            <button className={`${styles.nav_registerBtn} gold-gradient`}>
              Register
            </button>
          </RouterLink>
        </div>

        <button
          className={styles.nav_mobileToggle}
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {isOpen && (
        <div className={styles.nav_mobileMenu}>
          {["Features", "Services", "FAQ"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase()}`}
              onClick={() => setIsOpen(false)}
              className={styles.nav_mobileLink}
            >
              {item}
            </a>
          ))}
          <hr className={styles.nav_divider} />
          <button className={styles.nav_mobileSignInBtn}>Sign In</button>
          <button className={`${styles.nav_mobileRegisterBtn} gold-gradient`}>
            Register
          </button>
        </div>
      )}
    </nav>
  );
};

const Hero = () => {
  return (
    <section className={styles.hero_hero}>
      <div className={styles.hero_overlay}></div>
      <div className={styles.hero_container}>
        <div className={styles.hero_content}>
          <div className={`${styles.hero_badge} animate-fade-in-up`}>
            <span className={styles.hero_badgeText}>
              Elite Procurement Standard
            </span>
          </div>
          <h1 className={`${styles.hero_title} animate-fade-in-up`}>
            The Digital Archive for Global{" "}
            <span className={styles.hero_goldText}>
              Procurement & Warranties.
            </span>
          </h1>
          <p className={`${styles.hero_description} animate-fade-in-up`}>
            WPOMS is an elite multi-user ecosystem for manufacturers, vendors,
            and customers to streamline purchase orders and professional
            warranty lifecycles.
          </p>
          <div className={`${styles.hero_actions} animate-fade-in-up`}>
            <button className={`${styles.hero_primaryBtn} gold-gradient`}>
              Get Started <ChevronRight size={18} />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

const servicesList = [
  {
    title: "Manufacturers",
    description:
      "Centralize your production output and warranty issuance with blockchain-grade traceability.",
    icon: Factory,
    color: "gold",
  },
  {
    title: "Vendors",
    description:
      "Manage complex procurement cycles and inventory distribution with real-time analytics.",
    icon: Store,
    color: "navy",
  },
  {
    title: "Customers",
    description:
      "A unified digital vault for all your high-value purchase records and active warranties.",
    icon: Users,
    color: "gold",
  },
];

const Services = () => {
  return (
    <section id="services" className={styles.serv_services}>
      <div className={styles.serv_container}>
        <div className={styles.serv_header}>
          <h2 className={styles.serv_title}>Orchestrated Roles</h2>
          <p className={styles.serv_subtitle}>
            A unified ecosystem designed for every stakeholder in the
            procurement lifecycle.
          </p>
        </div>
        <div className={styles.serv_grid}>
          {servicesList.map((service, index) => (
            <div key={index} className={`${styles.serv_card} animate-scale-in`}>
              <div
                className={`${styles.serv_iconWrapper} ${service.color === "gold" ? styles.serv_goldIcon : styles.serv_navyIcon}`}
              >
                <service.icon size={32} />
              </div>
              <h3 className={styles.serv_cardTitle}>{service.title}</h3>
              <p className={styles.serv_cardDescription}>
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const Features = () => {
  return (
    <section id="features" className={styles.feat_features}>
      <div className={styles.feat_container}>
        <div className={styles.feat_grid}>
          <div className={styles.feat_content}>
            <h2 className={styles.feat_title}>
              Precision Features for High-Value Assets
            </h2>
            <p className={styles.feat_subtitle}>
              Our platform is engineered to handle the most demanding
              procurement environments with absolute integrity.
            </p>
            <div className={styles.feat_featureList}>
              <div className={styles.feat_featureItem}>
                <div className={styles.feat_iconWrapper}>
                  <ShieldCheck size={24} />
                </div>
                <div>
                  <h3 className={styles.feat_featureTitle}>
                    Regulatory Compliance
                  </h3>
                  <p className={styles.feat_featureDescription}>
                    Automated adherence to international trade and warranty
                    standards.
                  </p>
                </div>
              </div>
              <div className={styles.feat_featureItem}>
                <div className={styles.feat_iconWrapper}>
                  <LinkIcon size={24} />
                </div>
                <div>
                  <h3 className={styles.feat_featureTitle}>
                    End-to-End Traceability
                  </h3>
                  <p className={styles.feat_featureDescription}>
                    Every asset has a verifiable digital pedigree from factory
                    to customer.
                  </p>
                </div>
              </div>
              <div className={styles.feat_featureItem}>
                <div className={styles.feat_iconWrapper}>
                  <UserCheck size={24} />
                </div>
                <div>
                  <h3 className={styles.feat_featureTitle}>
                    Role-Based Control
                  </h3>
                  <p className={styles.feat_featureDescription}>
                    Granular permissions ensuring each stakeholder sees only
                    what they need.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className={styles.feat_imageWrapper}>
            <div className={styles.feat_imageContainer}>
              <img
                src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&fit=crop&q=80&w=2070"
                alt="Data Visualization"
                className={styles.feat_image}
                referrerPolicy="no-referrer"
              />
              <div className={`${styles.feat_statCard} animate-scale-in`}>
                <div className={styles.feat_statValue}>99.9%</div>
                <div className={styles.feat_statLabel}>Uptime Reliability</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const faqs = [
  {
    question: "How secure is the digital archive?",
    answer:
      "Our platform uses enterprise-grade encryption and blockchain-inspired traceability to ensure that every record is immutable and accessible only by authorized stakeholders.",
  },
  {
    question: "Can I integrate WPOMS with my existing ERP?",
    answer:
      "Yes, WPOMS offers a robust API suite that allows for seamless integration with major ERP systems like SAP, Oracle, and Microsoft Dynamics.",
  },
  {
    question: "What happens if a vendor goes out of business?",
    answer:
      "The digital archive is independent of the vendor. Once a warranty is issued and archived, it remains accessible to the customer and manufacturer regardless of the vendor's status.",
  },
  {
    question: "Is there a limit to the number of warranties I can store?",
    answer:
      "No, our cloud-native architecture is designed for infinite scalability, allowing you to archive millions of records with sub-second retrieval speeds.",
  },
];

const FAQ = () => {
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleFAQ = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

  return (
    <section id="faq" className={styles.faq_faq}>
      <div className={styles.faq_container}>
        <div className={styles.faq_header}>
          <h2 className={styles.faq_title}>Frequently Asked Questions</h2>
          <p className={styles.faq_subtitle}>
            Everything you need to know about the WPOMS ecosystem.
          </p>
        </div>
        <div className={styles.faq_faqList}>
          {faqs.map((faq, index) => (
            <div
              key={index}
              className={`${styles.faq_faqItem} ${activeIndex === index ? styles.faq_active : ""}`}
            >
              <button
                className={styles.faq_questionBtn}
                onClick={() => toggleFAQ(index)}
              >
                <span className={styles.faq_question}>{faq.question}</span>
                {activeIndex === index ? (
                  <ChevronUp size={20} />
                ) : (
                  <ChevronDown size={20} />
                )}
              </button>
              <div
                className={`${styles.faq_answerWrapper} ${activeIndex === index ? styles.faq_show : ""}`}
              >
                <div className={styles.faq_answer}>{faq.answer}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

const CTA = () => {
  return (
    <section className={styles.cta_cta}>
      <div className={styles.cta_container}>
        <div className={`${styles.cta_card} gold-gradient`}>
          <div className={styles.cta_content}>
            <h2 className={styles.cta_title}>
              Secure Your Digital Archive Today.
            </h2>
            <p className={styles.cta_subtitle}>
              Join the elite network of manufacturers and vendors who are
              redefining the procurement lifecycle.
            </p>
            <div className={styles.cta_actions}>
              <button className={styles.cta_primaryBtn}>
                Register Now <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Footer = () => {
  return (
    <footer className={styles.foot_footer}>
      <div className={styles.foot_container}>
        <div className={styles.foot_grid}>
          <div className={styles.foot_branding}>
            <div className={styles.foot_logo}>
              <span className={styles.foot_logoText}>WPOMS</span>
            </div>
            <p className={styles.foot_tagline}>
              The Digital Archive for Global Procurement & Warranties.
            </p>
            <div className={styles.foot_trustBadges}>
              <div className={styles.foot_badge}>
                <Shield size={16} />
                <span>ISO 27001</span>
              </div>
              <div className={styles.foot_badge}>
                <Globe size={16} />
                <span>Global Standard</span>
              </div>
              <div className={styles.foot_badge}>
                <Lock size={16} />
                <span>256-bit AES</span>
              </div>
            </div>
          </div>
          <div className={styles.foot_linksGrid}>
            <div>
              <h4 className={styles.foot_linkTitle}>Platform</h4>
              <ul className={styles.foot_linkList}>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#services">Services</a>
                </li>
                <li>
                  <a href="#faq">FAQ</a>
                </li>
              </ul>
            </div>
            <div>
              <h4 className={styles.foot_linkTitle}>Legal</h4>
              <ul className={styles.foot_linkList}>
                <li>
                  <a href="#">Privacy Policy</a>
                </li>
                <li>
                  <a href="#">Terms of Service</a>
                </li>
                <li>
                  <a href="#">Compliance</a>
                </li>
                <li>
                  <a href="#">Security</a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className={styles.foot_bottom}>
          <p className={styles.foot_copyright}>
            © 2026 WPOMS Ecosystem. All rights reserved.
          </p>
          <div className={styles.foot_socials}>
            <a href="#">LinkedIn</a>
            <a href="#">Twitter</a>
            <a href="#">Contact</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <main>
        <Hero />
        <Services />
        <Features />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
