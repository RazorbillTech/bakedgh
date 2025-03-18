
import { Cake, Award, Clock, Truck } from 'lucide-react';

const features = [
  {
    icon: <Cake className="h-8 w-8 text-purple-500" />,
    title: 'Premium Ingredients',
    description: 'We use only the finest and freshest ingredients in all our baked goods.'
  },
  {
    icon: <Award className="h-8 w-8 text-purple-500" />,
    title: 'Expert Bakers',
    description: 'Our skilled bakers craft each cake with years of experience and passion.'
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-500" />,
    title: 'Made Fresh Daily',
    description: 'Every cake is baked fresh on the day of your order, ensuring quality.'
  },
  {
    icon: <Truck className="h-8 w-8 text-purple-500" />,
    title: 'Fast Delivery',
    description: 'We deliver your cakes promptly across Accra and surrounding areas.'
  }
];

const AboutSection = () => {
  return (
    <section className="bg-white py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About BakedGH</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            We're a premium bakery in Ghana specializing in handcrafted cakes and pastries for all occasions.
            With a focus on quality and taste, we create delicious treats that make your celebrations memorable.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-gray-50 p-6 rounded-lg text-center hover:shadow-md transition-shadow">
              <div className="flex justify-center mb-4">
                {feature.icon}
              </div>
              <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
              <p className="text-gray-600 text-sm">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
