import { useState } from "react";
import { UploadCloud, CheckCircle2, AlertCircle, Loader2, Copy } from "lucide-react";

export default function BlobUploader() {
  const [file, setFile] = useState<File | null>(null);
  const [uploading, setUploading] = useState(false);
  const [resultUrl, setResultUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [copied, setCopied] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setFile(e.target.files[0]);
      setResultUrl(null);
      setError(null);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    setUploading(true);
    setError(null);

    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await fetch("/api/upload", {
        method: "POST",
        body: formData,
      });

      const data = await response.json();

      if (!response.ok) throw new Error(data.error || "Upload failed");

      setResultUrl(data.url);
      setFile(null); // Clear the selection after success
    } catch (err: any) {
      setError(err.message);
    } finally {
      setUploading(false);
    }
  };

  const copyToClipboard = () => {
    if (resultUrl) {
      navigator.clipboard.writeText(resultUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div className="flex flex-col h-full text-left">
      <div className="mb-6">
        <h3 className="text-[#e8edf5] font-rajdhani font-bold text-xl mb-1 flex items-center gap-2">
          <UploadCloud className="w-5 h-5 text-[#2979ff]" /> Vercel Blob Storage
        </h3>
        <p className="text-[#6a7fa0] text-sm font-space">Upload architecture diagrams or PDF resumes.</p>
      </div>

      <div className="flex-grow flex flex-col justify-center">
        {!resultUrl ? (
          <div className="space-y-4">
            <div className="relative group">
              <input
                type="file"
                onChange={handleFileChange}
                className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                disabled={uploading}
              />
              <div className={`border-2 border-dashed rounded-lg p-6 text-center transition-colors duration-300 ${file ? 'border-[#00e5ff] bg-[#00e5ff]/5' : 'border-[#1e293b] group-hover:border-[#2979ff]/50 bg-[#060b18]'}`}>
                {file ? (
                  <p className="text-[#e8edf5] font-space text-sm truncate px-4">{file.name}</p>
                ) : (
                  <p className="text-[#6a7fa0] font-space text-sm">Click or drag file to select</p>
                )}
              </div>
            </div>

            <button
              onClick={handleUpload}
              disabled={!file || uploading}
              className="w-full bg-[#2979ff] hover:bg-[#00e5ff] disabled:bg-[#1e293b] disabled:text-[#6a7fa0] text-white font-rajdhani font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2"
            >
              {uploading ? (
                <><Loader2 className="w-4 h-4 animate-spin" /> Transmitting...</>
              ) : (
                "Push to Cloud"
              )}
            </button>

            {error && (
              <p className="text-[#ffbd2e] text-xs font-space flex items-center gap-1 mt-2">
                <AlertCircle className="w-3 h-3" /> {error}
              </p>
            )}
          </div>
        ) : (
          <div className="bg-[#060b18] border border-[#27c93f]/30 rounded-lg p-4 text-center">
            <CheckCircle2 className="w-8 h-8 text-[#27c93f] mx-auto mb-3" />
            <p className="text-[#e8edf5] font-space text-sm mb-4">Upload Successful!</p>
            
            <div className="flex items-center gap-2 bg-[#0a0f1e] border border-[#1e293b] rounded p-2">
              <input 
                type="text" 
                readOnly 
                value={resultUrl} 
                className="bg-transparent text-[#6a7fa0] text-xs font-space w-full outline-none truncate"
              />
              <button 
                onClick={copyToClipboard}
                className="p-1.5 hover:bg-[#1e293b] rounded transition-colors text-[#00e5ff]"
                title="Copy to clipboard"
              >
                {copied ? <CheckCircle2 className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              </button>
            </div>
            
            <button 
              onClick={() => setResultUrl(null)}
              className="mt-4 text-[#6a7fa0] hover:text-[#e8edf5] text-xs font-space underline decoration-dashed transition-colors"
            >
              Upload another file
            </button>
          </div>
        )}
      </div>
    </div>
  );
}