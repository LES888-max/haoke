import request from "@/util";

export const getCitys = (level) => {
  return request({
    url: "/area/city",
    params: {
      level,
    },
  });
};
export const getHotCity = () =>
  request({
    url: "/area/hot",
  });

export const getCity = (name) =>
  request({
    url: "/area/info",
    params: {
      name,
    },
  });

export const getCitySource = (id) =>
  request({
    url: "/area/map",
    params: {
      id,
    },
  });

export const getCityChild = (id) =>
  request({
    url: "/area",
    params: {
      id,
    },
  });
