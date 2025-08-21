import React from 'react';
import { Helmet } from 'react-helmet';
import { motion } from 'framer-motion';
import { Target, Eye, Heart, Users, Lightbulb, Rocket } from 'lucide-react';

const About = () => {
  const teamMembers = [
    {
      name: "Alex Thompson",
      role: "CEO & Founder",
      description: "Visionary leader with 10+ years in tech innovation",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      name: "Sarah Chen",
      role: "CTO",
      description: "Technical architect specializing in scalable solutions",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      name: "Michael Rodriguez",
      role: "Lead Developer",
      description: "Full-stack expert with passion for clean code",
      gradient: "from-green-500 to-teal-500"
    },
    {
      name: "Emily Johnson",
      role: "UX/UI Designer",
      description: "Creative designer focused on user-centered experiences",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const values = [
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Innovation",
      description: "We constantly push boundaries and embrace new technologies to deliver cutting-edge solutions."
    },
    {
      icon: <Heart className="h-8 w-8" />,
      title: "Quality",
      description: "Excellence is not negotiable. We maintain the highest standards in everything we deliver."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Collaboration",
      description: "We believe in the power of teamwork and building strong partnerships with our clients."
    },
    {
      icon: <Rocket className="h-8 w-8" />,
      title: "Growth",
      description: "We're committed to continuous learning and helping our clients achieve sustainable growth."
    }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - TechNova Solutions</title>
        <meta name="description" content="Learn about TechNova Solutions - our mission, vision, values, and the passionate team behind innovative technology solutions that transform businesses." />
        <meta property="og:title" content="About Us - TechNova Solutions" />
        <meta property="og:description" content="Learn about TechNova Solutions - our mission, vision, values, and the passionate team behind innovative technology solutions that transform businesses." />
      </Helmet>

      <div className="pt-16 min-h-screen">
        {/* Hero Section */}
        <section className="py-20 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-16"
            >
              <h1 className="font-orbitron font-black text-5xl lg:text-6xl mb-6">
                <span className="text-gradient">About</span>
                <br />
                <span className="text-gradient-secondary">TechNova Solutions</span>
              </h1>
              <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                We are a passionate team of technology enthusiasts dedicated to transforming 
                businesses through innovative digital solutions and cutting-edge technology.
              </p>
            </motion.div>

            {/* Company Story */}
            <div className="grid lg:grid-cols-2 gap-12 items-center mb-20">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="space-y-6"
              >
                <h2 className="font-orbitron font-bold text-3xl text-gradient-accent">
                  Our Story
                </h2>
                <p className="text-gray-300 leading-relaxed">
                  Founded in 2019, TechNova Solutions emerged from a simple yet powerful vision: 
                  to bridge the gap between cutting-edge technology and real-world business needs. 
                  What started as a small team of passionate developers has grown into a 
                  comprehensive technology solutions provider.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Over the years, we've had the privilege of working with startups, SMEs, and 
                  enterprise clients across various industries. Each project has taught us 
                  valuable lessons and reinforced our commitment to delivering exceptional 
                  results that drive tangible business outcomes.
                </p>
                <p className="text-gray-300 leading-relaxed">
                  Today, we continue to evolve, embracing emerging technologies like AI, 
                  blockchain, and IoT to help our clients stay ahead in an increasingly 
                  digital world.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                className="relative"
              >
                <img  
                  alt="Modern office space with collaborative team environment"
                  className="w-full h-96 object-cover rounded-2xl shadow-2xl"
                 src="https://images.unsplash.com/photo-1681184025442-1517cb9319c1" />
                <div className="absolute -bottom-6 -right-6 bg-gradient-to-r from-purple-500 to-pink-500 p-6 rounded-xl neon-glow">
                  <div className="text-white text-center">
                    <div className="text-2xl font-bold">5+</div>
                    <div className="text-sm">Years of Excellence</div>
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Mission, Vision, Values */}
            <div className="grid md:grid-cols-3 gap-8 mb-20">
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="bg-glass rounded-xl p-8 text-center hover:bg-glass-dark transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-purple-500 to-pink-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Target className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gradient-accent">Our Mission</h3>
                <p className="text-gray-300 leading-relaxed">
                  To empower businesses with innovative technology solutions that drive growth, 
                  efficiency, and competitive advantage in the digital age.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-glass rounded-xl p-8 text-center hover:bg-glass-dark transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-blue-500 to-cyan-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Eye className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gradient-accent">Our Vision</h3>
                <p className="text-gray-300 leading-relaxed">
                  To be the leading technology partner that transforms ideas into reality, 
                  creating a more connected and efficient world through innovation.
                </p>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className="bg-glass rounded-xl p-8 text-center hover:bg-glass-dark transition-all duration-300"
              >
                <div className="bg-gradient-to-r from-green-500 to-teal-500 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                  <Heart className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-bold text-xl mb-4 text-gradient-accent">Our Commitment</h3>
                <p className="text-gray-300 leading-relaxed">
                  To deliver exceptional value through quality solutions, transparent communication, 
                  and long-term partnerships built on trust and mutual success.
                </p>
              </motion.div>
            </div>

            {/* Core Values */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-orbitron font-bold text-4xl mb-6">
                <span className="text-gradient-secondary">Our Core Values</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                These fundamental principles guide every decision we make and every solution we deliver.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-20">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-glass rounded-xl p-6 text-center hover:bg-glass-dark transition-all duration-300 group"
                >
                  <div className="text-purple-400 mb-4 flex justify-center group-hover:text-pink-400 transition-colors">
                    {value.icon}
                  </div>
                  <h3 className="font-bold text-lg mb-3 text-gradient-accent">
                    {value.title}
                  </h3>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>

            {/* Team Section */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="text-center mb-12"
            >
              <h2 className="font-orbitron font-bold text-4xl mb-6">
                <span className="text-gradient-secondary">Meet Our Team</span>
              </h2>
              <p className="text-lg text-gray-300 max-w-2xl mx-auto">
                The brilliant minds behind TechNova Solutions, each bringing unique expertise 
                and passion to every project.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  className="bg-glass rounded-xl p-6 text-center hover:bg-glass-dark transition-all duration-300 group"
                >
                  <div className={`w-20 h-20 bg-gradient-to-r ${member.gradient} rounded-full mx-auto mb-4 flex items-center justify-center text-white text-2xl font-bold`}>
                    {member.name.split(' ').map(n => n[0]).join('')}
                  </div>
                  <h3 className="font-bold text-lg mb-2 text-gradient-accent">
                    {member.name}
                  </h3>
                  <div className="text-purple-300 text-sm mb-3">
                    {member.role}
                  </div>
                  <p className="text-gray-300 text-sm group-hover:text-white transition-colors">
                    {member.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Background Elements */}
          <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
            <div className="absolute top-40 right-20 w-64 h-64 bg-purple-500/5 rounded-full blur-3xl floating-animation"></div>
            <div className="absolute bottom-40 left-20 w-80 h-80 bg-pink-500/5 rounded-full blur-3xl floating-animation" style={{ animationDelay: '3s' }}></div>
          </div>
        </section>
      </div>
    </>
  );
};

export default About;