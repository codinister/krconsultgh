type TextCardType = {
  title: string;
  excerpt: string;
  icon?: React.ReactNode;
};
const TextCard = ({ title, excerpt, icon = '' }: TextCardType) => {
  return (
    <div className="textcard">
      <div>{icon}</div>
      <div>
        <h3>{title}</h3>
        <p>{excerpt}</p>
      </div>
    </div>
  );
};

export default TextCard;
