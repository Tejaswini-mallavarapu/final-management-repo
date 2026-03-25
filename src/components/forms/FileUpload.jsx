import { useRef, useState } from "react";
import Button from "../buttons/Button";

const FileUpload = ({ label, value = [], onChange }) => {
  const inputRef = useRef(null);
  const [files, setFiles] = useState(value);

  const handleFiles = (selectedFiles) => {
    const fileArray = Array.from(selectedFiles);

    const updated = [
      ...files,
      ...fileArray.map((file) => ({
        file,
        preview: URL.createObjectURL(file)
      }))
    ];

    setFiles(updated);
    onChange && onChange(updated);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    handleFiles(e.dataTransfer.files);
  };

  const removeFile = (index) => {
    const updated = files.filter((_, i) => i !== index);
    setFiles(updated);
    onChange && onChange(updated);
  };

  return (
    <div className="file-upload">

      {label && <label className="upload-label">{label}</label>}

      <div className="upload-container">

        {files.map((item, index) => (
          <div className="preview-card" key={index}>
            <img src={item.preview} alt="preview" />

            <button
              className="delete-btn"
              onClick={() => removeFile(index)}
            >
              ✕
            </button>
          </div>
        ))}

        <div
          className="upload-box"
          onClick={() => inputRef.current.click()}
          onDragOver={(e) => e.preventDefault()}
          onDrop={handleDrop}
        >
          <div className="upload-content">
            <img src="/assets/images/Icon.svg"></img>
            <p>Drag and drop your image here.</p>
            <small>Image file size must be up to 2 MB, and only JPG and PNG formats are supported.</small>
          <div><Button >Select Files</Button></div>
          </div>
        </div>

      </div>

      <input
        type="file"
        ref={inputRef}
        multiple
        hidden
        onChange={(e) => handleFiles(e.target.files)}
      />
    </div>
  );
};

export default FileUpload;