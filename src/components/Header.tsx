import React from 'react';
import { User } from '../types';

interface HeaderProps {
  user: User;
}

export function Header({ user }: HeaderProps) {
  return (
    <div className="flex justify-end items-center p-6 border-b border-gray-200">
      <div className="flex items-center">
        <div className="text-right mr-3">
          <div className="font-medium">Hi, {user.name}</div>
          <div className="text-sm text-blue-600">Credits Left: {user.credits}</div>
        </div>
        <img
          src={user.avatar}
          alt={user.name}
          className="w-10 h-10 rounded-full"
        />
      </div>
    </div>
  );
}