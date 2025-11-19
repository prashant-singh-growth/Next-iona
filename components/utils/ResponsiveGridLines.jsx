import React, { useEffect, useState, useRef } from "react";

export default function ResponsiveGridLines({gradientReplacement}) {
  const sectionRef = useRef(null);
  const [grid, setGrid] = useState({ cols: 0, rows: 0 });

  useEffect(() => {
    const calculateGrid = () => {
      if (!sectionRef.current) return;

      const { clientWidth, clientHeight } = sectionRef.current;

      // Adjust these values for grid spacing
      const colWidth = 57; // px between vertical lines
      const rowHeight = 57; // px between horizontal lines

      // Use Math.ceil instead of Math.floor to maintain consistent spacing
      const cols = Math.ceil(clientWidth / colWidth);
      const rows = Math.ceil(clientHeight / rowHeight);

      setGrid({ cols, rows });
    };

    // Run once + on resize
    calculateGrid();
    window.addEventListener("resize", calculateGrid);

    return () => window.removeEventListener("resize", calculateGrid);
  }, []);



  // Custom gradient lines (8–10 total)
  const gradientLines = Array.from({ length: 10 });

  return (
    <section
      ref={sectionRef}
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none border-b border-[#EAEAEA]"
    >
      {/* Vertical Lines */}
      {Array.from({ length: grid.cols }).map((_, i) => (
        <div
          key={`v-${i}`}
          className="absolute top-0 h-full border-l border-[#EAEAEA]"
          style={{
            left: `${(i * 100) / grid.cols}%`,
          }}
        ></div>
      ))}

      {/* Horizontal Lines */}
      {Array.from({ length: grid.rows }).map((_, i) => (
        <div
          key={`h-${i}`}
          className="absolute left-0 w-full border-t border-[#EAEAEA]"
          style={{
            top: `${(i * 100) / grid.rows}%`,
          }}
        ></div>
      ))}

      {/* Gradient Horizontal Lines (8–10 only) */}
      {gradientReplacement && gradientLines.map((_, i) => (
        <div
          key={`gh-${i}`}
          className={`absolute min-h-[2px] w-10 md:w-[70px] rounded-md hidden lg:block  `}
          style={{
            top: `${i * 57}px`,
            left: `${gradientReplacement[i]}%`, // spacing between gradient lines
            background:
              "linear-gradient(270.02deg, #2A2564 6.76%, #007BC3 28%, #007BC3 64.63%, #2A2564 80.16%)",
           
          }}
        ></div>
      ))}
    </section>
  );
}
