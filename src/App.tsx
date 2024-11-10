import React from 'react';
import { GraduationCap, Building2, MessageSquare, Menu, Sun, User, LogOut } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Navigation */}
      <nav className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16">
            <div className="flex items-center">
              {/* Logo */}
              <div className="flex-shrink-0 flex items-center">
                <GraduationCap className="h-8 w-8 text-blue-600" />
                <span className="ml-2 text-xl font-bold text-gray-900">МЭО</span>
              </div>
              
              {/* Main Navigation */}
              <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                <a href="#" className="border-blue-500 text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Главная
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Тренажер споров
                </a>
                <a href="#" className="border-transparent text-gray-500 hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium">
                  Карьера
                </a>
              </div>
            </div>

            {/* Right side navigation */}
            <div className="flex items-center">
              <button className="p-2 text-gray-400 hover:text-gray-500">
                <Sun className="h-5 w-5" />
              </button>
              <div className="ml-4 flex items-center">
                <span className="text-gray-700 text-sm mr-2">Владимир</span>
                <User className="h-5 w-5 text-gray-400" />
              </div>
              <button className="ml-4 p-2 text-gray-400 hover:text-gray-500">
                <LogOut className="h-5 w-5" />
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Training Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <GraduationCap className="h-8 w-8 text-blue-600" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">Профессиональное развитие</h3>
            </div>
            <p className="text-gray-600 mb-4">Структурированные курсы для развития навыков в сфере обслуживания, розничной торговли и гостеприимства.</p>
            <button className="w-full bg-blue-600 text-white rounded-md py-2 hover:bg-blue-700 transition">
              Начать обучение
            </button>
          </div>

          {/* Simulation Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <MessageSquare className="h-8 w-8 text-green-600" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">AI-Тренажер</h3>
            </div>
            <p className="text-gray-600 mb-4">Интерактивный тренажер с искусственным интеллектом для отработки навыков общения с клиентами.</p>
            <button className="w-full bg-green-600 text-white rounded-md py-2 hover:bg-green-700 transition">
              Начать симуляцию
            </button>
          </div>

          {/* Career Card */}
          <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition">
            <div className="flex items-center mb-4">
              <Building2 className="h-8 w-8 text-purple-600" />
              <h3 className="ml-3 text-lg font-medium text-gray-900">Карьерная платформа</h3>
            </div>
            <p className="text-gray-600 mb-4">Прямое взаимодействие с работодателями, отслеживание прогресса и документирование достижений.</p>
            <button className="w-full bg-purple-600 text-white rounded-md py-2 hover:bg-purple-700 transition">
              Найти работу
            </button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="bg-blue-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-blue-600 mb-2">5000+</div>
            <div className="text-gray-600">Выпускников программы</div>
          </div>
          <div className="bg-green-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-green-600 mb-2">200+</div>
            <div className="text-gray-600">Компаний-партнеров</div>
          </div>
          <div className="bg-purple-50 rounded-lg p-6 text-center">
            <div className="text-3xl font-bold text-purple-600 mb-2">92%</div>
            <div className="text-gray-600">Трудоустройство</div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default App;