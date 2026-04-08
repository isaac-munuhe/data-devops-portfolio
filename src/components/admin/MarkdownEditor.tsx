import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';

export default function MarkdownEditor() {
  const [markdown, setMarkdown] = useState<string>('# New Project\n\nWrite your DevOps magic here...');

  return (
    <div className="flex flex-col h-full w-full font-space">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-[#a5b4fc] font-semibold text-lg flex items-center gap-2">
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z"></path></svg>
          Project Content
        </h2>
        <button className="bg-[#4f46e5] hover:bg-[#4338ca] text-white px-4 py-1.5 rounded text-sm transition-colors">
          Save Draft
        </button>
      </div>

      <div className="grid grid-cols-2 gap-4 h-[220px]">
        {/* Editor Pane */}
        <textarea
          className="w-full p-3 bg-[#0f172a] border border-[#1e293b] rounded-lg text-[#e2e8f0] focus:outline-none focus:border-[#4f46e5] resize-none text-sm font-mono"
          value={markdown}
          onChange={(e) => setMarkdown(e.target.value)}
          placeholder="Type markdown here..."
        />
        
        {/* Live Preview Pane */}
        <div className="w-full p-3 bg-[#050812] border border-[#1e293b] rounded-lg text-[#cbd5e1] overflow-y-auto text-sm prose prose-invert max-w-none">
          <ReactMarkdown>{markdown}</ReactMarkdown>
        </div>
      </div>
    </div>
  );
}