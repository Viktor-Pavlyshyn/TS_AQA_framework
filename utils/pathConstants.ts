import path from 'path';

export const MOCHA_OUTPUT_DIR = path.join(process.cwd(), 'reports', 'mocha');
export const CUCUMBER_REPORT_DIR = path.join(process.cwd(), 'reports', 'cucumber');
export const CUCUMBER_JSON_REPORT_DIR = path.join(CUCUMBER_REPORT_DIR);
export const CUCUMBER_SCREENSHOT_REPORT_DIR = path.join(CUCUMBER_REPORT_DIR, "screenshots");
