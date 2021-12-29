import swal from "sweetalert";
import { publicAPI } from "../../API";

export const userLogin = async (payload, history) => {
  try {
    const res = await publicAPI.post(`/user/login`, payload);
    if (res) {
      localStorage.setItem("token", res.data.token);
      localStorage.setItem("name", res.data.user.name);

      // localStorage.setItem("role", res.data.user.role);
      swal("", res.data.message, "success").then(() => {
        history.replace("/");
      });
    }
  } catch (err) {
    swal("", err?.response?.data?.message || "Server Error", "error");
  }
};
