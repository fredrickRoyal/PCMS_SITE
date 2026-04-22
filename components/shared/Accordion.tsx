"use client";

import React, { useId, useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

interface AccordionItem {
  id: string;
  title: string;
  description?: string;
  imageSrc?: string;
  nodeComponent?: React.ReactNode;
}

interface AccordionProps {
  data: AccordionItem[];
  className?: string;
}

/**
 * Pulls a leading index from titles like "01 — Application Submission",
 * "1. Project Information" or "2) Something". Falls back to text-only.
 */
function parseTitle(title: string): { index?: string; text: string } {
  const match = /^(\d{1,2})\s*[.\-—–)]\s*(.+)$/.exec(title.trim());
  if (match) return { index: match[1].padStart(2, "0"), text: match[2] };
  return { text: title };
}

const Accordion: React.FC<AccordionProps> = ({ data, className = "" }) => {
  const [openItem, setOpenItem] = useState<string | null>(null);
  const uid = useId();

  return (
    <div
      className={`bg-surface border border-border rounded-xl overflow-hidden shadow-sm divide-y divide-border ${className}`}
    >
      {data.map((item) => {
        const { index, text } = parseTitle(item.title);
        const isOpen = openItem === item.id;
        const panelId = `${uid}-${item.id}`;

        return (
          <div
            key={item.id}
            className={`relative transition-colors ${
              isOpen ? "bg-surface-muted" : ""
            }`}
          >
            {/* Left accent rail when open */}
            <span
              aria-hidden="true"
              className={`absolute left-0 top-0 bottom-0 w-[3px] bg-civic transition-opacity duration-300 ${
                isOpen ? "opacity-100" : "opacity-0"
              }`}
            />

            <button
              type="button"
              onClick={() => setOpenItem(isOpen ? null : item.id)}
              aria-expanded={isOpen}
              aria-controls={panelId}
              className="w-full flex items-center gap-4 md:gap-6 text-left p-5 md:p-6 hover:bg-surface-muted/60 focus:outline-none focus-visible:bg-surface-muted focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset transition-colors"
            >
              {index && (
                <span
                  aria-hidden="true"
                  className={`flex-shrink-0 font-display text-lg md:text-2xl tabular-nums w-8 md:w-10 transition-colors ${
                    isOpen ? "text-civic" : "text-foreground-muted"
                  }`}
                >
                  {index}
                </span>
              )}
              <span className="flex-1 font-display text-base md:text-xl font-normal leading-snug text-foreground">
                {text}
              </span>
              <motion.span
                animate={{ rotate: isOpen ? 180 : 0 }}
                transition={{ duration: 0.25, ease: "easeOut" }}
                className={`flex-shrink-0 w-9 h-9 rounded-full border flex items-center justify-center transition-colors ${
                  isOpen
                    ? "border-civic/40 bg-civic/10 text-civic"
                    : "border-border bg-surface text-foreground-muted"
                }`}
              >
                <ChevronDown className="w-4 h-4" />
              </motion.span>
            </button>

            <AnimatePresence initial={false}>
              {isOpen && (
                <motion.section
                  id={panelId}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                  className="overflow-hidden"
                >
                  <div className="px-5 md:px-6 pb-6 pt-1 space-y-4">
                    {item.description && (
                      <p className="text-foreground-muted leading-relaxed">
                        {item.description}
                      </p>
                    )}
                    {item.imageSrc && (
                      <div className="relative h-56 md:h-64 w-full rounded-lg overflow-hidden border border-border">
                        <Image
                          src={item.imageSrc}
                          alt={text}
                          fill
                          className="object-cover"
                        />
                      </div>
                    )}
                    {item.nodeComponent && <div>{item.nodeComponent}</div>}
                  </div>
                </motion.section>
              )}
            </AnimatePresence>
          </div>
        );
      })}
    </div>
  );
};

export default Accordion;
