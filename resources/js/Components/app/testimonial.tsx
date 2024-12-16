interface TestimonialProps {
  name: string;
  image: string;
  text: string;
}

const Testimonial: React.FC<TestimonialProps> = ({ name, image, text }) => {
  return (
    <div className="bg-white p-4 rounded-md shadow-md">
      <img
        src={image}
        alt={name}
        className="w-16 h-16 rounded-full mx-auto mb-4"
      />
      <p className="text-center">{text}</p>
      <p className="text-center mt-2 font-semibold">{name}</p>
    </div>
  );
};

export default Testimonial;
