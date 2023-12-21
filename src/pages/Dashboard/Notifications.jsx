import { useQuery } from "@tanstack/react-query";
import { AlertCircle, X } from "lucide-react";
import { getNotifications } from "../../api/user";
import useAuth from "../../hooks/useAuth";

const Notifications = () => {
  const { user } = useAuth();
  const { data: notifications } = useQuery({
    queryKey: ["notifications"],
    queryFn: async () => {
      const res = await getNotifications(user?.email);
      return res;
    },
  });
  console.log(notifications);
  return (
    <div className="container mx-auto  py-10">
      <div className="border-l-purple-500 border-l-4 px-3 py-2 mb-5 rounded-l-md text-center">
        <h1 className="text-2xl md:text-4xl text-left">Notifications</h1>
      </div>
      <div className="rounded-md border-l-4 border-yellow-500 bg-yellow-100 p-4">
        <div className="flex items-center justify-between space-x-4">
          <div>
            <AlertCircle className="h-6 w-6 text-yellow-600" />
          </div>
          <div>
            <p className="text-sm font-medium text-yellow-600">
              This is some informational text that you can use to show some
              warning content
            </p>
          </div>
          <div>
            <X className="h-6 w-6 cursor-pointer text-yellow-600" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Notifications;
