import type { MDXComponents } from 'mdx/types';

export function useMDXComponents(components: MDXComponents): MDXComponents {
  return {
    ...components,
    // Custom styling for MDX elements
    h1: ({ children }) => (
      <h1 className="text-4xl font-bold text-gray-900 mb-6 mt-0">{children}</h1>
    ),
    h2: ({ children }) => (
      <h2 className="text-2xl font-semibold text-gray-800 mb-4 mt-10 border-b border-gray-200 pb-2">{children}</h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl font-semibold text-gray-700 mb-3 mt-8">{children}</h3>
    ),
    p: ({ children }) => (
      <p className="text-gray-600 leading-relaxed mb-4">{children}</p>
    ),
    ul: ({ children }) => (
      <ul className="list-disc list-inside text-gray-600 mb-4 space-y-1 pl-4">{children}</ul>
    ),
    ol: ({ children }) => (
      <ol className="list-decimal list-inside text-gray-600 mb-4 space-y-1 pl-4">{children}</ol>
    ),
    li: ({ children }) => (
      <li className="leading-relaxed">{children}</li>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 pl-4 italic text-gray-500 my-6">{children}</blockquote>
    ),
    code: ({ children }) => (
      <code className="bg-gray-100 text-blue-700 px-1.5 py-0.5 rounded text-sm font-mono">{children}</code>
    ),
    pre: ({ children }) => (
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg overflow-x-auto mb-6 text-sm">{children}</pre>
    ),
    a: ({ href, children }) => (
      <a href={href} className="text-blue-600 hover:text-blue-800 underline" target="_blank" rel="noopener noreferrer">{children}</a>
    ),
    strong: ({ children }) => (
      <strong className="font-semibold text-gray-800">{children}</strong>
    ),
    hr: () => <hr className="border-gray-200 my-8" />,
  };
}
