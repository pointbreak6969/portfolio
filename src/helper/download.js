export const pdfDownload = ()=>{
    const pdfPath ="/Biraj-Baral-cv"
    const link = document.createElement('a');
    link.href = pdfPath;
    link.download = 'Biraj-Baral-cv.pdf';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
}