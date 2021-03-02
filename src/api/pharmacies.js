import request from "@/plugins/axios";

export function fetchPharmacies() {
    return request({
        url: "https://raw.githubusercontent.com/kiang/pharmacies/master/json/points.json",
        method: "get"
    });
}

export function fetchTest() {
    return request({
        url: "https://randomuser.me/api/",
        method: "get"
    })
}