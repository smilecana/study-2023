import { App2 } from "./changeNameApp/App2"
import { AdminFlagProvider } from "./changeNameApp/components/providers/AdminFlagProvider";
import { userState } from "react";
import { useFetchUsers } from "./hooks/useFetchUsers";

export const App = () => {
  const { userList, isLoading, isError, onClickFetchUser } = useFetchUsers();
  return (
    <>
      {/* <App1 /> */}
      <AdminFlagProvider>
      <App2/>
      </AdminFlagProvider>
    </>
  )
};

export default App;
