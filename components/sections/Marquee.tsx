const text = "Marketing, operations, and AI training for teams that want to work smarter.";
const separator = " ✦ ";
const repeated = Array(8).fill(text).join(separator) + separator;

export default function Marquee() {
  return (
    <>
      <style>{`
        @keyframes marquee-scroll {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
      <div
        style={{
          position: "fixed",
          top: 0,
          left: 0,
          right: 0,
          zIndex: 60,
          backgroundColor: "#1e40af",
          overflow: "hidden",
          height: "36px",
          display: "flex",
          alignItems: "center",
        }}
      >
        <div
          style={{
            display: "inline-flex",
            whiteSpace: "nowrap",
            animation: "marquee-scroll 30s linear infinite",
          }}
        >
          <span
            style={{
              flexShrink: 0,
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
              paddingRight: "2rem",
            }}
          >
            {repeated}
          </span>
          <span
            style={{
              flexShrink: 0,
              color: "#fff",
              fontSize: "0.875rem",
              fontWeight: 600,
              whiteSpace: "nowrap",
              paddingRight: "2rem",
            }}
          >
            {repeated}
          </span>
        </div>
      </div>
    </>
  );
}
