'use client';
import { useState } from 'react';
import { motion } from 'framer-motion';
import AnimatedTextButton from '../../button';

const Faq = () => {
    const [activeIndex, setActiveIndex] = useState<number | null>(0);
    
    
const faqs = [
  {
    question: "What is the most effective digital marketing strategy in 2025?",
    answer:
      "There is no single 'best' strategy. What works depends on the business. In 2025, the most effective strategies include AI-driven personalized marketing, short-form video content, and omnichannel automation. Brands that combine AI + creator content + performance ads see the best results. There is no one magic formula.",
  },
  {
    question: "How important is AI in digital marketing now?",
    answer:
      "AI is no longer optional. In 2025, AI handles audience targeting, ad optimization, content creation, segmentation, A/B testing, and analytics. It can significantly improve ROI and reduce marketing costs.",
  },
  {
    question: "Is SEO still relevant in 2025?",
    answer:
      "Yes, SEO is still effective. However, competition is higher, and results take 3–6 months or more. SEO works best when combined with content marketing, social media, and paid ads.",
  },
  {
    question: "Is organic reach dead on social media?",
    answer:
      "Organic reach is low, but not dead. Most platforms prioritize paid ads, so boosting posts is often necessary for growth. Organic content alone rarely grows a business fast—it can bring viewers, but not always buyers.",
  },
  {
    question: "How long does it take to see results?",
    answer:
      "Here is the honest timeline:\n• Google Ads / Meta Ads → Immediate to 2 weeks\n• SEO → 3–6 months\n• Social media growth → 1–3 months\n• Brand building → 6–12 months\nDigital marketing is not instant unless you invest enough in ads.",
  },
  {
    question: "Which platform gives the best ROI?",
    answer:
      "It depends on your business:\n• Google Ads → Best for people actively searching\n• Meta Ads (Facebook/Instagram) → Best for awareness + lead generation\n• YouTube → Best for branding\n• LinkedIn → Best for B2B companies\nThere is no universal 'best' platform—ROI depends on targeting and your product/service.",
  },

  // ➤ NEW WEBSITE DEVELOPMENT FAQS
  {
    question: "How much does a website cost?",
    answer:
      "The cost depends on the type of website (business site, e-commerce, custom platform). Basic websites start from ₹8,000–₹1,50,000, while advanced websites cost more depending on features and integrations.",
  },
  {
    question: "How long does it take to build a website?",
    answer:
      "A landing page can be built in 2 days after receiving all information.\nA standard business website takes 7–20 days.\nE-commerce or custom websites may take 3–6 weeks depending on complexity.",
  },
  {
    question: "Can you redesign or upgrade my existing website?",
    answer:
      "Yes. We can redesign your website by improving speed, design, SEO, security, and user experience while keeping your existing content and data safe.",
  },
  {
    question: "Do you provide hosting and domain services?",
    answer:
      "Yes. We can help you purchase, set up, or manage your domain, hosting, and SSL certificate. We recommend purchasing hosting and domain in your own name to ensure ownership, transparency, security, and full control.",
  },
  {
    question: "Will my website be mobile-friendly?",
    answer:
      "Absolutely. We provide Mobile First development. All websites we build are responsive and work perfectly on mobile, tablet, and desktop.",
  },
  {
    question: "Do you provide website maintenance?",
    answer:
      "Yes, we offer monthly and yearly maintenance for updates, backups, security checks, and bug fixes. One year of free maintenance is included for websites or apps costing above ₹25,000.",
  },
  {
    question: "Can you integrate payment gateways, WhatsApp, CRM, or other tools?",
    answer:
      "Yes. We integrate Razorpay, Stripe, PayPal, WhatsApp API, CRM systems, AI tools, Inventory/ERP, SMS & Email automation.",
  },
  {
    question: "What technologies do you use for development?",
    answer:
      "We use:\n• Frontend: React, Next.js, Vue, HTML/CSS/JS\n• Backend: Node.js, PHP (Laravel), Python Django\n• CMS: WordPress, Shopify\n• Mobile Apps: Flutter, React Native\n• Cloud: AWS, Firebase, DigitalOcean",
  },
  {
    question: "Do you develop mobile apps?",
    answer:
      "Yes. We build Android, iOS, and hybrid apps for businesses, e-commerce, on-demand services, and custom workflows.",
  },
  {
    question: "What is SaaS development and do you offer it?",
    answer:
      "Yes. We create full SaaS platforms including multi-tenant systems, subscription billing, admin dashboards, API integrations, cloud hosting, and user role management. Ideal for startups launching software products.",
  },
  {
    question: "Will my website be SEO-friendly?",
    answer:
      "Yes. Every website includes on-page SEO, fast loading speed, clean structure, indexing setup, and SEO-ready content & tags. Advanced SEO is available separately.",
  },
  {
    question: "Do you provide support after the website is launched?",
    answer:
      "Yes. We provide ongoing support for troubleshooting, updates, and enhancements.",
  },
];

    
    
      const toggleFaq = (index: number) => {
        setActiveIndex(activeIndex === index ? null : index);
      };
  return (
     <section className="container max-w-6xl bg-white rounded-[20px] mx-auto py-10 sm:py-15 lg:py-20 ">
      <div className="flex flex-col lg:flex-row justify-between gap-10">
        {/* Left Section */}
        <div className="lg:w-5/12">
         <h2
  className="text-[#010205] text-[48px] font-semibold leading-[130%] tracking-[-0.045em] mb-4"
>
  Digital Marketing FAQs
</h2>

        <p className="text-[#878C91]  text-[16px] font-medium leading-[150%] mb-6">
  As a leading digital marketing agency, we are dedicated to providing
  comprehensive educational resources and answering frequently asked
  questions to help our clients.
</p>

          <div className="flex gap-10 text-[#010205]  ">

                        <AnimatedTextButton
              text="More Questions"
              href="/contactus"
               className="bg-[#0a253b] border-2 border-white text-white"
            />


          </div>
        </div>

{/* Right Section */}
<motion.div
  className="lg:w-6/12 space-y-4"
  initial={{ opacity: 0, y: 50 }}
  whileInView={{ opacity: 1, y: 0 }}
  exit={{ opacity: 0, y: 50 }}
  transition={{ duration: 0.8, ease: "easeOut" }}
  viewport={{ once: false, amount: 0.2 }} // Repeats every time on scroll
>
  {faqs.map((faq, index) => (
    <motion.div
      key={index}
      className="border-t border-black pt-4"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, ease: "easeOut", delay: index * 0.2 }}
      viewport={{ once: false, amount: 0.2 }} // Repeats every time on scroll
    >
      <div
        onClick={() => toggleFaq(index)}
        className="flex justify-between items-center cursor-pointer"
      >
        <h3 className="font-semibold text-[#010205] text-[24px] w-120">{faq.question}</h3>
        <span className="text-2xl text-[#000000] ">
          {activeIndex === index ? "−" : "+"}
        </span>
      </div>

      {activeIndex === index && (
        <motion.p
          className="mt-4  text-[16px] text-[#878C91] "
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, ease: "easeOut" }}
        >
          {faq.answer}
        </motion.p>
      )}
    </motion.div>
  ))}

  <div className="border-t border-black"></div>
</motion.div>

</div>
    </section>
  )
}

export default Faq