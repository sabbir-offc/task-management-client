import { useQuery } from "@tanstack/react-query";
import { getProfileData } from "../../api/user";
import useAuth from "../../hooks/useAuth";
import Loader from "../../components/shared/Loader";
import { Helmet } from "react-helmet-async";

const Profile = () => {
  const { user } = useAuth();
  const { data: profile, isLoading } = useQuery({
    queryKey: ["user"],
    queryFn: async () => {
      const res = await getProfileData(user?.email);
      return res;
    },
  });
  if (isLoading) return <Loader />;
  return (
    <>
      <Helmet>
        <title>Profile | Tame Task</title>
      </Helmet>
      <div className=" flex items-center justify-center min-h-screen">
        <div className="relative h-[400px] w-[300px] rounded-md">
          <img
            src={profile?.image}
            alt="AirMax Pro"
            className="z-0 h-full w-full rounded-md object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 to-transparent"></div>
          <div className="absolute bottom-4 left-4 text-left">
            <h1 className="text-lg font-semibold text-white">
              {profile?.name}
            </h1>
            <p className="mt-2 text-sm text-gray-300">{user?.email}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
