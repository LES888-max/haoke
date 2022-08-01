import request from "@/util/request";

export const getSwiper = () =>
  request({
    url: "/home/swiper",
  });
