import React from 'react';

export default function OctagonSeal({
  size = 56,
  text1 = 'EXCESO',
  text2 = 'PROTEÍNA',
  className = ''
}) {
  return (
    <div
      className={className}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: `${size}px`,
        height: `${size}px`,
        flexShrink: 0,
        filter: 'drop-shadow(0 2px 5px rgba(0,0,0,0.4))'
      }}
      title={`${text1} ${text2}`}
    >
      <svg
        viewBox="0 0 100 100"
        width="100%"
        height="100%"
        style={{ display: 'block', overflow: 'visible' }}
      >
        {/* Outer Black Octagon */}
        <polygon
          points="29.3,0 70.7,0 100,29.3 100,70.7 70.7,100 29.3,100 0,70.7 0,29.3"
          fill="#000000"
        />

        {/* Inner White Border */}
        <polygon
          points="31,5 69,5 95,31 95,69 69,95 31,95 5,69 5,31"
          fill="none"
          stroke="#ffffff"
          strokeWidth="3.2"
          strokeLinejoin="miter"
        />

        {/* Text Line 1 */}
        <text
          x="50"
          y={text2 ? "45" : "55"}
          textAnchor="middle"
          fill="#ffffff"
          fontSize={text2 ? "15.5" : "18"}
          fontWeight="900"
          fontFamily="'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
          letterSpacing="0.03em"
        >
          {text1}
        </text>

        {/* Text Line 2 */}
        {text2 && (
          <text
            x="50"
            y="66"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="15.5"
            fontWeight="900"
            fontFamily="'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
            letterSpacing="0.03em"
          >
            {text2}
          </text>
        )}
      </svg>
    </div>
  );
}
