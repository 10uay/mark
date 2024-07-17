import "./GlassCard.css";

const GlassCard = ({title, paragraph, children}) => {
  return (
    <div className="glass-card w-[330px] mx-auto p-7 pt-16 h-[570px] border-[1px] relative before:content-[' '] before:absolute before:rounded-full before:top-10 before:left-3 before:bg-text_yellow before:opacity-80 before:w-[90px] before:h-[90px]">
      {/* Add your card content here */}
      <h2 className="text-[25px] font-bold mb-14 text-start z-30 relative">
        {title}
      </h2>
      <p className="">{paragraph}</p>
      <div className="mt-10">{children}</div>
    </div>
  );
};

export default GlassCard;
