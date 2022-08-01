import request from "@/util";

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
