import { AxiosResponse } from "axios";
import { backend } from "..";

const BASE = "/query";

export interface IPostQueryParams {
  session_id: string;
  query: string;
}

export const postQuery = async (
  query?: IPostQueryParams
): Promise<AxiosResponse<ReadableStream>> => backend.post(`${BASE}`, query);
