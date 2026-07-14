"use client";

import React from "react";

export default function ThreeDMarquee() {
  const cssStyles = `
    @keyframes marquee-flat {
      from {
        transform: translate3d(0, 0, 0);
      }
      to {
        transform: translate3d(-50%, 0, 0);
      }
    }

    .animate-marquee-flat {
      display: flex;
      width: max-content;
      animation: marquee-flat 40s linear infinite;
      will-change: transform;
    }

    .word-outlined {
      color: transparent;
      -webkit-text-stroke: 1.5px #1a510aff;
      font-weight: 900;
      text-transform: uppercase;
      letter-spacing: .22em;
    }

    .dot-outlined {
      color: transparent;
      -webkit-text-stroke: 1.5px #1a510aff;
      font-weight: 900;
    }
  `;

  const words = [
    "ENGINEERING THE FUTURE OF MANUFACTURING",
    "ENGINEERING THE FUTURE OF MANUFACTURING",
  ];

  return (
    <section className="relative overflow-hidden bg-transparent py-8">
      <style dangerouslySetInnerHTML={{ __html: cssStyles }} />

      <div className="relative mx-auto max-w-7xl">
        {/* Flat Horizontal Ribbon */}
        <div className="w-full">
          <div className="animate-marquee-flat whitespace-nowrap py-4">
            {Array.from({ length: 4 }).map((_, index) => (
              <div
                key={index}
                className="mr-24 flex items-center gap-16"
              >
                {words.map((word, i) => (
                  <React.Fragment key={i}>
                    <span className="word-outlined text-2xl md:text-5xl font-black">
                      {word}
                    </span>
                    <span className="dot-outlined text-2xl md:text-5xl font-black">
                     ☙
                    </span>
                  </React.Fragment>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}