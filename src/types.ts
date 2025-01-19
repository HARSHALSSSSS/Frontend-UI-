export interface CV {
  id: string;
  name: string;
  role: string;
  location: string;
  description: string;
  skills: string[];
  credits: number;
  avatar: string;
}

export interface Transaction {
  id: string;
  invoice: string;
  status: 'Completed' | 'Pending' | 'Failed';
  credits: number;
  amount: number;
}

export interface User {
  name: string;
  credits: number;
  avatar: string;
}