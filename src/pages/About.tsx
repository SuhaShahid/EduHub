import React from 'react';
import { Users, Award, BookOpen, Globe } from 'lucide-react';

interface AboutProps {
  darkMode: boolean;
}

export default function About({ darkMode }: AboutProps) {
  const stats = [
    { icon: Users, label: 'Active Students', value: '50,000+' },
    { icon: Award, label: 'Courses Completed', value: '100,000+' },
    { icon: BookOpen, label: 'Total Courses', value: '500+' },
    { icon: Globe, label: 'Countries Reached', value: '150+' }
  ];

  return (
    <div className={`min-h-screen pt-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <div className="text-center">
          <h1 className="text-4xl font-bold mb-8">About EduHub</h1>
          <p className="text-xl mb-8 max-w-3xl mx-auto">
            We're on a mission to transform online education and make quality learning accessible to everyone.
            Our platform connects passionate educators with eager learners worldwide.
          </p>
        </div>
      </div>

      {/* Stats Section */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => {
              const Icon = stat.icon;
              return (
                <div
                  key={index}
                  className={`${
                    darkMode ? 'bg-gray-700' : 'bg-white'
                  } p-6 rounded-lg shadow-lg text-center`}
                >
                  <div className="inline-block p-3 rounded-full bg-blue-100 text-blue-600 mb-4">
                    <Icon size={24} />
                  </div>
                  <div className="text-3xl font-bold mb-2">{stat.value}</div>
                  <div className={darkMode ? 'text-gray-300' : 'text-gray-600'}>{stat.label}</div>
                </div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Story Section */}
      <div className="py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-6">Our Story</h2>
              <p className="text-lg mb-6">
                Founded in 2025, EduHub emerged from a simple yet powerful idea: education should be
                accessible to everyone, everywhere. We started with a small team of passionate educators
                and tech enthusiasts who believed in the transformative power of online learning.
              </p>
              <p className="text-lg mb-6">
                Today, we've grown into a global platform serving students from over 150 countries,
                offering courses in everything from programming to business management, and from
                creative arts to personal development.
              </p>
              <p className="text-lg">
                Our success is measured not just in numbers, but in the countless success stories of
                our students who have transformed their lives through learning.
              </p>
            </div>
            <div>
              <img
                src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f"
                alt="Team collaboration"
                className="rounded-lg shadow-xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Values Section */}
      <div className={`${darkMode ? 'bg-gray-800' : 'bg-gray-50'} py-24`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-center mb-16">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Quality Education',
                description:
                  'We maintain high standards in our course content and ensure that our instructors are industry experts.'
              },
              {
                title: 'Accessibility',
                description:
                  'We believe that everyone should have access to quality education, regardless of their location or background.'
              },
              {
                title: 'Innovation',
                description:
                  'We continuously evolve our platform and teaching methods to provide the best learning experience.'
              }
            ].map((value, index) => (
              <div
                key={index}
                className={`${
                  darkMode ? 'bg-gray-700' : 'bg-white'
                } p-6 rounded-lg shadow-lg`}
              >
                <h3 className="text-xl font-semibold mb-4">{value.title}</h3>
                <p className={darkMode ? 'text-gray-300' : 'text-gray-600'}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}