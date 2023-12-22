import { AlertCircle, X } from "lucide-react";
import Loader from "../../components/shared/Loader";
import useNotifications from "../../hooks/useNotifications";
import { deleteNotification } from "../../api/user";
import toast from "react-hot-toast";
import { Helmet } from "react-helmet-async";

const Notifications = () => {
  const { notifications, isLoading, refetch } = useNotifications();

  if (isLoading) return <Loader />;
  const handleDelete = async (id) => {
    const dbRes = await deleteNotification(id);
    if (dbRes.deletedCount > 0) {
      refetch();
      toast.success("Notification deleted");
    }
  };
  return (
    <>
      <Helmet>
        <title>Notifications | Tame Task</title>
      </Helmet>
      <div className="container mx-auto  py-10">
        <div className="border-l-purple-500 border-l-4 px-3 py-2 mb-5 rounded-l-md text-center">
          <h1 className="text-2xl md:text-4xl text-left">Notifications</h1>
        </div>
        {notifications.map((notification) => (
          <div
            key={notification?._id}
            className="rounded-md border-l-4 my-2 border-yellow-500 bg-yellow-100 p-4"
          >
            <div className="flex items-center justify-between space-x-4">
              <div>
                <AlertCircle className="h-6 w-6 text-yellow-600" />
              </div>
              <div>
                <p className="text-sm text-left font-medium text-yellow-600">
                  {notification.notificationMessage}
                </p>
              </div>
              <div>
                <X
                  onClick={() => handleDelete(notification._id)}
                  className="h-6 w-6 cursor-pointer text-yellow-600"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default Notifications;
