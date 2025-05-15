"use client";

import React, { useState } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';
import { accordionData } from './data/accordionData';

const ManagementAccordion = () => {
  const [openItem, setOpenItem] = useState<string | null>(null);

  const toggleAccordion = (id: string) => {
    setOpenItem(openItem === id ? null : id);
  };

  return (
    <div className="max-w-screen bg-[#EDF0F2] min-h-screen  py-24  sm:px-6 lg:px-40">
        <div>

      <div className="space-y-6">
        {accordionData.map((item) => (
          <div key={item.id} className="bg-white rounded-xl min-w-[80%] shadow-lg overflow-hidden">
            <button
              onClick={() => toggleAccordion(item.id)}
              className="w-full flex items-center justify-between p-6 focus:outline-none"
            >
              <span className="text-xl font-semibold text-gray-900">{item.title}</span>
              <motion.div
                initial={false}
                animate={{
                  backgroundColor: openItem === item.id ? '#EF4444' : '#10B981',
                  rotate: openItem === item.id ? 0 : 180
                }}
                className="w-8 h-8 rounded-full flex items-center justify-center shadow-md transform-gpu"
                style={{
                  perspective: '1000px',
                  transformStyle: 'preserve-3d'
                }}
              >
                <motion.span
                  animate={{
                    rotate: openItem === item.id ? 0 : 180
                  }}
                  className="text-white text-xl font-bold"
                >
                  {openItem === item.id ? '-' : '+'}
                </motion.span>
              </motion.div>
            </button>

            <AnimatePresence>
              {openItem === item.id && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: 'easeInOut' }}
                >
                  <div className="px-6 pb-6 space-y-4">
                    {item.description && (
                      <p className="text-gray-600">{item.description}</p>
                    )}
                    {item.imageSrc && (
                      <div className="relative h-64 w-full rounded-lg overflow-hidden">
                        <Image
                          src={item.imageSrc}
                          alt={item.title}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {item.nodeComponent && (
                      <div className="mt-4">{item.nodeComponent}</div>
                    )}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
        </div>
    </div>
  );
};

export default ManagementAccordion;