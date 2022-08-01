import request from "@/util/request";

export const getCitysApi = (level) => {
  return request({
    url: "/area/city",
    params: {
      level,
    },
  });
};
export const getHotCityApi = () =>
  request({
    url: "/area/hot",
  });

export const getCityApi = (name) =>
  request({
    url: "/area/info",
    params: {
      name,
    },
  });

export const getCitySourceApi = (id) =>
  request({
    url: "/area/map",
    params: {
      id,
    },
  });

export const getCityChildApi = (id) =>
  request({
    url: "/area",
    params: {
      id,
    },
  });

export const getCityCommunityApi = (name, id) =>
  request({
    url: "/area/community",
    params: {
      name,
      id,
    },
  });
