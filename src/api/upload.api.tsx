import axios, { AxiosResponse } from "axios";
import { useAppStore as app } from "../appStore";


export const getAllItems = async (): Promise<AxiosResponse> => {
  console.log("GET - request accepted");

  

  try {
    const res: AxiosResponse = await axios.get(
      "http://localhost:3001/items/",
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("GET ALL = returned data", res);

    return res;
  } catch (err: unknown) {

    if (err instanceof Error) {
      throw new Error(`Error Getting Data: ${err.message}`);
    } else {
      throw new Error(`Unknown Getting Data`);
    }
  }
};

export const uploadFile = async (file: File): Promise<AxiosResponse> => {
  console.log("request accepted");
  console.log("request accepted", file);

  const formData = new FormData();
  formData.append("file", file);
  

  try {
    const res: AxiosResponse = await axios.post(
      "http://localhost:3001/items/upload",
      formData,
      {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      }
    );
    console.log("returned data", res);

    return res;
  } catch (err: unknown) {

    if (err instanceof Error) {
      throw new Error(`Error uploading file: ${err.message}`);
    } else {
      throw new Error(`Unknown error uploading file`);
    }
  }
};

export const editItem = async (body: any): Promise<AxiosResponse> => {
  console.log("request accepted");
  // console.log("request accepted", file);

  // formData.append("file", file);
  

  try {
    const res: AxiosResponse = await axios.put(
      `http://localhost:3001/items/upload$/{id}`,
      body,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("returned data", res);

    return res;
  } catch (err: unknown) {

    if (err instanceof Error) {
      throw new Error(`Error uploading file: ${err.message}`);
    } else {
      throw new Error(`Unknown error uploading file`);
    }
  }
};

export const deleteItem = async (id: any): Promise<AxiosResponse> => {
  console.log(" delete request accepted");
  

  try {
    const res: AxiosResponse = await axios.delete(
      `http://localhost:3001/items/${id}`,
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    console.log("returned data", res);

    return res;
  } catch (err: unknown) {

    if (err instanceof Error) {
      throw new Error(`Error Deleting Item: ${err.message}`);
    } else {
      throw new Error(`Unknown error Deleting Item`);
    }
  }
};
