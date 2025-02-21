import React from 'react';
import { motion } from 'framer-motion';
import { Dumbbell, Users, Brain, Trophy, Star, Clock, Shield, Target, ChevronDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const Logo = () => (
  <img 
    src="https://raw.githubusercontent.com/stackblitz/stackblitz-images/main/ma-program-logo.png" 
    alt="MA Program"
    className="logo"
  />
);

const ValueCard = ({ icon: Icon, title, description }: { icon: any, title: string, description: string }) => (
  <div className="bg-black/50 p-8 rounded-xl backdrop-blur-lg border border-[#FF69B4]/20">
    <Icon className="w-12 h-12 text-[#FF69B4] mb-4" />
    <h3 className="text-xl font-bold mb-2">{title}</h3>
    <p className="text-gray-400">{description}</p>
  </div>
);

const PricingTier = ({ name, price, features, recommended = false }: { name: string, price: string, features: string[], recommended?: boolean }) => (
  <div className={`relative p-8 rounded-xl ${recommended ? 'bg-[#FF69B4]' : 'bg-black/50'} backdrop-blur-lg border border-[#FF69B4]/20`}>
    {recommended && (
      <div className="absolute -top-4 left-1/2 transform -translate-x-1/2 bg-white text-black px-4 py-1 rounded-full text-sm font-bold">
        Recommended
      </div>
    )}
    <h3 className="text-2xl font-bold mb-2">{name}</h3>
    <p className="text-4xl font-bold mb-6">{price}<span className="text-lg">/month</span></p>
    <ul className="space-y-4 mb-8">
      {features.map((feature, index) => (
        <li key={index} className="flex items-center">
          <Star className="w-5 h-5 text-[#FF69B4] mr-2" />
          {feature}
        </li>
      ))}
    </ul>
    <button className={recommended ? 'btn-secondary w-full' : 'btn-primary w-full'}>
      Join Now
    </button>
  </div>
);

function App() {
  const [heroRef, heroInView] = useInView({ triggerOnce: true });
  const [valueRef, valueInView] = useInView({ triggerOnce: true });
  const [trainerRef, trainerInView] = useInView({ triggerOnce: true });
  const [pricingRef, pricingInView] = useInView({ triggerOnce: true });

  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-lg border-b border-[#FF69B4]/20">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Logo />
          <button className="btn-primary">Join Now</button>
        </div>
      </nav>

      {/* Hero Section */}
      <section ref={heroRef} className="relative min-h-screen flex items-center pt-20">
        <div className="absolute inset-0">
          <img 
            src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?ixlib=rb-1.2.1&auto=format&fit=crop&w=2070&q=80"
            alt="Fitness Background"
            className="w-full h-full object-cover opacity-50"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black" />
        </div>
        
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={heroInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <Logo />
            <h1 className="text-6xl font-bold mb-6 mt-8">
              Transform Your Body with <span className="gradient-text">MA Program</span>
            </h1>
            <p className="text-xl text-gray-300 mb-8">
              Expert-led fitness transformation for sustainable results. Join the program that's changing lives through personalized training and nutrition.
            </p>
            <div className="flex gap-4">
              <button className="btn-primary">Start Your Journey</button>
              <button className="btn-secondary">Learn More</button>
            </div>
          </motion.div>
        </div>
        
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8" />
        </div>
      </section>

      {/* Value Proposition */}
      <section ref={valueRef} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={valueInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-3 gap-8"
          >
            <ValueCard
              icon={Dumbbell}
              title="Custom Workout Plans"
              description="Tailored fitness programs designed specifically for your goals and fitness level"
            />
            <ValueCard
              icon={Brain}
              title="Nutrition Guidance"
              description="Expert nutrition advice to fuel your transformation and maximize results"
            />
            <ValueCard
              icon={Users}
              title="1-on-1 Coaching"
              description="Personal attention from certified trainers who care about your success"
            />
          </motion.div>
        </div>
      </section>

      {/* Trainer Profile */}
      <section ref={trainerRef} className="py-20 bg-black/90">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={trainerInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
            className="grid md:grid-cols-2 gap-12 items-center"
          >
            <div>
              <img
                src="https://images.unsplash.com/photo-1571732154690-f6d1c3e5178a?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
                alt="Head Trainer"
                className="rounded-xl shadow-2xl"
              />
            </div>
            <div>
              <Logo />
              <h2 className="text-4xl font-bold mb-6 mt-8">Meet Your Trainer</h2>
              <div className="space-y-6">
                <p className="text-gray-300">
                  With over 10 years of experience in professional fitness training and nutrition coaching, our head trainer has helped thousands achieve their dream physique.
                </p>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-black/50 rounded-lg">
                    <Trophy className="w-8 h-8 text-[#FF69B4] mb-2" />
                    <h4 className="font-bold">Certified Trainer</h4>
                  </div>
                  <div className="p-4 bg-black/50 rounded-lg">
                    <Users className="w-8 h-8 text-[#FF69B4] mb-2" />
                    <h4 className="font-bold">1000+ Clients</h4>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Program Benefits */}
      <section className="py-20 bg-gradient-to-b from-black to-[#FF69B4]/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-12">
            <Logo />
          </div>
          <h2 className="text-4xl font-bold text-center mb-12">Program Benefits</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Target, title: "Goal Setting", description: "Clear milestones and tracking" },
              { icon: Shield, title: "Injury Prevention", description: "Safe and effective training" },
              { icon: Clock, title: "Flexible Schedule", description: "Train on your time" }
            ].map((benefit, index) => (
              <ValueCard key={index} {...benefit} />
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section ref={pricingRef} className="py-20 bg-black">
        <div className="container mx-auto px-4">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={pricingInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            <div className="flex justify-center mb-12">
              <Logo />
            </div>
            <h2 className="text-4xl font-bold text-center mb-12">Choose Your Plan</h2>
            <div className="grid md:grid-cols-3 gap-8">
              <PricingTier
                name="Basic"
                price="$99"
                features={[
                  "Custom workout plan",
                  "Basic nutrition guide",
                  "Weekly check-ins",
                  "Email support"
                ]}
              />
              <PricingTier
                name="Premium"
                price="$199"
                features={[
                  "Everything in Basic",
                  "1-on-1 coaching sessions",
                  "Advanced nutrition planning",
                  "24/7 WhatsApp support",
                  "Progress tracking app"
                ]}
                recommended
              />
              <PricingTier
                name="Elite"
                price="$299"
                features={[
                  "Everything in Premium",
                  "Daily personal coaching",
                  "Custom meal plans",
                  "Priority support",
                  "Monthly photoshoot"
                ]}
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black border-t border-[#FF69B4]/20">
        <div className="container mx-auto px-4">
          <div className="flex justify-center mb-8">
            <Logo />
          </div>
          <p className="text-center text-gray-400">© 2024 MA Program. All rights reserved.</p>
        </div>
      </footer>

      {/* Floating CTA */}
      <div className="fixed bottom-8 right-8 z-50">
        <button className="btn-primary shadow-lg">
          Join Now
        </button>
      </div>
    </div>
  );
}

export default App;