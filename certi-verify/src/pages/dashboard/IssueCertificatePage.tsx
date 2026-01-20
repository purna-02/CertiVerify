import { useState, useRef } from 'react';
import { Upload, Eye, FileText, LayoutTemplate, Check } from 'lucide-react';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/Card';
import { Modal } from '@/components/ui/Modal';
import { cn } from '@/lib/utils';

// Mock templates for the gallery
const TEMPLATE_GALLERY = [
    { id: 'classic', name: 'Classic Blue', src: 'https://via.placeholder.com/600x450/1e293b/ffffff?text=Classic+Blue+Cert' },
    { id: 'modern', name: 'Modern Minimal', src: 'https://via.placeholder.com/600x450/f8fafc/0f172a?text=Modern+Minimal' },
    { id: 'elegant', name: 'Elegant Gold', src: 'https://via.placeholder.com/600x450/fffbeb/78350f?text=Elegant+Gold' },
    { id: 'tech', name: 'Tech Dark', src: 'https://via.placeholder.com/600x450/0f172a/38bdf8?text=Tech+Dark' },
];

export function IssueCertificatePage() {
    const [showPreview, setShowPreview] = useState(false);
    const [showGallery, setShowGallery] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [showSuccess, setShowSuccess] = useState(false);

    // Default to first template
    const [selectedFile, setSelectedFile] = useState<string | null>(TEMPLATE_GALLERY[0].src);
    const [selectedTemplateId, setSelectedTemplateId] = useState<string | null>(TEMPLATE_GALLERY[0].id);

    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const file = e.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                setSelectedFile(e.target?.result as string);
                setSelectedTemplateId(null); // Custom upload
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSelectTemplate = (template: typeof TEMPLATE_GALLERY[0]) => {
        setSelectedFile(template.src);
        setSelectedTemplateId(template.id);
        setShowGallery(false);
    };

    const handleRemoveFile = () => {
        setSelectedFile(null);
        setSelectedTemplateId(null);
        if (fileInputRef.current) {
            fileInputRef.current.value = '';
        }
    };

    const triggerFileInput = () => {
        fileInputRef.current?.click();
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setTimeout(() => {
            setIsSubmitting(false);
            setShowSuccess(true);
        }, 1500);
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div>
                <h1 className="text-2xl font-bold tracking-tight text-slate-900">Issue New Certificate</h1>
                <p className="text-slate-500">Fill in the details below to generate a secure verifiable certificate.</p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="col-span-2">
                    <Card>
                        <CardHeader>
                            <CardTitle className="text-base">Recipient & Certificate Details</CardTitle>
                        </CardHeader>
                        <CardContent>
                            <form id="issue-form" onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input label="Recipient Name" placeholder="e.g. Jane Doe" required />
                                    <Input label="Recipient Email" type="email" placeholder="jane@example.com" required />
                                </div>

                                <Input label="Certificate Title" placeholder="e.g. Certified React Developer" required />

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input label="Event / Course Name" placeholder="e.g. Advanced Frontend Bootcamp" required />
                                    <Input label="Certificate ID (Auto-generated)" value="CERT-2024-8X92" disabled className="bg-slate-50" />
                                </div>

                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <Input label="Issue Date" type="date" required />
                                    <Input label="Expiry Date (Optional)" type="date" />
                                </div>

                                <div className="pt-4">
                                    <label className="block text-sm font-medium text-slate-700 mb-2">Detailed Description</label>
                                    <textarea
                                        className="w-full rounded-lg border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-primary-500 min-h-[100px]"
                                        placeholder="This certificate acknowledges that..."
                                    ></textarea>
                                </div>
                            </form>
                        </CardContent>
                    </Card>
                </div>

                <div className="space-y-6">
                    <Card className="overflow-hidden">
                        <CardHeader className="bg-slate-50/50 border-b border-slate-100 pb-4">
                            <CardTitle className="text-base flex items-center gap-2">
                                <LayoutTemplate className="h-4 w-4 text-primary-600" />
                                Design Template
                            </CardTitle>
                        </CardHeader>
                        <CardContent className="p-0">
                            {/* Hidden File Input */}
                            <input
                                type="file"
                                ref={fileInputRef}
                                className="hidden"
                                accept="image/*,.pdf"
                                onChange={handleFileChange}
                            />

                            {!selectedFile ? (
                                <div className="p-6 space-y-4">
                                    <div
                                        onClick={() => setShowGallery(true)}
                                        className="w-full border-2 border-dashed border-primary-200 bg-primary-50/30 rounded-xl p-6 flex flex-col items-center justify-center text-center hover:bg-primary-50 hover:border-primary-300 transition-all cursor-pointer group"
                                    >
                                        <div className="h-12 w-12 bg-white rounded-full shadow-sm flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
                                            <LayoutTemplate className="h-6 w-6 text-primary-600" />
                                        </div>
                                        <p className="text-sm font-semibold text-primary-900">Choose from Gallery</p>
                                        <p className="text-xs text-primary-600/80 mt-1">Select a professional template</p>
                                    </div>

                                    <div className="relative">
                                        <div className="absolute inset-0 flex items-center">
                                            <span className="w-full border-t border-slate-200" />
                                        </div>
                                        <div className="relative flex justify-center text-xs uppercase">
                                            <span className="bg-white px-2 text-slate-500">Or custom upload</span>
                                        </div>
                                    </div>

                                    <div
                                        onClick={triggerFileInput}
                                        className="w-full border border-slate-200 rounded-lg p-4 flex items-center justify-center gap-3 hover:bg-slate-50 transition-colors cursor-pointer text-slate-600 hover:text-slate-900"
                                    >
                                        <Upload className="h-4 w-4" />
                                        <span className="text-sm font-medium">Upload File (PDF/IMG)</span>
                                    </div>
                                </div>
                            ) : (
                                <div>
                                    <div className="relative group bg-slate-900 aspect-[1.414/1]">
                                        <img
                                            src={selectedFile}
                                            alt="Template"
                                            className="w-full h-full object-contain opacity-100 group-hover:opacity-50 transition-opacity duration-300"
                                        />

                                        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                                            <div className="flex gap-2">
                                                <Button size="sm" variant="secondary" onClick={() => setShowGallery(true)}>
                                                    Change Template
                                                </Button>
                                                <Button size="sm" variant="danger" onClick={handleRemoveFile}>
                                                    Remove
                                                </Button>
                                            </div>
                                            <p className="text-xs text-white/80 font-medium">
                                                {selectedTemplateId ? 'Gallery Template Selected' : 'Custom Upload Selected'}
                                            </p>
                                        </div>

                                        <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity">
                                            <a
                                                href={selectedFile}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="bg-black/50 hover:bg-black/70 text-white p-2 rounded-full backdrop-blur-sm transition-colors block"
                                                title="View Fullsize"
                                            >
                                                <Eye className="h-4 w-4" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="p-4 bg-slate-50 border-t border-slate-100 flex justify-between items-center">
                                        <span className="text-xs font-medium text-slate-500">
                                            {selectedTemplateId ? 'Standard Template' : 'Custom File'}
                                        </span>
                                        <button
                                            onClick={handleRemoveFile}
                                            className="text-xs text-red-600 hover:text-red-700 font-medium hover:underline"
                                        >
                                            Clear Selection
                                        </button>
                                    </div>
                                </div>
                            )}
                        </CardContent>
                    </Card>

                    <Card>
                        <CardContent className="p-6">
                            <Button form="issue-form" type="submit" className="w-full mb-3" size="lg" isLoading={isSubmitting}>
                                Issue Certificate
                            </Button>
                            <Button type="button" variant="outline" className="w-full" onClick={() => setShowPreview(true)}>
                                <Eye className="mr-2 h-4 w-4" /> Preview
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>

            {/* Template Gallery Modal */}
            <Modal
                isOpen={showGallery}
                onClose={() => setShowGallery(false)}
                title="Select Design Template"
                description="Choose a professional template for your certificate."
                footer={
                    <div className="flex justify-between w-full">
                        <Button variant="ghost" onClick={triggerFileInput}>
                            <Upload className="mr-2 h-4 w-4" /> Upload Custom
                        </Button>
                        <Button variant="outline" onClick={() => setShowGallery(false)}>Cancel</Button>
                    </div>
                }
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 py-4 max-h-[60vh] overflow-y-auto">
                    {TEMPLATE_GALLERY.map((template) => (
                        <div
                            key={template.id}
                            onClick={() => handleSelectTemplate(template)}
                            className={cn(
                                "group relative border-2 rounded-xl overflow-hidden cursor-pointer transition-all hover:shadow-md",
                                selectedTemplateId === template.id ? "border-primary-600 ring-4 ring-primary-50" : "border-slate-200 hover:border-primary-300"
                            )}
                        >
                            <div className="aspect-[1.414/1] bg-slate-100">
                                <img src={template.src} alt={template.name} className="w-full h-full object-cover" />
                            </div>
                            <div className="p-3 bg-white border-t border-slate-100 flex items-center justify-between">
                                <span className="text-sm font-medium text-slate-700">{template.name}</span>
                                {selectedTemplateId === template.id && (
                                    <div className="h-5 w-5 bg-primary-600 rounded-full flex items-center justify-center text-white">
                                        <Check className="h-3 w-3" />
                                    </div>
                                )}
                            </div>
                            <div className="absolute inset-0 bg-primary-600/0 group-hover:bg-primary-600/10 transition-colors" />
                        </div>
                    ))}
                </div>
            </Modal>

            {/* Success Modal */}
            <Modal
                isOpen={showSuccess}
                onClose={() => setShowSuccess(false)}
                title="Certificate Issued Successfully!"
                description="The certificate has been generated and emailed to the recipient."
                footer={
                    <>
                        <Button variant="outline" onClick={() => setShowSuccess(false)}>Close</Button>
                        <Button onClick={() => setShowSuccess(false)}>View Details</Button>
                    </>
                }
            >
                <div className="flex flex-col items-center justify-center py-6">
                    <div className="h-48 w-48 bg-white p-2 rounded-xl shadow-sm border border-slate-200 mb-4">
                        <img src={`https://api.qrserver.com/v1/create-qr-code/?size=200x200&data=https://certiverify.app/verify?id=CERT-2024-8X92`} alt="QR Code" className="w-full h-full" />
                    </div>
                    <p className="text-sm text-slate-500 text-center max-w-xs">
                        Scan this QR code or use the link below to verify the certificate.
                    </p>
                    <div className="mt-4 flex w-full max-w-sm gap-2">
                        <Input value="https://certiverify.app/verify?id=CERT-2024-8X92" readOnly />
                        <Button variant="secondary">Copy</Button>
                    </div>
                </div>
            </Modal>

            {/* Preview Modal */}
            <Modal
                isOpen={showPreview}
                onClose={() => setShowPreview(false)}
                title="Certificate Preview"
                footer={<Button onClick={() => setShowPreview(false)}>Close Preview</Button>}
            >
                <div className="aspect-[1.414/1] bg-slate-100 rounded-lg flex items-center justify-center border border-slate-200 overflow-hidden relative">
                    {selectedFile ? (
                        <img src={selectedFile} alt="Preview" className="w-full h-full object-contain" />
                    ) : (
                        <div className="text-center p-8">
                            <FileText className="h-16 w-16 text-slate-300 mx-auto mb-4" />
                            <p className="text-slate-400">No template selected</p>
                        </div>
                    )}
                </div>
            </Modal>
        </div>
    );
}
