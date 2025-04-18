import { UtensilsCrossed, Award, Clock, Truck } from 'lucide-react';

const features = [
  {
    icon: <UtensilsCrossed className="h-8 w-8 text-teal-600" />,
    title: 'Authentic Recipes',
    description: 'We prepare all our dishes using traditional Ghanaian recipes and fresh local ingredients.'
  },
  {
    icon: <Award className="h-8 w-8 text-teal-600" />,
    title: 'Expert Chefs',
    description: 'Our skilled chefs bring years of experience in traditional Ghanaian cuisine.'
  },
  {
    icon: <Clock className="h-8 w-8 text-teal-600" />,
    title: 'Fresh Preparation',
    description: 'Every dish is prepared fresh when you order, ensuring the best quality and taste.'
  },
  {
    icon: <Truck className="h-8 w-8 text-teal-600" />,
    title: 'Fast Delivery',
    description: 'We deliver your favorite Ghanaian dishes promptly across Accra and surrounding areas.'
  }
];

const AboutSection = () => {
  return (
    <section className="bg-white py-16" id="about">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">About Ayewamu by Jane</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Ayewamu By Jane is a must-visit restaurant for local food lovers. Located in Achimota, we offer an extensive menu of delicious Ghanaian dishes with generous portions and authentic flavors. Our charming and inviting atmosphere, complemented by comfortable seating and ambient music, creates a pleasant dining experience for all our guests.
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
