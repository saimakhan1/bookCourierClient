import { useNavigate } from "react-router";

const CallToAction = () => {
  const navigate = useNavigate();

  return (
    <section className="py-20 bg-base-100">
      <div className="max-w-4xl mx-auto text-center px-4">
        <h2 className="text-4xl font-bold mb-4">
          Ready to Start Your Reading Journey?
        </h2>
        <p className="text-base-content/70 mb-8">
          Discover, order, and enjoy books delivered to your doorstep.
        </p>
        <button
          onClick={() => navigate("/books")}
          className="btn btn-primary btn-lg"
        >
          Browse Books
        </button>
      </div>
    </section>
  );
};

export default CallToAction;
