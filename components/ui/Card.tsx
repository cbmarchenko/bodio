type CardProps = {
  children: React.ReactNode;
  className?: string;
};

export default function Card({ children, className = "" }: CardProps) {
  return (
    <div
      className={`bg-white rounded-2xl p-6 shadow-sm border border-gray-100 transition-all duration-300 hover:-translate-y-1 hover:shadow-lg hover:border-pink/30 hover:shadow-pink/10 ${className}`}
    >
      {children}
    </div>
  );
}
