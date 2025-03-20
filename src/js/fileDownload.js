import { showMessage } from '../utils/showMessage.js';

const downloadButton = document.querySelector('.header__button');

downloadButton.addEventListener('click', async () => {
  const fileId = '19VztvpXXoDmiCYehy0xenuqowLVIWNYa';

  try {
    await downloadFile(fileId);
    showMessage('The file is downloading.');
  } catch (error) {
    showMessage('Download error: ' + error);
  }
});

async function downloadFile(fileId) {
  try {
    const link = document.createElement('a');
    link.href = `https://drive.google.com/uc?export=download&id=${fileId}`;
    link.download = '';

    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  } catch (error) {
    throw new Error('Failed to download the file');
  }
}
