import React, { useState } from 'react';
import { Search, BookOpen, Clock, Star } from 'lucide-react';

interface ServicesProps {
  darkMode: boolean;
}

export default function Services({ darkMode }: ServicesProps) {
  const [searchQuery, setSearchQuery] = useState('');

  const courses = [
    {
      id: 1,
      title: 'Complete Web Development Bootcamp',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      price: 99.99,
      rating: 4.8,
      duration: '12 weeks',
      level: 'Beginner',
      description: 'Learn web development from scratch with HTML, CSS, JavaScript, React, and Node.js.'
    },
    {
      id: 2,
      title: 'Digital Marketing Mastery',
      category: 'Marketing',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      price: 89.99,
      rating: 4.7,
      duration: '8 weeks',
      level: 'Intermediate',
      description: 'Master digital marketing strategies, SEO, social media, and content marketing.'
    },
    {
      id: 3,
      title: 'UI/UX Design Fundamentals',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      price: 79.99,
      rating: 4.9,
      duration: '10 weeks',
      level: 'Beginner',
      description: 'Learn the principles of user interface and user experience design.'
    },
    {
      id: 4,
      title: 'Business Analytics & Data Science',
      category: 'Business',
      image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f',
      price: 129.99,
      rating: 4.8,
      duration: '14 weeks',
      level: 'Advanced',
      description: 'Master data analysis techniques and business intelligence tools.'
    },
    {
      id: 5,
      title: 'Mobile App Development with React Native',
      category: 'Development',
      image: 'https://images.unsplash.com/photo-1498050108023-c5249f4df085',
      price: 109.99,
      rating: 4.7,
      duration: '10 weeks',
      level: 'Intermediate',
      description: 'Build cross-platform mobile apps using React Native framework.'
    },
    {
      id: 6,
      title: 'Graphic Design for Beginners',
      category: 'Design',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5',
      price: 69.99,
      rating: 4.6,
      duration: '8 weeks',
      level: 'Beginner',
      description: 'Learn graphic design principles and tools like Adobe Creative Suite.'
    }
  ];

  const filteredCourses = courses.filter(course =>
    course.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
    course.level.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const categories = ['All', 'Development', 'Marketing', 'Design', 'Business'];
  const [selectedCategory, setSelectedCategory] = useState('All');

  const displayedCourses = selectedCategory === 'All'
    ? filteredCourses
    : filteredCourses.filter(course => course.category === selectedCategory);

  return (
    <div className={`min-h-screen pt-16 ${darkMode ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}>
      {/* Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h1 className="text-4xl font-bold text-center mb-8">Our Courses</h1>
        
        {/* Search and Filter */}
        <div className="mb-12">
          <div className="max-w-xl mx-auto mb-8">
            <div className="relative">
              <input
                type="text"
                placeholder="Search courses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className={`w-full px-4 py-3 pl-12 rounded-lg ${
                  darkMode
                    ? 'bg-gray-800 text-white placeholder-gray-400'
                    : 'bg-gray-100 text-gray-900 placeholder-gray-500'
                }`}
              />
              <Search className="absolute left-4 top-3.5 text-gray-400" size={20} />
            </div>
          </div>
          
          {/* Categories */}
          <div className="flex flex-wrap justify-center gap-4 mb-8">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`px-4 py-2 rounded-full transition-colors ${
                  selectedCategory === category
                    ? 'bg-blue-600 text-white'
                    : darkMode
                    ? 'bg-gray-800 text-gray-300 hover:bg-gray-700'
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Course Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {displayedCourses.map((course) => (
            <div
              key={course.id}
              className={`rounded-lg overflow-hidden shadow-lg transition-transform hover:scale-105 ${
                darkMode ? 'bg-gray-800' : 'bg-white'
              }`}
            >
              <img
                src={course.image}
                alt={course.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-blue-600">{course.category}</span>
                  <span className="text-sm">{course.level}</span>
                </div>
                <h3 className="text-xl font-semibold mb-2">{course.title}</h3>
                <p className={`text-sm mb-4 ${darkMode ? 'text-gray-400' : 'text-gray-600'}`}>
                  {course.description}
                </p>
                <div className="flex items-center mb-4">
                  <Clock size={16} className="mr-1" />
                  <span className="text-sm mr-4">{course.duration}</span>
                  <Star size={16} className="text-yellow-400 mr-1" />
                  <span className="text-sm">{course.rating}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-2xl font-bold">${course.price}</span>
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
  );
}