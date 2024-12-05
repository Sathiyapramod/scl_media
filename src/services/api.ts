import axios, { AxiosResponse } from "axios";
import endPoint from "./constants";
import common from "../utils/common";

class Api {
    private base_url: string;

    constructor() {
        this.base_url = common?.endPoint;
    }

    public async getPosts(): Promise<AxiosResponse> {
        try {
            const res = await axios.get(this.base_url + endPoint.getPosts);
            return res;
        } catch (err) {
            throw new Error("Error While fetching Data" + err);
        }
    }

    public async getComments(postId: number): Promise<AxiosResponse> {
        try {
            const urlParams = new URLSearchParams();
            urlParams.append("postId", postId.toString());
            const res = await axios.get(this.base_url + endPoint.getComments + `?${urlParams}`);
            return res;
        } catch (err) {
            throw new Error("Error While fetching Data" + err);
        }
    }
}

const API = new Api();

export default API;
