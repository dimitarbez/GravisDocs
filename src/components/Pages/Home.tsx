const HomePage: React.FC = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl mb-4">Welcome to the Home Page</h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="bg-gray-200 p-4 rounded">Placeholder Card 1</div>
        <div className="bg-gray-200 p-4 rounded">Placeholder Card 2</div>
        <div className="bg-gray-200 p-4 rounded">Placeholder Card 3</div>
      </div>
    </div>
  );
};

export default HomePage;
