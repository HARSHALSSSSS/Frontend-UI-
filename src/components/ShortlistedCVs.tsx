import React from 'react';
import { Download, MoreVertical } from 'lucide-react';
import { CV } from '../types';

interface ShortlistedCVsProps {
  cvs: CV[];
}

export function ShortlistedCVs({ cvs }: ShortlistedCVsProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Shortlisted CV's</h1>
      <div className="space-y-4">
        {cvs.map((cv) => (
          <div
            key={cv.id}
            className="bg-white rounded-lg p-4 border border-gray-200 flex items-center justify-between"
          >
            <div className="flex items-center flex-1">
              <input type="checkbox" className="mr-4" />
              <img
                src={cv.avatar}
                alt={cv.name}
                className="w-12 h-12 rounded-full mr-4"
              />
              <div className="flex-1">
                <div className="flex items-center">
                  <h3 className="font-semibold">{cv.name}</h3>
                  <span className="text-gray-500 text-sm ml-2">{cv.role}</span>
                </div>
                <p className="text-gray-600 text-sm">{cv.description}</p>
              </div>
            </div>

            <div className="flex items-center space-x-4">
              <div>
                <div className="text-sm font-medium mb-1 relative">
                  <span className="relative z-10">Skills</span>
                  <div className="absolute -top-1 -left-2 w-14 h-6 bg-blue-100 rounded-md -z-0"></div>
                </div>
                <div className="flex space-x-1">
                  {cv.skills.map((skill, index) => (
                    <div
                      key={index}
                      className="w-5 h-5 bg-blue-600 rounded-full"
                    ></div>
                  ))}
                </div>
              </div>
              <button className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center">
                <Download className="w-4 h-4 mr-2" />
                Download for {cv.credits} credits
              </button>
              <button>
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}