import { Car } from '@/types/Car';
import React, { useState } from 'react'
import HourTabContent from './HourTabContent';
import DailyTabContent from './DailyTabContent';
import MonthlyTabContent from './MonthlyTabContent';

interface Tab {
  label: string,
  content: React.ReactNode
}


interface OrderTabsProps {
  car: Car
}

const OrderTabs: React.FC<OrderTabsProps> = ({ car }) => {
  const [activeTab, setActiveTab] = useState(0);
  
  const tabs: Tab[] = [
    {
      label: 'Beberapa Jam',
      content: <HourTabContent car={car} />
    },
    {
      label: 'Harian',
      content: <DailyTabContent car={car} />,
    },
    {
      label: 'Bulanan',
      content: <MonthlyTabContent car={car} />,
    },
  ];

  return (
    <div>
      <div className="flex mb-4">
        { tabs.map((tab, index) => (
          <button
            key={index}
            className={`px-4 py-2 text-sm ${
              activeTab === index ? 'bg-black text-white' : 'bg-gray-200 text-gray-800'
            }`}
            onClick={() => setActiveTab(index)}
          >
            { tab.label }
          </button>
        ))}
      </div>
      <div className="p-4 mb-8 border border-gray-300">
        { tabs[activeTab].content }
      </div>
    </div>
  );
}

export default OrderTabs