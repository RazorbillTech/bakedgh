import { UtensilsCrossed, Award, Clock, Truck } from 'lucide-react';

const features = [
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-purple-600" />,
    title: 'Quality Ingredients',
    description: 'We use only the freshest and highest quality ingredients for our cakes and pastries.'
  },
  {
    icon: <Award className="h-8 w-8 text-purple-600" />,
    title: 'Expert Bakers',
    description: 'Our skilled bakers craft each cake with passion and precision.'
  },
  {
    icon: <Clock className="h-8 w-8 text-purple-600" />,
    title: 'Baked Fresh Daily',
    description: 'Our cakes are baked fresh every single day for maximum flavor and delight.'
  },
  {
    icon: <Truck className="h-8 w-8 text-purple-600" />,
    title: 'Custom Orders & Delivery',
    description: 'We create custom designs and deliver your sweet treats right to your doorstep.'
  }
];

const AboutSection = () => {
  return (
    <section className="bg-white py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Baked GH</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Baked GH is your go-to bakery for delightful cakes and pastries. Located in Achimota, we offer a wide range of freshly baked goods, from classic cakes to custom creations for special occasions. Our charming atmosphere and delicious treats create a sweet experience for everyone.
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
