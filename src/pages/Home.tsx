import React from 'react';
import { ArrowRight, BookOpen, Users, Trophy, Star } from 'lucide-react';
import { Link } from 'react-router-dom';

interface HomeProps {
  darkMode: boolean;
}

export default function Home({ darkMode }: HomeProps) {
  const features = [
    {
      icon: BookOpen,
      title: 'Expert-Led Courses',
      description: 'Learn from industry professionals with years of experience'
    },
    {
      icon: Users,
      title: 'Community Support',
      description: 'Join a community of learners and share your journey'
    },
    {
      icon: Trophy,
      title: 'Certification',
      description: 'Earn recognized certificates upon course completion'
    }
  ];

  const popularCourses = [
    {
      title: 'Web Development Bootcamp',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      price: '$99.99',
      rating: 4.8,
      students: '15,234'
    },
    {
      title: 'Digital Marketing Mastery',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      price: '$89.99',
      rating: 4.7,
      students: '12,456'
    },
    {
      title: 'UI/UX Design Fundamentals',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      price: '$79.99',
      rating: 4.9,
      students: '10,789'
    }
  ];

  return (
    <div className={`min-h-screen ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <div className="pt-16">
        <div className="relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
            <div className="text-center">
              <h1 className="text-4xl md:text-6xl font-bold mb-8">
                Unlock Your Potential with Online Learning
              </h1>
              <p className="text-xl mb-8 max-w-2xl mx-auto">
                Access world-class education from anywhere. Learn new skills, advance your career, and
                explore your passions.
              </p>
              <Link
                to="/services"
                className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 transition-colors"
              >
                Explore Courses <ArrowRight className="ml-2" size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Features Section */}
      <div className={`py-24 ${darkMode ? 'bg-gray-800' : 'bg-gray-50'}`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Choose EduHub?</h2>
            <p className="text-xl">Discover the advantages of learning with us</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <div
                  key={index}
                  className={`p-6 rounded-lg ${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } shadow-lg text-center`}
                >
                  <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Popular Courses Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4">Popular Courses</h2>
            <p className="text-xl">Start learning from our most popular courses</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {popularCourses.map((course, index) => (
              <div
                key={index}
                className={`rounded-lg overflow-hidden shadow-lg ${
                  darkMode ? 'bg-gray-800' : 'bg-white'
                }`}
              >
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                  <div className="flex items-center mb-4">
                    <Star className="text-yellow-400" size={20} />
                    <span className="ml-1">{course.rating}</span>
                    <span className="mx-2">•</span>
                    <span>{course.students} students</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-2xl font-bold">{course.price}</span>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition-colors">
                      Enroll Now
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}