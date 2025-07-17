
import { motion } from "framer-motion";
import { useIntersectionObserver } from "@/hooks/use-intersection-observer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Download, FileText, FolderOpen } from "lucide-react";

export default function DownloadsSection() {
  const { ref, isIntersecting } = useIntersectionObserver({ threshold: 0.1 });

  const downloadItems = [
    {
      title: "Resume / CV",
      description: "Download my complete professional resume with detailed experience, skills, and education.",
      icon: <FileText size={32} />,
      downloadUrl: "/Salman Resume.pdf",
      filename: "Salman_Hamzo_Resume.pdf",
      type: "PDF Document",
      size: "~250KB"
    }
  ];

  const handleDownload = (item: typeof downloadItems[0]) => {
    // Download file
    const link = document.createElement('a');
    link.href = item.downloadUrl;
    link.download = item.filename;
    link.target = '_blank';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  

  return (
    <section id="downloads" className="py-20 portfolio-bg-alt" ref={ref}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <motion.h2 
            className="text-3xl md:text-4xl font-bold mb-4 portfolio-text code-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8 }}
          >
            Downloads & Resources
          </motion.h2>
          <motion.div 
            className="w-20 h-1 portfolio-accent-bg mx-auto mb-6"
            initial={{ width: 0 }}
            animate={isIntersecting ? { width: 80 } : {}}
            transition={{ duration: 0.8, delay: 0.2 }}
          ></motion.div>
          <motion.h3 
            className="text-xl font-semibold mb-4 portfolio-text code-text"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            ACCESS MY PROFESSIONAL DOCUMENTS
          </motion.h3>
          <motion.p 
            className="portfolio-text-muted max-w-2xl mx-auto"
            initial={{ opacity: 0, y: 20 }}
            animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            Download my resume, explore project documentation, and access professional resources.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 gap-8 max-w-md mx-auto">
          {downloadItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 50 }}
              animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: 0.2 + index * 0.1 }}
            >
              <Card className="glass-effect border-slate-600 card-hover glow-effect h-full">
                <CardContent className="p-8 text-center">
                  <div className="portfolio-accent mb-6 flex justify-center">
                    {item.icon}
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4 portfolio-text">
                    {item.title}
                  </h3>
                  
                  <p className="portfolio-text-muted mb-6 leading-relaxed">
                    {item.description}
                  </p>
                  
                  <div className="space-y-2 mb-6 text-sm">
                    <div className="flex justify-between">
                      <span className="portfolio-text-muted">Type:</span>
                      <span className="portfolio-text">{item.type}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="portfolio-text-muted">Size:</span>
                      <span className="portfolio-text">{item.size}</span>
                    </div>
                  </div>
                  
                  <div className="flex justify-center">
                    <Button
                      onClick={() => handleDownload(item)}
                      className="portfolio-accent-bg hover:portfolio-accent-hover text-white px-4 py-2 rounded-lg font-medium transform hover:scale-105 transition-all duration-300 flex items-center gap-2"
                    >
                      <Download size={16} />
                      Download
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
        
        <motion.div 
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={isIntersecting ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          <p className="portfolio-text-muted text-sm">
            All documents are up-to-date and reflect my latest professional experience.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
