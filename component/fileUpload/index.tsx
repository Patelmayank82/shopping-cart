import React, { useState } from 'react';

const Upload = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewImage, setPreviewImage] = useState(null);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setPreviewImage(URL.createObjectURL(file));
  };

  const handleUpload = () => {
 
    if (selectedFile) {
      const formData = new FormData();
      formData.append('file', selectedFile);

      

      setSelectedFile(null);
      setPreviewImage(null);
    }
  };

  return (
    <div className="">
      <label htmlFor="fileInput" className="block text-gray-700 text-lg font-bold mb-2">
        Choose File:
      </label>
      <input
        id="fileInput"
        type="file"
        onChange={handleFileChange}
        className="hidden"
      />
        {previewImage && (
          <div className="mt-4">
            <img
              src={previewImage}
              alt="Preview"
              className="h-24 w-24 rounded-lg relative right-7"
            />
          </div>
        )}
      <button
        onClick={() => document.getElementById('fileInput').click()}
        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded relative left-28 bottom-10"
      >
        Upload
      </button>
      {selectedFile && (
        <div className="mt-2">
          <span className="text-gray-700 font-medium">Selected File: </span>
          <span className="text-gray-700">{selectedFile.name}</span>
        </div>
      )}
    </div>
  );
};

export default Upload;