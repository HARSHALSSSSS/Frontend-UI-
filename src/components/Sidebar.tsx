import React from 'react';
import { 
  Search, 
  Layers, 
  MessageSquare, 
  History, 
  Settings, 
  LogOut,
  Boxes
} from 'lucide-react';

interface SidebarProps {
  activeItem: string;
  onNavigate: (item: string) => void;
}

export function Sidebar({ activeItem, onNavigate }: SidebarProps) {
  const menuItems = [
    { id: 'search', icon: Search, label: 'Search CV' },
    { id: 'shortlisted', icon: Layers, label: 'Shortlisted CV' },
    { id: 'transactions', icon: MessageSquare, label: 'Transaction History' },
    { id: 'search-history', icon: History, label: 'Search History' },
    { id: 'profile', icon: Settings, label: 'Profile' },
  ];

  return (
    <div className="w-64 h-screen bg-white border-r border-gray-200 p-6 flex flex-col">
      <div className="flex items-center mb-10">
        <Boxes className="w-8 h-8 text-blue-600 mr-2" />
        <div className="text-2xl font-bold text-blue-600">AI CV</div>
      </div>
      
      <nav className="flex-1">
        {menuItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.id}
              onClick={() => onNavigate(item.id)}
              className={`flex items-center w-full p-3 mb-2 rounded-lg ${
                activeItem === item.id
                  ? 'text-blue-600 bg-blue-50'
                  : 'text-gray-600 hover:bg-gray-50'
              }`}
            >
              <Icon className="w-5 h-5 mr-3" />
              <span>{item.label}</span>
            </button>
          );
        })}
      </nav>

      <button
        onClick={() => onNavigate('logout')}
        className="flex items-center p-3 text-gray-600 hover:bg-gray-50 rounded-lg"
      >
        <LogOut className="w-5 h-5 mr-3" />
        <span>Sign Out</span>
      </button>
    </div>
  );
}