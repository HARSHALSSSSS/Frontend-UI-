import React, { useState } from 'react';
import { Sidebar } from './components/Sidebar';
import { Header } from './components/Header';
import { ShortlistedCVs } from './components/ShortlistedCVs';
import { TransactionHistory } from './components/TransactionHistory';
import { CV, Transaction, User } from './types';

// Mock data
const mockUser: User = {
  name: 'Username',
  credits: 300,
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=32&h=32&fit=crop&crop=faces'
};

const mockCVs: CV[] = [
  {
    id: '1',
    name: 'John Doe',
    role: 'UI/UX Developer',
    location: 'France, Paris',
    description: 'From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.',
    skills: ['html', 'css', 'js', 'react', 'figma'],
    credits: 30,
    avatar: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=48&h=48&fit=crop&crop=faces'
  },
  {
    id: '2',
    name: 'John Doe',
    role: 'UI/UX Developer',
    location: 'France, Paris',
    description: 'From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.',
    skills: ['html', 'css', 'js', 'react', 'figma'],
    credits: 30,
    avatar: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=48&h=48&fit=crop&crop=faces'
  },
  {
    id: '3',
    name: 'John Doe',
    role: 'UI/UX Developer',
    location: 'France, Paris',
    description: 'From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.',
    skills: ['html', 'css', 'js', 'react', 'figma'],
    credits: 50,
    avatar: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?w=48&h=48&fit=crop&crop=faces'
  },
  {
    id: '4',
    name: 'John Doe',
    role: 'UI/UX Developer',
    location: 'France, Paris',
    description: 'From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.',
    skills: ['html', 'css', 'js', 'react', 'figma'],
    credits: 30,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=48&h=48&fit=crop&crop=faces'
  },
  {
    id: '5',
    name: 'John Doe',
    role: 'UI/UX Developer',
    location: 'France, Paris',
    description: 'From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.',
    skills: ['html', 'css', 'js', 'react', 'figma'],
    credits: 15,
    avatar: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?w=48&h=48&fit=crop&crop=faces'
  },
  {
    id: '6',
    name: 'John Doe',
    role: 'UI/UX Developer',
    location: 'France, Paris',
    description: 'From France, Paris. I have rich experience in web design, also I am good at wordpress. I love to talk with you about our unique.',
    skills: ['html', 'css', 'js', 'react', 'figma'],
    credits: 30,
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=48&h=48&fit=crop&crop=faces'
  }
];

const mockTransactions: Transaction[] = [
  {
    id: '1',
    invoice: 'INV-01-09072010',
    status: 'Completed',
    credits: 1200,
    amount: 240
  },
  {
    id: '2',
    invoice: 'INV-01-09072010',
    status: 'Completed',
    credits: 2400,
    amount: 240
  },
  {
    id: '3',
    invoice: 'INV-01-09072010',
    status: 'Completed',
    credits: 120,
    amount: 240
  },
  {
    id: '4',
    invoice: 'INV-01-09072010',
    status: 'Completed',
    credits: 4000,
    amount: 500
  },
  {
    id: '5',
    invoice: 'INV-01-09072010',
    status: 'Completed',
    credits: 350,
    amount: 240
  },
  {
    id: '6',
    invoice: 'INV-01-09072010',
    status: 'Completed',
    credits: 600,
    amount: 240
  }
];

function App() {
  const [activeView, setActiveView] = useState('shortlisted');

  const renderContent = () => {
    switch (activeView) {
      case 'shortlisted':
        return <ShortlistedCVs cvs={mockCVs} />;
      case 'transactions':
        return <TransactionHistory transactions={mockTransactions} />;
      default:
        return <div className="p-6">Content not implemented yet</div>;
    }
  };

  return (
    <div className="flex h-screen bg-gray-50">
      <Sidebar activeItem={activeView} onNavigate={setActiveView} />
      <div className="flex-1 flex flex-col">
        <Header user={mockUser} />
        <main className="flex-1 overflow-auto">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;