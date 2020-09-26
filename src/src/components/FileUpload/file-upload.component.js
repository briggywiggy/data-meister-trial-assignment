import React from 'react';
import CSVReader from 'react-csv-reader';

const FileUpload = ({ onFileLoaded }) => {
    return (
        <CSVReader onFileLoaded={onFileLoaded} />
    )
}

export { FileUpload as default };