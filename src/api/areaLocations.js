import request from "@/plugins/axios";

export function fetchLocations() {
    return request({
        url: "https://raw.githubusercontent.com/kurotanshi/mask-map/master/raw/area-location.json",
        method: 'get'
    });
}