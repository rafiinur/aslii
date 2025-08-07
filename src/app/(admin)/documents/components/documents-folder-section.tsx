import DocumentsFolder from "./documents-folder";

const DocumentsFolderSection = () => {
  return (
    <div className="flex flex-col gap-5">
      <h4 className="font-semibold text-lg leading-6">Folder</h4>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        {Array.from({ length: 4 }).map((_, i) => (
          <DocumentsFolder key={i} i={i} />
        ))}
      </div>
    </div>
  );
};

export default DocumentsFolderSection;
