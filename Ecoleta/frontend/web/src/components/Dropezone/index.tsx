import React, { useCallback, useState} from 'react';

import { useDropzone } from 'react-dropzone';

import { FiUpload } from 'react-icons/fi';


import './styles.css';

interface Props {
    onFileUploaded: (File: File) => void;
}


const Dropezone: React.FC<Props> = ({ onFileUploaded })  => {
    const [selectedFilterUrl, setSelectedFilterUrl] = useState('');

    const onDrop = useCallback( acceptedFiles => {
        const file = acceptedFiles[0];

        const fileUrl = URL.createObjectURL(file);

        setSelectedFilterUrl(fileUrl);
        onFileUploaded(file);
        
    }, [onFileUploaded]);

    const { getRootProps, getInputProps} = useDropzone({
        onDrop,
        accept: 'image/*'
    });


    return (
        <div {...getRootProps()} className="dropzone">
            <input {...getInputProps()} accept='image/*'/>
            {
                selectedFilterUrl 
                    ? <img src={selectedFilterUrl} alt='Point thumbnail' />
                    : (
                        <p> 
                            <FiUpload />
                                Imagem do estabelecimento
                        </p>
                    )
            }
        </div>
    )


}


export default Dropezone;