import React from 'react';
import Button from "@mui/material/Button";
import IconButton from "@mui/icons-material/UploadFileOutlined";
import { getAllItems, uploadFile } from '../api/upload.api';
import { useAppStore as app } from "../appStore";

const FilePicker:React.FC =()=> {

  const items = app((state) => state.items);
const setItems = app((state) => state.setItems);
  const isLoading = app((state) => state.isLoading);
const setIsLoading = app((state) => state.updateLoading);

  const handleFileUpload = async(event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files![0];
    console.log('Selected file:', file);
    setIsLoading(true)
try {
  
  const data = await uploadFile(file)
  setItems(data.data['items'])
  console.log("return data ",data);
  // window.location.assign('/');
  setIsLoading(false)

} catch (error) {
  setIsLoading(false)
  
}
finally{
  setIsLoading(false)

}
  
    // Do something with the file here
  };

  return (
    <div>
      <input
        accept="*/*"
        style={{display:"none"}}
        id="contained-button-file"
        multiple
        type="file"
        onChange={handleFileUpload}
      />
      <label htmlFor="contained-button-file">
        <Button
          variant="contained"
          color="primary"
          component="span"
          startIcon={<IconButton />}
        >
          Upload
        </Button>
      </label>
    </div>
  );
}
export default FilePicker