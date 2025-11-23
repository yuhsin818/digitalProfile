export default function Section({ title, children }) {
    return (
      <div className="mt-10">
        <h2 className="text-2xl font-bold mb-4">{title}</h2>
        {children}
      </div>
    );
  }
  