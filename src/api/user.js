import request from "@/util/request";

export const registerApi = (data) =>
  request({
    url: "/user/login",
    method: "POST",
    data,
  });
