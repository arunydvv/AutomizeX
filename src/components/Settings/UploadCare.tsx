'use client';
import React, { useEffect, useRef, useState } from 'react';
import { uploadFile } from '@uploadcare/upload-client';
import { useRouter } from 'next/navigation';

type Props = {
    onUpload: (e: string) => any;
};

const UploadCare = ({ onUpload }: Props) => {
    const router = useRouter();
    const fileInputRef = useRef<HTMLInputElement>(null); // Ref for the file input
    const [uploading, setUploading] = useState(false);

    const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (!file) return;

        try {
            setUploading(true);
            const result = await uploadFile(file, {
                publicKey: '31a64aec17141cd4a230', // Your public key
                store: 'auto',
                metadata: {
                    subsystem: 'js-client',
                    pet: 'cat',
                },
            });

            const fileUrl = result.cdnUrl; // Get the CDN URL of the uploaded file
            await onUpload(fileUrl); // Call the provided onUpload handler
            router.refresh(); // Refresh the page or update data
        } catch (error) {
            console.error('File upload failed:', error);
        } finally {
            setUploading(false);
        }
    };

    return (
        <div>
            <input
                type="file"
                ref={fileInputRef}
                onChange={handleFileChange}
                style={{ display: 'none' }}
                accept="image/*" // Restrict to images (optional)
            />
            <button
                onClick={() => fileInputRef.current?.click()}
                disabled={uploading}
                className="upload-button"
            >
                {uploading ? 'Uploading...' : 'Upload File'}
            </button>
        </div>
    );
};

export default UploadCare;
