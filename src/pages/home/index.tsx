import Sidebar from '../../components/sidebar.tsx';

const HomePage = () => {
  return (
    <div className="flex gap-4 bg-gray-500">
      <Sidebar />

      <div className="px-4 pt-12">Content</div>
    </div>
  );
};

export default HomePage;
