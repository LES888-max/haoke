import request from "@/util/request";

export const registerApi = (data) =>
  request({
    url: "/user/login",
    method: "POST",
    data,
  });

export const getFavorateHouseApi = () =>
  request({
    url: "/user/favorites",
  });

export const getRantApi = () =>
  request({
    url: "/user/houses",
  });

export const issueHouseApi = (data) =>
  request({
    url: "/user/houses",
    method: "POST",
    data,
  });

export const getHouseMessageApi = (id) =>
  request({
    url: `/houses/${id}`,
  });

export const yesornoCollection = (id) => {
  return request({
    url: `/user/favorites/${id}`,
  });
};

export const addHouseCollection = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: "POST",
  });
};

export const deleteHouseCollection = (id) => {
  return request({
    url: `/user/favorites/${id}`,
    method: "DELETE",
  });
};
