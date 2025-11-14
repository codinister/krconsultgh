type ServiceBoxType = { title: string; excerpt: string; img: string };

const ServiceBox = ({ title, excerpt ,img}: ServiceBoxType) => {
  return (
    <div className="service-box">
      <div
        style={{
          backgroundImage: `url(${img}`,
          backgroundSize: 'cover',
          backgroundPosition: 'top',
        }}
      ></div>
      <div>
        <h3>{title}</h3>
        <div>{excerpt}</div>
      </div>
    </div>
  );
};

export default ServiceBox;
