import { SyncLoader } from "react-spinners";

const Loader = () => {
  return (
    <div className="min-h-screen w-full flex items-center justify-center">
      <SyncLoader color="#FF9800" />
    </div>
  );
};

export default Loader;
