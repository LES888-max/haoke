import request from "@/util/request";

export const getHouseConditionApi = (id) =>
  request({
    url: "/houses/condition",
    params: {
      id,
    },
  });

export const getSearchHouseApi = (params) =>
  request({
    url: "/houses",
    params,
  });

export const getHouseParamsApi = () =>
  request({
    url: "/houses/params",
  });

export const issueHouseImgApi = (data) =>
  request({
    url: "/houses/image",
    method: "POST",
    headers: {
      "Content-Type": "multipart/form-data",
    },
    data,
  });
