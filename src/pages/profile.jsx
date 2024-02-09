import Navbar from "../components/Layouts/Navbar";
import useLogin from "../hooks/useLogin";

const ProfilePage = () => {
  const username = useLogin();
  return (
    <>
      <Navbar />
      <div>
        <h1>INI HALAMAN PROFILE</h1>
        <h1>username : {username}</h1>
      </div>
    </>
  );
};

export default ProfilePage;
