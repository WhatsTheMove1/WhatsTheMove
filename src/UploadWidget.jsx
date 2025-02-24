import { useRef, useEffect } from "react";

const UploadWidget = ({onUpload}) => {
  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    cloudinaryRef.current = window.cloudinary;
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: "dyulrifpu",
        uploadPreset: "wtmwtm",
      },
      function (error, result) {
        if (result.event === "success") {
          console.log("Done! Here is the image info: ", result.info.secure_url);
          // Assuming you have a prop function to pass the URL to the parent component
          onUpload(result.info.secure_url); 
        }
      }
    );
  }, [onUpload]);

  return (
    <button
      className="btn btn-primary"
      onClick={() => widgetRef.current.open()}
    >
      Upload Image
    </button>
  );
};

export default UploadWidget;
