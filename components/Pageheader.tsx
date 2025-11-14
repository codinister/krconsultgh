'use client';

type PageheaderType = {
  title: string;
};
const Pageheader = ({ title }: PageheaderType) => {
  return (
    <div
      className="pageheader"
      style={{
        backgroundImage: `url("/img1.jpg")`,
        backgroundSize: 'cover',
        backgroundPosition: 'top',
        backgroundAttachment: 'fixed'
      }}
    >
      <h2>{title}</h2>
    </div>
  );
};

export default Pageheader;
