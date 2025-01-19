import React from 'react';
import { MoreHorizontal } from 'lucide-react';
import { Transaction } from '../types';

interface TransactionHistoryProps {
  transactions: Transaction[];
}

export function TransactionHistory({ transactions }: TransactionHistoryProps) {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-6">Credits Purchase History</h1>
      <div className="bg-white rounded-lg border border-gray-200">
        <div className="grid grid-cols-5 p-4 border-b border-gray-200 font-medium">
          <div className="flex items-center">
            <input type="checkbox" className="mr-4" />
            <span>Invoice</span>
          </div>
          <div>Status</div>
          <div>Credits</div>
          <div>Amount</div>
          <div></div>
        </div>
        {transactions.map((transaction) => (
          <div
            key={transaction.id}
            className="grid grid-cols-5 p-4 border-b border-gray-200 items-center"
          >
            <div className="flex items-center">
              <input type="checkbox" className="mr-4" />
              <span>{transaction.invoice}</span>
            </div>
            <div>
              <span className="inline-flex items-center text-green-500">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                {transaction.status}
              </span>
            </div>
            <div>{transaction.credits}</div>
            <div>${transaction.amount}</div>
            <div className="flex justify-end">
              <button>
                <MoreHorizontal className="w-5 h-5 text-gray-500" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}