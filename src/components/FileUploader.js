import React, { useState } from 'react';
import { uploadImage } from '../services/galleryService';
import { uploadVideo } from '../services/videoService';
import { validateImageFile, validateVideoFile, formatFileSize } from '../config/storageConfig';
import './FileUploader.css';

const FileUploader = ({ type = 'image', bucket = 'gallery', folder = '', onUploadSuccess }) => {
  const [file, setFile] = useState(null);
  const [preview, setPreview] = useState(null);
  const [uploading, setUploading] = useState(false);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);

  const handleFileChange = (e) => {
    const selectedFile = e.target.files[0];
    if (!selectedFile) return;

    // Validation
    const validation = type === 'image' 
      ? validateImageFile(selectedFile)
      : validateVideoFile(selectedFile);

    if (!validation.valid) {
      setError(validation.errors.join(', '));
      return;
    }

    setError(null);
    setFile(selectedFile);

    // Créer un aperçu pour les images
    if (type === 'image') {
      const reader = new FileReader();
      reader.onloadend = () => {
        setPreview(reader.result);
      };
      reader.readAsDataURL(selectedFile);
    } else {
      // Pour les vidéos, créer un aperçu vidéo
      setPreview(URL.createObjectURL(selectedFile));
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setProgress(0);
    setError(null);

    try {
      let result;
      
      if (type === 'image') {
        result = await uploadImage(file, bucket, folder);
      } else {
        result = await uploadVideo(file, bucket, folder);
      }

      if (result.success) {
        setProgress(100);
        
        // Appeler le callback de succès
        if (onUploadSuccess) {
          onUploadSuccess(result.data);
        }

        // Réinitialiser après succès
        setTimeout(() => {
          setFile(null);
          setPreview(null);
          setProgress(0);
        }, 2000);
      } else {
        setError(result.error);
      }
    } catch (err) {
      setError('Erreur lors de l\'upload : ' + err.message);
    } finally {
      setUploading(false);
    }
  };

  const handleCancel = () => {
    setFile(null);
    setPreview(null);
    setError(null);
    setProgress(0);
  };

  return (
    <div className="file-uploader">
      <div className="upload-area">
        {!file ? (
          <label className="upload-label">
            <input
              type="file"
              accept={type === 'image' ? 'image/*' : 'video/*'}
              onChange={handleFileChange}
              disabled={uploading}
              style={{ display: 'none' }}
            />
            <div className="upload-placeholder">
              <div className="upload-icon">
                {type === 'image' ? '📸' : '🎥'}
              </div>
              <p className="upload-text">
                Cliquez pour sélectionner {type === 'image' ? 'une image' : 'une vidéo'}
              </p>
              <p className="upload-hint">
                {type === 'image' 
                  ? 'JPG, PNG, GIF ou WebP (max 5 MB)'
                  : 'MP4, WebM ou OGG (max 50 MB)'}
              </p>
            </div>
          </label>
        ) : (
          <div className="file-preview">
            {type === 'image' ? (
              <img src={preview} alt="Preview" className="preview-image" />
            ) : (
              <video src={preview} controls className="preview-video" />
            )}
            
            <div className="file-info">
              <p className="file-name">{file.name}</p>
              <p className="file-size">{formatFileSize(file.size)}</p>
            </div>

            {uploading && (
              <div className="upload-progress">
                <div className="progress-bar">
                  <div 
                    className="progress-fill" 
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="progress-text">{progress}%</p>
              </div>
            )}

            {error && (
              <div className="upload-error">
                ❌ {error}
              </div>
            )}

            <div className="upload-actions">
              <button
                className="btn btn-primary"
                onClick={handleUpload}
                disabled={uploading}
              >
                {uploading ? 'Upload en cours...' : 'Uploader'}
              </button>
              <button
                className="btn btn-secondary"
                onClick={handleCancel}
                disabled={uploading}
              >
                Annuler
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FileUploader;
