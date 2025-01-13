import { createContext } from "react";
import Application  from '../../assest/application.png'
import Cloud from '../../assest/cloud.png'
import Hosting from '../../assest/hosting.png'
import Seo from '../../assest/seo.png'
import sequire from '../../assest/sequirity.png'
import Social from '../../assest/social media.png'
import Exprience from '../../assest/Expricence.png'
import Product from '../../assest/products.png'
import Approch from '../../assest/Approch.png'
import pricing from '../../assest/pricing.png'
import Delivery from '../../assest/timing.png'
import Support from '../../assest/support.png'
import Logo from '../../assest/Prelog.png'







export const DContext = createContext()
function Datacontext(props) {
  
  const navbar = {

    logo : Logo,
    home : "home",
    services : "services",
    portfolio : "portfolio",
    testimonials : "testimonials",
    team : "team",
    menu : "menu",
    news : "news",
    getquotes : "getquotes"

}

const service = [
  {
    image : Application,
    topic : "Application Design",
    content : `Application design plays a vital role in creating a seamless user 
    experience by simplifying navigation and ensuring intuitive workflows. 
    It enhances the visual appeal of the interface through consistent, responsive, and modern
     designs, aligning with branding and accessibility standards.
     Additionally, a well-designed application boosts functionality,
      enabling smooth performance and efficient user interactions.`
  },
  {
    image : Hosting,
    topic : "Web Hosting",
    content : `Web Hosting is a service that allows individuals and businesses to make their websites accessible on the internet. 
    Web hosting providers allocate space on a server and offer resources such as bandwidth, storage, and security 
    to host your website files.`
  },
  {
    image : Social,
    topic : "Social Media",
    content : `Social Media refers to online platforms and applications that allow users to create, share,
     and interact with content. It includes platforms like Facebook, 
    Instagram, Twitter, LinkedIn, and TikTok, where individuals, businesses, and organizations can engage with a global audience. `
  },
  {
    image : Seo,
    topic : "SEO Optimization",
    content : `SEO Optimization (Search Engine Optimization) is the process of improving a website's visibility on search engines like Google. 
    The goal is to increase organic (non-paid) traffic by making the website more 
    appealing to search engine algorithms.`
  },
  {
    image : Cloud,
    topic : "Cloud Server",
    content : `A cloud server is a virtual server hosted on a cloud computing platform rather than on a physical server. 
    It provides scalable, flexible, and on-demand computing resources such as processing power, storage, and bandwidth.
     Cloud servers are typically part of a larger network of servers that work together to deliver high availability and performance.`
  },
  {
    image : sequire,
    topic : "Data Secuity",
    content : `Data Security refers to the protection of digital data from unauthorized access, corruption,
     theft, or loss. It involves implementing strategies, tools, and policies to safeguard 
     sensitive information across its lifecycle.`
  },
  {
    choose : [
      {
        image : Exprience,
        topic  : "Exprience",
        content  :`Experience: With years of industry expertise, we deliver innovative IT solutions that empower businesses to grow. Our team has hands-on experience across various domains, ensuring the best outcomes.`
      },
      {
        image : Product,
        topic  : "Product",
        content  :`Products: We offer cutting-edge products designed to streamline operations and enhance performance. From software solutions to cloud services, our products are tailored to meet unique business needs.`
      },
      {
        image : Approch,
        topic  : "Approch",
        content  :`Approach: Our approach is customer-centric, focusing on understanding your challenges and providing personalized solutions. We prioritize collaboration and transparency to ensure success.`
      },
      {
        image : pricing,
        topic  : "Pricing",
        content  :`Pricing: We offer competitive pricing models that cater to businesses of all sizes. Our flexible pricing structure ensures cost-effectiveness without compromising quality.`
      },
      {
        image : Delivery,
        topic  : "Delivery",
        content  :`Delivery: Timely delivery is a key aspect of our services. We ensure your projects are completed on time with high-quality results, keeping your business ahead of the curve.`
      },
      {
        image : Support,
        topic  : "Support",
        content  :`Support: Our dedicated support team is available 24/7, ensuring smooth operation and quick resolution of any issues. We stand by our customers at every stage of the journey.`
      },
    ]
  }
]

const portfolio = [
  {
    image : "jhvj",
    title : `Unified Projects Showcase`,
    content : `Description: Explore a blend of our top achievements across various domains. From design to development, these projects highlight our diverse expertise and commitment to excellence.
Story: A platform where creativity meets functionality, delivering solutions that redefine industries.`
},
  {
    image : "hfyt",
    title : `Stunning User Interfaces`,
    content : `Beautifully crafted app designs that enhance user experience and engagement.
Story: We designed an intuitive app for a fitness startup, featuring user-friendly navigation and vibrant aesthetics. The design led to a 30% increase in customer retention.`

  },
  {
    image : "hfyt",
    title : `Robust Mobile Solutions`,
    content : `High-performance apps tailored to meet your business goals.
Story: Developed a secure e-commerce app for a retail giant, integrating advanced payment systems and AI-based product recommendations. The app boosted sales by 50%.`
  },
  {
    image : "hfyt",
    title : `Building Brand Identity`,
    content : `Unique and memorable brand designs that tell your story.
Story: Revamped the branding for a local coffee chain with a modern logo, cohesive packaging, and digital assets, which doubled their customer base in three months.`

  },
  {
    image : "hfyt",
    title : `Tailored Tech Innovations`,
    content : `Scalable and efficient IT solutions to empower growth.
Story: Designed and implemented a custom CRM solution for a healthcare company, reducing manual work by 40% and improving patient management efficiency.`

  },{
    image : "hfyt",
    title : `Comprehensive Digital Makeover`,
    content : `A one-stop solution combining design, development, and branding.
Story: Partnered with a growing startup to revamp their online presence. Delivered a modern website, branding overhaul, and a high-performing app, leading to a 300% growth in online engagement.`

  },
  {
    pricingplane : [
      {
        basic: "✅Basic",
      amount: "₹1500",
      space: "✅Unlimited GB space",
      domain: "✅2 Domain Names",
      ssl: "✅SSL Certificate",
      backup: "✅Daily Backup",
      templete: "✅1 Templates",
      email: "✅Free Email",
      database: "✅10 Databases",
      unlimitedemail: "✅3 Email Address",
      support: "✅Live Support",
      order: "✅Order Now",

      },
      {
        basic: "✅Standard",
      amount: "₹5000",
      space: "✅Unlimited GB space",
      domain: "✅5 Domain Names",
      ssl: "✅SSL Certificate",
      backup: "✅Daily Backup",
      templete: "✅3 Templates",
      email: "✅Free Email",
      database: "✅20 Databases",
      unlimitedemail: "✅7 Email Address",
      support: "✅Live Support",
      order: "✅Order Now",

      },
      {
        basic: "✅Premium",
      amount: "₹10000",
      space: "✅Unlimited GB space",
      domain: "✅10 Domain Names",
      ssl: "✅SSL Certificate",
      backup: "✅Daily Backup",
      templete: "✅5 Templates",
      email: "✅Free Email",
      database: "✅50 Databases",
      unlimitedemail: "✅Unlimited Email Address",
      support: "✅Live Support",
      order: "✅Order Now",

      },
    ]
  }
]

const client = [
  {
    image : "jvhdbs",
    number : "jsvuhbshj",
    content : "nbdsvhjbs",
    para : "bvhbvjdbvnn"
  },
  {
    image : "jvhdbs",
    number : "jsvuhbshj",
    content : "nbdsvhjbs",
    para : "bvhbvjdbvnn"
  },
  {
    image : "jvhdbs",
    number : "jsvuhbshj",
    content : "nbdsvhjbs",
    para : "bvhbvjdbvnn"
  }

]

const Team = [
  {
    image : "image",
    name : "name",
    postion : "postion",
    socialmedia : {
      twitter : "twitter",
      facebook : "faebook",
      linkecin : "linkedin",
      instagram : "instagram"
    }
  },
  {
    image : "image",
    name : "name",
    postion : "postion",
    socialmedia : {
      twitter : "twitter",
      facebook : "faebook",
      linkecin : "linkedin",
      instagram : "instagram"
    }
  },
  {
    image : "image",
    name : "name",
    postion : "postion",
    socialmedia : {
      twitter : "twitter",
      facebook : "faebook",
      linkecin : "linkedin",
      instagram : "instagram"
    }
  },
  {
    image : "image",
    name : "name",
    postion : "postion",
    socialmedia : {
      twitter : "twitter",
      facebook : "faebook",
      linkecin : "linkedin",
      instagram : "instagram"
    }
  },

]

   
    
   

    
    


    const data = {navbar,service,portfolio,client,Team}

  return (
    <DContext.Provider value={data}>
        {props.children}
    </DContext.Provider>
  )
}

export default Datacontext
