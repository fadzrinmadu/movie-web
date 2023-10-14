import { FormEvent, useState } from "react";
import { useNavigate } from "react-router-dom";
import { loginApiService } from "../../services/login";

const useHooks = () => {
  const navigate = useNavigate();

  const [message, setMessage] = useState<string>("");
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const result = loginApiService({
      username: formData.username,
      password: formData.password,
    });

    if (!result) {
      setMessage("Username atau password yang anda masukkan salah!");
    }

    navigate("/movies");
  };

  return {
    data: {
      message,
      formData,
    },
    method: {
      handleSubmit,
      handleInputChange,
    },
  };
};

export default useHooks;
