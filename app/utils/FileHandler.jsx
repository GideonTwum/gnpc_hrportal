'use client'
import React, { useState } from 'react'
import { Download, Eye, X, FileText, Image, File } from 'lucide-react'

const FileHandler = ({ file, onDelete, showPreview = true, showDownload = true }) => {
  const [previewOpen, setPreviewOpen] = useState(false)

  const getFileIcon = (fileName) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    switch (extension) {
      case 'pdf':
        return <FileText className="w-5 h-5 text-red-500" />
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return <Image className="w-5 h-5 text-green-500" />
      case 'doc':
      case 'docx':
        return <FileText className="w-5 h-5 text-blue-500" />
      default:
        return <File className="w-5 h-5 text-gray-500" />
    }
  }

  const getFileType = (fileName) => {
    const extension = fileName.split('.').pop()?.toLowerCase()
    switch (extension) {
      case 'pdf':
        return 'PDF Document'
      case 'jpg':
      case 'jpeg':
      case 'png':
      case 'gif':
        return 'Image File'
      case 'doc':
      case 'docx':
        return 'Word Document'
      default:
        return 'Document'
    }
  }

  const handleDownload = () => {
    // In a real application, this would download the actual file
    // For now, we'll simulate the download
    const link = document.createElement('a')
    link.href = `#` // This would be the actual file URL
    link.download = file
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  const handlePreview = () => {
    setPreviewOpen(true)
  }

  return (
    <>
      <div className="flex items-center justify-between p-3 bg-gray-50 rounded-lg border border-gray-200">
        <div className="flex items-center gap-3">
          {getFileIcon(file)}
          <div>
            <div className="text-sm font-medium text-gray-900">{file}</div>
            <div className="text-xs text-gray-500">{getFileType(file)}</div>
          </div>
        </div>
        <div className="flex items-center gap-2">
          {showPreview && (
            <button
              onClick={handlePreview}
              className="p-1 text-blue-600 hover:text-blue-800 hover:bg-blue-50 rounded"
              title="Preview file"
            >
              <Eye className="w-4 h-4" />
            </button>
          )}
          {showDownload && (
            <button
              onClick={handleDownload}
              className="p-1 text-green-600 hover:text-green-800 hover:bg-green-50 rounded"
              title="Download file"
            >
              <Download className="w-4 h-4" />
            </button>
          )}
          {onDelete && (
            <button
              onClick={() => onDelete(file)}
              className="p-1 text-red-600 hover:text-red-800 hover:bg-red-50 rounded"
              title="Delete file"
            >
              <X className="w-4 h-4" />
            </button>
          )}
        </div>
      </div>

      {/* File Preview Modal */}
      {previewOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4 z-50">
          <div className="bg-white rounded-lg max-w-4xl w-full max-h-[90vh] overflow-hidden">
            <div className="p-4 border-b border-gray-200 flex items-center justify-between">
              <h3 className="text-lg font-semibold">{file}</h3>
              <button
                onClick={() => setPreviewOpen(false)}
                className="text-gray-400 hover:text-gray-600"
              >
                <X className="w-6 h-6" />
              </button>
            </div>
            <div className="p-4">
              <div className="bg-gray-100 rounded-lg p-8 text-center">
                <FileText className="w-16 h-16 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">File preview would be displayed here</p>
                <p className="text-sm text-gray-500 mt-2">
                  In a real application, this would show the actual file content
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default FileHandler 