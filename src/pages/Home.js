import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
//////////////////////////////////////

const Home = ({ setAuth }) => {
  const navigate = useNavigate();
  useEffect(() => {
    navigate("/journel");
  }, []);

  return null;
};

export default Home;
