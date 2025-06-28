import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/Background";
import { motion } from 'framer-motion';
import { ExternalLink } from 'lucide-react';

const projects = [{
  id: "1",
  title: "White Space Website",
  description: "This project management software is built to empower teams with the tools they need to collaborate effectively, stay organized, and meet deadlines. Whether you're managing a small internal team or coordinating a large-scale project, the platform offers intuitive task boards, real-time collaboration features, and progress tracking to ensure everyone stays aligned and productive.With features like team chat, file sharing, scheduling, analytics, and task automation, this platform eliminates the chaos of scattered workflows and manual planning. From initial planning to final delivery, every step of your project is simplified and optimized for efficiency. Ideal for startups, agencies, and enterprise teams, this solution adapts to your workflow — not the other way around.",
  image: "/projects/project1.png",
  link: "https://white-space-psi.vercel.app/"
},
{
  id: "2",
  title: "Ai consultant website",
  description: "Our AI consulting website is designed to help businesses navigate the evolving world of artificial intelligence with confidence and clarity. Whether you're just starting with AI or looking to optimize existing systems, we offer tailored guidance on strategy, development, and integration. Our goal is to bridge the gap between cutting-edge AI technology and your business objectives — ensuring solutions that are both innovative and practical.From intelligent automation and predictive analytics to natural language processing and computer vision, we cover a wide range of AI capabilities. We work closely with clients to identify opportunities, design scalable architectures, and implement reliable AI systems that deliver measurable results. Whether you're a startup or an enterprise, our consulting services are built to empower your teams and future-proof your operations.",
  image: "/projects/project2.png",
  link: "https://project2.com"
},
{
  id: "3",
  title: "Golf website",
  description: "This golf website is a complete digital hub for golf lovers, players, and club members. Whether you're a beginner looking to learn, a pro searching for competitive events, or a club manager promoting your facility, the platform offers everything you need — including course information, tee-time bookings, membership management, and event registration. The site delivers a clean and modern user experience, making it easy for visitors to explore and engage with golfing content.Beyond basic features, the website also includes training resources, instructor bios, community news, and real-time updates for tournaments and club events. Built with responsiveness and ease-of-use in mind, it ensures smooth navigation on all devices. Whether you're looking to join a club, improve your swing, or organize a golf event, this website serves as the ideal destination for the modern golf community.This golf website is a comprehensive digital solution designed to serve the modern needs of golf enthusiasts, clubs, and professional players. It provides a centralized platform where users can explore golf courses, book tee times, register for tournaments, and stay informed about upcoming events. Built with a clean and elegant interface, the site reflects the prestige and tradition of golf while offering the convenience and speed of modern web applications.Users can browse detailed course layouts, view hole-by-hole maps, check slope ratings, and even explore instructor bios and training schedules. A seamless booking engine allows players to reserve spots, join coaching sessions, or register for matches in just a few clicks. For clubs and course administrators, the backend offers event management, membership handling, and promotional features to help attract and retain players. Mobile-responsive and user-centric, this golf website offers not only functionality but also an immersive digital experience tailored to one of the world’s most elegant sports.",
  image: "/projects/project3.png",
  link: "https://project3.com"

},
{
  id: "4",
  title: "burger website",
  description: "This burger website is your go-to destination for delicious, handcrafted burgers made with the freshest ingredients. From classic beef patties to gourmet chicken and plant-based options, our menu is designed to satisfy every craving. With a vibrant and appetizing design, the website lets customers browse the full menu, customize their orders, and place them for quick delivery or pickup with just a few clicks.More than just a digital menu, the site also features special deals, combo offers, customer reviews, and a behind-the-scenes look at our kitchen and quality standards. Whether you're a burger lover exploring new flavors or a loyal customer looking for your usual favorite, this website offers a seamless and tasty experience from browsing to bite.This burger website is a digital-first platform built to delight customers with a seamless and flavor-packed experience — from browsing the menu to placing an order. Designed for a burger brand that values both tradition and innovation, the website offers a fully responsive and visually rich interface where each burger, combo, and side dish is presented with tempting imagery and customizable options. Customers can browse signature creations or build their own, with real-time previews and add-ons like sauces, sides, and drinks.Integrated with online ordering, the website supports delivery and pickup, and can connect with third-party delivery services or a native order tracking system. Beyond ordering, the site tells the brand story — including sourcing, kitchen philosophy, chef specials, and community engagement. It also features loyalty program integration, special discount banners, and festive campaign areas. For franchise or restaurant owners, the backend provides an easy-to-manage dashboard for updating menu items, managing orders, and running local promotions. With performance optimization, fast loading, and mouth-watering design — this site ensures that the appetite it builds can be instantly satisfied.",
  image: "/projects/project4.png",
  link: "https://project3.com"

},
{
  id: "5",
  title: "Real state website",
  description: "This real estate website is a fully integrated digital platform developed to transform the way individuals and businesses interact with the property market. Designed for a wide audience that includes homebuyers, renters, sellers, real estate investors, and property agents, the platform aims to simplify the complex and often overwhelming real estate process by offering a centralized, user-friendly, and data-rich experience.At its core, the website functions as a constantly updated property marketplace, featuring thousands of residential and commercial listings. These include apartments, houses, plots, offices, warehouses, villas, and luxury estates. Advanced search filters allow users to refine their results based on a wide range of criteria, including location, price range, number of rooms, square footage, property type, furnishing status, and more. The search functionality is further enhanced with location-aware results, integrated Google Maps, and GPS-enabled proximity searches, helping users make informed decisions with confidence and convenience.Each property listing is enriched with detailed descriptions, high-resolution photos, 3D floor plans, and immersive virtual tours, enabling potential buyers or tenants to fully visualize the space before physically visiting it. The platform also includes interactive features such as mortgage calculators, EMI estimators, affordability tools, and ROI projections — perfect for users looking to understand the financial implications of their decisions. Users can also explore nearby amenities, school ratings, transportation options, and community reviews using built-in neighborhood analytics.In addition to serving as a discovery tool, the website provides an end-to-end transaction ecosystem. It connects users directly with verified real estate agents, developers, and property managers. The platform supports appointment scheduling, online inquiries, and even virtual consultation or property negotiations. Real-time chat, secure document sharing, and e-signature capabilities are also available for advanced users, streamlining the property buying or renting process like never before.For sellers and agents, the website offers a robust listing management system with dashboard analytics, lead tracking, performance reports, and promotional tools such as featured listings and banner ads. Property owners can manage their listings, update photos, set pricing, and respond to inquiries — all from a personalized admin panel. The platform also supports property verification badges, agent ranking systems, and user ratings to maintain quality and transparency across all listings.Beyond its marketplace capabilities, the website serves as a rich knowledge hub for the real estate community. Regularly updated blogs, news articles, video explainers, and expert-written guides cover topics such as property investment strategies, home loan processes, market trends, legal compliance, taxation, and interior design tips. The goal is to not only facilitate transactions but also to educate and empower users with valuable insights, regardless of where they are in their real estate journey.Technologically, the platform is built with cutting-edge tools and hosted on high-performance infrastructure, ensuring speed, security, and scalability. The interface is fully responsive and optimized for all screen sizes — be it desktop, tablet, or mobile — ensuring a smooth and seamless browsing experience. Accessibility features, multilingual support, and data encryption protocols are also implemented to provide a secure and inclusive experience for all users.In short, this real estate website is not just a listing directory; it’s a digital ecosystem designed to support every stakeholder in the real estate industry. Whether you're searching for your dream home, marketing a commercial property, managing rental income, or seeking investment opportunities, this platform delivers everything you need in one place. It redefines how property is discovered, analyzed, managed, and acquired — making it the ultimate real estate companion in the digital age.This real estate website is a professional-grade platform created to streamline the entire property journey — from search and discovery to connection and closing. Whether you're a buyer looking for your dream home, a tenant searching for a rental, a seller listing a property, or an agent managing a portfolio, the website is engineered to support all user types with precision and simplicity. The homepage immediately presents visitors with dynamic, location-based property listings and intuitive filtering options to narrow results by price, type, features, and location.What sets this platform apart is its data-driven support system. Users can explore in-depth property pages with photo galleries, 3D floor plans, virtual tours, and integrated mortgage calculators. The site also includes neighborhood analysis, walkability scores, school ratings, and local market trends to aid in making confident decisions. On the agent side, there are robust tools for listing management, client inquiries, and lead tracking. All of this is wrapped in a clean, responsive design that works across all devices. More than just a property directory, this website is a complete digital ecosystem for real estate — smart, scalable, and built for modern property transactions.",
  image: "/projects/project5.png",
  link: "https://project3.com"
},
  // Add more projects...
];


const Descriptionpage = () => {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);

  if (!project) {
    return (
      <div className="p-8 text-center">
        <h1 className="text-2xl font-bold">Project Not Found</h1>
        <p>No project exists with ID: {id}</p>
      </div>
    );
  }
  const handleLiveDemo = (e) => {
    if (!project.link) {
      console.log("ProjectLink kosong");
      e.preventDefault();
      alert("Live demo link is not available");
    }
  };

  return (
    <>
      <Navbar />
      <AnimatedBackground />
      <div className="min-h-screen bg-[#0a0a0a] text-white pt-20 px-[5%]">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-7xl mx-auto"
        >
          <div className="absolute inset-5 mt-10 overflow-x-auto  scrollbar-hide transition-all  rounded-xl md:p-10 bg-gradient-to-br from-slate-900/90 to-slate-800/90 backdrop-blur-lg ">
            <div className="absolute  inset-0  opacity-50 group-hover:opacity-70 transition-opacity duration-1000"></div>

            <div className="relative p-5 z-10">
              <div className="relative overflow-hidden rounded-lg">

                <div className="max-w-4xl mx-auto  p-6 bg-gradient-to-br from-slate-900/90 to-slate-800/90 rounded-xl shadow-2xl border border-white/10 relative z-10">
                  <div className="flex flex-col items-center">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full max-w-full rounded-2xl shadow-lg border border-purple-400/30 mb-8 object-cover"
                      style={{ aspectRatio: "16/9", background: "#222" }}
                    />

                  </div>
                </div>
              </div>

              <div className="mt-4 space-y-3">
                <h3 className="text-2xl font-bold  bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                  {project.title}
                </h3>

                <p className="text-gray-300/80 text-sm  leading-relaxed ">
                  {project.description}
                </p>

                <div className="pt-4 flex items-center justify-between">
                  {project.link ? (
                    <a
                      href={project.link || "#"}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={handleLiveDemo}
                      className="inline-flex items-center space-x-2 text-blue-400 hover:text-blue-300 transition-colors duration-200"
                    >
                      <span className="text-sm font-medium">Live Demo</span>
                      <ExternalLink className="w-4 h-4" />
                    </a>
                  ) : (
                    <span className="text-gray-500 text-sm">Demo Not Available</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </>
  );
};

export default Descriptionpage;