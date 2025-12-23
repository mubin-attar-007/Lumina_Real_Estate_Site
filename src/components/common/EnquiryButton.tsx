import { MessageCircle } from 'lucide-react';

const EnquiryButton: React.FC = () => {
  return (
    <div className="fixed right-6 bottom-24 z-40 flex flex-col gap-3 items-end animate-fade-in-up">
      {/* WhatsApp */}
      <a
        href="https://wa.me/"
        target="_blank"
        rel="noreferrer"
        className="bg-[#25D366] text-white p-3 rounded-full shadow-lg hover:scale-110 transition-transform group relative flex items-center justify-center w-14 h-14"
      >
        <MessageCircle size={24} fill="white" />
        <span className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-black text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          WhatsApp Us
        </span>
      </a>
    </div>
  );
};

export default EnquiryButton;