import { ProfileInfo } from "../Components/ProfileInfo";
import { ProfilePic } from "../Components/ProfilePic";
import "../App.css";

export const Home = () => {
  return (
    <div className="hero">
      <ProfileInfo />
      <ProfilePic />
    </div>
  );
};
