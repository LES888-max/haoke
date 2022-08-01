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
