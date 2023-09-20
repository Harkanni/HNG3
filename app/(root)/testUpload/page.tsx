'use client'

import { useCallback, useState } from 'react';
import { useDropzone } from 'react-dropzone';
// import axios from 'axios';

const ImageUpload: React.FC = () => {
  const [base64Image, setBase64Image] = useState<string | null>(null);

  const onDrop = useCallback((acceptedFiles: File[]) => {
    const file = acceptedFiles[0];

    if (file) {
      // Read the selected image file as a Base64-encoded string
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target) {
          const base64 = event.target.result as string;
          setBase64Image(base64);

          // You can also upload the Base64 string to your server here using axios or another HTTP library.
          // Replace '/api/upload' with your server's endpoint.
         //  axios
         //    .post('/api/upload', { base64Image: base64 }, {
         //      headers: {
         //        'Content-Type': 'application/json',
         //      },
         //    })
         //    .then((response) => {
         //      // Handle the response from the server, e.g., show a success message or update your UI
         //    })
         //    .catch((error) => {
         //      // Handle errors
         //    });
        }
      };
      reader.readAsDataURL(file);
    }
  }, []);

  const { getRootProps, getInputProps } = useDropzone({
    onDrop,
    accept: 'image/*', // Accept only image files
    maxFiles: 1, // Limit the number of files to 1
  });

  return (
    <div>
      <div {...getRootProps()} className="dropzone">
        <input {...getInputProps()} />
        {base64Image ? (
          <div>
            <p>Selected File:</p>
            <img src={base64Image} alt="Selected Image" />
          </div>
        ) : (
          <p>Drag & Drop your image here or click to select</p>
        )}
      </div>
    </div>
  );
};

export default ImageUpload;
