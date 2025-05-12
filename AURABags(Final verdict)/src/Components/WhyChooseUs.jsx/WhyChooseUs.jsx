import { useState } from 'react';
import {
  Shield,
  Truck,
  Heart,
  Leaf,
  Award,
  Clock,
  PlusCircle,
  MinusCircle
} from 'lucide-react';

const WhyChooseUs = () => {
  // State for expandable FAQs
  const [expandedFaq, setExpandedFaq] = useState(null);

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index);
  };

  // Data
  const features = [
    {
      icon: <Shield className="w-6 h-6 text-indigo-600" />,
      title: "Premium Quality",
      description: "Crafted with finest materials for lasting durability"
    },
    {
      icon: <Truck className="w-6 h-6 text-emerald-600" />,
      title: "Free Shipping",
      description: "Complimentary delivery on all orders nationwide"
    },
    {
      icon: <Heart className="w-6 h-6 text-rose-600" />,
      title: "Customer First",
      description: "Dedicated support team available 24/7"
    },
    {
      icon: <Clock className="w-6 h-6 text-amber-600" />,
      title: "Handcrafted",
      description: "Each bag carefully made in small artisanal batches"
    }
  ];

  const uniquePoints = [
    {
      icon: <Leaf className="w-8 h-8 text-emerald-600" />,
      title: "Sustainable Materials",
      description: "We use eco-conscious fabrics that reduce environmental impact while maintaining premium quality and feel."
    },
    {
      icon: <Award className="w-8 h-8 text-indigo-600" />,
      title: "Built To Last",
      description: "Our bags are designed with durability in mind, using reinforced stitching and premium hardware that withstands daily use."
    }
  ];

  const testimonials = [
    {
      name: "Lisa Wang",
      role: "Travel Enthusiast",
      text: "My Aura backpack has accompanied me across three continents. The quality is outstanding, and it still looks brand new!"
    },
    {
      name: "Mark Thompson",
      role: "Business Professional",
      text: "Finally found a laptop bag that's both professional and stylish. The compartment design is incredibly thoughtful."
    },
    {
      name: "Sarah Miller",
      role: "Fashion Blogger",
      text: "Aura Bags perfectly balances aesthetics with functionality. Sustainable fashion that doesn't compromise on style."
    }
  ];

  const faqs = [
    {
      question: "How sustainable are your materials?",
      answer: "Our bags are made with 85% recycled or organic materials. We use organic cotton, recycled polyester from plastic bottles, and vegan leather alternatives. All our packaging is plastic-free and biodegradable."
    },
    {
      question: "What's your warranty policy?",
      answer: "Every Aura bag comes with a 2-year warranty against manufacturing defects. We believe in our craftsmanship and stand behind our products for the long haul."
    },
    {
      question: "Do you ship internationally?",
      answer: "Yes! We ship to over 60 countries worldwide with carbon-neutral shipping options available at checkout. International orders typically arrive within 7-14 business days."
    }
  ];

  return (
    <div className="bg-gray-50">
      {/* Hero Section with Parallax Effect */}
      <div className="relative h-96 overflow-hidden">
        <div 
          className="absolute inset-0 bg-cover bg-center transform scale-110"
          style={{
            backgroundImage: " ",
            backgroundAttachment: "fixed"
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-green-950 via-teal-600 to-teal-900/90" />
        <div className="relative h-full max-w-6xl mx-auto px-4 flex flex-col justify-center items-center text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-4">
            Why Choose <span className="text-teal-300">Aura</span>
          </h1>
          <p className="text-lg md:text-xl text-white/90 max-w-xl">
            Thoughtfully designed bags that balance style, sustainability, and everyday functionality
          </p>
        </div>
      </div>

      {/* Feature Cards */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {features.map((feature, index) => (
            <div key={index} className="bg-white rounded-lg shadow-sm p-6 flex flex-col items-center text-center transform transition duration-300 hover:shadow-md hover:-translate-y-1">
              {feature.icon}
              <h3 className="mt-4 text-lg font-semibold">{feature.title}</h3>
              <p className="mt-2 text-sm text-gray-600">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* What Sets Us Apart Section */}
      <div className="bg-white py-16">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Sets Us Apart</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            {uniquePoints.map((point, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="p-3 bg-gray-50 rounded-lg">
                  {point.icon}
                </div>
                <div>
                  <h3 className="text-xl font-semibold mb-2">{point.title}</h3>
                  <p className="text-gray-600">{point.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Image with Text Overlay */}
          <div className="mt-16 relative rounded-xl overflow-hidden">
            <img src="" alt="Artisans at work" className="w-full h-64 md:h-80 object-cover" />
            <div className="absolute inset-0 bg-gradient-to-tr from-teal-900/90 via-teal-800/70 to-transparent flex items-center">
              <div className="p-6 md:p-12 max-w-xl">
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-3">Crafted with Purpose</h3>
                <p className="text-white/90">Each Aura bag represents our commitment to thoughtful design and ethical production. We believe accessories should be both beautiful and functional while respecting our planet.</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Testimonials with Modern Cards */}
      <div className="max-w-6xl mx-auto px-4 py-16">
        <h2 className="text-3xl font-bold text-center mb-6">Customer Stories</h2>
        <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">Join thousands of satisfied customers who have made Aura their go-to bag brand</p>
        
        <div className="grid md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100">
              <div className="flex items-center mb-4">
                <div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-700 font-bold">
                  {testimonial.name.charAt(0)}
                </div>
                <div className="ml-3">
                  <h4 className="font-semibold">{testimonial.name}</h4>
                  <p className="text-xs text-gray-500">{testimonial.role}</p>
                </div>
              </div>
              <p className="text-gray-600 italic">{testimonial.text}</p>
              <div className="mt-4 flex text-amber-500">
                {[...Array(5)].map((_, i) => (
                  <span key={i}>★</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FAQ Accordion */}
      <div className="bg-indigo-50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
          
          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-white rounded-lg shadow-sm overflow-hidden">
                <button 
                  className="w-full px-6 py-4 text-left flex justify-between items-center focus:outline-none"
                  onClick={() => toggleFaq(index)}
                >
                  <span className="font-medium">{faq.question}</span>
                  {expandedFaq === index ? 
                    <MinusCircle className="w-5 h-5 text-teal-600" /> : 
                    <PlusCircle className="w-5 h-5 text-teal-600" />
                  }
                </button>
                
                {expandedFaq === index && (
                  <div className="px-6 pb-4 text-gray-600">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="max-w-6xl mx-auto px-4 py-16 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-4">Ready to experience the Aura difference?</h2>
        <p className="text-gray-600 mb-8 max-w-xl mx-auto">Join our community of conscious consumers who value quality, design, and sustainability.</p>
        <button className="bg-teal-600 hover:bg-teal-700 text-white font-medium py-3 px-8 rounded-lg transition duration-300 shadow-md hover:shadow-lg">
          Shop The Collection
        </button>
      </div>
    </div>
  );
};

export default WhyChooseUs;