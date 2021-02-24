import request from "@/plugins/axios";

export function fetchPharmacies() {
    return request({
        url: "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json",
        method: "get"
    });
}